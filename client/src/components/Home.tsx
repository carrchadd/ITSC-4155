import { useEffect, useState } from "react"


const Home = () => {
  const [message, setMessage] = useState("")

  useEffect(() => {
      fetch("/home/api")
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setMessage(data.home)
          })
          .catch(error => console.error("Something went wrong:", error))
  }, [])

  return (
    <div className="flex flex-col text-white mt-10">
        <p className="mx-auto">Message should pop up here</p>
        {message ? <p className="mx-auto">{message}</p> : <p className="mx-auto">Loading....</p>}
    </div>
  )
}

export default Home