const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector("button");

//Funcion para agregar una li si se da condicion
function addTask() {
  if (inputBox.value === "") {
    alert("You must write somethig!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Pongo la opacidad del nuevo elemento a 1 para que aparezca gradualmente
    setTimeout(() => {
      li.style.opacity = "1";
    }, 10);

    //Agrego la X como span
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Pongo la opacidad del nuevo elemento span a 1 para que aparezca gradualmente
    setTimeout(() => {
      span.style.opacity = "1";
    }, 10);
  }
  inputBox.value = "";
}

// Función para usar Enter ademas del click para crear un task
function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    addTask(); // Llamamos a la función addTask si se presiona la tecla Enter
  }
}
inputBox.addEventListener("keydown", handleEnterKeyPress);

//Funcion del click en el boton para hacer el check o removerlo
addButton.addEventListener("click", addTask);
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
