import React from 'react';


const Person = (props) => {
  return (
   <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>
  )
};

export default Person;