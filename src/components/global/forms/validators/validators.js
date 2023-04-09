
export function emailValidate(email, error="") {
    let resp;
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/.test(email) && resp.push("Email novalido, ejemplo: miemail@domain.com");
    email > 36 && resp.push('No debe exeder los 36 caracteres');
    return resp;
}

export function passowordValidate (password, error="") {
    let resp;
    !/[a-z]/.test(password) && (resp = "La contraseña debe tener minusculas");
    !/[A-Z]/.test(password) && (resp = "La contraseña debe tener maysculas");
    !/[0-9]/.test(password) && (resp = "La contraseña debe tener numeros");
    !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password) && (resp = "La contraseña debe tener almenos un caracter especial");
    password.length < 6 && (resp = "La longitud de contraseña debe tener al menos 6 caracteres");
    password.length >= 10 && (resp = "La longitud de contraseña no debe exeder 10 caracteres");
    return resp;
}

export function stringRequired(string, error) {
    let resp;
    string.trim().length >= 3? false: resp=error; 
    return resp;
}

export function urlValidate (url, error) {
    let resp;
    /^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+\/?[^\s]*$/i.test(url)? false: resp=error;
    return resp;
}

export function dateValidate (date) {
    let regexFecha = /^\d{4}\-\d{2}\-\d{2}$/;
    if (!regexFecha.test(date)) {
      return false;
    }
    let partesFecha = fecha.split("-");
    let anio = parseInt(partesFecha[0]);
    let mes = parseInt(partesFecha[1]);
    let dia = parseInt(partesFecha[2]);
    let fechaObjeto = new Date(anio, mes - 1, dia);
    if (fechaObjeto.getFullYear() !== anio || fechaObjeto.getMonth() !== mes - 1 || fechaObjeto.getDate() !== dia) {
      return false;
    }
    return true;    
}


export function floatValidator (float) {
    if(isNaN(float)) return false;
    if(parseFloat(float) !== Number(float)) return false;
    return true;
}

export function integerValidate (integer) {
    if(isNaN(integer)) return false;
    if(parseInt(integer) !== parseFloat(integer)) return false;
    return true;
}
