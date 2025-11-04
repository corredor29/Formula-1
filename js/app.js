document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <button class="btn-animated">Agregar circuito</button>
        <div class="circuit-list"></div>
    `;
    // Animación JS al hacer click
    document.querySelector('.btn-animated').addEventListener('click', () => {
        document.querySelector('.circuit-list').classList.add('fadeIn');
    });

    // Modal functionality
    const createAccountModal = document.getElementById('create-account-modal');
    const loginModal = document.getElementById('login-modal');
    const btnLogin = document.querySelector('.btn-login');
    const btnSubscribe = document.querySelector('.btn-subscribe');

    // Open create account modal from "Iniciar sesión" button
    if (btnLogin) {
        btnLogin.addEventListener('click', (e) => {
            e.preventDefault();
            createAccountModal.classList.add('active');
        });
    }

    // Open login modal from "Suscribirse" button
    if (btnSubscribe) {
        btnSubscribe.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('active');
        });
    }

    // Close modals
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('f1-login-close') || e.target === loginModal) {
            loginModal.classList.remove('active');
        }
        if (e.target.classList.contains('f1-create-close') || e.target === createAccountModal) {
            createAccountModal.classList.remove('active');
        }
    });

    // Toggle password visibility for login
    const togglePassword = document.getElementById('togglePassword');
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const passwordField = document.getElementById('password');
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
        });
    }

    // Toggle password visibility for create account
    const togglePasswordCreate = document.getElementById('togglePasswordCreate');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    if (togglePasswordCreate) {
        togglePasswordCreate.addEventListener('click', () => {
            const passwordField = document.getElementById('passwordCreate');
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            togglePasswordCreate.textContent = type === 'password' ? '👁️' : '🙈';
        });
    }
    if (toggleConfirmPassword) {
        toggleConfirmPassword.addEventListener('click', () => {
            const confirmPasswordField = document.getElementById('confirmPassword');
            const type = confirmPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPasswordField.setAttribute('type', type);
            toggleConfirmPassword.textContent = type === 'password' ? '👁️' : '🙈';
        });
    }

    // Form submissions
    const loginForm = document.getElementById('f1LoginForm');
    const createForm = document.getElementById('f1CreateForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            // Handle login logic here
            console.log('Login:', { email, password, remember });
            // For demo, just show a message
            document.querySelector('.f1-login-msg').textContent = 'Iniciando sesión...';
        });
    }

    if (createForm) {
        createForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('emailCreate').value;
            const password = document.getElementById('passwordCreate').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const terms = document.getElementById('terms').checked;

            if (password !== confirmPassword) {
                document.querySelector('.f1-create-msg').textContent = 'Las contraseñas no coinciden';
                return;
            }
            if (!terms) {
                document.querySelector('.f1-create-msg').textContent = 'Debes aceptar los términos';
                return;
            }
            // Handle create account logic here
            console.log('Create Account:', { name, email, password, terms });
            // For demo, just show a message
            document.querySelector('.f1-create-msg').textContent = 'Cuenta creada exitosamente!';
        });
    }

    // Switch between login and create account
    const loginLink = document.querySelector('.f1-create-help a');
    const createLink = document.querySelector('.f1-login-help a');

    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            createAccountModal.classList.remove('active');
            loginModal.classList.add('active');
        });
    }

    if (createLink) {
        createLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.remove('active');
            createAccountModal.classList.add('active');
        });
    }
});
// Selecciona el link "Crear cuenta" en el login
const createLink = document.querySelector('.f1-login-help a');

// Selecciona ambos modales
const createAccountModal = document.getElementById('create-account-modal');
const loginModal = document.getElementById('login-modal');

if (createLink) {
    createLink.addEventListener('click', (e) => {
        e.preventDefault();
            loginModal.classList.remove('active');
            loginModal.style.display = 'none';
            createAccountModal.style.display = 'flex';
            // Le da tiempo al CSS para animar la clase .active si tienes animaciones
            setTimeout(()=>createAccountModal.classList.add('active'),10);
    });
}
