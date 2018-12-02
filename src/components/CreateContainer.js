import React from 'react';

const findClass = (element) => {
  if (element) {
    return element === 'createContainer' ? 'selected' : 'not-selected';
  } else {
    return 'none'
  };
}

const whatsGoingOn = (event) => {
  event.stopPropagation();
}

const CreateContainer = ({selected, selectedElement}) => {
    let selectedClass = 'createContainer main-feature ' + findClass(selectedElement)
  return (
    <div className={selectedClass} onClick={() => {selected(selectedClass)}}>
      <div className='main-feature__title'>
        <h2>Date to Create</h2>
        <p>The perfect space to be creative! Whether for classes or a gathering of your creative friends, Mary's place are sure to inspire, and fits up to groups of 20 people.</p>
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

export default CreateContainer;
