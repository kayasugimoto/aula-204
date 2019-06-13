const jojo = document.querySelector("img")
const lista = document.querySelector("ul")
const goldenw = document.querySelector("main img")

function abrirMenu(){
    // if(lista.classList.contains("ativo")){
    //     lista.classList.remove("ativo")
    // }else{
    //     lista.classList.add("ativo")
    // }
    lista.classList.toggle("ativo")
}

function anim(){
    goldenw.classList.toggle("anim")
}

jojo.onclick = abrirMenu
goldenw.onclick = anim