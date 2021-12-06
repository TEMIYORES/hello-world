import React from 'react'

function Person({person}) {
    return (
        <div>       
      <h2>name: {person.name}</h2>
      <div>age: {person.age}</div>
      <div>skill: {person.skill}</div>   
        </div>
    )
}

export default Person
