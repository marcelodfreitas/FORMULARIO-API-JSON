const formE1 = document.getElementById('form-api')

formE1.addEventListener('submit', evento => {
    evento.preventDefault();

    const formData = new FormData(formE1);
    const data = Object.fromEntries(formData);

    console.log(data);

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))
})

//Aqui eu o JS pegar o resultado da URL

queryString = window.location.search;
param = new URLSearchParams(queryString); 
param.get('phone')


input = document.querySelector("input[name=phone]");
    
//Aqui  eu passo o celular direto para dentro do input value 

input.value = param.get('phone')
