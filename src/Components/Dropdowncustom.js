import React, { useState } from 'react';


function Dropdowncustom(props) {
// destructuring props
 const{options, selected,setSelected} = props;
//  state to show or hide options
 const [isActive,setIsActive] = useState(false);
  
  return (
    // component main container
    <div className='main-container'>
      {/* dropdown heading */}
      <h4>Should you use a dropdown?</h4>
      {/* dropdown button */}
      <div className='dropdown-btn'
            onMouseOver={(e)=>setIsActive(!isActive)}
            onClick = {(e)=>setIsActive(!isActive)}>
              {/* show text */}
          {selected}
          {/* down arrow icon */}
          <span className='fa fa-caret-down'></span>
      </div>

{/* conditional rendering */}
      {isActive && (
        // dropdown options container
        <div className='dropdown-content'>
          {/* traversing array for options*/}
          {options.map((option,index)=>{
            return(

              <div className="dropdown-item"
              key={index} 
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}>
                {option}
              </div>

            )
          })}
        </div>
      )}
    </div>
  )
}

export default Dropdowncustom;