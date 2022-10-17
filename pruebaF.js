alert(`Bienvenido/a a tu Contador Online`)

function ValorRecategorizacion(){
    const precioCatA = 500
    const precioCatB = 750
    const precioCatH = 1000
    const precioCatRI = 3000

    let precioLista = true
    let carrito = 0
    let cantidadRec = ""
    while(precioLista){
        let lista = parseInt(prompt(`Seleccione Categoría
        1. Categoría A. $${precioCatA}
        2. Categoría B. $${precioCatB}
        3. Categoría H. $${precioCatH}
        4. Categoria Responsable Inscripto. $${precioCatRI}
        5. Ir a pagar.
        0. No deseo recategorizarme.`))
        switch(lista){
            case 1:
            alert("Seleccionó Categoría A")
            console.log("Seleccionó Categoría A")
            cantidadRec += `Cat A
            `
            carrito += precioCatA
            break;
            case 2:
            alert("Seleccionó Categoría B")
            console.log("Seleccionó Categoría B")
            cantidadRec += `Cat B
            `
            carrito += precioCatB
            break;
            case 3:
            alert("Seleccionó Categoría H")
            console.log("Seleccionó Categoría H")
            cantidadRec += `Cat H
            `
            carrito += precioCatH
            break;
            case 4:
            alert("Seleccionó Categoría Responsable Inscripto")
            console.log("Seleccionó Categoría Responsable Inscripto")
            cantidadRec += `Cat RI
            `
            carrito += precioCatRI
            break;
            case 5:
            precioLista = false
                 if(carrito != 5){
                     alert(`El total de su compra es de $${carrito}:
                     ${cantidadRec} 
                     Gracias por su visita!`)
                     console.log(`El total de su compra es de $${carrito}:
                     ${cantidadRec} 
                     Gracias por su visita!`)
                 }else{
                     alert(`Usted no seleccionó ninguna recategorización.`)
                 }
            break;
            case 0:
                break;
        }

    }
}

let ingreseOpc = prompt(`Por favor, ingresá 1 para utiliar nuestra Calculadora ó 2 para Presupuesto por Recategorizaciones`)
if (ingreseOpc == 1){

let ingreseCalc = prompt(`Por favor, ingresá 1 para calcular IIGG, 2 para IVA y 3 para IIBB - ESC para salir`)

if (ingreseCalc == 1){
    console.log(`Usted a seleccionado Impuesto a las Ganancias`)
    let vIb = parseInt(prompt(`Usted a Seleccionado Impuesto a las Ganancias. Ingrese el valor a calcular`))
    alert(`El monto calculado correspondiente a IIGG es igual a $${vIb * 0.06} `)
    console.log(`El monto calculado correspondiente a IIGG es igual a $${vIb * 0.06} `)
}else if (ingreseCalc == 2){
    console.log(`Usted a seleccionado IVA`)
    let vIv = parseInt(prompt(`Usted a Seleccionado IVA. Ingrese el valor a calcular`))
    alert(`El monto calculado correspondiente a IVA es igual a $${vIv * 0.21}`)
    console.log(`El monto calculado correspondiente a IVA es igual a $${vIv * 0.21}`)
}else if (ingreseCalc == 3){
    console.log(`Usted a seleccionado IIBB`)
    let vIbb = parseInt(prompt(`Usted a Seleccionado IIBB. Ingrese el valor a calcular`))
    alert(`El monto calculado correspondiente a IIBB es igual a $${vIbb * 0.03}`)
    console.log(`El monto calculado correspondiente a IIBB es igual a $${vIbb * 0.03}`)
}else (ingreseCalc == "ESC".toLowerCase())
    console.log(`Gracias por utilizar nuestro servicio`)
}

if (ingreseOpc == 2){
ValorRecategorizacion()
}

