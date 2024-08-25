import './App.css'
import Classes from './components/Classes/Classes'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Review from './components/Review/Review'
import Trainer from './components/Trainer/Trainer'


export function App() {

  return (
    <body>

  
      {/* hero-home: */}
      <Home />

      {/* our classes-bmi calculator: */}
      <Classes />

      {/* trainers-purchase: */}
      <Trainer />

      <Review />

      <Contact />

      <Footer />
      
    </body>
  )
}