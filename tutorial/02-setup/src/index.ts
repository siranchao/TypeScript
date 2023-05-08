
/* Class */
class User {

    //by default all fields are public
    useremail: string
    username: string

    readonly city: string = "unknown"
    private id: string = ""
    protected age: number = 0

    constructor(email: string, name: string) {
        this.useremail = email
        this.username = name
    }

    //getter method
    get getUserId(): string {
        return this.id
    }
    get getUserAge(): number {
        return this.age
    }

    //setter method (no need to add return type)
    set setUserAge(age: number) {
        if(age > 0)
            this.age = age
    }

    //private method
    private deleteToken() {
        console.log(`delete token`);
    }
}


/* Extends the class */
class SubUser extends User {
    isFamily: boolean = true

    changeUserAge() {
        this.age = 0
    }
}

const player = new User("siran@gg.com", "tommy")


/* Implementing Interfaces */
interface Human {
    name: string
    age: number
    alive: boolean
}

interface Comm {
    speak(): string
}

class Student implements Human, Comm {
    constructor(
        public name: string,
        public age: number,
        public alive: boolean
    ){}

    speak(): string {
        return "shit"
    }
}
