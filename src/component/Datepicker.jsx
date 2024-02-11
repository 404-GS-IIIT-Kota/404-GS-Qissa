import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative w-2/5">
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        className="w-full px-4 py-2 ml-5 border rounded-md focus:outline-none focus:border-blue-500 border-gray-300"
        placeholderText="Your Birthday"
      />
    </div>
  );
};

export default Datepicker;