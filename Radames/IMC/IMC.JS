function funccalcular(){
    let peso = parseFloat(document.getElementById("InputPeso").value);
    let altura = parseFloat(document.getElementById("InputAltura").value) / 100;

    if (!peso || !altura) {
        document.getElementById("saida").innerHTML = "Preencha todos os campos!";
        return;
    }

    let IMC = peso / (altura * altura);
    let classificacao = "";

    if (IMC < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (IMC < 25) {
        classificacao = "Peso normal";
    } else if (IMC < 30) {
        classificacao = "Sobrepeso";
    } else if (IMC < 35) {
        classificacao = "Obesidade grau I";
    } else if (IMC < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    document.getElementById("saida").innerHTML = 
        "SEU IMC É " + IMC.toFixed(2) + "<br>" + classificacao;
}