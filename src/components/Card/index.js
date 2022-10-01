import { useState } from 'react';
import './styles.css';

export default function Card({ number, isShow, count, updateReports }) {
  const [show, setShow] = useState(isShow);

  function handleToggle() {
    setShow(!show);
    if (!show) {
      updateReports(number, ++count);
    }
  }

  return (
    <div className='card'>
      {show ?
        <>
          <span className='span'>{number}</span>
          <button
            className='btn'
            onClick={handleToggle}
          >X</button>
        </> :
        <button
          className='showBtn'
          onClick={handleToggle}
        >Show</button>
      }
    </div>
  );
}