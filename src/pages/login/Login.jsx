import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../reduces/productSlice';

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState()
  const dispatch = useDispatch()
  const user = useSelector(state => state.productSlice.users)
  console.log("user: ", user)

  const handlerUser = (ev) => {
    setUsername(ev.target.value)
  }

  const handlerPassword = (ev) => {
    setPassword(ev.target.value)
  }
  const handleSubmit = () => {
    dispatch(addUser({
      id: uuidv4(),
      username: username,
      password: password
    }))
  };
  return (
    <div className='contain'>
      <Navbar />
      <div id='form_login'>
        <form onSubmit={handleSubmit}>
          <input value={username} onChange={handlerUser} type='text' placeholder='Username' /><br />
          <input value={password} onChange={handlerPassword} type='password' placeholder='Password' /><br />
          <button type='submit'>Đăng nhập</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login