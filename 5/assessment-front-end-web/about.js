console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('new quest: friendship quest! (go to friendship quest page)');
}



document.querySelector("img").addEventListener('mouseover', () => {
	alert("you're our favorite friend!")
}
)

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);
