import React from 'react';

const findClass = (element) => {
  if (element) {
    return element === 'cheesecakeContainer' ? 'selected' : 'not-selected';
  } else {
    return 'none'
  };
}

const whatsGoingOn = (event) => {
  event.stopPropagation();
}

const CheesecakeContainer = ({selected, selectedElement}) => {
  let selectedClass = 'cheesecakeContainer main-feature ' + findClass(selectedElement)
  return (
    <div className={selectedClass} onClick={() => {selected(selectedClass)}}>
      <div className='main-feature__title'>
        <h2>Cheesecake Quilters</h2>
        <p>A gathering place for very special friends who come together, share ideas, create memories, and enjoy the art of quilting.</p>
      </div>
      <div className='main-feature__photos'>
        <img className='main-feature__image' src='./images/Angel_Gowns_1.jpg'/>
        <img className='main-feature__image' src='./images/Angel_Gowns_2.png'/>
      </div>
      <div className='main-feature__learnMore'>
        <a href='https://www.facebook.com/gowns4angels/' target='_blank' onClick={whatsGoingOn}>Learn More</a>
      </div>
    </div>
  )
};

export default CheesecakeContainer;
