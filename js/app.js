// menu hamburguesa 
const header = document.querySelector("header");

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};



//VARIABLES PARA EL CARRITO
const carrito = document.querySelector("#carrito")
const conetenedorCarrito = document.querySelector("#lista-carrito tbody")
const vaciarCarrito = document.querySelector("#vaciar-carrito")
const listaCursos = document.querySelector("#lista-cursos")
let articulosCarrito = []

cargarEventListeners()
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar Carrito"
    listaCursos.addEventListener("click", agregarCurso)

    //Eliminar curso del carrito
    carrito.addEventListener("click", eliminarCurso)

    //Vaciar el carrito
    vaciarCarrito.addEventListener("click", (event) => {
        event.preventDefault();
        articulosCarrito = [] // reseteamos el arreglo

        limpiarHTML() // Eliminamos todo el HTML
    })
}


function agregarCurso(e) {
    e.preventDefault()
    if (e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }

}


//ELIMINA UN CURSO DEL CARRITO
function eliminarCurso(e) {
    e.preventDefault()
    if (e.target.classList.contains("borrar-curso")) {
        const cursoId = e.target.getAttribute("data-id")

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

        carritoHTML()
    }
}



//LE EL CONTENIDO DEL HTML AL QUE LE DAMOS CLICK Y EXTRAE LA INFORMACION DEL CURSO
function leerDatosCurso(curso) {
    console.log(curso)

    //se crea un objeto con el contenido del curso actual
    const infoCurso = {
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    //Revisa si unelemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if (existe) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {  //vamos a ir eiterando con el .map 
                curso.cantidad++;
                return curso // retorna el objeto actualizado
            } else {
                return curso // retorna los objetos que no son los duplicados
            }
        })
        articulosCarrito = [...cursos]

    } else {
        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }



    carritoHTML()
}

//MUESTRA EL CARRITO DE COMPRAS EN EL HTML
function carritoHTML() {
    //limpiar el carrito
    limpiarHTML()

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {

        const { imagen, titulo, precio, cantidad, id } = curso

        console.log(curso)
        const row = document.createElement("tr")
        row.innerHTML = `

        
        <td> ${titulo} </td>
        <td> ${precio} </td>
        <td> ${cantidad} </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
        </td>
        `

        //Agrega el HTML del carrito en el body
        conetenedorCarrito.appendChild(row)
    })
}

//ELIMINA LOS CURSOS DEL TBODY
function limpiarHTML() {


    while (conetenedorCarrito.firstChild) {
        conetenedorCarrito.removeChild(conetenedorCarrito.firstChild)
    }
}


