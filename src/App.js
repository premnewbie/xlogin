import {useState} from 'react';
import './App.css';

function App() {
  const [user,setUser] = useState('');
  const [password,setPassword] = useState('');
  const [valid,setValid] = useState(true);
  const [loggedIn,setLoggedIn] = useState(false);

  const handleValidation = (e) => {
    e.preventDefault();
    if(user!=='user' || password!=='password'){
      setValid(false);
    } else{
      setLoggedIn(true);
      setValid(true);
    }
  }

  return (
    <div className="App">
      <h1>Login Page</h1>
      {!valid && <p>Invalid username or password</p>}
      {!loggedIn && <form onSubmit={(e)=>handleValidation(e)}>
        <div>
          <label>Username:</label>
          <input type='text' required onInput={(e)=>setUser(e.target.value)}/>
        </div>
        <div>
          <label>Password:</label>
          <input type='password' required onInput={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
      </form>}
      {loggedIn && <p>Welcome, user!</p>}
    </div>
  );
}

export default App;
