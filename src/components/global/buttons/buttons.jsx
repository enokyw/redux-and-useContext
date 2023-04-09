import { Button1, Button2, Button3, ButtonNight, ButtonRounded, ButtonS, ButtonSR } from "./buttonsElement";
import { useStyle } from "../../../context/styleContext";
import { BsFillCloudSunFill, BsFillCloudMoonFill } from "react-icons/bs"


/************ Rouded square button ***************/
export const SquareButtonRounded = () => {
    const {styleMode, darkMode } = useStyle();

    return <ButtonS darkMode={darkMode} styleMode={styleMode.buttons} />
}

/************* suare button *************/
export const SquareButton = () => {
    const {styleMode, darkMode } = useStyle();

    return <ButtonSR darkMode={darkMode} styleMode={styleMode.buttons}/>
}

/************ small rounded button need  ***************/
export const SmallButtonRounded = ({textContent}) => {
    const {styleMode, darkMode } = useStyle();

    return (
        <Button3 darkMode={darkMode}
            styleMode={styleMode.buttons}>
            {textContent}
        </Button3>
    )
}


/******** small button need value *********/
export const SmallButton = ({textContent}) => {
    const {styleMode, darkMode } = useStyle();

    return (
        <Button2 darkMode={darkMode}
            styleMode={styleMode.buttons} >
            {textContent}
        </Button2>
    )
}

/********** norlmal button need value ***********/
export const NormalButton = ({textContent}) => {
    const {styleMode, darkMode } = useStyle();

    return (
        <Button1 darkMode={darkMode} 
            styleMode={styleMode.buttons} >
            {textContent}
        </Button1>
    )
}

/********** normal button rounded need value **********/
export const NormalButtonRounded = ({textContent}) => {
    const {styleMode, darkMode } = useStyle();

    return (
        <ButtonRounded darkMode={darkMode}
            styleMode={styleMode.buttons}>
            {textContent}
        </ButtonRounded>
    )
}

/************ night button need props **********/
export const NightButton = () => {
    const {styleMode, setDarkMode, darkMode } = useStyle();

    return (
        <ButtonNight onClick={() => setDarkMode((current) => current ? false : true)}
            darkMode={darkMode}
            styleMode={styleMode.buttons}>
            {darkMode ? <BsFillCloudMoonFill /> : <BsFillCloudSunFill />}
        </ButtonNight>
    )
}