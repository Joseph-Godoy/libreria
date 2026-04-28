let libreria = [];

const miDialog = document.querySelector('#miDialog');
const guardar = document.querySelector('#guardar');
const lib = document.querySelector('.todos_libros');

function crearLibro(tituloLibro, autorLibro, paginasLibro) {
    const seccion = document.querySelector('.todos_libros')

    const articulo = document.createElement('article');
    const imagen = document.createElement('img')
    const titulo = document.createElement('h3')
    const autor = document.createElement('h4')
    const paginas = document.createElement('p')
    const contenedero = document.createElement('div')
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    const boton = document.createElement('button')

    articulo.classList.add('libro')
    imagen.setAttribute('alt', tituloLibro)
    titulo.textContent = tituloLibro
    autor.textContent = autorLibro
    paginas.textContent = `${paginasLibro} paginas`
    label.textContent = 'Leido'
    checkbox.setAttribute('type', 'checkbox')
    contenedero.classList.add('grupo_boton')
    boton.textContent = 'Borrar'
    boton.classList.add('eliminar')

    contenedero.appendChild(label)
    contenedero.appendChild(checkbox)

    articulo.appendChild(imagen)
    articulo.appendChild(titulo)
    articulo.appendChild(autor)
    articulo.appendChild(paginas)
    articulo.appendChild(contenedero)
    articulo.appendChild(boton)

    seccion.appendChild(articulo)
}

function objetoLibros(titulo, autor, paginas, leido) {
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas
    this.leido = leido
}

guardar.addEventListener('click', () => {
    const datos = new FormData(document.querySelector('#formulario-principal'));

    const objeto = new objetoLibros(datos.get('nombre'), datos.get('autor'), datos.get('paginas'))
    libreria.push(objeto)

    render();

    document.querySelector('#formulario-principal').reset()
    miDialog.close()
});

function render() {
    lib.innerHTML = ''
    for (let i = 0; i < libreria.length; i++) {
        crearLibro(libreria[i].titulo, libreria[i].autor, libreria[i].paginas)
    }
}



const objeto1 = new objetoLibros('Harry Potter', 'J.K Rolling', '456 paginas')
const objeto2 = new objetoLibros('El Arte de la Guerra', 'Tsun zu', '226 paginas')

libreria.push(objeto1)
libreria.push(objeto2);
render();