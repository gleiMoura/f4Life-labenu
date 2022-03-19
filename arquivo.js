

function selecionarCidade(cidade){
    let cidade_rj = document.querySelector('.cidade-rj');
    let cidade_sp = document.querySelector('.cidade-sp');
    let resposta_rj = document.querySelector('.resposta-rj');
    let resposta_sp = document.querySelector('.resposta-sp');

    if(cidade === 'riodejaneiro'){
        cidade_rj.classList.add('escondido');
        resposta_rj.classList.remove('escondido')
    }
    if(cidade === 'saopaulo'){
        cidade_sp.classList.add('escondido');
        resposta_sp.classList.remove('escondido')
    }
}

function mostrarBarra(){
    let menu_lateral = document.querySelector('.menu-lateral');

    menu_lateral.classList.toggle('escondido')
}

function enviarFormulario(){
    let email = document.querySelector('.email');
    let mensagem = document.querySelector('.mensagem');
    let conteudo_email = email.value;
    let conteudo_texto = mensagem.value;
    let usuario = conteudo_email.substring(0, conteudo_email.indexOf("@"));
    let dominio = conteudo_email.substring(conteudo_email.indexOf("@") + 1, conteudo_email.indexOf('.'));
    let dominio_completo = conteudo_email.substring(conteudo_email.indexOf("@") + 1, conteudo_email.length);
    console.log(conteudo_email, usuario, dominio)
    
    let texto_booleano = (
        conteudo_texto === ''
    )

    let email_booleano = (
        (conteudo_email.search('@') === -1) || 
        (usuario.length < 1) || 
        (usuario.length >32) ||
        (dominio.length < 1) ||
        (dominio.length > 16) ||
        (conteudo_email.search(' ')) !== -1 ||
        (dominio_completo.search(".com") === -1)
    )

    if(texto_booleano) {
        alert('Erro no envio: Insira uma mensagem')
    }
    if(email_booleano){
        alert('Erro no envio: Endereço de mail inválido')
    }

    if((texto_booleano === false) && (email_booleano === false)){
        alert(`Obrigado pelo contato, ${usuario}!`)
    }
    
    const form = document.querySelector('form')
        form.addEventListener('submit', e => {
        e.preventDefault()
        })
}

