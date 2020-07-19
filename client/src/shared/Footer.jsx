import React from 'react'
import Nav from './Nav'


export default function (props) {
  return (
    <div className="Footer">
      <Nav currentUser={props.currentUser}  />
    </div>
  )
}