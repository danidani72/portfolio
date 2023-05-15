
function chama() {
    //document.body.style.backgroundColor = "red";
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let batata = a + b;
    //alert("SOMA IGUAL A " + soma);
    console.log("SOMA IGUAL A " + batata)
    //devolver o resultado para a tela
    document.getElementById("resultado").innerHTML = "SOMA IGUAL A " + soma
}
//ponto de mínimo / máximo
function exercicio1() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let xv = -b/(2*a);
    let delta = b*b - 4*a*c;
    let yv = -delta/(4*a);
    //devolver o resultado para a tela
    document.getElementById("resultado").innerHTML = "O PONTO É (" + xv.toFixed(2) + "," + yv.toFixed(2) + ")";

}

//conversão de temperatura
function exercicio2() {
    //alert("teste");
    let resultado;
    let t = document.getElementById('temp').value;
    console.log("TEMP=" + t)
    let escala = document.getElementById("converter").value;
    console.log("PARA="+ escala);

    if (escala == "c")
    //C=(F-32)*5/9
    resultado = (t-32)*5/9
    document.getElementById("saida").innerHTML = temp + "F vale" + resultado + "C"
}

else {
    //f = 9/5c + 32
    resultado = 9*t/5 + 32 
    document.getElementById("saida").innerHTML = t + "C vale" + resultado + "F"
}
