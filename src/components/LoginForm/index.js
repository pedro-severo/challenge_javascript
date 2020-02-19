import React from 'react';
import MainButtonComponent from '../../components/MainButton';
import { 
    LoginFormContainer, 
    TextEnter,
    InputEmail,
    InputPassword,
    SignUpText,
    GoToSignUpButton,
} from './styled';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

const LoginForm = props => {
    const handleFieldChangeEmail = event => {
        props.handleFieldChangeEmail(event);
    };

    const handleFieldChangePassword = event => {
        props.handleFieldChangePassword(event);
    };

    const handleClickShowPassword = () => {
        props.handleClickShowPassword();
    };

    const handleSubmit = event => {
        props.handleSubmit(event);
    };

    return (
        <LoginFormContainer onSubmit={handleSubmit}>
            <TextEnter>
                Entrar
            </TextEnter>
            <InputEmail
                required
                label="E-mail"
                placeholder="email@email.com"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true
                }}
                onChange={handleFieldChangeEmail}
                name="email"
                type="email"
                value={props.email}
            />
            <InputPassword
                required
                label="Senha"
                placeholder="Mínimo 6 caracteres"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={handleClickShowPassword}
                            >
                                {props.showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                        <Visibility />
                                    )}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                onChange={handleFieldChangePassword}
                name="password"
                type={props.showPassword ? 'text' : 'password'}
                value={props.password}
                id="password"
            />
            <MainButtonComponent title="Entrar" type="submit" />
            <SignUpText>
                Não possui cadastro?{' '}
                <GoToSignUpButton>
                    Clique aqui.
                </GoToSignUpButton>
            </SignUpText>
        </LoginFormContainer>
    );
};

export default LoginForm