import { useState } from "react";

import { inputVaidator } from "./startValidators";
import { DivInput, Label, Input, SpanError } from "./inputsElement";


export function InputBasic({type, name, error}) {
    const [input, setInput] = useState("");
    const [focus, setFocus] = useState(false);

    const handleOnfocus = () => {
        setFocus(true);
    }
    const handleBlur = () => {

    }
    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setInput(value);
    }

    return (
        <DivInput>
            <Label children={"name"} htmlFor={"name"}/>
            <Input type={"text"} id={"name"} onFocus={handleOnfocus} />
            <SpanError children={"this forn have error"}/>
        </DivInput>
    )
    function buttonIncrement() {
        document.getElementById()
    }
}