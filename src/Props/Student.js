import React from 'react'

const Student = ({ school }) => {
    return (
            <div>
                <h1>{school.name}</h1>
                <h2>Name: {school.student.name}</h2>
                <h2>Grade: {school.student.grade}</h2>
                <h2>Hobbies: {school.student.hobbies.join(', ')}</h2>
            </div>
    )
}


export default Student;




