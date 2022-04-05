import React, { FC } from 'react'

export const Profile: FC = () => (
  <div>
    <div className="imgBox">
      <img src="#" alt="userImg" />
      <h3>User Name</h3>
      <p>Description</p>
    </div>
    <div className="cardBox">
      <h1>Pack</h1>
      <h2>Number of card</h2>
      <p>1-100</p>
    </div>
  </div>
)
