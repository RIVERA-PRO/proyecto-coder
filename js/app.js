

//VARIABLES PARA EL CARRITO
const btnComprarTodo = document.querySelector('#comprar-todo');
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



    //Muestra los cursos del carrito 
    document.addEventListener("DOMContentLoaded", () => {
        articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || []
        carritoHTML()
    })

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






    //Agrega el carrito al storage
    sincronizarCarrito()
}

function sincronizarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito))

}


//ELIMINA LOS CURSOS DEL TBODY
function limpiarHTML() {


    while (conetenedorCarrito.firstChild) {
        conetenedorCarrito.removeChild(conetenedorCarrito.firstChild)
    }
}


function comprarTodo() {
    // Muestra el mensaje de agradecimiento
    Swal.fire({
        title: `Muchas Gracias Por su compra`,
        icon: 'success',
        footer: 'CODERHOUSE'
    })

    // Elimina los elementos del carrito
    articulosCarrito = [];
    limpiarHTML();
}

btnComprarTodo.addEventListener('click', comprarTodo);

// Agrega elementos al arreglo de carrito
articulosCarrito = [...articulosCarrito, infoCurso];

// Habilita el botón de compra
comprarBtn.disabled = false;

carritoHTML();

