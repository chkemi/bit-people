import React, { Component } from 'react';
import HomePage from './components/main/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components//main/About';
import { checkAndFetchUsers } from '../services/usersService';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: JSON.parse(localStorage.getItem('grid')),
      inputValue: '',
      users: [],
      time: Date.now(),
    }
  }

  componentDidMount() {
    checkAndFetchUsers().then((users) => {
      this.setState({
        users,
      })
    })
  }

  onLayoutSwitch = (e) => {
    e.preventDefault()

    this.setState((prevState) => {
      return {
        isToggleOn: !prevState.isToggleOn
      }
    });
    localStorage.setItem('grid', !this.state.isToggleOn);
  }

  getSearchValue = (e) => {
    e.preventDefault()
    this.setState({
      inputValue: e.target.value
    });
  }

  refresh = (e) => {
    e.preventDefault()
    checkAndFetchUsers(true).then((users) => {
      this.setState({
        users,
      })
    })
  }

  render() {
    return (
      <>
        <Header isToggleOn={this.state.isToggleOn} onLayoutSwitch={this.onLayoutSwitch} reload={this.refresh} />
        <main className='container'>
          <Switch>
            <Route path='/about' component={About} />
            <Route exact path='/' render={() => {
              return <HomePage users={this.state.users} inputValue={this.state.inputValue} layout={this.state.isToggleOn ? true : false} search={this.getSearchValue} reload={this.reload} />
            }} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
