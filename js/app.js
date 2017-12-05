function nameList(){
  //creando boton Guardar nombre de lista
  var btn = document.createElement("button");
  var textBtn = document.createTextNode("Guardar");
  btn.setAttribute("id","boton1");
  btn.setAttribute("type","button");
  btn.appendChild(textBtn);
  btn.addEventListener("click", createList);
  document.getElementById("btn").appendChild(btn);
  var boton=document.getElementById("boton1");
  boton.className=("boton");
  //Agregando clase nueva a formulario
  var contForm=document.getElementById("form1");
  contForm.className=("formList");

}

function createList(){
  console.log("entrando");
  var z=document.getElementById("form2");
  z.className = "d-inlineblock";
}
