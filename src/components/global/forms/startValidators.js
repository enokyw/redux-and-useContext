import { 
    emailValidate,
    passowordValidate,
    stringRequired,
    dateValidate
} from "./validators/validators"



export const inputVaidator = ({input, errorToApply, setError, validatorType}) => {
    /*** validatortype available [email, url, phone number, string require, passoword] ***/
    switch (validatorType) {
        case "email":
            setError(emailValidate(input))
            return 
        case "password":
            return ""
        case "string":
            return ""
        case "url":
            return
        case "phone":
            return
        case "telf":
            return
        case "dni":
            return
        case "nit":
            return
        case "float":
            return
        case "integer":
            return
        default:
            return ""
    }
}