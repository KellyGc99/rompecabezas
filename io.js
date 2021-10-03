const imagenes2 = [
    'imagen-0', 'imagen-1', 'imagen-2', 'imagen-3', 'imagen-4', 'imagen-5',
    'imagen-6', 'imagen-7', 'imagen-8', 'imagen-9', 'imagen-10', 'imagen-11',
    'imagen-12', 'imagen-13', 'imagen-14', 'imagen-15', 'imagen-16', 'imagen-17',
    'imagen-18', 'imagen-19', 'imagen-20', 'imagen-21', 'imagen-22', 'imagen-23' 
];

const puzzle2 = document.getElementById('puzzle2');
const piezas2 = document.getElementById('piezas2');
const mensaje2 = document.getElementById('mensaje2');

let terminado = imagenes.length;

while (imagenes.length) {
    const index2 = Math.floor(Math.random() * imagenes.length);
    const div2 = document.createElement('div');
    div2.className = 'pieza';
    div2.id = imagenes[index2];
    div2.draggable = true;
    div2.style.backgroundImage = `url("recursos/${imagenes[index]}.png")`;
    piezas.appendChild(div2);
    imagenes.splice(index2, 1);
}

for (let i = 0; i < terminado; i++) {
    const div2 = document.createElement('div');
    div2.className = 'placeholder';
    div2.dataset.id = i;
    puzzle2.appendChild(div2);
}


piezas2.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', e.target.id);
});

puzzle2.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.classList.add('hover');
});

puzzle2.addEventListener('dragleave', e => {
    e.target.classList.remove('hover');
});

puzzle2.addEventListener('drop', e => {
    e.target.classList.remove('hover');

    const id2 = e.dataTransfer.getData('id');
    const numero2 = id2.split('-')[1];

    if (e.target.dataset.id === numero2) {
        e.target.appendChild(document.getElementById(id));

        terminado--;

        if (terminado === 0) {
            document.body.classList.add('ganaste');
        }
    }
});
