/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import {isSignedIn} from '../components/auth/actionCreator';

function PrivateRoute({ component:Component,isSignedInData,isSignedIn, ...rest }) {
    useEffect(() => {
        const token = localStorage.getItem('token');
        isSignedIn(token);
    }, []);

    return (
        <div>
        <Route {...rest} render={(props) => {
            
            if (!isSignedInData) {
                return <div className="custom__center">
                <Spinner variant="primary" animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
                </div>;
                
            }
            if (isSignedInData.isSignedIn) {
                return <Component user={isSignedInData.user}  {...props} />;
            } 
            return <Redirect to={{pathname:"/login"}} />;
            
            
            }} />
        </div>
    );
}

const mapStateToProps = state => {
    return { isSignedInData: state.auth };
};

const mapDispatchToProps = {isSignedIn};

export default connect(mapStateToProps,mapDispatchToProps)( PrivateRoute);