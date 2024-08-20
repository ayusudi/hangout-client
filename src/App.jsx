import './App.css'
import { Outlet } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {

  return (
    <GoogleOAuthProvider clientId="520895525376-jma50qgm7mlhl1rpdhsa91ded7kv5fvp.apps.googleusercontent.com">
      <section className=''>
        <Outlet />
      </section>
    </GoogleOAuthProvider>
  )
}

export default App
