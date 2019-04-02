import { User } from "../entities/User";
import { API_URL } from "../shared/constants";

const reload = () => {
    return fetch(`${API_URL}/?results=15`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            localStorage.setItem('users', JSON.stringify(data.results))

            return JSON.parse(localStorage.getItem('users')).map((userElement, index) => {
                return new User(index, userElement.picture.large, userElement.name.first, userElement.name.last, userElement.gender, userElement.email, userElement.dob.date);
            })
        })
}

const fetchUsers = () => {
    if (localStorage.getItem('users')) {
        return Promise.resolve(
            JSON.parse(localStorage.getItem('users')).map((userElement, index) => {
                return new User(index, userElement.picture.large, userElement.name.first, userElement.name.last, userElement.gender, userElement.email, userElement.dob.date);
            })
        )
    } else {
        return reload()
    }
}

export {
    fetchUsers,
    reload
}