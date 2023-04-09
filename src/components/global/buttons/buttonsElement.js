import styled from "styled-components";


export const Button1 = styled.button`
    display: flex;
    background: ${props => props.styleMode.background};
    padding: 10px 30px;
    font-size: 16px;
    color: ${props => props.styleMode.color};
    border: solid 1px ${props => props.styleMode.border_color};
    border-radius: 4px;
    transition: all 0.5s;

    &:hover {
        background: ${props => props.styleMode.hover_background};
        color: ${props => props.styleMode.hover_color};
        border-color: ${props => props.styleMode.hover_border_color};
    }
    &:active {
        background: ${props => props.styleMode.active_background};
        color: ${props => props.styleMode.active_color};
        border-color: ${props => props.styleMode.active_border_color};
    }
`;

export const Button2 = styled(Button1)`
    line-height: 1;
    padding: 5px 15px;
    font-size: 0.8rem;
`;

export const Button3 = styled(Button2)`
    border-radius: 25px;
`;


export const ButtonS = styled.button`
    display: flex;
    position: relative;
    background: ${props => props.styleMode.background};
    justify-content: center;
    border: solid 1px ${props => props.styleMode.border_color};
    align-items: center;
    border-radius: 4px;
    padding: 0px;
    height: 30px;
    width: 30px;
    &::before {
        content: "";
        width: 15px;
        height: 3px;
        background: ${props => props.styleMode.content_background};
        border-radius: 5px;
        transition: all 0.5s;
    }
    &:hover::before {
        height: 15px;
        width: 4px;
    }
`;

export const ButtonSR = styled(ButtonS)`
    border-radius: 25px;
`;


export const ButtonRounded = styled(Button1)`
    border-radius: 25px;
`;


export const ButtonNight = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    font-size: 1.1rem;
    color: ${props => props.styleMode.switch_color};
    justify-content: ${props => props.darkMode? 'end': 'start'};
    width: 60px;
    height: 30px;
    border: solid 1px ${props => props.styleMode.switch_border_color};
    border-radius: 25px;
    &::after {
        content: "";
        position: absolute;
        width: 30px;
        height: 100%;
        top: 0;
        bottom: 0;
        background: ${props => props.styleMode.switch_background};
        border-radius: 50px;
        ${props => props.darkMode? `
            left: 0;
        `: `
            right: 0;
        `}
    }
    &:hover::after {
        background: ${props => props.styleMode.hover_switch_background};
        transition: all 0.5s;
    }
`;