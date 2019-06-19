import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MainContentCard from "./MainContentCard";
import MainFooter from "./MainFooter";


class App extends Component {

  constructor(){
    super()

    this.state ={
      currentIndex: 0,
    }

    this.moveToNextItem = this.moveToNextItem.bind(this);
    this.moveToPrevItem = this.moveToPrevItem.bind(this);
  }

  moveToNextItem(){
    let currentIndexCopy = this.state.currentIndex;

    if(currentIndexCopy >= 24){

    }else{
      this.setState({
        currentIndex: currentIndexCopy+1
    })
    }

    
  }

  moveToPrevItem(){
    let currentIndexCopy = this.state.currentIndex;
    if(currentIndexCopy <= 0){

    }else{
      this.setState({
        currentIndex: currentIndexCopy-1
    })
    }

    
  }

  render(){
    console.log(this.state.currentIndex);
    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo">Home</h1>
        </header>
  
        <MainContentCard dataIndex={this.state.currentIndex}/>
        <MainFooter moveToNextItem={this.moveToNextItem} moveToPrevItem={this.moveToPrevItem}/>
      </div>
    );
  }

}

export default App;
