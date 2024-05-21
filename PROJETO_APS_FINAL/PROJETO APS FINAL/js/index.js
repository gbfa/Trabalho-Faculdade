function calcularEmissao() {
    var distancia = document.getElementById("distancia").value;
    var rendimento = document.getElementById("rendimento").value;
    var combustivel = document.getElementById("combustivel").value;
    var litrosgastos = distancia / rendimento
    if(distancia == "" && rendimento == "") {
        document.getElementById("alertalabel").innerHTML = ("Preencha este campo*")
        document.getElementById("alertalabel2").innerHTML = ("Preencha este campo*")
    }

    else if(distancia == "") {
        document.getElementById("alertalabel2").innerHTML = ("")
        document.getElementById("alertalabel").innerHTML = ("Preencha este campo*")
        console.log("teste")
    }

    else if(rendimento == "") {
        document.getElementById("alertalabel2").innerHTML = ("Preencha este campo*")
        document.getElementById("alertalabel").innerHTML = ("")
    }

    else {
        document.getElementById("alertalabel").innerHTML = ("")
        document.getElementById("alertalabel2").innerHTML = ("")

        if(combustivel == "gasolina") {

            var resultadogasolina = (litrosgastos * 0.82 * 0.75 * 3.7).toFixed(2)
    
            document.getElementById("resultado").innerHTML = ("Um veículo abastecido a gasolina que percorreu " + distancia + "km, no rendimento de " + rendimento + "km/L, gastou " + litrosgastos + "L") 
            document.getElementById("resultado2").innerHTML = ("Sua emissäo de CO² é de " + resultadogasolina + "kg")
        }
    
        if(combustivel == "diesel") {
            var resultadodiesel = (litrosgastos * 0.83 * 3.7).toFixed(2)
            document.getElementById("resultado").innerHTML = ("Um veículo abastecido a diesel que percorreu " + distancia + "km, no rendimento de " + rendimento + "km/L, gastou " + litrosgastos + "L.")
            document.getElementById("resultado2").innerHTML = ("Sua emissäo de CO² é de " + resultadodiesel + "kg")
        }
    
    
    
    }


}