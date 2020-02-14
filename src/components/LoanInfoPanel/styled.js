import styled from "styled-components";

export const LoanInfoPanelWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

export const LoanInfoPanelHeader = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid black;
    display: flex;
`;

export const LoanInfoLabel = styled.div`
    padding-left: 15px;
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.2vw;
    justify-content: center;
`;

export const InstallmentWrapper = styled.div`
    width: 100%;
    flex-grow: 1;
    padding: 40px 2vw 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`;