import Navigation from "./navigation"


export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor contenido">
        <Navigation />

        <p className="copyright">© All rights are reserved { new Date().getFullYear() }</p>
            
      </div>
    </footer>
  )
}
