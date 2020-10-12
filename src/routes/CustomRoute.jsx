/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import {isSignedIn} from '../components/auth/actionCreator';

function CustomRoute({ component:Component,isSignedInData,isSignedIn, ...rest }) {
    useEffect(() => {
        const token = localStorage.getItem('token');
        isSignedIn(token);
    }, []);

    return (
        <div>
        <Route {...rest} render={(props) => {
            
            if (!isSignedInData) {
                return <div>Loading</div>;
            }
                if (isSignedInData.isSignedIn) {
                    return <Redirect to={{pathname:"/"}} />;
            } 
            return <Component user={isSignedInData.user}  {...props} />;            
            
            }} />
        </div>
    );
}

const mapStateToProps = state => {
    return { isSignedInData: state.auth };
};

const mapDispatchToProps = {isSignedIn};

export default connect(mapStateToProps,mapDispatchToProps)( CustomRoute);