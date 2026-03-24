function switchTab(type) {
    const buttons = document.querySelectorAll('.tab-btn');
    const loginForm = document.getElementById('login-form');
    const registroForm = document.getElementById('registro-form');
    const separator = document.getElementById('separator');
    const socialLogin = document.getElementById('social-login');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (type === 'login') {
        loginForm.classList.add('active');
        registroForm.classList.remove('active');
        separator.style.display = 'block';
        socialLogin.style.display = 'flex';
    } else if (type === 'registro') {
        loginForm.classList.remove('active');
        registroForm.classList.add('active');
        separator.style.display = 'none';
        socialLogin.style.display = 'none';
    }
}
