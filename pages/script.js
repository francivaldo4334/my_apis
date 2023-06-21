var moved = false;

function moveNaoButton() {
  var naoBtn = document.getElementById("naoBtn");
  var container = document.querySelector(".container");

  if (!moved) {
    container.removeChild(naoBtn);
    container.appendChild(naoBtn);
    moved = true;
  } else {
    var confirmacao = confirm("Tem certeza?");
    if (confirmacao) {
      // Aqui você pode adicionar a ação desejada quando o usuário confirma.
      var confirmacao1 = confirm("Voce vai me magoar! TEM CERTEZA?");
      if(confirmacao1){
        var triste = document.getElementById("triste");
        var heart = document.getElementById("heart");
        heart.style.visibility = "hidden";
        heart.style.height = "0px";
        triste.style.visibility = "visible";
      }
      else{
        var heart = document.getElementById("heart");
        heart.style.height = "200px";
        heart.style.visibility = "visible";
        var triste = document.getElementById("triste");
        triste.style.visibility = "hidden";
      }
    }
    else{
        var heart = document.getElementById("heart");
        heart.style.height = "200px";
        heart.style.visibility = "visible";
        var triste = document.getElementById("triste");
        triste.style.visibility = "hidden";
    }
  }
}
function simButton(){
    var heart = document.getElementById("heart");
    heart.style.height = "200px";
    heart.style.visibility = "visible";
    var triste = document.getElementById("triste");
    triste.style.visibility = "hidden";
}
