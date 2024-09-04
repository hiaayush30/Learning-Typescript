import Reminder from '../models/Reminder'


interface ReminderListProps{
    items:Reminder[];
}

const ReminderList = (props:ReminderListProps) => {
  return (
    <div>
      {props.items.map(item=>{
        return(
          <li key={item.id}>{item.title}</li>
        )
      })}
    </div>
  )
}

export default ReminderList
