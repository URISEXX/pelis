// Base de datos simulada en formato JSON (arreglo de objetos)
const baseDatosPeliculas = [
    // 2 a 12 años
    { titulo: "Toy Story", categoria: "2-12", genero: "Animación / Aventura", descripcion: "Los juguetes cobran vida cuando los humanos no están mirando." },
    { titulo: "Intensa-Mente", categoria: "2-12", genero: "Animación / Familiar", descripcion: "Un viaje alucinante dentro de la mente y las emociones de una niña." },
    { titulo: "Mi Villano Favorito", categoria: "2-12", genero: "Comedia / Animación", descripcion: "Un villano adopta a tres niñas y su vida cambia por completo." },
    { titulo: "Charlie y la fábrica de chocolate", categoria: "2-12", genero: "Fantasia / Aventura", descripcion: " un niño muy pobre y de buen corazón que gana un pase exclusivo para recorrer la misteriosa y colosal fábrica de chocolates de Willy Wonka." },
 

    // 13 a 17 años
    { titulo: "Spider-Man: Un nuevo universo", categoria: "13-17", genero: "Acción / Animación", descripcion: "Miles Morales se convierte en el nuevo Spider-Man de su dimensión." },
    { titulo: "Volver al Futuro", categoria: "13-17", genero: "Ciencia Ficción / Aventura", descripcion: "Un joven viaja accidentalmente al pasado en un DeLorean modificado." },
    { titulo: "Harry Potter y la piedra filosofal", categoria: "13-17", genero: "Fantasía", descripcion: "Un niño descubre que es un mago y asiste a una escuela de magia." },

    // 18 o más
    { titulo: "El Padrino", categoria: "18+", genero: "Crimen / Drama", descripcion: "La historia de la poderosa familia criminal italiana Corleone." },
    { titulo: "Interestelar", categoria: "18+", genero: "Ciencia Ficción", descripcion: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar." },
    { titulo: "Guasón", categoria: "18+", genero: "Drama / Suspenso", descripcion: "Un comediante fracasado desciende lentamente hacia la locura y el caos en Ciudad Gótica." }
];

const btnRecomendar = document.getElementById('btnRecomendar');
const edadSelect = document.getElementById('edadSelect');
const resultadosDiv = document.getElementById('resultados');

function mostrarRecomendaciones() {
    const edadSeleccionada = edadSelect.value;
    
    // Filtrar películas según la categoría seleccionada
    const peliculasFiltradas = baseDatosPeliculas.filter(pelicula => pelicula.categoria === edadSeleccionada);

    // Limpiar resultados anteriores
    resultadosDiv.innerHTML = '';

    // Renderizar tarjetas dinámicamente
    peliculasFiltradas.forEach(pelicula => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        card.innerHTML = `
            <div>
                <h3>${pelicula.titulo}</h3>
                <p>${pelicula.descripcion}</p>
            </div>
            <span class="genre-badge">${pelicula.genero}</span>
        `;

        resultadosDiv.appendChild(card);
    });
}

// Ejecutar al cargar la página por primera vez
window.addEventListener('DOMContentLoaded', mostrarRecomendaciones);

// Ejecutar al hacer clic en el botón
btnRecomendar.addEventListener('click', mostrarRecomendaciones);