import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

let Add = () => {
const  [employee, setemployee] = useState({
empid:'',
Name:'',
department:'',
location:''

})

let fetchValue=(e)=>{
  
//console.log(e)
setemployee({...employee,[e.target.name]:e.target.value})


}
let sendData=()=>{
console.log(employee)


}




  return (
    <>
    <h2 style={{marginTop:"50px"}}>New Product</h2>
    <TextField
     id="standard-basic" 
     label="Employee ID"
      variant="standard" 
      name="empid"
      //value={employee.empid}
      onChange={fetchValue}
      />
      <br />
    <TextField 
    id="standard-basic" 
    label="Employee Name"
     variant="standard" 
     name="Name"
      //value={employee.Name}
      onChange={fetchValue}/>
     <br />
    <TextField
     id="standard-basic"
      label="Employee Dept" 
      variant="standard" 
      name="department"
       //value={employee.department}
       onChange={fetchValue}/>
      <br />
    <TextField
     id="standard-basic" 
     label="Employee location"
      variant="standard" 
      name="location"
       //value={employee.location}
       onChange={fetchValue}/>
      <br />

               <br />
                <button
                 variant="contained"
                 onClick={sendData}
                 >Submit
                 </button>

            


    </>
  )
}

export default Add