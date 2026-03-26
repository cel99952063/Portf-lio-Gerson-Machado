document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interatividade dos Cards
    window.mostrarDetalhes = (tipo) => {
        const info = {
            rtd: "Integração B3 via RTD com Python para dados em tempo real.",
            clipping: "Automação High-Speed com Playwright para monitoramento de mídia.",
            web: " Programar não é sobre o que você sabe, é sobre o que você pode descobrir. -Chris Pine. "
        };
        alert(info[tipo]);
    };

    // 2. Validação Real-Time com RegEx
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const form = document.getElementById('formContato');

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ]{3,}(\s[A-Za-zÀ-ÖØ-öø-ÿ]{2,})+$/;

    const validar = (el, reg) => {
        if (reg.test(el.value.trim())) {
            el.style.borderColor = "#00d1b2";
            return true;
        } else {
            el.style.borderColor = "#ff3860";
            return false;
        }
    };

    inputNome.addEventListener('input', () => validar(inputNome, regexNome));
    inputEmail.addEventListener('input', () => validar(inputEmail, regexEmail));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validar(inputNome, regexNome) && validar(inputEmail, regexEmail)) {
            alert("Sucesso! Mensagem enviada (Simulação).");
            form.reset();
            inputNome.style.borderColor = "#333";
            inputEmail.style.borderColor = "#333";
        } else {
            alert("Erro: Verifique os campos em vermelho.");
        }
    });
});