const tocaSom = (idElementAudio) => {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let index = 0;
while(index < listaDeTeclas.length) {

    const teclas = listaDeTeclas[index];

    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = function () {
        tocaSom(idAudio);
    }

    teclas.onkeydown = (e) => {

        if (e.code === 'Enter' || e.code === 'Space') {
            teclas.classList.add('ativa')
        }

    }
    teclas.onkeyup = () => {
        teclas.classList.remove('ativa')
    }

    index = index + 1;
}
