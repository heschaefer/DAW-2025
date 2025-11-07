import { use, useEffect, useState } from "react"
import { MovieService, type MovieDTO } from "../services/movie.service"
import { MovieCard } from "./movie-card";

export function MovieContent() {

    const [movies, setMovies] = useState<MovieDTO[]>([])
    const [isLoading, setisLoading] = useState<boolean>(false);

    useEffect(()=>{
        setisLoading(true);
        MovieService.list()
            .then((result) => {
                setMovies(result)
            })
            .finally(() => {
                setisLoading(false);
            });
            
    }, []);

    return (
        isLoading ? (
        <div className="bg-[#1c1c1c] flex justify-center items-center h-40"><p>Loading...</p></div>
        ) :
        <section
            className="bg-[#1c1c1c] py-12 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 max-w-6xl mx-auto"


        >

            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </section>
    )
}