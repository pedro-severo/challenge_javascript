import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { DashboardPageWrapper } from './styled';
import NavBar from '../../components/NavBar';
import { getLoans } from "../../actions/Loans/index";
import LoanInfoPanel from '../../components/LoanInfoPanel';

const DashboardPage = props => {
    useEffect(() => {
        props.getLoans()
    }, []);

    const [loansRendered, renderLoans] = useState(false);
    
    const handleClickLoans = () => {
        renderLoans(!loansRendered)
    };

    const panelLoans = loansRendered ? (<LoanInfoPanel />) : (<div></div>)

    return (
        <DashboardPageWrapper>
            <NavBar 
                handleClickLoans={handleClickLoans}
            />
            {panelLoans}
        </DashboardPageWrapper>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLoans: () => {dispatch(getLoans())}
    };
};

export default connect(
    null, 
    mapDispatchToProps
)(DashboardPage)