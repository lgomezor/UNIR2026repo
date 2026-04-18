export default function MovieCard({movie}) {
    //Desestructuracion
    const { title, genre, rating, year, description, image, color } = movie;

    return (
        <article className="movie-card">
            <div className="MovieCard__image" style={{backgroundColor: color}}>
                <span class="MovieCard__emoji">{image}</span>
                <span class="MovieCard__year">{year}</span>
            </div>
            <div className="MovieCard__info">
                <div className="MovieCard__info__title">

                </div>
            </div>
        </article>
    )
}