import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const LoginFormContainer = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40vw;
`;

export const TextEnter = styled.div `
    font-size: 16px;
    font-weight: bold;
    color: #a339b3;
    height: 18px; 
    margin-top: 28px;  
    margin-bottom: 18px;
`;

export const InputEmail = styled(TextField) `
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`;

export const InputPassword = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`;

export const SignUpText = styled.div `
    font-size: 16px;
    color: #000000;
    height: 18px; 
    margin-top: 28px;  
`;

export const GoToSignUpButton = styled.a `
    color: black;
`;