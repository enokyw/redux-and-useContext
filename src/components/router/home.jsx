import { Outlet } from "react-router-dom";
import { NightButton } from "../global/buttons/buttons";
import { InputBasic } from "../global/forms/inputs";

export const Home = () => {
    return (
        <div>
            <NightButton />
            <hr />
            <InputBasic/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}