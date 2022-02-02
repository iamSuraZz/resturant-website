import React from 'react';

const Navbar = ({filterItem, menuList}) => {
  return( 
  <>

<nav className="navbar">
      <div className="btn-group">
          {
              menuList.map(()=>{
                  return (<button className="btn-group__item" 
              onClick={()=>filterItem("breakfast")}>Breakfast</button>);
              })
            }
                  
      </div>
  </nav>

  </> 
  );
};

export default Navbar;
