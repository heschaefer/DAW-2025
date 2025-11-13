import { MovieContent } from "./cases/movies/components/movie-content"
import  Footer  from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { Navbar } from "./components/layout/navbar"
import { Highlight } from "./components/layout/highlight"

function App() {

  return (
    <div>
      <Header />
      <main>
        <Highlight />
        <Navbar />
        <MovieContent />
      </main>
      <Footer />
    </div>
  )
}

export default App
