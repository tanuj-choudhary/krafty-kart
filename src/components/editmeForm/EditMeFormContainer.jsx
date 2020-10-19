import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editMe } from './actioncreator';

import EditMeFormView from './EditMeFormView';

function EditMeFormContainer({ user,editUser }) {
    const [inputDisabled, setinputDisabled] = useState(true);


    const handleEdit = () => {
        if (inputDisabled) {
            setinputDisabled(false);            
        } else {
            setinputDisabled(true);
        }

    };

    const onSubmit = (values) => {
        editUser(values);
        setinputDisabled(true);
    };

    return <EditMeFormView handleEdit={handleEdit} onSubmit={onSubmit} inputDisabled={inputDisabled} user={user} />;
        
}

const mapStateToProps = (state) => {
    return {user: state.auth.user};
};

const mapDispatchToProps = { editUser: editMe };

export default connect(mapStateToProps,mapDispatchToProps)(EditMeFormContainer);