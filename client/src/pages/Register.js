import { useState, useEffect } from 'react';
import { Logo,FormRow ,Alert} from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
};
// if possible prefer local state
// global state
const Register = () =>  {
   // global context and useNavigate later
   const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

 
const {user ,isLoading,showAlert,displayAlert, registerUser,loginUser,setupUser} = useAppContext()

  const toggleMember = () =>{
    setValues({...values,isMember:!values.isMember})
  }
  const handleChange = (e) => {
    setValues({...values,[e.target.name] : e.target.value })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {name,email,password,isMember} = values
    if(!email || !password ||(!isMember && !name))
    {
      displayAlert()
      return
    }
    const currentUser = {name,email,password}
    if(isMember)
    {
      //console.log('login');
      setupUser({currentUser,endPoint: 'login',alertText: 'Login Successful! Redirecting...'})
    }else{
      setupUser({currentUser,endPoint: 'register',alertText: 'User Created! Redirecting...'})
    }
   // console.log(values)
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);


  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : 'Register'}</h3>
        {showAlert && <Alert/>}

        {/* name field */}
        {!values.isMember
        &&  (<FormRow 
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange} 
            />)
        
        }
        
         {/* email field */}
         <FormRow 
               type="email"
               name="email"
               value={values.email}
               handleChange={handleChange} 
          />
         {/* password field */}
         <FormRow 
               type="password"
               name="password"
               value={values.password}
               handleChange={handleChange} 
        />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet' : 'Already a member?'}
          <button disabled={isLoading} type='button' onClick={toggleMember}
            className='member-btn'>
              {values.isMember ? 'Register' : 'Login' }
            </button>
        </p>
      </form>
    </Wrapper>
  );
}


  export default Register;