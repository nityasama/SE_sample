import React from 'react';
import './../App.css';
import logo from './../images/logo.png';
import '../../src/components/Login.css';

//this is not working yet
const LoginUser =(e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/login", {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      //body: JSON.stringify(book)
    })
    .then(res=>{
        console.log(1,res);
        if(res.status === 201){
          return res.json();
        }else{
          return null;
        }
      });

  }


const Login = () => {
  return (
    //better way of writing flex items, need to check
    /*<div className="Container">
      <div class="fixed"><input type="text" 
      value={"Username/Email"}  />
      <br/>
      <input type="text" 
      value={"Password"}  />
      <br/>
      <input type="submit" value="Submit" /></div>
  <div class="flex-item"><inputtext>
      Test text...........
      </inputtext></div>
    </div>*/
<div className='class'>
    <div style={{width: '100%', overflow: 'hidden'}}>
    <div style={{width: '600px', float: 'left'}}> 
    <br/>
    <br/>
    <div className="Body">
    <input  type="text" 
      value={"Username/Email"} style={{width:200, height:40, marginTop:20}} />
    </div>
      <br/>
      <br/>
      <input className="Body" type="text" 
      value={"Password"} style={{width:200, height:40, marginTop:10}} />
      <br/>
      <br/>
      <input className="Body" type="submit" value="Login" style={{marginRight:100, width:100, height:40, marginTop:10, color: 'blue',borderColor: 'blue'}} onClick={LoginUser}/>
      <br/>
      <br/>
      <div>
      <inputtext style={{marginLeft: 40}}>
      Not an existing user?
     
      </inputtext>
      <br/>
      {/* <input type="submit" style={{width:120, height:40, marginTop:10, marginRight:80,color: 'blue',borderColor: 'blue'}} value="Create Account"
      <button>  
      onClick={() => {
      navigate("/Registartion");
      </button>
      }}/> */}
      
      </div>
      </div>
    <img src={logo} style={{height: 100, width:100, float:'left' , margin:40}} alt="logo" />
    
    <h2 className='Title'>Fix My Fixture</h2>
      
    <h3 className='Caption'>
      -Where booking made easy!
    </h3>
    <br></br>
    <br></br>
    <br></br>
    <h3 classNAme='Description'>
      
      Get started with FmF by signing up and logging in to book appointments for all your needs. <br></br>
      Select your service, location & slot and you will be booked with the appointment of your choice,<br></br>
       making your day hassle free. Keep track of your booking details via email updates, so you do not miss any!

    </h3>
    
      
</div>
</div>

  )
}

export default Login
