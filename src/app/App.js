import React, { Component } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: JSON.parse(localStorage.getItem('grid')),
      inputValue: '',
    }
  }

  onLayoutSwitch = () => {
    this.setState((prevState) => {
      return {
        isToggleOn: !prevState.isToggleOn
      }
    });
    localStorage.setItem('grid', !this.state.isToggleOn);
  }

  getSearchValue = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  reload = () => {
    window.location.reload()
  }

  render() {
    return (
      <>
        <Header isToggleOn={this.state.isToggleOn} onLayoutSwitch={this.onLayoutSwitch} reload={this.reload} />
        <main className='row'>
          <HomePage inputValue={this.state.inputValue} layout={this.state.isToggleOn ? 'grid' : 'list'} search={this.getSearchValue} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
