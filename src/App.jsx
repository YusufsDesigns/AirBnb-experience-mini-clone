import './style.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import dataSet from './data'

function App() {
  const cards = dataSet.map(data => {
    return(
      <Card  
        key={data.id}
        {...data}
    />
    ) 
  })

  return(
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>
    </div>
  )
}

export default App
