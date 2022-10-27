import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Routines = ( {routines} ) => {
    console.log(routines)

    const navigate = useNavigate();

    return (
      <div>
          <h1>Welcome to the routines page!</h1>
          <div> {
                    routines.map((currentItem, index) => { 
                        return  <li className="card" key={index}>
                                    <p>Name: {currentItem.name}</p>
                                    <p>Goal: {currentItem.goal}</p>
                                    <p>Creator ID: {currentItem.creatorName}</p>
                                    <button 
                                    type="button" 
                                    class="btn btn-primary"
                                    onClick={() => {
                                        console.log(currentItem.id)
                                        navigate(`/routines/${currentItem.id}`, { replace: true })
                                    }}
                                    >
                                    View
                                    </button>
                                </li>
                    })}
        </div>
      </div>
    );
  }

//   <div> {
//     routines.map((currentItem, index) => { 
//         return <li className="card" key={index}>
//                     <p>
//                         <img className="player-image" src={currentItem.player.photo} alt="player" height="100" width="100"/> 
//                         {currentItem.player.name}
//                     </p>
//                     <p>
//                         <img className="team-logo-image" src={currentItem.statistics[0].team.logo} alt="team logo" height="50" width="50"/> 
//                         {currentItem.statistics[0].team.name}
//                     </p>
//                     <p>
//                     Goal Count: {currentItem.statistics[0].goals.total}
//                     </p>
//                     <button type="button" className="btn btn-primary">View Player Stats</button>
//                 </li>
//     })}
// </div>

export default Routines