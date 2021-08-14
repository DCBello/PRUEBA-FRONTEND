// js para menu hamburguesa
let menu = document.querySelector(".hamburguesa");
let header = document.querySelector(".container__header_2");
if (!!menu && !!header) {
  menu.addEventListener("click", function() {
    header.classList.toggle("active");
  });
}

// js para formulario
function fun() {
  document.querySelector("body").classList.add("preload");

  let api_url = 'https://api.shrtco.de/v2/shorten?url=';
  let prefix_short_url = 'https://shrtco.de/'
  let a = document.querySelector(".formil");

  if (a.value !== "") {
    fetch(api_url + a.value)
    .then(response => response.json())
    .then(data => {
        // console.log(prefix_short_url + data.result.code)
        let code_link = data.result.code;
        var newDiv = document.createElement("li");
        var newContent = document.createTextNode(a.value);
        newDiv.appendChild(newContent);
        var currentDiv = document.querySelector(".lista");
        currentDiv.appendChild(newDiv);

        let long_link = document.querySelector(".lista li:last-child");
        let span_short_link = document.createElement('span')
        let short_rtl = document.createTextNode = prefix_short_url + code_link
        long_link.appendChild(span_short_link);
        span_short_link.innerText = short_rtl;

        var copy = document.createElement("input");
        copy.setAttribute("type", "button");
        copy.setAttribute("value", "Copiar");
        copy.setAttribute("class", "copy");
        copy.setAttribute("name", "copy");
        newDiv.appendChild(copy);
        a.value = "";

        fun2();
    })

  } else {
    alert("No ha ingresado ninguna url");
    a.parentElement.classList.add("error");
  }

}


function fun2() {
  if( document.querySelector("body").classList.contains("preload")){
    document.querySelector("body").classList.remove("preload");
  }

  var lista1 = Array.from(document.querySelectorAll(".lista li span"));
  var lista2 = document.querySelectorAll(".lista li .copy");
  if (lista1 != null) {
    if (lista1.length === lista2.length) {
      for (let i = 0; i < lista1.length; i++) {
        const itemLista2 = lista2[i];
        console.log(lista1[i])
        
        itemLista2.addEventListener("click", function() {
          if (lista2 != null && lista1 != null) {
            var aux = document.createElement("input");
            aux.setAttribute("value", lista1[i].innerText);
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);
          }
        });
      }
    }
  }
}


 //checks whether the pressed key is "Enter"

 var ak = document.querySelector(".formil");

 ak.addEventListener("keydown", function (e) {
   if (e.keyCode === 13) { 
     e.preventDefault()
       fun();
   }
 });