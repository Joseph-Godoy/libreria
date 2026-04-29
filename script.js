let libreria = [];

const miDialog = document.querySelector('#miDialog');
const guardar = document.querySelector('#guardar');
const lib = document.querySelector('.todos_libros');

function crearLibro(tituloLibro, idLibro, autorLibro, leidoLibro, paginasLibro) {
    const seccion = document.querySelector('.todos_libros')

    const articulo = document.createElement('article');
    const imagen = document.createElement('img')
    const titulo = document.createElement('h3')
    const id = document.createElement('p')
    const autor = document.createElement('h4')
    const paginas = document.createElement('p')
    const contenedero = document.createElement('div')
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    const boton = document.createElement('button')

    articulo.classList.add('libro');
    imagen.setAttribute('alt', tituloLibro);
    titulo.textContent = tituloLibro;
    id.textContent = idLibro;
    autor.textContent = autorLibro;
    paginas.textContent = `${paginasLibro} paginas`;
    label.textContent = 'Leido';
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', idLibro);
    checkbox.setAttribute('class', 'checkboxLibro');
    checkbox.checked = leidoLibro;
    contenedero.classList.add('grupo_boton');
    boton.textContent = 'Borrar';
    boton.classList.add('eliminar');
    boton.classList.add(idLibro);

    contenedero.appendChild(label)
    contenedero.appendChild(checkbox)

    articulo.appendChild(imagen)
    articulo.appendChild(titulo)
    articulo.appendChild(id)
    articulo.appendChild(autor)
    articulo.appendChild(paginas)
    articulo.appendChild(contenedero)
    articulo.appendChild(boton)

    seccion.appendChild(articulo)

    checkbox.addEventListener('change', () =>{
    const libro = libreria.find(libro => libro.id === idLibro)
    libro.leido = checkbox.checked
});

boton.addEventListener('click', () =>{
    const index = libreria.findIndex(index => index.id === idLibro)
    libreria.splice(index, 1);
    render();
});
}

function objetoLibros(titulo, id, autor, leido, paginas) {
    this.titulo = titulo
    this.id = id
    this.autor = autor
    this.paginas = paginas
    this.leido = leido
}

guardar.addEventListener('click', () => {
    const datos = new FormData(document.querySelector('#formulario-principal'));

    const objeto = new objetoLibros(datos.get('nombre'), crypto.randomUUID(), datos.get('autor'), datos.get('paginas'));
    libreria.push(objeto);

    render();

    document.querySelector('#formulario-principal').reset()
    miDialog.close()
});

function render() {
    lib.innerHTML = ''
    for (let i = 0; i < libreria.length; i++) {
        crearLibro(libreria[i].titulo, libreria[i].id, libreria[i].autor, libreria[i].leido, libreria[i].paginas)
    }
}





const objeto1 = new objetoLibros('Harry Potter', crypto.randomUUID(), 'J.K Rolling', true, '456 paginas')
const objeto2 = new objetoLibros('El Arte de la Guerra', crypto.randomUUID(), 'Tsun zu', true,'226 paginas')

libreria.push(objeto1)
libreria.push(objeto2);
render();