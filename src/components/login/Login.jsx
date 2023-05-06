import '..//..//styles/login/Login.css'

const Login = () => {

return(

<div className="login-page">
  <section className='header'>
    <div onClick={""} className='back-div'>
      <div className='back-button'></div>
    </div>
    <div className='signin'>Sign in</div>
    <div className='test'></div>
  </section>

  <section className="header-section">

    <h2>Welcome!</h2>
    <h4>Sign in to continue</h4>

  </section>

  <section className="credentials-section">

    <div className="email-border">
      <div className='email-text'>
        EMAIL
      </div>
      <input type="text" />
    </div>

    <div className="password-border">
      <div className='password-text'>
        PASSWORD
      </div>
      <input type="text" />
    </div>
    
  </section>

  <section className='help-section'>

    <div className='remember-me'>
      <input type="checkbox" className='check'/>
      Remember me
    </div>

    <button className='forgot-password'>Forgot password?</button>

  </section>

  <button className='signin-button'>Sign in</button>


  <section className='signup-section'>
    Don't have an account?
    <button className='signup-button'>Sign up.</button>

  </section>
</div>
)
};


export default Login;