let correos = [
    {correos: "rohowa7802@gmail.com", contraseñas: "123456789"},
    {correos: "mateoArenas@gmail.com", contraseñas: "123456789"},
    {correos: "juanGarcia@gmail.com", contraseñas: "123456789"},
    {correos: "maikinRamon@gmail.com", contraseñas: "123456789"}]


    function create() {
        let correo = document.querySelector("#correo").value;
        let contraseña = document.querySelector("#contraseña").value;
        let confirmContraseña = document.querySelector("#confirmContraseña").value;
        correos = [... correos, {correos: correo, contraseñas:contraseña}]
        console.log(correos)
    }

    correos.forEach((correo)=>{
        document.body.innerHTML += `<br>`
        document.write(correo.correos + " - " +correo.contraseñas)
    })