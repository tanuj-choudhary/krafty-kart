import React from 'react';
import AccountView from './AccountView';

export default function AccountContainer({user}) {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    return <AccountView user={user} handleLogout={handleLogout} />;
}
