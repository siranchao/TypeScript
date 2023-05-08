
/* Generics */

const score: Array<number> = []
const names: Array<string> = []

function identify(val: boolean | number): boolean | number {
    return val
}

//generic function
function identity<T>(val: T): T {
    return val
}

const num: number = identity(3)
const words: string = identity("hello")


function getSearchProducts<T>(products: T[]): T {
    const index: number = products.length - 1
    return products[index]
}

//arrow function syntax
const getMoreSearchProducts = <T>(products: T[]): T => {
    const index: number = products.length - 1
    return products[index]
}


interface Database {
    connection: string
    password: string
}

function getConnection<T, U extends Database>(val: T, db: U): object {
    return {
        val,
        db
    }
}