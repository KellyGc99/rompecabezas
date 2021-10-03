const imagenes3 = [
    'europa-0', 'europa-1', 'europa-2', 'europa-3', 
    'europa-4', 'europa-5', 'europa-6', 'europa-7',
    'europa-8', 'europa-9', 'europa-10', 'europa-11'
];

const puzzle3 = document.getElementById('puzzle3');
const piezas3 = document.getElementById('piezas3');
const mensaje3 = document.getElementById('mensaje');

let terminado3 = imagenes3.length;

while (imagenes3.length) {
    const index3 = Math.floor(Math.random() * imagenes3.length);
    const div3 = document.createElement('div');
    div3.className = 'pieza';
    div3.id = imagenes3[index3];
    div3.draggable = true;
    div3.style.backgroundImage = `url("recursos/${imagenes3[index3]}.png")`;
    piezas3.appendChild(div3);
    imagenes3.splice(index3, 1);
}

for (let i = 0; i < terminado3; i++) {
    const div3 = document.createElement('div');
    div3.className = 'placeholder';
    div3.dataset.id = i;
    puzzle3.appendChild(div3);
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

        terminado3--;

        if (terminado3 === 0) {
            document.body.classList.add('ganaste');
        }
    }
});
