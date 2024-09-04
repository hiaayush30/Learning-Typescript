import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/Reminder'
import { useState } from 'react'
 
function App() {
  const [items,setItems]=useState<Reminder[]>([
    {id:1,title:"yo"}
  ])
  const [loading,setLoading]=useState<boolean>(true);

  return (
    <div>
      LFG
      <button className='btn btn-primary'>Yo</button>
      <ReminderList items={items}/>
    </div>
  )
}

export default App
