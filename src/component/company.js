import React from 'react'



const Company= props => {

       
        return (
               
                <section id="section3" class="container">
                        <h3>We are a global<br/> company<br/>    with local culture</h3>
                        <div class="parteners">
                                <ul className="brands">
                                        {props.image.map((element,index)=> (
                                              <li><a href={element.href}><svg width={element.svg.width} height={element.svg.height} xmlns={element.svg.xmlns} viewBox={element.svg.viewBox}><path d={element.path.d}></path> </svg></a> </li>
                                        
                                        )
                                        )}
                                        
                                </ul>

                        </div>
                 </section>
                
                
                    
           
        )
    
}
export default Company;