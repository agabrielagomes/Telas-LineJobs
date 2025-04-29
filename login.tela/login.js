document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const emailGroup = document.getElementById('emailGroup');
    const passwordGroup = document.getElementById('passwordGroup');
  
    loginForm.addEventListener('submit', function(event) {
        let isValid = true;
  
        // Resetar estilos de erro
        emailError.style.display = 'none';
        emailGroup.classList.remove('error');
        passwordError.style.display = 'none';
        passwordGroup.classList.remove('error');
  
        // Verificar se o email está em branco
        if (emailInput.value.trim() === '') {
            emailError.style.display = 'block';
            emailGroup.classList.add('error');
            isValid = false;
        }
  
        // Verificar se a senha está em branco
        if (passwordInput.value.trim() === '') {
            passwordError.style.display = 'block';
            passwordGroup.classList.add('error');
            isValid = false;
        }
  
        // Se algum campo estiver em branco, impedir o envio do formulário
        if (!isValid) {
            event.preventDefault();
        } else {
            // Aqui você pode adicionar a lógica para enviar o formulário
            alert('Login realizado (simulação)');
            // loginForm.submit();
        }
    });
  });