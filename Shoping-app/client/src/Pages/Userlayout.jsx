import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'

const Userlayout = ({ addToCart, cartCount }) => {
  return (
    <div>
        <Header/>
        <Navbar cartCount={cartCount}/>
        <Home addToCart={addToCart}/>
        <Footer/>
    </div>
  )
}

export default Userlayout