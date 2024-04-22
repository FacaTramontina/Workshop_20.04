// comentários! <3 
let num = parseInt(Math.random() * 1001)
let input = document.getElementById("input")
let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")


botao.addEventListener("click", function(){
    if (input.value == num){
        alert("Acertou!")
    }else if (input.value < num){
        resultado.innerHTML = "Tente um número maior!"
        resultado.style.color = "red"
    }else if (input.value > num){
        resultado.innerHTML = "Tente um número menor!"
        resultado.style.color = "orange"
    }
})