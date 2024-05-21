function formevent() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var test = "@gmail.com"

    if(nome == "" && email == "") {
        document.getElementById("alertalab").innerHTML = "Preencha este campo*"
        document.getElementById("alertalab2").innerHTML = "Preencha este campo*"
    }
    else if(nome == "") {
        document.getElementById("alertalab").innerHTML = "Preencha este campo*"
        document.getElementById("alertalab2").innerHTML = ""
    }
    else if(email == "") {
        document.getElementById("alertalab").innerHTML = ""
        document.getElementById("alertalab2").innerHTML = "Preencha este campo*"
    }
    else {
        var confirmacao = confirm("Obrigado por se inscrever em nossa newsletter!");
        if (confirmacao == 1) {

            window.location.href = "index.html";
    
    
    
        }
        else {
            window.location.href = "newsletter.html";
        }
    }
}