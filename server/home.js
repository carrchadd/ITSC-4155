const data = require('./home.json')

module.exports = {
    print_json: () => {
        return data.home === "This is the homsfdsfsfsdde page"
    },
    math_operations: (a,b,c,d) => {
        return (a + b * (c * d))
    }
}
