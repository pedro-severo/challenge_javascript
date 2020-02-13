import React from 'react';
import { 
    LoanInfoPanelWrapper, 
    LoanInfoPanelHeader,
    LoanInfoLabel 
} from "./styled";

const LoanInfoPanel = props => {
    
    return (
        <LoanInfoPanelWrapper>
            <LoanInfoPanelHeader>
                <LoanInfoLabel>
                    Valor do empréstimo:
                </LoanInfoLabel>
                <LoanInfoLabel>
                    Valor pago:
                </LoanInfoLabel>
                <LoanInfoLabel>
                    Taxa de juros mensal:
                </LoanInfoLabel>
                <LoanInfoLabel>
                    Valor total dos juros:
                </LoanInfoLabel>
            </LoanInfoPanelHeader>
        </LoanInfoPanelWrapper>
    );
};

export default LoanInfoPanel;