console.log('hello world')
let message = document.querySelector("#message")

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector("input")
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)

    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    let list = document.querySelector("ul")
    list.appendChild(movie)
    inputField.value = "";
}


document.querySelector("form").addEventListener("submit", addMovie)

function deleteMovie(event){
   console.log(event.target.parentNode.firstChild.textContent)
    message.textContent = `${event.target.parentNode.firstChild.textContent} has been deleted!`
    event.target.parentNode.remove()
    console.log(revealMessage(message))


}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    console.log(revealMessage(message))
}

function revealMessage(){
    message.classList.remove("hide")
    setTimeOut( function() {

        message.classList.add('hide');
    }, 1000);

    }
