import React, { Component } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    }
  }

  onLayoutSwitch = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  reload = () => {
    window.location.reload();
  }

  render() {
    return (
      <>
        <Header isToggleOn={this.state.isToggleOn} onLayoutSwitch={this.onLayoutSwitch} reload={this.reload} />
        <main className='row'>
          <HomePage layout={this.state.isToggleOn ? 'grid' : 'list'} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
