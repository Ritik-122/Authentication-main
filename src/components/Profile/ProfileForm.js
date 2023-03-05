import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import NoteContext from '../../store/context';
import { useHistory } from 'react-router-dom';
const ProfileForm = () => {
  const enteredPassword=useRef()
  const AuthContext=useContext(NoteContext)
  const history=useHistory()
  const submitHandler=(e)=>{
    e.preventDefault()
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyATIKSUGO-VOInVAzf2pwNXWquajj3hm_8',{
      method:"POST",
      body:JSON.stringify({
        idToken:AuthContext.token,
        password:enteredPassword.current.value,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      if(res.ok){
        history.replace('/')
        return res.json().then((data)=>{
          console.log('Password changed successfully',data)
        })

      }else{
        return res.json().then((data)=>{
          let errorMessage = "Password Change Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
        })
      }
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={enteredPassword} />
      </div>
      <div className={classes.action}>
        <button >Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
