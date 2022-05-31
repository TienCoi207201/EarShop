import React from 'react'

const Login = () => {
  return (
    <div className='contain'>
      <form>       
        <input type='text' placeholder='Username'/><br/>
        <input type='password' placeholder='Password'/><br/>
        <button>Đăng nhập</button>
      </form>
    </div>
  )
}

export default Login