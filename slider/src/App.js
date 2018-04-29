import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  render() {
    let {showMenu} = this.state;
    let slideCSS = showMenu ? 'slide-menu slide-menu-position' : 'slide-menu';
    let textFadeCSS = showMenu ? 'menu-text menu-text-fade-in' : 'menu-text';
    let box1CSS = showMenu ? 'box box1-slide' : 'box';
    let box2CSS = showMenu ? 'box box2-slide' : 'box';
    let box3CSS = showMenu ? 'box box3-slide' : 'box';
    return (
      <section className='main'>
        <nav className='nav'>
          <h3 className='nav-title'>Nav Bar</h3>
          <button className='nav-button' onClick={this.handleClick}>{showMenu ? 'Hide' : 'Show'}</button> 
        </nav>
        <div className={slideCSS}>
          <div className={box1CSS}></div> 
          <div className={box2CSS}></div> 
          <div className={box3CSS}></div> 
        </div> 
      </section>
    );
  }
}

export default App;
