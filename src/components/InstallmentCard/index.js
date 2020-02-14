import React from "react";
import { 
    InstallmentCardWrapper,
    InstallmentPayButton,
    InstallmentValueWrapper,
    InstallmentInfoWrapper 
} from './styled';

const InstallmentCard = props => {
    const payd = props.payd ? ("Pago") : ("Em aberto")
    const paydButton = props.payd ? ("-") : ("Pagar")

    return (
        <InstallmentCardWrapper>
            <InstallmentPayButton>
                {paydButton}
            </InstallmentPayButton>
            <InstallmentValueWrapper>
                {props.value}
            </InstallmentValueWrapper>
            <InstallmentInfoWrapper>
                <p>{payd}</p>
                <p>{props.dueDate}</p>
            </InstallmentInfoWrapper>
        </InstallmentCardWrapper>
    );
};

export default InstallmentCard