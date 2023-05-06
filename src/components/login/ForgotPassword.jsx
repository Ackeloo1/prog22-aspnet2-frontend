import '..//..//styles/login/Login.css'

const ForgotPassword = () => {

  return(<>
    <div className='login-page'>
    <section className='header'>
    <div onClick={""} className='back-div'>
      <div className='back-button'></div>
    </div>
    <div className='signin'>Forgot password</div>
    <div className='test'></div>
  </section>



  <section className="credentials-section">

    <div className="email-border">
      <div className='email-text'>
        EMAIL
      </div>
      <input type="text" />
    </div>

    <button className='signin-button'>SEND</button>

  </section>  

</div>
  </>)
  
}

export default ForgotPassword;