import React from 'react'
import "../index.css"
import GameCards from './GameCards'

const MainCard = () => {
  return (
    <> 
    <div className='Main-Card'> 
      <div><h1 className='Title'>Samburu Favorite Teams</h1></div>
      <div className='Team-Card-Container'>        
        <GameCards ImageURL={'./src/assets/alex-_AOL4_fDQ3M-unsplash.jpg'} TeamName={"Rangau FC"} TeamNickName={"The Indomitable Lions"}/>
        <GameCards ImageURL={'./src/assets/connor-coyne-OgqWLzWRSaI-unsplash.jpg'} TeamName={"Mtaro FC"} TeamNickName={"Lions of Teranga"}/>
        <GameCards ImageURL={'./src/assets/vikram-tkv-JO19K0HDDXI-unsplash.jpg'} TeamName={"Ol Maison FC"} TeamNickName={"The Elephants"}/>
      </div>
    </div>
  </>
  )

}

export default MainCard