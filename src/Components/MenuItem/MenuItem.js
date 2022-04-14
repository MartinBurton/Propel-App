import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = () => {
  return(
    <div className='db center mw5 tc'>
      <div className='black dim'>
        <h2><FontAwesomeIcon icon="fa-solid fa-basket-shopping" /></h2>
      </div>
      <div>
        <h4>Checkout</h4>
      </div>
    </div>
  )
}

export default MenuItem;