import React, { useContext, useEffect, useState } from 'react'
import firebase from "firebase/app";
import './Login.css';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userInfoContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [errors, setErrors] = useState({forName:'', forEmail:'', forPass: '', isError:false})
    const [userInfo, setUserInfo] = useState({
        name:"",
        email:"",
        password:"",
    })
    const [userDetails, setUserDetails] =useState({email:''})
    const [user, setUser] = useState('');
    const [success, setSuccess] = useState({msg:'', active:false})

    // from context
    const [loggedInUser,setLoggedInUser] = useContext(userInfoContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const BlurHandler = (e) => {
        if(e.target.name === 'name'){
            setUserInfo({
                ...userInfo, name:e.target.value
            })
        }
        if(e.target.name === 'email'){
            setUserInfo({
                ...userInfo, email:e.target.value
            })
        }
        if(e.target.name === 'password'){
            setUserInfo({
                ...userInfo, password:e.target.value
            })
        }
    }


const handleSignUp= () => {
firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    if(userInfo.name == '' || ' ' && userInfo.name.length <= 3){
        setErrors({...errors, forName:'You should use minimum 3 character!', isError:true})
    }
    else if(userInfo.password.length < 5 || userInfo.forPass === ''){
        setErrors({...errors, forPass:'Password is not valid!'})
    }
    else{
        setErrors({...errors, isError:false})
        setSuccess({msg:"Successfully Created.", active:true})

    }
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

 const handleSignIn = () => {
    firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      setLoggedInUser(userInfo)
      history.replace(from);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  
 }

 const stateChanger = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setUser(user)
          setUserDetails({email:user.email})
          console.log(user);
        } else {
            setUser('')
        }
      });
      
 }
 useEffect(() => {
     stateChanger();
 }, [])

    return (
      <section className='form-main-area'>
        <div className="form-area">
          <h3>User Sign {!isSignIn ? "Up" : "In"}</h3>
  
            {!isSignIn && (
              <div className="">
                <label htmlFor="name">Name:</label>
                <br />
                <input onBlur={BlurHandler} type="text" name="name" placeholder="User name" />
                {errors.isError? <span style={{color:'red'}}>{errors.forName}</span>:''}
                <br />
              </div>
            )}
            <label htmlFor="email">Email:</label>
            <br />
            <input onBlur={BlurHandler} type="email" name="email" placeholder="User email" />
            <br />
            <label htmlFor="password">Password: </label>
            <br />
            <input onBlur={BlurHandler}
              type="password"
              name="password"
              placeholder="User password"
            />
            {errors.isError? <span style={{color:'red', marginBottom:'5px'}}>{errors.forPass}</span>:''}
            <br />
            {!isSignIn ? (
              <button type="submit" className='button' onClick={handleSignUp}  >Sign Up</button>
            ) : (
              <button type="submit" className='button' onClick = {handleSignIn} >Sign In</button>
            )}
          {!isSignIn ? (
            <div className="form-info">
              <p>Already have an account? </p>{" "}
              <button onClick={() => setIsSignIn(true)}>Sign In</button>
            </div>
          ) : (
            <div className="form-info">
              <p>Create an account- </p>{" "}
              <button onClick={() => setIsSignIn(false)}>Sign Up</button>
            </div>
          )}
          {success.active ? <span style={{color:'green', fontSize:"17px", textAlign:'center'}}>{success.msg}</span>:""}
        </div>
      </section>
    );
}

export default Login;
