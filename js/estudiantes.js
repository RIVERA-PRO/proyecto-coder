
const estudiantes = [
    {
        "_id": 1,
        "image": "estudiante.svg",
        "nombre": "Camila Ruiz Celihueta",
        "dato": "Photoshop e Illustrator",
        "descripcion": "Las clases superaron mis expectativas ampliamente, la buena onda y las explicaciones fueron nada que ver a lo que yo pensaba...",
    },

    {
        "_id": 2,
        "image": "estudiante.svg",
        "nombre": "Marco Aguirre Mejia",
        "dato": "Diseño UX/UI",
        "descripcion": "El trabajo de varios meses en donde comencé desde 0, en donde tuve la oportunidad de crear esta solución pensada en las necesidades del usuario, con fundamento, mucha investigación, desafíos entregados...",
    },

    {
        "_id": 3,
        "image": "estudiante.svg",
        "nombre": "Nicolás García",
        "dato": "Product Manager",
        "descripcion": "Objetivo cumplido! Mi primera experiencia como alumno de Coder fue con este curso de Product Manager súper recomendable para aquellos que quieren dar sus primeros pasos en el área de Product. Vamos por más! ",
    },

    {
        "_id": 4,
        "image": "estudiante.svg",
        "nombre": "Adrian Calcagno",
        "dato": "After Effects",
        "descripcion": "¡Desafío superado! Contento de haber adquirido estos conocimientos del software After Effects en una institución como Coderhouse... ",
    },
    {
        "_id": 5,
        "image": "estudiante.svg",
        "nombre": "Pedro Gisbert Ares",
        "dato": "After Effects",
        "descripcion": "¡Desafío superado! Contento de haber adquirido estos conocimientos del software After Effects en una institución como Coderhouse... ",
    },
    {
        "_id": 6,
        "image": "estudiante.svg",
        "nombre": "Joel Pereira Cirqueira",
        "dato": "After Effects",
        "descripcion": "¡Desafío superado! Contento de haber adquirido estos conocimientos del software After Effects en una institución como Coderhouse... ",
    },
];

const estudiantesContainer = document.getElementById("estudiantesContainer");
estudiantes.map(estudiantes => {
    const estudiantesCard = `
   <div class="estudiantes-card" id="card_${estudiantes._id}">
   <p>${estudiantes.descripcion}</p>
    <div class="body"> 
    <div class="estudiantes-img"> <img src="./img/${estudiantes.image}" alt="${estudiantes.nombre}"> </div>
    <div class="estudiantes-body"> <h4>${estudiantes.nombre}</h4> <h5> ${estudiantes.dato}</h5> </div>
    </div>
   <div class="btn">
   <a href="#"> linkedin</a>
   </div>
   
</div>
   `;
    estudiantesContainer.innerHTML += estudiantesCard;
});