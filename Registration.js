import { useState } from "react";
import React from "react";
import logo from './../images/logo.png';
import '../../src/components/Registration.css';
const Registration = () => {
    const [newAccount, updatenewacc] = useState({
      fname: "",
      lname: "",
      email: "",
      dob: "",
      ssn: "",
      mobile: ""
    });
    const onSubmit = (e) => {
      e.preventDefault();
      let a = {
        fname: e.target.fname.value,
        lname: e.target.lname.value,
        email: e.target.email.value,
        dob: e.target.dob.value,
        ssn: e.target.ssn.value,
        mobile: e.target.mobile.value
      };
      updatenewacc(a);
      console.log(newAccount);
      console.log(JSON.stringify(newAccount));
    };
    return (
      <form className="add-form" onSubmit={onSubmit}>
         <img src={logo} style={{height: 100, width:100, float:'left' , margin:40}} alt="logo" />
       
        <div className="form-control">

       
        <input
            name="fname"
            required={true}
            type="text"
            value={"First Name"}
            style={{width:400, height:40, marginTop:150,textAlign:'center'}}
            placeholder="First Name"
            //value={text}
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, fname: e.target.value });
              //console.log(newAccount);
            }}
          />
          <br />
          
          <input
            name="lname"
            required={true}
            type="text"
            value={"Last Name"}
            style={{width:400, height:40, marginTop:50,textAlign:'center'}}
            placeholder="Last Name"
            //value={text}
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, lname: e.target.value });
              //console.log(newAccount);
            }}
          />
          <br />
          <br />
          
          <input
            name="email"
            required={true}
            type="Email"
            value={"Email"}
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            placeholder="Email"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, email: e.target.value });
            }}
          />
          <br />
          <br />
          
          <input
            name="dob"
            required={true}
            type="date"
            value="DOB"
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            //placeholder='First Name'
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, dob: e.target.value });
            }}
          />
          <br />
          <br />
         
          <input
            name="ssn"
            required={true}
            type="text"
            value={"SSN"}
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            placeholder="SSN"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, ssn: e.target.value });
            }}
          />
          <br />
          <br />
          
          <input
            name="mobile"
            required={true}
            type="tel"
            value={"Mobile"}
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            placeholder="Mobile Number"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, mobile: e.target.value });
            }}
          />

          <br />
           <input type="submit" value="Submit" className="btn"   style={{width:100, height:40, marginTop:10,textAlign:'center',color: 'blue',borderColor: 'blue'}} />
        </div>

        <h1 
        style={{fontFamily:'"Trebuchet MS Bold Italic", "Trebuchet MS", sans-serif',fontWeight:700,fontStyle:'italic',fontSize:'25px', marginRight: 75, textAlign: 'center', marginTop:60}}>Create new Account</h1>
       
      </form>
      
    );
  };
  
  export default Registration;
