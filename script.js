const form = document.getElementById("emailForm");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = email.value.trim();
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!regex.test(emailValue)) {
        message.textContent = "E-mail inválido. Utilize o formato nome@dominio.com";
        message.style.color = "#d32f2f";
    } else {
        message.textContent = "E-mail adicionado com sucesso!";
        message.style.color = "#388e3c";
    }
});
