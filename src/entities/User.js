class User {
    constructor(id, avatar, firstName, lastName, gender, email, birthday) {
        this.id = id;
        this.avatar = avatar;
        this.firstName = firstName[0].toUpperCase() + firstName.slice(1);
        this.lastName = lastName[0].toUpperCase() + lastName.slice(1);
        this.gender = gender;
        this.email = `${email.slice(0, 3)}......${email.slice(9)}`;
        this.birthday = `${new Date(birthday).toLocaleDateString()}`;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

export {
    User
}