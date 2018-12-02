import React from 'react';

const findClass = (element) => {
  if (element) {
    return element === 'angelContainer' ? 'selected' : 'not-selected';
  } else {
    return 'none';
  }
}

const whatsGoingOn = (event) => {
  event.stopPropagation();
}

const AngelContainer = ({selected, selectedElement}) => {
  let selectedClass = 'angelContainer main-feature ' + findClass(selectedElement);
  return (
    <div className={selectedClass} onClick={() => {selected(selectedClass)}}>
      <div className='main-feature__title'>
        <h2>Gowns for Angels</h2>
        <p>Creating beautiful, keepsake gowns for Neonatal Intensive Care Unit families for baptisms, family photos, and for infants who have passed too soon.</p>
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

export default AngelContainer;
