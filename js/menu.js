document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile-icon');
    if(menuMobile) {
        menuMobile.onclick = function() {
        document.querySelector('.f1-menu').classList.toggle('active');
        };
    }

    // Abrir modal login
    document.querySelector('.btn-login').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('login-modal').classList.remove('hidden');
        document.getElementById('user').focus(); // foco en usuario
    });

    // Cerrar modal login
    document.querySelector('.login-close-btn').onclick = function() {
        document.getElementById('login-modal').classList.add('hidden');
    };

    // Validación de login y feedback visual
    document.querySelector('.login-box').onsubmit = function(e) {
        e.preventDefault();
        const user = document.getElementById('user').value;
        const pass = document.getElementById('pass').value;
        const msg = document.querySelector('.login-message');
        if(user === 'admin' && pass === 'f1') {
        msg.style.color = "#6bff75";
        msg.textContent = "¡Acceso concedido, bienvenido!";
        setTimeout(()=>document.getElementById('login-modal').classList.add('hidden'), 1000);
        } else {
        msg.style.color = "#ff4b59";
        msg.textContent = "Usuario o contraseña incorrectos";
        }
    };
});
