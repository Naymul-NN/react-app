import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'
export default function Friends(){
  // frist usestate 
    const [friends, setfriends] = useState([])

  // then useeffect
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>  setfriends(data))
  },[])

    return(
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
        friends.map(friend => <Friend friend={friend}></Friend>)
       }
        </div>
      

    )
}