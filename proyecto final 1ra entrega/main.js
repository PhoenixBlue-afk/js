    let nombre = prompt ("Ingrese su nombre, sin apellido");
    let apellido = prompt ("Ingrese su apellido, ahora si");
    let edad = prompt("Ingrese su edad, debe ser mayor de 18 años para ingresar");
        if (edad >= 18) {
            alert("Hola " + nombre + " " + apellido + "!!" + "Usted puede ingresar, es mayor de edad");
                let producto = prompt("L = Lona / M = Microperforado / R = Rafia / P = PVC Cristal / MS = Media Sombra");
                let largo = prompt("Por favor ingrese el largo de su lona a presupuestar");
                parseFloat (largo);
                let ancho = prompt ("Ingrese por favor el ancho de su lona a presupuestar");
                parseFloat (ancho);
                var valcadauna= 0;
                let m2 = ancho * largo; 
                    if ((producto == "L" || producto == "l") && (ancho !=0 ||largo !=0)) {
                        var valcadauna =1100;
                        alert ("El valor de su lona es de " + (m2 * valcadauna) + " pesos");
                    } else if ((producto == "M" || producto == "m") && (ancho !=0 ||largo !=0)) {
                        var valcadauna =1500;
                        alert ("El valor de su lona es de " + (m2 * valcadauna) + " pesos");

                    }else if ((producto == "R" || producto == "r") && (ancho !=0 ||largo !=0)) {
                        var valcadauna =700;
                        alert ("El valor de su lona es de " + (m2 * valcadauna) + " pesos");
                    }else if ((producto == "P" || producto == "p") && (ancho !=0 ||largo !=0)){
                        var valcadauna =1200;
                        alert ("El valor de su lona es de " + (m2 * valcadauna) + " pesos");
                    }else if ((producto == "MS" || producto == "ms") && (ancho !=0 ||largo !=0)){
                        var valcadauna =750;
                        alert ("El valor de su lona es de " + (m2 * valcadauna) + " pesos");
                    }else {
                        alert ("Por favor introduzca el tipo de tela a cotizar")
                    }
        }else {
            alert("Hola " + nombre + " " + apellido + "!!" + "Lamentablemente eres menor de edad y no puedes continuar aqui, gracias por su interes, Saludos");
        }
                     
                