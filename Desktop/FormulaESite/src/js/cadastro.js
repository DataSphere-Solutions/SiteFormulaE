function validar() {
    let user = document.querySelector('#userhtml').value; 
    let senha = document.querySelector('#senhahtml').value;
    
    if (user == 'user' && senha == 1234) {
        window.alert('Usuário validado!')
        window.location.href = "./index.html";
    } else if (user != 'user' || senha != 1234) {
        window.alert('Usuário ou senha inválidos! Preencha os dados e tente novamente.')
    }
}
