document.getElementById("formLogin").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
    } 
    else if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
    } 
    else {
        alert("Login realizado com sucesso! ✅");
    }
});