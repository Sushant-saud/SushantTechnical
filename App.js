/*
varible not used in react mostly
import React from 'react'
function App() {
  let data='anil';
  function updateData(){
    data="hello"
    alert(data);
  }
  return (
    <>
    <div>
      <button onClick={updateData}>update data </button>
      {data}
    </div>
    </>
  )
}
/

export default App;
---------state in functional component-------------
import React, { useState } from 'react'

function App() {
  const [val,setval]=useState(0);
  const handle=()=>{
    setval(val+1);
  }
  return (
   <>
    <h1>{val}</h1>
    <button onClick={handle}>click me</button>
   </>
  )
}
//varible wont rerender its got freeze
export default App
----------state in class component
import React,{Component} from "react";
class App extends Component{
  constructor(){
super();
this.state={
data:1,
   }
}

 handle(){
  this.setState({data:this.state.data+1});
}

  render()
  {
    return(
    <>
<div className="App">
<h1>{this.state.data}</h1>
<button onClick={()=>this.handle()}>click me</button>
</div>
    </>
    )
  }
}
export default App;
-------------props-----------functional component-----------
import React from 'react'
import Student from './student';
import Obj from './obj';
function App() {
  return (
   <>
   <Student name="sushant" roll="44"/>
   <Student name="saud" roll="33"/>
   <Obj other={{adress:"tkp",mobile:"445"}}/>
   </>
  )
}

export default App
--------------------------------------------
==========>>Get Input Box value===========>>>
import React, { useState } from 'react'
function App() {
  const [data,setdata]=useState();
  const [print,setprint]=useState();
  function getdata(e){
  
     setdata(e.target.value);
     setprint(" ");
     
     
  }
  function put(){
    setprint(data);
  }
  return (
   <>
   <div className='App'>
     <h1>Get Input Box Value</h1>
     <input type="text" onChange={getdata}/>
     <h1>{print}</h1>
     <button onClick={put}>cick me</button>
    
   </div>
   </>
  )
}

export default App;
------hide show toggle------------
import React, { useState } from 'react'

function App() {
  const [status,setstatus]=useState();
  return (
   <div>{
     status ? <h1>Hello World!</h1>:null
        }
     <button onClick={()=>{setstatus(true)}}>Show</button>
     <button onClick={()=>{setstatus(false)}}>hide</button>
      
      <button onClick={()=>setstatus(!status)}>Toggle</button>
   </div>
  )
}

export default App
------------basic form--------------
import React, { useState } from 'react'

function App() {
  const[data,setdata]=useState();
  const[tnc,settnc]=useState();
  const[interest,setinterest]=useState();
  function getformdata(event){
      event.preventDefault();
      console.warn(data,tnc,interest);
  }
  return (
    <div className='App'>
   <h1>Handle form in React</h1>
   <form onSubmit={getformdata}>
     <input type="text" placeholder='enter name' onChange={(e)=>setdata(e.target.value)}/><br></br><br></br>
     <select onChange={(e)=>setinterest(e.target.value)}>
       <option>Select option</option>
       <option>Marvel</option>
       <option>Dc</option>
     </select>
     <input type="checkbox" onClick={(e)=>settnc(e.target.value)}/><span>Accept Terms and Condition</span>
     <br></br>
     <button type="submit">Submit</button>
   </form>
    </div>
  )
}

export default App
=============rendering conditional----------------
import React from 'react';
import Profile from './profile';
function App() {

  return (
    <div>
 <Profile/>
    </div>
  )
}

export default App
---------
function Profile() {
    //const[loggedIn,setlog]=useState(3)
    let loggedIn=3;
    return(
        <>
        {loggedIn===1 ? <h1>Welcome Anil</h1>:
         loggedIn===2 ? <h1>wekcome hari</h1>:
         <h1>Welcome to guest</h1>}
        </>
    )
}
export default Profile;
------------------form validation-------------
life cycle in react js
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();//to call parend constructor not life cycle part
    this.state={ //first called when class is called ,before ready html contructor created it is use to create states
      data:"Anildssssssssssssssssss",//first constructor called
      //api are  not called is 
    }
  }
  render() {
    return (
     <h1>hello{this.state.data}</h1>//second render
    )
  }
}
Render life cycle Method


import React from 'react'
import Profile from './profile'
function App() {
const [name,setName]=React.useState("Anil")

  return (
    <div className="App">
     <h1>Render Method in React</h1>
     <Profile name={name}/>
     {<button onClick={()=>setName("Sidhu")}>Update Name</button>}
    </div>
  );
}

export default App;
hook usestate----------------------------------
import React, { useState } from 'react'

function App() {
  const[data,setdata]=useState("anil");
  return (
    <>
    <div>Hello {data}</div>
    <button onClick={()=>setdata("rahul")}>Updata </button>
    </>
  )
}

export default App
UseEffect-------------------------------------
import React, { useEffect, useState } from 'react';
function App() {
  useEffect(()=>{
console.warn("hi useeffectt");
  })
  const [data,setcount]=useState(0);
  return (
    <>
    <div>{data}</div>
    <button onClick={()=>{setcount(data+1)}}>Upadete</button>
    </>
  )
}
useeffct with specific condition
import React, { useEffect, useState } from 'react'

function App() {
  const [data,setdata]=useState(100);
  const [count,setcount]=useState(100)
  useEffect(()=>{
    console.warn("use Effect called");
  },[data])
  useEffect(()=>{
    console.warn("use effect called for count");
  },[count])
  return (
   <>
   <h1>Count:{count}</h1>
   <h1>data:{data}</h1>
<button onClick={()=>{setcount(count+1)}}>Upadete Count</button>
<button onClick={()=>{setdata(data+1)}}>Upadete data</button>
   </>
  )
}

export default App

useffect=========================props
can we use usestate inside useffect
ans:yes
---------------
<component-1></component-1>
import React, { useEffect } from 'react'
function Profile(props) {
    useEffect(()=>{
        console.warn("i k use efffdf");
    },[props.data])
  return (
   <>
<h1>Data:{props.data}</h1>
<h1>Count:{props.count}</h1>
   </>
  )
}
export default Profile;
------parent component----

import React, { useState } from 'react'
import Profile from './profile';
function App() {
  const[data,setdata]=useState(10);
  const[count,setcount]=useState(23);
  return (
 <> 
 <Profile data={data} count={count}/>
 <button onClick={()=>{setcount(count+1)}}>Upadete Count</button>
 <button onClick={()=>{setdata(data+1)}}>Upadete data</button>
 </>
  )
}

export default App
bootstap-----------in react
import React from 'react';
import './style.css';
import style from './customeStyle.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
   <>
<div className='primary'>
<h1 style={{backgroundColor:"red"}}>Hello dar</h1>
<hr></hr>
<h2 className={style.success}>my name us sus</h2>
<button className='btn btn-primary'>Click me</button>
</div>
   </>
  )
}

=============pure component==================as state
mport React,{PureComponent} from 'react';
 class App extends PureComponent {
  constructor(){
    super();
    this.state={
     count:1
    }
  }
  render() {
    console.warn("check redenering");
    return (
     <>
     <h1>Pure Component in React{this.state.count}</h1>
     <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Count</button>
     </>
    )
  }
}
export default App;

----------------using props --------------Pure component
import React, { PureComponent } from 'react';
import Profile from './profile';
//import Profile from './profile';
 class App extends PureComponent {
   constructor(){
     super();
     this.state={
       count:1
     }
   }
  render() {
    return (
      <>
      <p>{this.state.count}</p>
      <Profile count={this.state.count}/>
      <button onClick={()=>this.setState({count:this.state.count+9})}>Upadate Data</button>

      </>
    )
  }
}

export default App;
----------------
import React from 'react'

function Profile(props) {
    console.log("redddddddddd");
  return (
     <>
  <h1>child component</h1>
  <p>I got a paragraph {props.count}</p>
    </>
  )
}

export default Profile;
---------------useMemo--------
heps to improve performance.
It is same as Pure Component in  class.
some time in cas of state and props 
componet unwantly get rerender to
control it we use useMemo
-------------------memo------------
mport React, { useMemo, useState } from 'react'

function App() {
  const [count,setcount]=useState(0);
  const[item,setitem]=useState(10);
const  multiCountMemo= useMemo(()=>{

  console.log(count+1);
},[count])
  return (
   <>
   <div>
     <h1>useMemo Hook in react</h1>
     <h2>Count:{count}</h2>
     <h2>item:{item}</h2>
     <h2>{multiCountMemo}</h2>
     <button onClick={()=>{setcount(count+1)}}>Update Count{count}</button>
     <button onClick={()=>{setitem(item*10)}}>Update item {item}</button>
   </div>

   </>
  )
}

export default App

------------------higer order function-----------------
import React, { useState } from 'react'

function App() {
  return (
 <div>
   <h1 className="App">Higer Order Component</h1>
   <HOCred main={Counter}/>
   <HOCgreen main={Counter}/>
   
 </div>
  );
}

function HOCred(props){
  return(
<>
<h1>red card</h1>
<h2 style={{backgroundColor:"red",width:100}}><props.main/></h2>
</>
  )
}
function HOCgreen(props){
  return(
<>
<h1>green card</h1>
<h2 style={{backgroundColor:"blue",width:100}}><props.main/></h2>
</>
  )
}
function HOCblue(props){
  return(
<>
<h1>green card</h1>
<h2 style={{backgroundColor:"blue",width:100}}><props.main/></h2>
</>
  )
}

function Counter() {
  const [count,setcount]=useState(0);
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)}>Upadate</button>
    </>
  )
}
export default App;

======================================================usememo
import React,{useState,useMemo} from 'react'
function App() {
  const [count,setcount]=useState(0);
  const[item,setitem]=useState(10);
 /*  const  multiCountMemo= useMemo(()=>{
       console.log(count+1);
},[count])

const result=useMemo(
  function multiCountMemo(){
    console.log("i m also called");
    return count+20;
  },[count,item]);

  return (
   <>
   <div>
     <h1>useMemo Hook in react</h1>
     <h2>Count:{count}</h2>
     <h2>item:{item}</h2>
     <h2>{result}</h2>
     <button onClick={()=>{setcount(count+1)}}>Update Count{count}</button>
     <button onClick={()=>{setitem(item*10)}}>Update item {item}</button>
   </div>
   </>
  )
}
export default App;
*/ 
import React,{BrowserRouter,Routes,Route} from 'react';
import Navbar from './navbar';
import User from "./user";
import Profile from './profile';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
<Routes>
<Route path="/" element={<Profile/>}/>
<Route path="/about" element={<Profile/>}/>
<Route path="/contact" element={<Profile/>}/>
<Route path="/user" element={<Profile/>}/>
</Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App