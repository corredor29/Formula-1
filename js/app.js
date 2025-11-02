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
});
