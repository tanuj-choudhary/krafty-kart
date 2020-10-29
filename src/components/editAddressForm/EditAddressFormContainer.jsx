// Third party imports
import React from 'react';
import { connect } from 'react-redux';

// Project imports
import { setFormState } from '../address/actionCreator';
import {addAddress} from './actionCreator';
import EditAddressFormView from './EditAddressFormView';

function EditAddressFormContainer({ setFormState, addAddress }) {
    const onSubmit = (values) => {
        addAddress(values);
        setFormState(false);
    };

    return <EditAddressFormView onSubmit={onSubmit}  setFormState={setFormState} />;
}



const mapDispatchToProps = {setFormState,addAddress};

export default connect(null,mapDispatchToProps)(EditAddressFormContainer);
