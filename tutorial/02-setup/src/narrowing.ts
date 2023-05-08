
/* Narrowing */

function detectType(val: string | number): string | number {
    if(typeof val === "string") {
        return val.toLowerCase()
    }

    return val + 3
}