import React from 'react'


function NavBar(props) {
    return (
     <div className="main-nav">
            {props.nav.map(e => (    
                (e.source) && ( <div className="logo-nav">  <img className = "logo-nav-bar"  alt ="doc
                  planner logo" src = {e.source}/> </div>)))}

           <ul className="main-menu">
               {props.nav.map(e=>(
                 (!e.source && !e.submenu) && (<li><a>{e.title}</a></li>) ))}
               {props.nav.map(e=>(
                 (e.submenu) && (<li className="dropdown"><a>{e.title}</a>
                      <div className="dropdown-content">
             <ul className="list-dropdown-content">
                {props.nav.map(e => (
                    (e.submenu) && (e.submenu.map(e =>(<li><a>{e}</a></li> )))))}
             </ul>
        </div>                               
                 </li>) ))}
           </ul>   
       
        
   </div>
    )
}

export default NavBar;