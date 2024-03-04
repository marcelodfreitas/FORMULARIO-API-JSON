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