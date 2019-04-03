import React, { Component } from 'react';
import HomePage from './components/main/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components//main/About';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <>
        <Header isToggleOn={this.state.isToggleOn} onLayoutSwitch={this.onLayoutSwitch} reload={this.refresh} />
        <main className='container'>
          <Switch>
            <Route path='/about' component={About} />
            <Route exact path='/' render={() => {
              return <HomePage users={this.state.users} inputValue={this.state.inputValue} layout={this.state.isToggleOn ? true : false} search={this.getSearchValue} reload={this.reload} clear={this.clearState} />
            }} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
