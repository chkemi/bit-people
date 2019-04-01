import { User } from "../entities/User";
import { API_URL } from "../shared/constants";

const fetchUsers = () => {
    return fetch(`${API_URL}/?results=15`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data.results.map((userElement, index) => {
                return new User(index, userElement.picture.large, userElement.name.first, userElement.name.last, userElement.email, userElement.dob.date);
            })
        })
}

export {
    fetchUsers
}