function dnivalidatorHablaHispana(dni, country) {
    switch (country) {
        case "México":
            return
        case "Colombia":
            return;
        case "España":
            return
        case 'Argentina':
            return
        case "Venezuela":
            return
        case "Perú": 
            return (dni.length === 8 && /^[0123456789]$/.test(dni))? true: false
        case "Chile":
            return
        case "Guatemala":
            return
        case "Ecuador":
            return
        case "Cuba":
            return
        case "Bolivia":
            return
        case "República Dominicana":
            return
        case "Honduras":
            return;
        case "El Salvador":
            return
        case "Paraguay":
            return
        case "Nicaragua":
            return
        case "Costa Rica":
            return
        case "Puerto Rico":
            return
        case "Panamá":
            return
        case "Uruguay":
            return
        case "Guinea Ecuatorial":
            return
        default:
            return;
    }
}