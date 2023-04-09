import styled from "styled-components";


export const DivInput = styled.div`
    position: relative;
    display: flex;
`;

export const Label = styled.label`
    position: absolute;
    color: grey;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px 25px 0px 10px;
    line-height: 1;
    &::after {
        content: "✔✗";
        font-size: 1.2rem;
        color: green;
        display: flex;
        position: absolute;
        right: 3px;
        top: 3px;
    }
`;

export const Input = styled.input`
    display: flex;
    width: 100%;
    padding: 20px 10px 5px 10px;
    border: solid 1px green;
    border-radius: 4px;
    outline: none;
`;

export const SpanError = styled.span`
    position: absolute;
    font-size: 0.65rem;
    line-height: 1;
    top: 100%;
    left:0;
    right: 0;
    padding: 3px 5px 0px 5px;
    font-weight: 500;
    color: #FF5722;
`;