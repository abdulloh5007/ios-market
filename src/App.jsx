import './App.scss'
import Best from './components/Best/Best'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Inner from './components/Inner/Inner'
import Items from './components/Items/Items'
import Offers from './components/Offers/Offers'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="container">
        <Inner />
        <Offers />
        <Items />
        <Best />
      </div>
      <Footer />
    </div>
  )
}

export default App
