import React from 'react';
import Loading from './Spinner-5.gif'

const Spinner =() => {
    return (
      <div className='text-center'>
        <img className='my-3' src={Loading} alt="spiner" />
      </div>
    )
}
export default  Spinner;