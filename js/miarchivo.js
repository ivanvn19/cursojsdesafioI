// Acertijo

let respuesta = ""

respuesta= prompt ( "Adivina adivinador.... No muerde ni ladra, pero tiene dientes y la casa guarda. ¿Qué es?")

while (respuesta != "llave") {
    alert (" mmm, estás seguro?... " + respuesta + " no es correcto")
    
    respuesta= prompt (" Tu puedes... que otra cosa puede ser??")
    
}
alert( " Exclente, has ganado! la respuesta correcta es llave " )



