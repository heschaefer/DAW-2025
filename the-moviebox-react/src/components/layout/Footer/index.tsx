import { Facebook, Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>The MovieBox 2025 - Todos os direitos são reservados</p>
        <ul>
        <li>
          <a href="#">
            <Facebook/>  
          </a>
        </li>
        <li>
          <a href="#">
            <Instagram/>
          </a>
        </li>
        <li>
            <a href="#">
            <Youtube/>
            </a>
        </li>
      </ul>
    </div>    
  </footer>
)
}

export default Footer;