import React from 'react';
import Posts from './components/posts';
import Folder from './components/Folder';
import 'bootstrap/dist/css/bootstrap.min.css';
import explorer from './data/folderData';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Kesava'
    }
  }

  // changeName(item){
  //   this.setState({name: item})
  // }
  render(){

  return(
    <div className='App'>
      {/* <Posts /> */}
      <Folder explorer={explorer} />
      {/* <h3>Pass Child to PArent Data</h3>
      <Child data={
        {name: this.state.name,
        changeName: this.changeName.bind(this)}
      } /> */}
      </div>
  )
  }
  
}

export default App;
