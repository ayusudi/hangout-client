import './App.css'
import { Outlet } from "react-router-dom";
function App() {

  return (
    <section className=''>
      <Outlet />
    </section>
  )
}

export default App
