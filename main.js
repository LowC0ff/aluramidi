const somPom = () => {
    document.querySelector('#som_tecla_pom').play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');
const ListaDeSom = document.querySelectorAll('.som');

let index = 0
while(index < ListaDeTeclas.lenght) {
    ListaDeTeclas[index].onclick = ListaDeSom[index]
    index++
}