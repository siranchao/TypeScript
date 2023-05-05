
/* Tuple */

//tuple define a patten and order of elements matters
let specialUser: [string, number, boolean];
specialUser = ["admin", 999, false]

//tuple is special kind of array with strict type/order/length
//beware of using tuple, any Array method can be applied to tuple



/* Enums */

//pre-defined user's choices
const enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window"
}

const mySeat = SeatChoice.AISLE



/* Interface */

interface Player {
    name: string
    id: number
    score?: number

    intro(): void
    getId(): number 
}

//reopening of the interface
interface Player {
    githubId: string
}

const p1: Player = {
    name: "player1",
    id: 1212,
    githubId: "xx1122sa",
    intro: () => {
        console.log("hello world")
    },

    getId: () => {
        return this.id
    }
}

interface Admin extends Player {
    role: "Admin" | "super admin"
}

//important: difference between interface and type
/**
 * 1. type cannot be re-opened (add new fields)
 * 2. the way to extend (extends and &)
 */