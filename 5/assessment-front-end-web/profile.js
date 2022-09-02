function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Friendship LEVELED UP.');
    form.reset();
    document.querySelectorAll("#showButt").forEach(a=>a.style.display = "initial");
}
let form = document.querySelector('#aboutYou');
form.addEventListener('submit', handleSubmit);

