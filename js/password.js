function mostrarPassword(){ 
    var input_password = document.getElementById('password');
    var show_Password = document.querySelector('.show-password'); 
    if (input_password.type === "password") 
        { 
            input_password.type = "text"; 
            show_Password.innerText = "Ocultar"; 
        } else { 
            input_password.type = "password"; 
            show_Password.innerText = "Mostrar"; 
        } 
}