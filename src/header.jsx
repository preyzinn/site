
import './styles/header.css'

function Header(){
    return(
        <header className="site-header">
            <h1 className="site-h1">H A B I T</h1>
            <nav className="site-buttons">
                <a href="/">Início</a>
                <a href="/paginas">Páginas</a>
                <a href="/destaques">Destaques</a>
                <a href="/assinar">Assinar</a>
                <a href="/admin">Admin</a>
                
                <input type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
                <a href="/admin">Buscar</a>
                <a href="/login">Entrar</a>
            </nav>
        </header>

    );
    
}
export default Header 
