
import { useEffect, useState } from "react"


export default function Users(){
    // 1. declare a state to hold teh data    
    const [users, setUsers] = useState([]);
    // 2. useeffect with call back and dependency

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data)) 
    }, [])

    return(
        <div>
                <h2>Users: {users.length}</h2>
        </div>
    )
}

