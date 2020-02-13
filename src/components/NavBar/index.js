import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../../containers/Router';
import { 
    NavBarWrapper, 
    HelloUserWrapper, 
    NavButton 
} from './styled';

const NavBar = props => {

    const handleClickLogOut = event => {
        event.preventDefault();

        props.goToLoginPage()
    };

    return (
        <NavBarWrapper>
            <HelloUserWrapper>
                Olá, Usuário
            </HelloUserWrapper>
            <NavButton
                onClick={handleClickLogOut}
            >
                Logout
            </NavButton>
            <NavButton
                onClick={props.handleClickLoans}
            >
                Empréstimos
            </NavButton>
        </NavBarWrapper>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToLoginPage: () => {dispatch(push(routes.login))}
    };
};

export default connect(null, mapDispatchToProps)(NavBar);