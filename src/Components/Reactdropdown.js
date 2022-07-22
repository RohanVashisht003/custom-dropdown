import React from 'react'
import Dropdown from 'react-dropdown';
function Reactdropdown() {
    const options = [
        'one', 'two', 'three'
      ];
      const change = ((e)=>{
        // e.target.style.background = 'red';
        e.target.classList.add('Dropdown-menu');
      })
      const remove = ((e)=>{
        e.target.classList.remove('Dropdown-menu');
      })
  return (
    <div>
        <button onMouseOver = {change} onMouseLeave={remove}>Hello</button>
        <Dropdown options={options}  placeholder="Select an option" onMouseOver = {change}/>
    </div>
  )
}

export default Reactdropdown