import React, { Component } from "react";
import ListItem from './ListItem';
import { UserCard } from "./UserCard";
import '../loading.css'
import './HomePage.css'
import { checkAndFetchUsers } from '../../../services/usersService';
import Search from "../buttons/Search";
import LoadingAnimation from "../LoadingAnimation";
import FailedSearch from "../FailedSearch";
import SwitchLayout from "../buttons/SwitchLayout";
import Reload from "../buttons/Reload";

class HomePage extends Component {
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
            inputValue: e.target.value.toLowerCase()
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

    display() {
        let maleUsers = 0;
        let femaleUsers = 0;

        if (!this.state.users.length) {
            return <LoadingAnimation />
        }

        if (!this.state.isToggleOn) {

            const ListItems = this.state.users.filter((user) => {
                return user.fullName.toLowerCase().includes(this.state.inputValue)
            })
                .map((user, index) => {
                    user.gender === 'male' ? maleUsers++ : femaleUsers++;
                    return (
                        <ListItem key={index} className='row' src={user.avatar} fullName={`${user.firstName} ${user.lastName}`} email={user.email} birthday={user.birthday} gender={user.gender} />
                    )
                })

            return (
                <>
                    <Search search={this.getSearchValue} users={this.state.users} maleUsers={maleUsers} femaleUsers={femaleUsers} />
                    <SwitchLayout onLayoutSwitch={this.onLayoutSwitch} isToggleOn={this.state.isToggleOn} />
                    <Reload reload={this.refresh} />
                    {ListItems.length > 0 ? ListItems : <FailedSearch />}
                </>
            )
        }

        if (this.state.isToggleOn) {

            const GridItems = this.state.users.filter((user) => {
                return user.fullName.toLowerCase().includes(this.state.inputValue)
            })
                .map((user, index) => {
                    user.gender === 'male' ? maleUsers++ : femaleUsers++;
                    return (
                        <UserCard key={index} src={user.avatar} fullName={`${user.firstName} ${user.lastName}`} email={user.email} birthday={user.birthday} gender={user.gender} />
                    )
                })

            return (
                <>
                    <Search search={this.getSearchValue} users={this.state.users} maleUsers={maleUsers} femaleUsers={femaleUsers} />
                    <SwitchLayout onLayoutSwitch={this.onLayoutSwitch} isToggleOn={this.state.isToggleOn} />
                    <Reload reload={this.refresh} />
                    {GridItems.length > 0 ?
                        <div className='row'>
                            {GridItems}
                        </div> :
                        <FailedSearch />}
                </>
            )
        }
    }

    render() {
        return this.display()
    }
}

export default HomePage;