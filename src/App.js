import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [hotels, setHotels] = useState(data);
  const [showText, setShowText] = useState(false);

  const remoweHotel = (id) => {
    let newHotels = hotels.filter(hotel => hotel.id !== id)
    setHotels(newHotels)
  }

  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }

  return (
    <div>
      <div className='container'>
        <h1>NYC top {hotels.length} hotels</h1>
      </div>

      {hotels.map(item => {
        const{id, hotelName, description, image, source, showMore} = item;

        return(
          <div key={id}>
            <div className='container'>
              <h2>{id} - {hotelName}</h2>
            </div>

            <div className='container'>
              <p>{showMore ? description : description.substring(0, 220) + '...' }
              <button onClick={() => showTextClick(item)}>{showMore ? 'show less' : 'show more'}</button></p>
            </div>

            <div className='container'>
              <img src={image} width='400px' alt='Hotel' />
            </div>

            <div className='container'>
              <p>Source: {source}</p>
            </div>

            <div className='container'>
              <button className='btn' onClick={()=> remoweHotel(id)}>Remove</button>
            </div>
          </div>
        )
      })}

      <div className='container'>
        <button className='btn' onClick={() => setHotels([])}>Delete all</button>
      </div>
    </div>
  );
}

export default App;
