import React, { Component } from 'react';
import Nav from './components/Nav';
import Logo from './components/Logo';
import Banner from './components/Banner'
import './styles/index.sass';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: []
  //   };
  // }
  // componentDidMount() {
  //   const endPoint = "https://api.myjson.com/bins/p1laa";
  //   fetch(endPoint)
  //     .then(res => res.json())
  //     .then(data => this.setState({ data: data }))
  // }

  render() {
    return (
      <div className="Blog">
        <header className="Blog_header">
          <Logo />
          <Nav />
        </header>  

        <main>
          <div className="Banner">
            <img src="https://picsum.photos/1500/800/?image=789"  alt="plante" />
          </div>
         
        </main>        
      </div>
    );
  }
}

export default App;
