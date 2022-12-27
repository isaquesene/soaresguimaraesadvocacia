function sendEmail(){
    var params = {
        email: document.getElementById("email").value,
        phone: document.getElementById("tel").value,
        nome: document.getElementById("nome").value,
        message: document.getElementById("message").value,
    };


    const serviceID = "";
    const templateID = "";

    emailjs 
        .send(serviceID, templateID, params)
        .then((res)=>{
            document.getElementById("email").value = "";
        })

        .catch((err) => console.log(err));
}