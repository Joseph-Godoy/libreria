let libreria = [];

const miDialog = document.querySelector('#miDialog');
const guardar = document.querySelector('#formulario-principal');
const lib = document.querySelector('.todos_libros');

function crearLibro(tituloLibro, idLibro, autorLibro, leidoLibro, paginasLibro) {
    const seccion = document.querySelector('.todos_libros')

    const articulo = document.createElement('article');
    const titulo = document.createElement('h3')
    const id = document.createElement('p')
    const autor = document.createElement('h4')
    const paginas = document.createElement('p')
    const checkbox = document.createElement('input')
    const boton = document.createElement('button')

    articulo.classList.add('libro');
    titulo.textContent = tituloLibro;
    id.textContent = idLibro;
    autor.textContent = autorLibro;
    paginas.textContent = `${paginasLibro} paginas`;
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', idLibro);
    checkbox.setAttribute('class', 'checkboxLibro');
    checkbox.checked = leidoLibro;
    boton.textContent = 'Borrar';
    boton.classList.add('eliminar');
    boton.classList.add(idLibro);

    articulo.appendChild(titulo)
    articulo.appendChild(autor)
    articulo.appendChild(paginas)
    articulo.appendChild(checkbox)
    articulo.appendChild(boton)

    seccion.appendChild(articulo)

    checkbox.addEventListener('change', () => {
        const libro = libreria.find(libro => libro.id === idLibro)
        libro.leido = checkbox.checked
    });

    boton.addEventListener('click', () => {
        articulo.classList.add('eliminando');
        articulo.addEventListener('animationend', () => {
            const index = libreria.findIndex(index => index.id === idLibro);
            libreria.splice(index, 1);
            render();
        }, { once: true });
    });
}

function objetoLibros(titulo, id, autor, leido, paginas) {
    this.titulo = titulo
    this.id = id
    this.autor = autor
    this.paginas = paginas
    this.leido = leido
}

guardar.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = new FormData(document.querySelector('#formulario-principal'));

    const objeto = new objetoLibros(datos.get('nombre'), crypto.randomUUID(), datos.get('autor'), datos.get('leido'), datos.get('paginas'));

    libreria.push(objeto);

    render();

    document.querySelector('#formulario-principal').reset()
    miDialog.close()
});

function render() {
    if (libreria.length === 0) {
        lib.innerHTML = ''
        const seccion = document.querySelector('.todos_libros')
        const titulo = document.createElement('h3');
        titulo.textContent = "No hay nada por aqui..."
        titulo.classList.add("textoVacio")
        seccion.appendChild(titulo)
    } else {
        lib.innerHTML = ''
        for (let i = 0; i < libreria.length; i++) {
            crearLibro(libreria[i].titulo, libreria[i].id, libreria[i].autor, libreria[i].leido, libreria[i].paginas)
        }
    }
}



const objeto1 = new objetoLibros('Harry Potter: Y la piedra filosofal', crypto.randomUUID(), 'J.K Rolling', true, '456')
const objeto5 = new objetoLibros('Harry Potter: Y la camara de los secretos', crypto.randomUUID(), 'J.K Rolling', true, '456')
const objeto6 = new objetoLibros('Harry Potter: Y el prisionero de azkaban', crypto.randomUUID(), 'J.K Rolling', true, '456')
const objeto7 = new objetoLibros('Harry Potter: Y el caliz de fuego', crypto.randomUUID(), 'J.K Rolling', true, '456')
const objeto8 = new objetoLibros('Harry Potter: Y la orden del fenix', crypto.randomUUID(), 'J.K Rolling', false, '426')
const objeto3 = new objetoLibros('Habitos Atomicos', crypto.randomUUID(), 'James Clare', true, '456')


libreria.push(objeto1);
libreria.push(objeto3);
libreria.push(objeto5);
libreria.push(objeto6);
libreria.push(objeto7);
libreria.push(objeto8);


render();