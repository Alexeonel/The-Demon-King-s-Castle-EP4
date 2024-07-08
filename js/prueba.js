
    
let bucle =true
while(bucle){
    let nombre =confirm(prompt("Escriba su nombre de aventurero"))
    while(nombre==false||nombre==true){
        if(nombre==true){
            
            break;
        }else if(nombre==false){
            alert("Que cree que intenta hacer")
            nombre =confirm(prompt("Escriba su nombre de aventurero"))
        }
        
    }
    break;
    
}
/*alert("hola")
let bucleOn=true
let vidas=3
while(bucleOn){
        
    alert("Han pasado meses, por fin a llegado a la entrada de la cueva. Prendiste tu antorcha y te adentraste a esta. Aguarda se ha topado con ramificación\nEscoja una dirección.\n Izquierda o Derecha.")

    let eleccionTres = parseFloat(prompt("¿Escoja una dirección?"))

    while(eleccionTres==4||eleccionTres!=3||eleccionTres!=4||eleccionTres==3 || isNaN(eleccionTres)){
        if(eleccionTres==isNaN){
            alert("Escriba una opción valida.")
            eleccionTres = parseFloat(prompt("¿Escoja una dirección?"))
        }else if(eleccionTres==4){
            ciclopes = Math.floor(Math.random()*45)
            alert("Ha sido atrapado por el Ciclope")
            if(ciclopes<poder){       
                alert("Ha conseguido acabar con el Ciclope")
                poder=poder+ciclopes
                alert(`Su Fuerza vital a aumentado. `)
                alert(`Su Fuerza vital actual es ${poder}`)
                alert("Uff!!, a retomado el camino hacia el VOLCAN INFERNAL")
                break;
            }else if (ciclopes>poder){
                alert("El ciclope lo ha descuartisado y cocinado.")
                poder=poder-ciclopes
                if (poder <= 0){
                    alert("Has muerto😔")
                    vidas=vidas-1
                    alert(`Te quedan ${vidas} vidas`)
                    eleccionTres = parseFloat(prompt("¿Escoja una dirección?"))
                }  
            }else if(ciclopes==poder){
                alert("Gracias a los Dioses tiene otra oportunidad.")
                eleccionTres = parseFloat(prompt("¿Escoja una dirección?"))
            }   
        }else if(eleccionTres==3){
            

            
                alert("Ha entrado a un laberinto dentro de la cueva.")

                let laberinto = parseFloat(prompt("¿Maten la calma y eliga una dirección izquierda o derecha?"))
                while(laberinto==3||laberinto!=4||laberinto!=3||laberinto==4 || isNaN(laberinto)){
                    if(laberinto==isNaN){
                        alert("Escriba una opción valida.")
                        laberinto = parseFloat(prompt("¿Maten la calma y eliga una dirección izquierda o derecha?"))
                    }else if(laberinto==3){
                        
                        
                            alert("Esta perdido?, se ha encontrado con la 2° bifuración")
                            let laberinto1 = parseFloat(prompt("¿Nose asuste eliga una dirección:\n izquierda o derecha?"))
                            while(laberinto1==4||laberinto1!=3||laberinto1!=4||laberinto1==3 || isNaN(laberinto1)){
                            if(laberinto1==isNaN){
                                alert("Escriba una opción valida.")
                                laberinto1 = parseFloat(prompt("¿Nose asuste eliga una dirección:\n izquierda o derecha?"))
                            }else if(laberinto1==4){
                                alert("Parece que se ha perdido. se ha encontrado con la 3° bifuración Por favor continua hasta en contrar la salida")
                                    let laberinto2 = parseFloat(prompt("¿Escoja un camino?"))
                                    while(laberinto2==3||laberinto2!=4||laberinto2!=3||laberinto2==4 || isNaN(laberinto2)){ 
                                    if(laberinto2==isNaN){
                                        alert("Escriba una opción valida.")
                                        laberinto2 = parseFloat(prompt("¿Escoja un camino?"))
                                    }else if(laberinto2==3){
                                        alert("Ha caido en un hueco con pinchos")
                                        alert("Has muerto😔")
                                        vidas=vidas-1
                                        alert(`Te quedan ${vidas} vidas`)
                                        alert("Checkpoint. Vuelva a elegir")
                                        laberinto2 = parseFloat(prompt("¿Escoja una camino?"))   

                                    }else if(laberinto2==4){
                                        
                                        
                                            alert(".........ehhh..La 4° bifuración")
                                            let laberinto3 = parseFloat(prompt("¿No esta loco verdad!! e5c0g4 una d1r3c61ón?"))
                                            while(laberinto3==4||laberinto3!=3||laberinto3!=4||laberinto3==3 || isNaN(laberinto3)){
                                            if(laberinto3==isNaN){
                                                alert("Escriba una opción valida.")
                                                laberinto3 = parseFloat(prompt("¿No esta loco verdad!! e5c0g4 una d1r3c61ón?"))
                                            }else if(laberinto3==4){
                                                alert("Ha encontrado un mapa.\n Logro salir de la cueva a salvo. Su viaje continua hacia el VOLCAN INFERNAL ")
                                                break;   
                                            }else if(laberinto3==3){  
                                                arana = Math.round(Math.random()*35)
                                                alert("Una araña Gigante esta tapando la salida")
                                                if(arana<poder){       
                                                    alert("Ha conseguido acabar con la araña Gigante")
                                                    poder=poder+arana
                                                    alert(`Su Fuerza vital a aumentado. `)
                                                    alert(`Su Fuerza vital actual es ${poder}`)
                                                    alert("Esa araña no sabia con quien se metio, a retomado el camino hacia el VOLCAN INFERNAL")
                                                   break;
                                                }
                                            }else if (arana>poder){
                                                alert("La araña ha introducido sus huevos en ti.\nEXPLOTASTE!!!")
                                                poder=poder-arana
                                                if (poder <= 0){
                                                    alert("Has muerto😔")
                                                    vidas=vidas-1
                                                    alert(`Te quedan ${vidas} vidas`)
                                                    alert("Checkpoint. Vuelva a elegir")
                                                    laberinto3 = parseFloat(prompt("¿No esta loco verdad!! e5c0g4 una d1r3c61ón?"))
                                                }      
                                            }else if(laberinto3!=3 ||laberinto3!=4){
                                                alert("Opción incorecta")
                                                laberinto3=parseFloat(prompt("¿No esta loco verdad!! e5c0g4 una d1r3c61ón?"))
                                            }
                                        
                                    }
                                
                                    }else if(laberinto2!=4 ||laberinto2!=3){
                                        alert("Opción incorecta")
                                        laberinto2=parseFloat(prompt("¿Escoja un camino?"))
                                    } 
                                    break;       
                               
                            }
                            }else if(laberinto1==3){
                                alert("Felicidades a encontrado un mapa que lo guia directo a la salida") 
                                break;
                            }else if(laberinto1!=3 ||laberinto1!=4){
                                alert("Opción incorecta")
                                laberinto=parseFloat(prompt("¿Nose asuste eliga una dirección:\n izquierda o derecha?"))                
                            }
                        
                            }
                        
                    }else if(laberinto=4){    
                        alert(`A encontrado un cofre misterioso.\n  Usted a conseguido un(a) ${items}`)
                        poder=poder+Math.round(Math.random()*10)
                        alert("Gracias a este nuevo item su Fuerza vital aumento.")
                        alert(`Su Fuerza vital actual es ${poder}`)
                        alert("Que suerte tuvo encontro un pasadiso secreto, ahora se dirige al VOLCAN DEL INFIERNO ")
                        break;
                    }else if(laberinto!=4 ||laberinto!=3){
                        alert("Opción incorecta")
                        laberinto=parseFloat(prompt("¿Maten la calma y eliga una dirección izquierda o derecha?"))                    
                    }
                        
                }
        
            
                
        }else if(eleccionTres!=3 ||eleccionTres!=4){
            alert("Opción incorecta")
            eleccionTres=parseFloat(prompt("¿Escoja un dirección?"))   
        }    
    }
    break;
}*/