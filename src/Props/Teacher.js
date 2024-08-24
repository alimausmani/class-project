import React from 'react'

const Teacher = ({ name, subject, age, hobbies }) => {
    return (
        <div>
            <h2>Teacher Name: {name}</h2>
            <h2>Subject: {subject}</h2>
            <h2>Age: {age}</h2>
            <h2>Hobbies: {hobbies.join(', ')}</h2>
        </div>
    )
}

export default Teacher;
