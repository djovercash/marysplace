import React from 'react';

import AngelContainer from './AngelContainer';
import CheesecakeContainer from './CheesecakeContainer';
import CreateContainer from './CreateContainer';

class MainContainer extends React.Component {
  state = {
    selected: null
  }

  selectedComponents = (currentClass) => {
    if (currentClass.indexOf('selected') > -1) {
      this.setState({
        selected: null
      })
    } else {
      let classes = currentClass.split(' ');
      this.setState({
        selected: classes[0]
      })
    }
  }

  render() {
    return (
      <div className='main'>
      <AngelContainer selectedElement={this.state.selected} selected={this.selectedComponents}/>
      <CheesecakeContainer selectedElement={this.state.selected} selected={this.selectedComponents}/>
      <CreateContainer  selectedElement={this.state.selected} selected={this.selectedComponents}/>
      </div>
    )
  }
};

export default MainContainer;
