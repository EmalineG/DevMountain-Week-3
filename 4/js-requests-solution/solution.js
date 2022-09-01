//PROBLEM 1
let sayHelloButton = document.querySelector('#say-hello-button');

//PROBLEM 2
sayHelloButton.addEventListener('mouseover', () => {
    sayHelloButton.style.backgroundColor = 'black';
    sayHelloButton.style.color = 'white';
})

//PROBLEM 3
sayHelloButton.addEventListener('mouseout', () => {
    sayHelloButton.style.backgroundColor = '#EFEFEF';
    sayHelloButton.style.color = 'black';
})

//PROBLEM 4
sayHelloButton.addEventListener('click', sayHello);

//PROBLEM 5
return axios.get('http://localhost:3000/animals')
.then(res => {
    return res.data
})

//PROBLEM 6
return axios.get('http://localhost:3000/repeat/I-Love-Coding')
.then(res => res.data)

//PROBLEM 7
let repeatEl = document.getElementById('repeat-text');
repeatEl.textContent = res.data;
repeatEl.style.display = 'block';

//PROBLEM 8
axios.get('http://localhost:3000/repeat?myquery=a-really-awesome-query&anotherOne=DJ-Khalid')
.then(({ data }) => console.log(data))