
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './compo/CoffeeCard';

function App() {

  const allCoffee = useLoaderData();

  return (
    <div>
      <h1>Total coffee {allCoffee.length}</h1>
      <div className='grid md:grid-cols-2 gap-5'>
        {
          allCoffee.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
