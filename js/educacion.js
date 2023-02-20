const educacion = [
    {

        "titulo": "La mejor educacion online a tu alcance",
        "image": "https://res.cloudinary.com/hdsqazxtw/image/upload/f_webp,q_auto/v1642798986/WWW/imgs/home/chat.png",
        "descripcion": "Inscribite a clases practicas con mentoras personalizadas dictadas por quienes mas saben, y preparate para dar el siguiente paso en tu carrera profesional",

        "tutores": "Tutores",
        "texto": "En cada curso te van a acompañar tutores que van a resolver tus dudas y a darte feedback sobre tus proyectos siempre que lo necesites.",

        "video": "https://www.coderhouse.com/anims/mod2anim1-low.mp4",
        "profesores": "Profesores expertos",
        "aprende": "Aprendé interactuando con líderes de gran trayectoria en las empresas de tecnología más innovadoras a nivel global.",

    }
]


const educaciones = document.getElementById("educacion");
const video = document.querySelector(".video");

educacion.map(educacion => {
    const educacionCont = `
  <div class="card1">
  <div class="educacion-card" 
  <h4>${educacion.titulo}</h4> 
  <p>${educacion.descripcion}</p>
  <img src="${educacion.image}" alt="${educacion.titulo}">
  </div>

 <div class="tutores"> 
 <h4>${educacion.tutores} </h4>
 <p>${educacion.texto} </p>
 </div>

  </div>
  <div class="card-video"> 
   <div><video src="${educacion.video} " autoplay="true" muted="true" loop="true"
   </video> </div>
  <h4>${educacion.profesores}</h4> 
   <p>${educacion.aprende} </p> 
   </div>`;
    educaciones.innerHTML += educacionCont;
});

