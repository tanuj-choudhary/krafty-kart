import React from 'react';
import AccountView from './AccountView';

export default function AccountContainer(props) {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    return <AccountView {...props} handleLogout={handleLogout} />;
}
