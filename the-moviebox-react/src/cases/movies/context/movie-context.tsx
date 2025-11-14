import { createContext, useState } from "react";
import type { MovieDTO } from "../services/movie.service";

type MovieContextProps = {
    selectedMovie: MovieDTO | null;
    setSelectedMovie: (movie: MovieDTO | null) => void;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export function MovieContextProvider({ children }: { children: React.ReactNode }) {
    const [selectedMovie, setSelectedMovie] = useState<MovieDTO | null>(null);
    
    return(
        <MovieContext.Provider value= {{selectedMovie, setSelectedMovie}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext;