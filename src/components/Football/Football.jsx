import React, { useState } from "react";
import styles from "./Football.module.scss";
import data from "./data/data"

const Football = () => {
  const playerlist = []
  const [players,setPlayers] = useState([])
  const goalkeepers = data.filter((data)=> data.position ==="Goalkeeper")
  const midfield = data.filter((data)=> data.position ==="Midfielder")
  const attacker = data.filter((data)=> data.position ==="Attacker")
  const defender = data.filter((data)=> data.position ==="Defender")
  
  const getCardJsx = (data) => (
    <form className={styles.card} key={data.id}>
     <h2>{data.name}</h2>
     <p>{data.position}</p>
     <p>{data.dateOfBirth}</p>
     <p>{data.countryOfBirth}</p>
     <p>{data.nationality}</p>
     <p>{data.role}</p>
    if (playerlist.length =0) {playerlist.push(data)} else {alert('only 1 goallkeeper allowed')}
    <input type="checkbox" name="players" onClick={addPlayer}/>
    
    </form>
  );
  return (
    <>
      <p>{goalkeepers.map(getCardJsx)}</p>
      <p>{defender.map(getCardJsx)}</p>
      <p>{midfield.map(getCardJsx)}</p>
      <p>{attacker.map(getCardJsx)}</p>
      
      
    </>
  );
};

export default Football;
