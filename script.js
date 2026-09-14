/* DREAM CONSULTORIA - FUNCIONALIDADES */
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
});
document.querySelectorAll('.faq-pergunta').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const resposta = item.querySelector('.faq-resposta');
        document.querySelectorAll('.faq-item.active').forEach(other => {
            if (other !== item) { other.classList.remove('active'); other.querySelector('.faq-resposta').style.maxHeight = null; }
        });
        item.classList.toggle('active');
        resposta.style.maxHeight = item.classList.contains('active') ? resposta.scrollHeight + 'px' : null;
    });
});
const formContato = document.getElementById('formContato');
if (formContato) {
    formContato.addEventListener('submit', function (e) {
        e.preventDefault();
        const sucesso = document.getElementById('contatoSucesso');
        sucesso.hidden = false;
        this.reset();
        setTimeout(() => { sucesso.hidden = true; }, 6000);
    });
}