import { User } from "../entities/User";
import { API_URL } from "../shared/constants";

const checkAndFetchUsers = (forceRefresh = false) => {

    if (!localStorage.getItem('users')) {
        return fetchAndSetStorage();
    } else if (localStorage.getItem('users') && forceRefresh) {
        return fetchAndSetStorage();
    }

    return readFromStorage();
}

const fetchAndSetStorage = () => {
    return fetch(`${API_URL}/?results=15`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            localStorage.setItem('users', JSON.stringify(data.results))
            localStorage.setItem('time', Date.now())

            return data.results
                .map((userElement, index) => {
                    return new User(index, userElement.picture.large, userElement.name.first, userElement.name.last, userElement.gender, userElement.email, userElement.dob.date);
                })
        })
}

const readFromStorage = () => {
    return Promise.resolve(
        JSON.parse(localStorage.getItem('users'))
            .map((userElement, index) => {
                return new User(index, userElement.picture.large, userElement.name.first, userElement.name.last, userElement.gender, userElement.email, userElement.dob.date);
            })
    )
}

export {
    checkAndFetchUsers
}