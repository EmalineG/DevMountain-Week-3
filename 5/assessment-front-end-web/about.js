console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('okay! go to profile so we can get to know each other!');
}



document.querySelector("img").addEventListener('mouseover', () => {
	alert("you're our favorite friend!")
}
)

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);
