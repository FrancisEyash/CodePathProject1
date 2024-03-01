import React from 'react';
import '../index.css';


const GameCards = ({ImageURL, TeamName, TeamNickName}) => {
  return (
    <>
      <div className="team-card">
        <img src={ImageURL} alt="Team Member" className="team-card-image"/>
        <div className="team-card-content">
          <h4>{TeamName}</h4>
          <h5>{TeamNickName}</h5>
          <button className="team-card-button">Fixtures</button>
        </div>
      </div>
    </>
  )
}

export default GameCards