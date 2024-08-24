
import React from 'react'
import Student from './Props/Student';
import Teacher from './Props/Teacher';
import Prinicpal from './Props/Prinicpal ';

const App = () => {
  const school = {
    name:'ABC School',
      principal:{
        name:"Mr.Sharma",
        experince:15,
        age:50,
        hobbies:['Reading','Golfing','Traveling']
      },
      teacher:{
        name:"Mr.Gupta",
        subject:'Math',
        age:20,
        hobbies:['Painting','Cooking','Photography']

      },
      student:{
        name:'Alfiya',
        grade:9,
        hobbies:['Game','Movies']
      }
    
  }

  return (
    <div>
      <h1>Hello</h1>
      {/* object data  for student*/}
      <Student school={school}/>
      {/* spread data for teacher */}
      <Teacher {...school.teacher}/>
      {/* individual data for principal */}
      <Prinicpal
       name={school.principal.name}
       experince={school.principal.experince}
       age={school.principal.age}
       hobbies={school.principal.hobbies}

       />
    </div>
  )
}

export default App
