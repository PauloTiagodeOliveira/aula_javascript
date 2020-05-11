//var nome = "Paulo Tiago";
//var idade = 35
//alert (nome + " tem " + idade + " anos." );

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}
function redirecionar(){
    window.open("https://www.uol.com.br")
    //window.location.href =  ("https://www.uol.com.br")
}
function trocar(elemento){
  //  document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse."
  elemento.innerHTML = "Obrigado por passar o mouse."
    
}
function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui."
   elemento.innerHTML  = "Passe o mouse aqui."
}
function load(){
    alert("Página carregada.")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}