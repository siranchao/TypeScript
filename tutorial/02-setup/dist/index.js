"use strict";
/* Class */
class User {
    constructor(email, name) {
        this.city = "unknown";
        this.id = "";
        this.age = 0;
        this.useremail = email;
        this.username = name;
    }
    //getter method
    get getUserId() {
        return this.id;
    }
    get getUserAge() {
        return this.age;
    }
    //setter method (no need to add return type)
    set setUserAge(age) {
        if (age > 0)
            this.age = age;
    }
    //private method
    deleteToken() {
        console.log(`delete token`);
    }
}
/* Extends the class */
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeUserAge() {
        this.age = 0;
    }
}
const player = new User("siran@gg.com", "tommy");
class Student {
    constructor(name, age, alive) {
        this.name = name;
        this.age = age;
        this.alive = alive;
    }
    speak() {
        return "shit";
    }
}
