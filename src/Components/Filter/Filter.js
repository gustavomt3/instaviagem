//React
import React from 'react';
//Styles
import './Filter.scss';

export const Filter = ({ renderDataWithFilter }) => {
  const [active, setActive] = React.useState([0, 0, 0]);

  function compare(txt) {
    if (txt === 'hotel') {
      setActive([0, 1, 1]);
      if (active[1] === 1) {
        setActive([0, 0, 0]);
      }
    } else if (txt === 'transport') {
      setActive([1, 0, 1]);
      if (active[0] === 1) {
        setActive([0, 0, 0]);
      }
    } else {
      setActive([1, 1, 0]);
      if (active[0] === 1) {
        setActive([0, 0, 0]);
      }
    }
  }

  return (
    <nav className="containerFilter">
      <p>Filter by:</p>
      <div className="filters">
        <button
          className={`divFilters ${!active[0] == 1 ? '' : 'disabled'}`}
          id="accomodation"
          onClick={() => {
            const element = document.querySelector('#accomodation');
            const txt = element.innerText.toLowerCase();
            element.classList.toggle('active');
            renderDataWithFilter(txt);
            compare(txt);
          }}
          disabled={!active[0] == 1 ? '' : 'disabled'}
        >
          Hotel
        </button>
        <button
          className={`divFilters ${!active[1] == 1 ? '' : 'disabled'}`}
          id="transport"
          onClick={() => {
            const element = document.querySelector('#transport');
            const txt = element.innerText.toLowerCase();
            element.classList.toggle('active');
            renderDataWithFilter(txt);
            compare(txt);
          }}
          disabled={!active[1] == 1 ? '' : 'disabled'}
        >
          Transport
        </button>
        <button
          className={`divFilters ${!active[2] == 1 ? '' : 'disabled'}`}
          id="attraction"
          onClick={() => {
            const element = document.querySelector('#attraction');
            const txt = element.innerText.toLowerCase();
            element.classList.toggle('active');
            renderDataWithFilter(txt);
            compare(txt);
          }}
          disabled={!active[2] == 1 ? '' : 'disabled'}
        >
          Attraction
        </button>
      </div>
    </nav>
  );
};

export default Filter;
