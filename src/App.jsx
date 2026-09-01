import Header from './header.jsx'
import './styles/style.css'
import Home from './home/home.jsx'
import Categorias from './home/categorias.jsx';
import Postagens_destaque from './home/postagens_destaque.jsx';
import Extras from './home/extras.jsx';
import Footer from './footer.jsx';  


function App() {
  return (
    <>
    <Header></Header>
    <Home></Home>
    <Categorias></Categorias>
    <Postagens_destaque></Postagens_destaque>
    <Extras></Extras>
    <Footer></Footer>
    </>
  );
  
}

export default App
