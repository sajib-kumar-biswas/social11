import  './login.scss';

export default function Login() {
  return (
    <div className='login'>
      <div className="card">
          <div className="left">
            <h1>Hello World.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus delectus ipsum esse suscipit. Quis molestias ad exercitationem itaque iure?</p>
            <span>Don't have an account?</span>
            <button type='button'>Register</button>
          </div>

          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" name="username" id="" placeholder='Username' />
              <input type="password" name="password" id="" placeholder='Password' />
              <button type="button">Login</button>
            </form>
          </div>
      </div>
    </div>
  )
}
