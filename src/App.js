import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [hotels, setHotels] = useState(data);

  const remoweHotel = (id) => {
    let newHotels = hotels.filter(hotel => hotel.id !== id);
    setHotels(newHotels);
  }

  return (
    <div>
      <div className='container'>
        <h1>NYC top {hotels.length} hotels</h1>
      </div>

      {hotels.map(element => {
        const{id, hotelName, description, image, source} = element;

        return(
          <div key={id}>
            <div className='container'>
              <h2>{id} - {hotelName}</h2>
            </div>

            <div className='container'>
              <p>{description}</p>
            </div>

            <div className='container'>
              <img src={image} width='400px' alt='Hotel' />
            </div>

            <div className='container'>
              <p>Source: {source}</p>
            </div>

            <div className='container'>
              <button onClick={()=> remoweHotel(id)}>Remove</button>
            </div>
          </div>
        )
      })}

      <div className='container'>
        <button onClick={() => setHotels([])}>Delete all</button>
      </div>
    </div>
  );
}

export default App;
