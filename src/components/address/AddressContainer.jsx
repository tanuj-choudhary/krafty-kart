import React from 'react';

import { connect } from 'react-redux';
import { deleteAddress,setFormState } from './actionCreator';
import AddressView from './AddressView';

function AddressContainer({ user,deleteAddress,setFormState,formState }) {

    const handleDelete = (e) => {
        e.preventDefault();

        const  {id} = e.target.closest('.address-box');
        deleteAddress(id);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setFormState(true);
    };

    return <AddressView user={user} handleAdd={handleAdd} formState={formState}  handleDelete={handleDelete} />;
}

const mapStateToProps = state => {
    return {formState: state.addressFormState};
};

const mapDispatchToProps = {deleteAddress,setFormState};

export default connect(mapStateToProps,mapDispatchToProps)(AddressContainer);