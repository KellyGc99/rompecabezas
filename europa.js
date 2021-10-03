const imagenes3 = [
    'imagen-0', 'imagen-1', 'imagen-2', 'imagen-3', 'imagen-4', 'imagen-5',
    'imagen-6', 'imagen-7', 'imagen-8', 'imagen-9', 'imagen-10', 'imagen-11',
    'imagen-12', 'imagen-13', 'imagen-14', 'imagen-15', 'imagen-16', 'imagen-17',
    'imagen-18', 'imagen-19', 'imagen-20', 'imagen-21', 'imagen-22', 'imagen-23'
];

const puzzle3 = document.getElementById('puzzle');
const piezas3 = document.getElementById('piezas');
const mensaje3 = document.getElementById('mensaje');

let terminado3 = imagenes.length;

while (imagenes.length) {
    const index3 = Math.floor(Math.random() * imagenes.length);
    const div3 = document.createElement('div');
    div3.className = 'pieza';
    div3.id = imagenes[index3];
    div3.draggable = true;
    div3.style.backgroundImage = `url("recursos/${imagenes[index3]}.png")`;
    piezas3.appendChild(div3);
    imagenes.splice(index3, 1);
}

for (let i = 0; i < terminado; i++) {
    const div3 = document.createElement('div');
    div3.className = 'placeholder';
    div3.dataset.id = i;
    puzzle3.appendChild(div);
}


piezas3.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', e.target.id);
});

puzzle3.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.classList.add('hover');
});

puzzle3.addEventListener('dragleave', e => {
    e.target.classList.remove('hover');
});

puzzle3.addEventListener('drop', e => {
    e.target.classList.remove('hover');

    const id3 = e.dataTransfer.getData('id');
    const numero3 = id3.split('-')[1];

    if (e.target.dataset.id === numero3) {
        e.target.appendChild(document.getElementById(id));

        terminado--;

        if (terminado === 0) {
            document.body.classList.add('ganaste');
        }
    }
});
