import axios from "axios"
import { useState, useEffect } from "react"



const  Users = () =>{
    const [ userArray, setUserArray] = useState([])


    useEffect(() =>{

        axios
        .get("https://randomuser.me/api/?results=10")
        .then(respuesta => {
            setUserArray(respuesta.data.results)
            console.log(respuesta.data.results)
        })
        .catch(error => console.error(error))


    }, [])


    return (
        <>
        <ul className="container">

            {userArray.map?.( user => ( 
            
                 <li className="user" key={user.email}>
                <h2 className="litte">{user.name.first} {user.name.last}</h2>
                <h3>{user.email}</h3>
                <h3>{user.phone}</h3>
            </li>     
            
         ))}
          
        </ul>
        
        </>
    )}


    export default Users