function expect (value) {
    return {
        toBe: exp => {
            if (value === exp) {
                console.log('Success')
            } else {
                console.error(`Value is ${value} but expect is ${exp}`)
            }
        }
    }
}


const sum = (a, b) => a + b

const nativeNull = () => null

function cloneArr(arr) {
    return [...arr]
}

// expect(sum(41, 1)).toBe(43)

module.exports = {sum, nativeNull, cloneArr}