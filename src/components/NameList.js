import React from "react";
import Name from "./Name";
import Person from "./Person";

function NameList() {
    const names = ['Bruce','Clark', 'Diana']
  const persons = [
      {
          id:1,
          name:'Temi',
          age: 18,
          skill: "React"
      },
      {
          id:2,
          name:'ayo',
          age: 16,
          skill: "Java"
      },
      {
          id:3,
          name:'ola',
          age: 17,
          skill: "Python"
      }, 
  ]
  const personList = persons.map((person) => <Person key={person.id} person={person}/>);
  const nameList = names.map((name) => <Name key={name} name={name}/>);
  return (
    <div>
    {personList}
      {nameList}
    </div>
  );
}

export default NameList;
