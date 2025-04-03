import { feather } from 'feather-icons'; 
    feather.replace(); 

const buscador = document.getElementById('buscar-palabra')
const recetas = document.querySelectorAll('.receta')

buscador.addEventListener('input', (e) => {
    const palabraIntroducida = e.target.value.toLowerCase().trim();
    console.log("Buscando:", palabraIntroducida); 

    recetas.forEach(receta => {
        const nombreReceta = receta.dataset.receta;
        console.log("Receta encontrada:", nombreReceta); 
        if (nombreReceta && nombreReceta.toLowerCase().includes(palabraIntroducida)) {
            receta.style.display = 'flex'; 
        } else {
            receta.style.display = 'none'; 
        }
    })
})