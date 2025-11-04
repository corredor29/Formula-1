document.addEventListener("DOMContentLoaded", function() {
  // Menú móvil hamburguesa
    const menuMobile = document.querySelector('.menu-mobile-icon');
    if(menuMobile) {
        menuMobile.onclick = function() {
        document.querySelector('.f1-menu').classList.toggle('active');
        };
    }

    // Mostrar el modal login
    const btnLogin = document.querySelector('.btn-login');
    const modalLogin = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.f1-login-close');
    
    btnLogin.onclick = function(e) {
        e.preventDefault();
        modalLogin.style.display = 'flex';
        const inputEmail = document.getElementById('email');
        if(inputEmail) inputEmail.focus();
    };

    // Cerrar modal login
    closeBtn.onclick = function() {
        modalLogin.style.display = 'none';
    };

    // Mostrar/ocultar contraseña
    const eyeBtn = document.querySelector('.f1-eye');
    if(eyeBtn) {
        eyeBtn.onclick = function() {
        const passEl = document.getElementById('password');
        if(passEl) {
            passEl.type = passEl.type === 'password' ? 'text' : 'password';
        }
        };
    }

    // Formulario login a mockapi
    const formLogin = document.getElementById('f1LoginForm');
    if(formLogin) {
        formLogin.onsubmit = async function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const pass = document.getElementById('password').value;
        const msg = document.querySelector('.f1-login-msg');
        if(!email || !pass) {
            msg.style.color='#ff4b59';
            msg.textContent="Todos los campos son obligatorios.";
            return;
        }
        try {
            const response = await fetch('https://69077cf0b1879c890ed9f0a7.mockapi.io/users', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: email,
                password: pass,
                remember: document.getElementById('remember') ? document.getElementById('remember').checked : false
            })
            });
            if (response.ok) {
            msg.style.color='#6bff75';
            msg.textContent="¡Sesión iniciada correctamente!";
            setTimeout(()=>modalLogin.style.display='none',1100);
            } else {
            msg.style.color='#ff4b59'; msg.textContent="Error en el servidor.";
            }
        } catch(err){
            msg.style.color='#ff4b59'; msg.textContent="Error: "+err.message;
        }
        };
    }
});

// Mostrar modal al presionar el botón Suscribirse
document.querySelector('.btn-subscribe').onclick = function() {
    document.getElementById('modal-suscripcion').classList.remove('oculto');
    document.getElementById('ccNumberInput').focus();
};

const ccNumberInput = document.getElementById('ccNumberInput');
const ccNameInput = document.getElementById('ccNameInput');
const ccExpInput = document.getElementById('ccExpInput');
const ccCvvInput = document.getElementById('ccCvvInput');
const ccNumberDisplay = document.getElementById('ccNumberDisplay');
const ccNameDisplay = document.getElementById('ccNameDisplay');
const ccExpDisplay = document.getElementById('ccExpDisplay');
const ccCvvDisplay = document.getElementById('ccCvvDisplay');
const card = document.getElementById('creditCard');
ccNumberInput.addEventListener('input', function() {
    let value = this.value.replace(/\D/g,'').slice(0,16);
    value = value.replace(/(.{4})/g,"$1 ").trim();
    ccNumberDisplay.textContent = value || '•••• •••• •••• ••••';
    this.value = value;
});
ccNameInput.addEventListener('input', function() {
    ccNameDisplay.textContent = this.value.trim() ? this.value.toUpperCase() : 'NOMBRE COMPLETO';
});
ccExpInput.addEventListener('input', function() {
    let val = this.value.replace(/[^0-9\/]/g,'').slice(0,5);
    if (val.length === 2 && !val.includes('/')) val = val + '/';
    ccExpDisplay.textContent = val || 'MM/AA';
    this.value = val;
});
ccCvvInput.addEventListener('focus', function() {
    card.classList.add('flipped');
});
ccCvvInput.addEventListener('blur', function() {
    card.classList.remove('flipped');
});
ccCvvInput.addEventListener('input', function() {
    let cvv = this.value.replace(/\D/g,'').slice(0,4);
    ccCvvDisplay.textContent = cvv || '•••';
    this.value = cvv;
});

