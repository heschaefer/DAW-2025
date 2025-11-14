import { useEffect, useState } from "react";
import { useMovies } from "../../cases/movies/hooks/use-hook";
import { MovieGenres } from "../../cases/movies/components/movie-genre";

export function Highlight() {
 const { selectedMovie } = useMovies();

 const [isLoading, setisLoading] = useState<boolean>(false);

 useEffect(() => {
    setisLoading(!selectedMovie);
 }, [selectedMovie]);

    return (
        isLoading ? (
            <div className="flex justify-center items-center ">
                <p className="text-2xl text-center text-white">Loading...</p></div>
        ) : (
        <section
            className="relative flex bg-cover bg-top-left"
            style={{ backgroundImage: `url(${selectedMovie?.highlight})`, height: '500px' }}
        >
            <div
                className="absolute left-0 top-0 z-10 h-full w-full"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(17,17,17,1) calc((50vw - 170px) - 340px), rgba(17,17,17,0.7) 50%, rgba(17,17,17,0.7) 100%)',
                }}
            ></div>
            <div className="z-20 mx-auto flex max-w-6xl gap-8 px-8 py-8">
                <img
                    className="h-fit w-auto rounded-lg"
                    src={selectedMovie?.image}
                    alt="Capa filme"
                />
                <div className="flex flex-col text-white">
                    <h2 className="text-4xl font-normal">{selectedMovie?.title}</h2>
                    <MovieGenres movie={selectedMovie}>
                        <span className="pl-4 text-gray-300">
                            {selectedMovie?.duration.replace(':', 'h ') + 'm'}
                        </span>
                    </MovieGenres>
                    

                    <div className="flex flex-col gap-2">
                        <h4 className="pb-2 pt-12 text-2xl font-normal">Sinopse</h4>
                        <p className="text-sm text-[#a0a0a0]">
                            {selectedMovie?.sinopse}
                        </p>
                      s
                    </div>

                    <div className="my-6 flex gap-4">
                        <button className="rounded border-none bg-[#e50914] px-6 py-3 font-bold text-white transition-colors duration-300 ease-in-out hover:bg-[#b8070f]">
                            Assistir
                        </button>
                        <button className="cursor-pointer rounded border border-solid border-white/30 bg-white/20 px-6 py-3 text-white transition-colors duration-300 ease-in-out hover:bg-white/30">
                            Detalhes
                        </button>
                        <button className="cursor-pointer rounded border border-solid border-white/30 bg-white/20 px-6 py-3 text-white transition-colors duration-300 ease-in-out hover:bg-white/30">
                            + Adicionar à Lista
                        </button>
                    </div>
                </div>
            </div>
        </section>
        )
    );
}
