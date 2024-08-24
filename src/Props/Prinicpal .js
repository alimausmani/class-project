import React from 'react'

const Prinicpal = ({name,experience,age,hobbies}) => {
    return (
        <div>
            <h2>Principal Name: {name}</h2>
            <h2>Experience: {experience} years</h2>
            <h2>Age: {age}</h2>
            <h2>Hobbies: {hobbies.join(', ')}</h2>



        </div>
    )
}

export default Prinicpal; 
