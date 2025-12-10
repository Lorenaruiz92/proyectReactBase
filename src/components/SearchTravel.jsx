import React, {useState,useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { getTravels } from '../api/data';
import './SearchTravel.css'

const SearchTravel = () => {
  const focusInputRef = useRef(null);
  const travels = getTravels();
  const navigate = useNavigate();

  const [continent, setContinent] = useState('');
  const [country, setCountry] = useState('');
    
     useEffect(() => {
       if(focusInputRef.current) focusInputRef.current.focus();
      }, []);
     const filteredTravels = continent ? travels.filter(travel => travel.continent === continent)
     : [];
     const handleSubmit = (e) => {
     e.preventDefault();

    const selectedTravel = travels.find(travel => travel.name === country);
    if (!selectedTravel) return;

    navigate(`/travel/${selectedTravel.id}`);
  };

       return (
         <div className='search-container'>
            <form onSubmit={handleSubmit}>
               <fieldset>
                 <label htmlFor='continent'>Selecciona el continente: </label>
                  <select name="continent" value={continent} 
                    onChange={(e) => {
                     setContinent(e.target.value);
                     setCountry(''); 
                     }}
                   >
                    <option value="">- Continentes -</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europa">Europa</option>
                    <option value="Oceanía">Oceanía</option>
                  </select>
                 <br />
                  <label htmlFor='destination'>Selecciona el país: </label>
                  <select name="destination" ref={focusInputRef} value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      disabled={!continent}
                   >
                    <option value="">- País a visitar -</option>
                     {filteredTravels.map(travel => (
                    <option key={travel.id} value={travel.name}>
                     {travel.name}
                    </option>
                     ) 
                   )}
                  </select>
                  <br />
                   <button>Enviar</button>
                    
                  </fieldset>
                </form>
            </div>
          )
        }
        
        export default SearchTravel
  

