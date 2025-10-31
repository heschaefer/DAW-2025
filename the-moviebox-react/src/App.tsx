import { MovieContent } from "./cases/movies/components/movie-content"
import  Footer  from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { Navbar } from "./components/layout/navbar"

function App() {

  return (
    <div>
      <Header />
      <main>
        <Navbar />
        <MovieContent />
      </main>
      <Footer />
    </div>
  )
}

export default App
