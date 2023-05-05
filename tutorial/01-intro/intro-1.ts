
/* typescript primitive types */
const userName: string = 'Hello World!';
const userId: number = 20;

//convert to string
const sales: number = 20.21;
const netSales: string = sales.toFixed();
const isLoggedIn: boolean = true;



/* Functions */
//parameters type + return type
function addSum(num1: number, num2: number): number {
    return num1 + num2;
}

const loginUser = (name: string, password: string, isAuth: boolean = false): void => {
    console.log(name + password);
    console.log(`user is auth? ${isAuth}`);
}

function getValue(myValue: number) {
    if(myValue > 10) {
        return true;
    }
    return "404";
}

function check(username: string): void {
    if(username === "xxx") {
        console.log("ok");
    }
}

//never: when a function never returns a value (throw error)
function handleCheck(username: string): never {
    if(username === "xxx") {
        throw new Error(`system error1`)
    }
    else {
        throw new Error(`system error2`)
    }

}


/* Type */
type User = {
    readonly _id: string
    name: string
    age: number
    isActive: boolean
    contact?: string
}


function createUser(user: User): User {
    return {
        _id: user._id,
        name: user.name,
        age: user.age,
        isActive: user.isActive
    }
}


//define an new type by combining existing types
type cardNum = {
    num: string
    expireDate: string
}

type cardHolder = {
    fname: string
    lname: string
}

type cardDetail = cardNum & cardHolder



/* Array */
const menu: string[] = []
const price: number[] = []

const userList: User[] = []
//const userList: Array<User> = []

menu.push("soup")
price.push(20.2)


/* Union */
let res: number | string = "ok"
res = 404


function getId(id: number | string): string {

    return typeof id === "string" ? id.toLowerCase() : id.toString();
}

//array of union type
const data: (number | string)[] = [1, 2, "3"]