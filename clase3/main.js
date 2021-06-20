    let nombre = prompt ("Ingrese su nombre, sin apellido");
    let apellido = prompt ("Ingrese su apellido, ahora si");
    let edad = prompt("Ingrese su edad, debe ser mayor de 18 años para ingresar");
        class Tela {
                constructor(nombre, stock, valor) {
                    this.nombre  = nombre.toUpperCase();
                    this.stock = parseFloat(stock);
                    this.valor = parseFloat(valor);
                }
                sumIva =function () {
                    return this.valor *= 1.21;
                }
            }
                
                const lona =new Tela("Lona", 3000 , 1100);
                const rafia =new Tela("Rafia", 10000 , 700);
                const microPerforado =new Tela("Micro Perforado", 5000 , 1500);
                const mediaSombra =new Tela("Media Sombra", 500 , 750);
                const pvc =new Tela("PVC", 800 , 1000);
                let tipos =[lona, rafia ,microPerforado , mediaSombra, pvc] ;

                /*tipos.push (new Tela("Lona", 3000 , 1100));
                tipos.push (new Tela("Micro Perforado", 5000 , 1500));
                tipos.push (new Tela);
                tipos.push (new Tela("Media Sombra", 500, 750));
                tipos.push (new Tela("PVC", 800 , 1000));*/
                console.log(tipos);
                for ( let tela of tipos) 
                    {tela.sumIva();
                   } console.log(tela.sumIva());
            if (edad >= 18) {
                alert("Hola " + nombre + " " + apellido + "!!" + "Usted puede ingresar, es mayor de edad");
            
            
             
                let calidad = Number(prompt ("Seleccione que tipo de tela le gustaria/ 0 = Lona / 1 = Micro Perforado / 2 = Rafia / 3 = Media Sombra / 4 = PVC"))
                console.log("seleccionaste "+ tipos.find ( elemento => elemento === 0) )
                if (calidad === 0) {
                    
                    //console.log("seleccionaste "+ tipos.find ( elemento => elemento === 0) )
                } else if (calidad === 1) {
                    
                }else if (calidad === 2) {
                    
                }else if (calidad === 3) {
                    
                }else if (calidad === 4) {
                    
                }else {
                    alert("Seleccione una opcion valida")
                } 
                
                
        }else {
            alert("Hola " + nombre + " " + apellido + "!!" + "Lamentablemente eres menor de edad y no puedes continuar aqui, gracias por su interes, Saludos");
        }