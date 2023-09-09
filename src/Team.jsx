import { useState } from "react"

export default function Team(){
   const [team, setteam] = useState(11);

   const handleAdd = () => {
    const newTeam = team + 1;
    setteam(newTeam);
   }
   const handleRemove = () => {
    const newTeam = team - 1;
    setteam(newTeam);
   }




   const teamStyle = {
      border:'2px solid black',
      margin: '15px',
      padding: '15px',
      borderRadius: '20px',
      backgroundColor: 'bisque'
   }

return(
    <div style = {teamStyle}>
        <h2>Players:{team}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
    </div>
)
}