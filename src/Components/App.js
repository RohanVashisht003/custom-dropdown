import { useState } from 'react';
import '../static/css/App.css';

import Dropdowncustom from './Dropdowncustom';

function App() {
  // all options
  const options = [
    "Delhi",
    "Rajasthan",
    "Madhya Pradesh",
    "Gujarat",
    "Maharashtra",
    "Uttar Pradesh",
    "Haryana",
];
// show selected on div
  const[selected, setSelected] = useState('Select One');

  return (
    // app container
    <div className="App">
      {/* app heading */}
       <h1 className="heading">Custom Dropdown</h1>
       {/* used dropdown component */}
      <Dropdowncustom
       options={options}   
       selected={selected}
       setSelected={setSelected}
      />
    </div>
  );
}

export default App;
