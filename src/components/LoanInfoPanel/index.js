import React from 'react';
import { 
    LoanInfoPanelWrapper, 
    LoanInfoPanelHeader,
    LoanInfoLabel,
    InstallmentWrapper 
} from "./styled";
import InstallmentCard from '../InstallmentCard';
import { connect } from "react-redux";


const LoanInfoPanel = props => {
    const loanInfo = {
        amountTaken: `R$ ${props.loans.amountTaken.toFixed(2)}`,
        amountPayd: `R$ ${props.loans.amountPayd.toFixed(2)}`,
        monthlyInterest: `${props.loans.monthlyInterest}%`,
        totalAmountInTaxes: `R$ ${props.loans.totalAmountInTaxes.toFixed(2)}`,
        installments: props.loans.installments
    };

    return (
        <LoanInfoPanelWrapper>
            <LoanInfoPanelHeader>
                <LoanInfoLabel>
                    Valor do empréstimo: {loanInfo.amountTaken}
                </LoanInfoLabel>
                <LoanInfoLabel>
                    Valor pago: {loanInfo.amountPayd}
                </LoanInfoLabel>
                <LoanInfoLabel>
                    Taxa de juros mensal: {loanInfo.monthlyInterest}
                </LoanInfoLabel>
                <LoanInfoLabel>
                    Valor total dos juros: {loanInfo.totalAmountInTaxes}
                </LoanInfoLabel>
            </LoanInfoPanelHeader>
            <InstallmentWrapper>
                {loanInfo.installments.map(installment => {
                    return <InstallmentCard 
                        value={installment.formatedValue}
                        payd={installment.payd}
                        dueDate={installment.dueDate}
                    />
                })}
            </InstallmentWrapper>
        </LoanInfoPanelWrapper>
    );
};

const mapStateToProps = (state) => {
	return {
		loans: state.loans
	};
};

export default connect(
	mapStateToProps,
	null
)(LoanInfoPanel);