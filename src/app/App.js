import React, { Component } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import { reload, fetchUsers } from '../services/usersService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: JSON.parse(localStorage.getItem('grid')),
      inputValue: '',
      users: [],
      time: Date.now(),
      maleUsers: []
    }
  }

  componentDidMount() {
    fetchUsers().then((users) => {
      this.setState({
        users,
        maleUsers: users.filter((user) => {
          return user.gender === 'male'
        })
      })
    })
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

  refresh = () => {
    reload().then((users) => {
      this.setState({
        users,
        maleUsers: users.filter((user) => {
          return user.gender === 'male'
        })
      })
    })
  }

  render() {
    return (
      <>
        <Header isToggleOn={this.state.isToggleOn} onLayoutSwitch={this.onLayoutSwitch} reload={this.refresh} />
        <main className='row'>
          <HomePage maleUsers={this.state.maleUsers.length} users={this.state.users} inputValue={this.state.inputValue} layout={this.state.isToggleOn ? 'grid' : 'list'} search={this.getSearchValue} reload={this.reload} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
