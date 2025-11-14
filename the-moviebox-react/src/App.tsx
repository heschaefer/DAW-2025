import { MovieContent } from "./cases/movies/components/movie-content"
import  Footer  from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { Navbar } from "./components/layout/navbar"
import { Highlight } from "./components/layout/highlight"
import { MovieContextProvider } from "./cases/movies/context/movie-context"

function App() {

  return (
    <div>
      <Header />
      <main>
        <MovieContextProvider>
        <Highlight />
        <Navbar />
        <MovieContent />
        </MovieContextProvider>
      </main>
      <Footer />
    </div>
  )
}

export default App
