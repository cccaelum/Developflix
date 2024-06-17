import peliculas from './peliculas.js'

console.log(peliculas)

function mostrarPeliculas() {
    const Accion = peliculas.filter((pelicula) => pelicula.genre_ids.includes(28));
    const Thriller = peliculas.filter((pelicula) => pelicula.genre_ids.includes(53));
    const Aventura = peliculas.filter((pelicula) => pelicula.genre_ids.includes(12));

    function agregarPeliculas(peliculas, divId) {
        const contenedor = document.getElementById(divId);
        
        peliculas.forEach((pelicula) => {
            const elementoPelicula = document.createElement('div');
            elementoPelicula.classList.add('pelicula');
            
            const imagen = document.createElement('img');
            imagen.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
            
            const titulo = document.createElement('h3');
            titulo.textContent = pelicula.title;
            
            elementoPelicula.appendChild(imagen);
            elementoPelicula.appendChild(titulo);
            
            contenedor.appendChild(elementoPelicula);
        });
    }
    agregarPeliculas(Accion, 'genero-28');
    agregarPeliculas(Thriller, 'genero-53');
    agregarPeliculas(Aventura, 'genero-12');
}

mostrarPeliculas();