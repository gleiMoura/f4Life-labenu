
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