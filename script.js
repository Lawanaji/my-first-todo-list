const inputEl = document.querySelector("#todoInput")
const addBtn = document.querySelector("#addBtn")
const todoContainer = document.querySelector(".todos")
const toast = document.querySelector(".toast")

const addTodo = () =>{

    const todo = inputEl.value;
    if(!todo.trim()){
        toast.innerHTML = "input field is required";
        toast.classList.add("show");
    return    setTimeout(() =>{
toast.classList.remove("show")
        }, 3000)
    }

    const divEl = document.createElement("div")
    const spanEl = document.createElement("span")
    const textNode = document.createTextNode(todo)
    spanEl.setAttribute("class", "delete")
    divEl.setAttribute("class","todo")
    divEl.appendChild(textNode)
    divEl.appendChild(spanEl)

    

todoContainer.appendChild(divEl)
inputEl.value = "";


////delete fucntion////////////

spanEl.addEventListener("click", () =>{
    todoContainer.removeChild(spanEl.parentElement)
})

}

addBtn.addEventListener("click", addTodo)

// todoContainer.addEventListener("click", (event) => {
//     console.log(event.target.className);
//     if(event.target.className === "delete"){
//         todoContainer.removeChild(event.target.parentElements)
//     }
// })