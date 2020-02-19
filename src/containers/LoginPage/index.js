import React, { useState } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { LoginWrapper } from './styled';
import LoginForm from '../../components/LoginForm';

const LoginPage = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
   
    const handleFieldChangeEmail = event => {
        setEmail(event.target.value);
    };

    const handleFieldChangePassword = event => {
        setPassword(event.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleSubmit = event => {
        event.preventDefault();

        props.goToDashboardPage()
    };

    return (
        <LoginWrapper>
            <LoginForm 
                handleFieldChangeEmail={handleFieldChangeEmail}
                handleFieldChangePassword={handleFieldChangePassword}
                handleClickShowPassword={handleClickShowPassword}
                handleSubmit={handleSubmit}
                email={email}
                showPassword={showPassword}
                password={password}
            />
        </LoginWrapper>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToDashboardPage: () => {dispatch(push(routes.dashboard))}
    };
};

export default connect(null, mapDispatchToProps)(LoginPage);