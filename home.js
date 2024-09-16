function getData() {
    return fetch("http://localhost:5001/home/api")
      .then(response => response.json())
      .then(data => data)
  }

module.exports = {
    print_json: async () => {
        const data = await getData()
        console.log(data)
        return data.home === "This is the home page"
    },
    math_operations: (a,b,c,d) => {
        return (a + b * (c * d))
    }
}
