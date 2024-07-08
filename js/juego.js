function disableButton(){
            let keepPlaying = true
            if (keepPlaying == false){
                bucleOn = false
                
            }
let bucleOn = true
while(bucleOn){ 
    let jefeFinal =30
    let vidas = 3
    let poder =10 
    let gobling =0
    let lobos =0
    let ciclopes =0
    let Guardia=0
    let armas=[]
    armas.push("Arco🏹","Compañero leal🐕","Escudo🛡","Hacha🪓","armadura🤺","Poción🧪")
    let items = armas[Math.round(Math.random()*5)]
    
    //Inicio del juego

    while(bucleOn){
        let nombre =prompt("Escriba su nombre de aventurero")
        alert(`Bienvenido.\nEste juego consiste entre elegir izquierda o derecha.\ny cada descisión que tome lo llevara a diferentes resultados.\nDIVIÉRTETE!!!!`)
        alert("Bienvenido a The Demon King's Castle🏰")
        alert(`Usted comenzará con una 💪Fuerza vital❤️‍🔥 de ${poder} y Con ${vidas} vidas❤️. \nTu misión sera tomar la mejor decisión para llegar al jefe final y derrotarlo.\nTen en cuenta que la Fuerza vital que necesita para derrotar al \n👺Rey♛ Demonio👺 es ${jefeFinal}`)
        alert("Funcionamiento del juego💻:\nEscribe: 1️⃣ para SI.\nEscribe: 2️⃣ para NO.\nEscriba: 3️⃣ para ir a la ⬅️Izquierda⬅️\nEscriba: 4️⃣ para ir a la ➡️Derecha➡️")
        
        let newGame = parseFloat(prompt("¿Está listo para esta aventura?🗺"))

        while(newGame==2 ||newGame!=1 ||newGame!=2|| newGame==1||isNaN(newGame)){
            if(isNaN(newGame)){
                alert("Escriba una opción. Por favor🚫")
                newGame = parseFloat(prompt("¿Está listo para esta aventura?🗺"))
            }else if(newGame==2){
                alert("👎Eres muy debil para esta misión👎")
                newGame = parseFloat(prompt("¿Está listo para esta aventura?🗺"))
            }else if(newGame==1){
                alert(`Estoy orgulloso de ti 🎉${nombre}🎉`)
                break;
            }else if(newGame!=1 ||newGame!=2){
                alert("Opción incorrecta❌ ")
                newGame=parseFloat(prompt("¿Está listo para esta aventura?🗺"))
                
            }
        } 
        break;
    }
    //nivel Gobling
    
    while(bucleOn){
        alert(`Su nivel de 💪Fuerza vital❤️‍🔥 es:\n${poder}`)
        alert("Un día como hoy te dirigiste a vencer al 👺Rey♛ Demonio👺. Pero espera, te topaste con dos caminos.\nTienes dos elecciones:\nIzquierda(3) o Derecha(4)")
        alert("🌳🟩🟫🟩🟫🟩🌳\n🌳🟩🟫🟩🟫🟩🌳\n🌳🟩🟫🟩🟫🟩🌳\n🌳🟩🟩🟫🟩🟩🌳\n🌳🟩🟩🟫🟩🟩🌳\n🌳🟩🟩👤🟩🟩🌳")
        let eleccionUno = parseFloat(prompt("¿Que camino eliges🛣?"))
        while(eleccionUno==3||eleccionUno!=4||eleccionUno!=3||eleccionUno==4 || isNaN(eleccionUno)){
            if(isNaN(eleccionUno)){
                alert("Escriba una opción. Por favor🚫")
                eleccionUno = parseFloat(prompt("¿Qué camino eliges🛣?"))
            }else if(eleccionUno==3){
                gobling = Math.floor(Math.random()*13)
                alert("Se ha chocado con un Gobling🧌")
                if(gobling<poder){       
                    alert("Ha conseguido acabar con el Gobling🧌")
                    poder=poder+gobling
                    alert(`Su 💪Fuerza vital❤️‍🔥 ha aumentado. `)
                    alert("Que fuerte eres, ahora se dirige al Bosque🌳 LAS CALAVERAS💀 ")
                    alert("💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n🌳🟩🟩🟩👤🟩🟩🟩🌳")
                    break;
                }else if (gobling>poder){
                    alert("El Gobling🧌 es muy fuerte💪.")
                    poder=poder-4
                    alert(`Que pena su 💪Fuerza vital❤️‍🔥 ha disminuido⬇️.`)
                    alert("Aunque este mal herido, continúa su viaje al Bosque🌳 LAS CALAVERAS💀")
                    alert("💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n🌳🟩🟩🟩👤🟩🟩🟩🌳")
                    break;
                }else if(gobling==poder){
                    alert("Gracias a los 👼Dioses👼 tiene otra oportunidad.")
                    eleccionUno = parseFloat(prompt("¿Que camino eliges🛣?"))   
                }
                        
            }else if(eleccionUno==4){
                alert(`A encontrado un cofre misterioso💼.\nUsted ha conseguido un(a) ${items}`)
                poder=poder+Math.round(Math.random()*20)
                alert("Gracias a este nuevo item su  💪Fuerza vital❤️‍🔥 aumento.")
                alert("Que suerte tuvo, ahora se dirige al Bosque🌳 LAS CALAVERAS💀 ")
                alert("💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n🌳🟩🟩🟩👤🟩🟩🟩🌳")
                break;
            }else if(eleccionUno!=4 ||eleccionUno!=3){
                alert("Opción incorrecta❌")
                eleccionUno=parseFloat(prompt("¿Que camino eliges🛣?"))

            }
            
        }
        break;
    }
    //Lobos
    
    while(bucleOn){
        alert(`Su nivel de 💪Fuerza vital❤️‍🔥 es:\n${poder}`)
        alert("SE HA ADENTRADO AL BOSQUE DE LAS CALAVERA!!!.\nSientes esa presencia, LO ESTAN PERSIGUIENDO UNOS LOBOS GIGANTES🐺🐺🐺. ¡¡¡CORRE!!! \nAl parecer se a topado con una Bifurcación. APRESÚRESE ESCOGA UN CAMINO.\nIzquierda(3) o Derecha(4)!!!!!")
        alert("💀🌳🟩🟫🟩🟫🟩🌳💀\n💀🌳🟩🟫🟩🟫🟩🌳💀\n💀🌳🟩🟫🟩🟫🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩👤🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🐺🟩🟩🌳💀\n💀🌳🐺🟩🟫🟩🟩🌳💀\n💀🌳🟩🟩🟫🟩🐺🌳💀")
        let eleccionDos = parseFloat(prompt("¿Apresúrate❗️❗️❗️ que camino eliges?"))
        while(eleccionDos==3||eleccionDos!=4||eleccionDos!=3||eleccionDos==4 || isNaN(eleccionDos)){
            if(isNaN(eleccionDos)){
                    alert("Escriba una opción. Por favor🚫")
                    eleccionDos = parseFloat(prompt("¿Apresúrate❗️❗️❗️ que camino eliges?"))
            }else if(eleccionDos==3){
                lobos = Math.floor(Math.random()*32)
                alert("Ha sido acorralado por los Lobos🐺🐺🐺")
                if(lobos<poder){       
                    alert("Ha conseguido acabar💀 con los Lobos🐺🐺🐺")
                    poder=poder+lobos
                    alert(`Su 💪Fuerza vital❤️‍🔥 ha aumentado. `)
                    alert("Gracias a su fuerza logro vencer a los Lobos🐺🐺🐺, ahora se dirige a LOS MONTES🏔️ DE LA MUERTE💀")
                    alert("⛰🟩🏔🏔🏔🟩⛰\n⛰🟩🟩🏔🟩🟩⛰\n⛰🟩🟩🏔🟩🟩⛰\n⛰🟩🟩🟫🟩🟩⛰\n⛰🟩🟩🟫🟩🟩⛰\n🟩🟩🟩🟩🟩🟩🟩\n🌳🟩🟩👤🟩🟩🌳")
                    break;
                }else if (lobos>poder){
                    alert("Los Lobos🐺🐺🐺 se lo han comido💀.")
                     
                    alert("Has muerto🪦😵")
                    vidas=vidas-1
                    alert(`Te quedan ${vidas} vidas❤️`)
                    alert("checkpoint")
                    eleccionDos = parseFloat(prompt("¿Apresúrate❗️❗️❗️ que camino eliges?"))
                    if(vidas==1){
                        alert("👾😵GAME OVER🎮💀")
                        let keepPlaying = confirm("¿Desea volver a iniciar el juego?")
                        if (keepPlaying == false){
                            bucleOn = false
                            break;
                        }
                        break;
                    }
                        
                    
                }else if(lobos==poder){
                    alert("Gracias a los 👼Dioses👼 tiene otra oportunidad.")
                    eleccionDos = parseFloat(prompt("¿Apresúrate❗️❗️❗️ que camino eliges?"))  
                }
                        
            }else if(eleccionDos==4){
                let num1=Math.floor(Math.random()*100)
                let num2=Math.floor(Math.random()*100) 
                let resultado=num1*num2
                alert("Buena elección, se ha librado de esos Lobos salvajes🐺🐺🐺.\nQue es eso a la vista parece que ha encontrado un percamino📜 con un encantamiento🪄. Solo tiene una oportunidad.\nDESCIFRA EL RESULTADO❓")
                alert(`¿Cuánto es ${num1} * ${num2} = ✖️?`)
               
                let respuesta=parseFloat(prompt("Ingrese el valor de ✖️"))
                if(isNaN(respuesta)){
                    alert("Deja el juego y ponte ha estudiar😂")
                    alert("El encantamiento🪄 se ha quemado📜🔥.\n")
                    alert("Sigue con su camino hacia la siguiente parada.\n LOS MONTES🏔️ DE LA MUERTE💀")
                    alert("⛰🟩🏔🏔🏔🟩⛰\n⛰🟩🟩🏔🟩🟩⛰\n⛰🟩🟩🏔🟩🟩⛰\n⛰🟩🟩🟫🟩🟩⛰\n⛰🟩🟩🟫🟩🟩⛰\n🟩🟩🟩🟩🟩🟩🟩\n🌳🟩🟩👤🟩🟩🌳")
                    break;
                }else if(resultado!=respuesta){
                    alert("El encantamiento🪄 se ha quemado📜🔥.\n")
                    alert("Sigue con su camino hacia la siguiente parada.\n LOS MONTES🏔️ DE LA MUERTE💀")
                    alert("⛰🟩🏔🏔🏔🟩⛰\n⛰🟩🟩🏔🟩🟩⛰\n⛰🟩🟩🏔🟩🟩⛰\n⛰🟩🟩🟫🟩🟩⛰\n⛰🟩🟩🟫🟩🟩⛰\n🟩🟩🟩🟩🟩🟩🟩\n🌳🟩🟩👤🟩🟩🌳")
                    break;
                }else if(resultado==respuesta){
                   poder=poder+10
                   alert(`Gracias a sus vastos conocimientos el encantamiento🪄 hizo que su ❤️‍🔥Fuerza vital❤️‍🔥 aumentara.`)
                   alert("Sigue con su camino hacia la siguiente parada.\n LOS MONTES🏔️ DE LA MUERTE💀")
                   alert("⛰🟩🏔🏔🏔🟩⛰\n⛰🟩🟩🏔🟩🟩⛰\n⛰🟩🟩🏔🟩🟩⛰\n⛰🟩🟩🟫🟩🟩⛰\n⛰🟩🟩🟫🟩🟩⛰\n🟩🟩🟩🟩🟩🟩🟩\n🌳🟩🟩👤🟩🟩🌳")
                   break; 
                }
                
            }else if(eleccionDos!=4 ||eleccionDos!=3){
                alert("Opción incorrecta❌")
                eleccionDos=parseFloat(prompt("¿Apresúrate❗️❗️❗️ que camino eliges?"))
                
            }
            
        }
        break;
    }
    //Ciclopes
    
    while(bucleOn){
        alert(`Su nivel de 💪Fuerza vital❤️‍🔥 es:\n${poder}`)
        alert("Han pasado meses, por fin a llegado al pasaje de los MONTES🏔 DE LA MUERTE💀. Se hizo de noche🌒 así que prendiste tu antorcha🔥. Aguarda algo te detiene ¿otra Bifurcación?\nEscoja una dirección.\nIzquierda(3) o Derecha(4)")
        alert("⛰🟫🟫🏔🟫🟫⛰\n⛰🟫🟫🏔🟫🟫⛰\n⛰🟫🟫🏔🟫🟫⛰\n⛰🟫🟫🏔🟫🟫⛰\n⛰🟩🟫🟫🟫🟩⛰\n⛰🟩🟩🟫🟩🟩⛰\n⛰🟩🟩👤🟩🟩⛰")
        let eleccionTres = parseFloat(prompt("¿Escoja una dirección?"))

        while(eleccionTres==4||eleccionTres!=3||eleccionTres!=4||eleccionTres==3 || isNaN(eleccionTres)){
            if(isNaN(eleccionTres)){
                alert("Escriba una opción. Por favor🚫")
                eleccionTres = parseFloat(prompt("¿Escoja una dirección?"))
            }else if(eleccionTres==4){
                ciclopes = Math.floor(Math.random()*45)
                alert("Ha sido atrapado por el Ciclope👁")
                if(ciclopes<poder){       
                    alert("Ha conseguido acabar con el Ciclope👁")
                    poder=poder+ciclopes
                    alert(`Su 💪Fuerza vital❤️‍🔥 ha aumentado `)
                    alert("Uff!!, ha retomado el camino hacia el VOLCAN🌋 INFERNAL🔥")
                    alert("🌋🟥🟤🟤🟤🟥🌋\n🌋🟥🟥🟤🟥🟥🌋\n🌋🟥🟥🟤🟥🟥🌋\n🔥🔥🟥🟤🟥🔥🔥\n🔥🔥🟥🟤🟥🔥🔥\n🔥🔥🟥🟤🟥🔥🔥\n⛰🏔🟫👤🟫🏔⛰")
                    break;
                }else if (ciclopes>poder){
                    alert("El Ciclope👁 lo ha descuartizado🦶🦵 y cocinado🍲")  
                    alert("Has muerto🪦😵")
                    vidas=vidas-1
                    alert(`Te quedan ${vidas} vidas❤️`)
                    alert("checkpoint")
                    eleccionTres = parseFloat(prompt("¿Escoja una dirección?"))
                    if(vidas==1){
                        alert("👾😵GAME OVER🎮💀")
                        let keepPlaying = confirm("¿Desea volver a iniciar el juego?")
                        if (keepPlaying == false){
                            bucleOn = false
                            break;
                        }
                        break;
                    }
                }else if(ciclopes==poder){
                    alert("Gracias a los 👼Dioses👼 tiene otra oportunidad.")
                    eleccionTres = parseFloat(prompt("¿Escoja una dirección?"))
                }   
            }else if(eleccionTres==3){
                
                alert("Al final del túnel hay un Guardia💂 durmiendo💤")
                let adicional=confirm("¿Quiere enfrentarse a él?") 
                if(adicional==true){
                    Guardia=Math.floor(Math.random()*20)
                    if(Guardia<poder){       
                        alert("Ha conseguido acabar con el Guardia💂")
                        poder=poder+Guardia
                        alert(`Su 💪Fuerza vital❤️‍🔥 ha aumentado. `)
                        alert("Uff!!, ha retomado el camino hacia el VOLCAN🌋 INFERNAL🔥")
                        alert("🌋🟥🟤🟤🟤🟥🌋\n🌋🟥🟥🟤🟥🟥🌋\n🌋🟥🟥🟤🟥🟥🌋\n🔥🔥🟥🟤🟥🔥🔥\n🔥🔥🟥🟤🟥🔥🔥\n🔥🔥🟥🟤🟥🔥🔥\n⛰🏔🟫👤🟫🏔⛰")
                        break;
                    }else if (Guardia>poder){
                        alert("El Guardia💂 lo ha cortado en dos")  
                        alert("Has muerto🪦😵")
                        vidas=vidas-1
                        alert(`Te quedan ${vidas} vidas❤️`)
                        alert("checkpoint")
                        adicional = parseFloat(prompt("¿Quiere enfrentarse a el?"))
                        if(vidas==1){
                            alert("👾😵GAME OVER🎮💀")
                            let keepPlaying = confirm("¿Desea volver a iniciar el juego?")
                            if (keepPlaying == false){
                                bucleOn = false
                                break;
                            }
                            break;
                        }
                            
                    }else if(Guardia==poder){
                        alert("Gracias a los 👼Dioses👼 tiene otra oportunidad")
                        eleccionTres = parseFloat(prompt("¿Escoja una dirección?"))
                    }
                }else{
                    alert("Que sabia decisión🤓☝️. Continue así")
                    break;
                }
                

            }else if(eleccionTres!=3 ||eleccionTres!=4){
                alert("Opción incorrecta❌")
                eleccionTres=parseFloat(prompt("¿Escoja un dirección?"))   
            }    
        }
        break;
    }
    //JefeFinal
    
    while(bucleOn){
        alert(`Su nivel de 💪Fuerza vital❤️‍🔥 es:\n${poder}`)
        alert(`Por fin ha llegado al castillo🏰 del VOLCAN🌋 INFERNAL🔥\n Es el 👺Rey♛ Demonio👺, asomándose por la ventana de su enorme castillo.\n🗡LA BATALLA A COMENZADO🗡`)
        alert("🟥⬛️     ⬛     ⬛     ⬛🟥\n🟥⬛⬛⬛⬛⬛⬛⬛🟥\n🟥⬛⬛🟦👑⬛⬛⬛🟥\n🟥⬛⬛🟦👺⬛⬛⬛🟥\n🟥⬛🟫⬛⬛⬛🟫⬛🟥\n🟥⬛🟫⬛⬛⬛🟫⬛🟥\n🔥🟧🟤🟧🟧🟧🟤🟧🔥\n🔥🟩🟩🟤🟤🟤🟩🟩🔥\n                    👤         ")
        alert("Adelante de usted se ha encontrado 2 puertas🚪🚪SOLO UNA ES LA CORRECTA!\nIzquierda(3) o Derecha(4) ")
        
        let endGame = parseFloat(prompt("¿Que puerta elige🚪?"))
        while(endGame==3||endGame!=4||endGame!=3||endGame==4 || isNaN(endGame)){
            if(isNaN(endGame)){
                alert("Escriba una opción. Por favor🚫")
                endGame = parseFloat(prompt("¿Que puerta elige🚪?"))
            }else if(endGame==3){
                alert("Has caído en una trampa🪤")
                alert("Has muerto🪦😵")
                vidas=vidas-1
                alert(`Te quedan ${vidas} vidas❤️`)  
                alert("checkpoint")
                endGame = parseFloat(prompt("¿Que puerta elige🚪?"))
                if(vidas==1){
                    alert("👾😵GAME OVER🎮💀")
                    let keepPlaying = confirm("¿Desea volver a iniciar el juego?")
                    if (keepPlaying == false){
                        bucleOn = false
                        break;
                    }
                    break;
                }
                                
            }else if(endGame==4){
                alert("Por fin ha llegado al jefe Final")
                
                if(poder>jefeFinal){
                    alert("Su 💪Fuerza vital❤️‍🔥 supera al del 👺Rey♛ Demonio👺\nAsí que agarro su espada🗡️ y se la clavo en el corazón🫀")
                    alert(`Felicidades 👤${nombre}🪓 \nHa conseguido vencer al 👺Rey♛ Demonio👺`)
                    vidas=0
                    if(vidas==0){
                        let keepPlaying = confirm("¿Desea volver a iniciar el juego?")
                        if (keepPlaying == false){
                            bucleOn = false
                            break;
                        }
                        break;
                    }
                }else{
                    alert("Tu nivel de 💪Fuerza vital❤️‍🔥 es bajo")
                    alert("El 👺Rey♛ Demonio👺 te ha matado💀 y ha absorvido tu alma👻")
                    alert("👾😵GAME OVER🎮💀")
                    vidas=0
                    if(vidas==0){
                        let keepPlaying = confirm("¿Desea volver a iniciar el juego?")
                        if (keepPlaying == false){
                            bucleOn = false
                            break; 
                        } 
                        break;
                    }
                    
                }

            }else if(endGame!=4 ||endGame!=3){
                alert("Opción incorrecta❌")
                endGame=parseFloat(prompt("¿Que puerta elige🚪?"))

            }
            
        }
        break;
    }

}
}