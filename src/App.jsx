

import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useEffect, useState } from 'react';
import PastryCard from './Components/PastryCard';
import NavBar from './Components/NavBar';
import Header from './Header';

import { GiCoffeeCup } from 'react-icons/gi';
import { GiCakeSlice } from 'react-icons/gi';



function App() {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees)




  const [pastries, setPastries] = useState([]);

  useEffect(() => {
    // Fetch pastries data from your API
    fetch('http://localhost:5000/pastry')
      .then(res => res.json())
      .then(data => setPastries(data))
      .catch(error => console.error('Error fetching pastries:', error));
  }, []);



  return (


    <div>
      <div>
        <Header></Header>
        <NavBar></NavBar>
      </div>
      <div className='mr-20'>

        <h1 className=' mt-20 font-bold text-2xl'>Coffee Delights Await </h1>


        <button className='mb-20 btn mt-4 bg-amber-700 text-white'>Add a coffee <GiCoffeeCup></GiCoffeeCup></button>

        <div className='grid md:grid-cols-2 gap-4'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>


        <h1 className='mt-20 font-bold text-2xl'>Our Delicious Pastries</h1>
        <button className='mb-20 btn mt-4 bg-amber-700 text-white'>Add a pastry <GiCakeSlice></GiCakeSlice></button>
        <div className='grid md:grid-cols-2 gap-4'>
          {pastries.map(pastry => (
            <PastryCard key={pastry._id} pastry={pastry}></PastryCard>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App
