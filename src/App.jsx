import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ExploreHome from "./components/ExploreHome"
import SingleProduct from "./components/SingleProduct"
import OfertasMarket from "./components/OfertasMarket"
import ProductsSearch from "./components/ProductsSearch"
import MarketCategories from "./components/MarketCategories"
import NavbarExplore from './components/NavbarExplore'
import Footer from "./components/Footer"
import { usePosts } from './context/PostsContext'
import Historial from './components/Historial'
import Supermarket from './components/Supermarket'
import NotFound from "./components/NotFound"


function App() {
 const { darkTheme, setDarkTheme } = usePosts()

  return (
    <div className={darkTheme ? "dark w-full min-h-screen bg-black text-white" : "w-full min-h-screen bg-white text-black"}>
      <Router>
        <NavbarExplore />
        <Routes>
          <Route path='/' element={<ExploreHome />} />
          <Route path={`/market/:id`} element={<SingleProduct />} />
          <Route path='/market/ofertas' element={<OfertasMarket />} />
          <Route path='/market/productos/:name' element={<ProductsSearch />} />
          <Route path='/market/categoria/:categorie' element={<MarketCategories />} />
          <Route path='/market/historial' element={<Historial />} />
          <Route path='/market/supermercado' element={<Supermarket />} />
          <Route path='/market/moda' element={<NotFound />} />
          <Route path='/market/vender' element={<NotFound />} />
          <Route path='/market/ayuda' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
