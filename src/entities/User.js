class User {
    constructor(id, avatar, firstName, lastName, gender, email, birthday) {

        let date = new Date(birthday);
        let formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

        this.id = id;
        this.avatar = avatar;
        this.firstName = firstName[0].toUpperCase() + firstName.slice(1);
        this.lastName = lastName[0].toUpperCase() + lastName.slice(1);
        this.fullName = `${this.firstName} ${this.lastName}`;
        this.gender = gender;
        this.email = `${email.slice(0, 3)}......${email.slice(9)}`;
        this.birthday = formattedDate;
    }
}

export {
    User
}