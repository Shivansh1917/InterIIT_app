import React, {useState} from 'react';
import './Calendar.css';

const Calendar = () => {
  const [Date,setDate] = useState('');

  const handleSubmit = event =>{
    console.log('handleSubmit ran');
    event.preventDefault();
    console.log("Date: ", Date);
  }

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <div className='total'>
                <label className='text'>Enter the date here</label>
                <input type="date" className="cal"
                  onChange={event => setDate(event.target.value)}
                />
                <button type="submit" className='sub'>Submit Date</button>
            </div>                       
        </form>
    </div>
  )
}

export default Calendar