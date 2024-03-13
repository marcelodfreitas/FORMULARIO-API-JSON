const formE1 = document.getElementById('form-api')

formE1.addEventListener('submit', evento => {
    evento.preventDefault();

    const formData = new FormData(formE1);
    const data = Object.fromEntries(formData);


    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))
})


queryString = window.location.search;
param = new URLSearchParams(queryString); 
param.get('name')
param.get('phone')
param.get('email')

var input = document.querySelector("input[name=phone]")
var value = document.querySelector("input[name=name]")
//var date = document.querySelector("input[name=date]")
var email = document.querySelector("input[name=email")

input.value = param.get('phone')
value.value = param.get('name')
email.value = param.get('email')
//date.value = param.get('date')