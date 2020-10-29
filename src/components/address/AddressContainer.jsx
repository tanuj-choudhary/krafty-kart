// Third party imports
import React from 'react';
import { connect } from 'react-redux';

// Project imports
import { deleteAddress,setFormState } from './actionCreator';
import AddressView from './AddressView';

function AddressContainer({ user,deleteUserAddress,setForm,formState }) {

    const handleDelete = (e) => {
        e.preventDefault();

        const  {id} = e.target.closest('.address-box');
        deleteUserAddress(id);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setForm(true);
    };

    return <AddressView user={user} handleAdd={handleAdd} formState={formState}  handleDelete={handleDelete} />;
}

const mapStateToProps = state => {
    return {formState: state.addressFormState};
};

const mapDispatchToProps = {deleteUserAddress:deleteAddress,setForm:setFormState};

export default connect(mapStateToProps,mapDispatchToProps)(AddressContainer);