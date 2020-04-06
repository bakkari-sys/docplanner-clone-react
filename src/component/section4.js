import React from 'react'



const Sec4 = props => {

       
        return (
               
        <section id="section4" >
               <div class="container">
                    <div class="left-side">
                            <h4>The world's<br/> biggest healthcare platform</h4>
                            <p>We work from 6 offices all over the world, bringing Docplanner<br/> Group to life in almost 20 countries</p>
                    </div>
                    <div class="right-side">
                    {props.mincard.map((element, index) => (
                            (index==0 || index==2) ?(
                                 <div className="card-section4 " style={props.style}>
 
                                        <img src={element.image}/>
                                        <h5>{element.h5}</h5>
                                        <p>{element.p} </p>
                                 </div>    
                                ):(
                                        <div className="card-section4 ">
        
                                        <img src={element.image}/>
                                        <h5>{element.h5}</h5>
                                        <p>{element.p} </p>
                                        )
                                        
                                         </div>    
                                ))
                                )}
                            
                                               
                            </div>   
               </div>

           </section>
                    
           
        )
    
}
export default Sec4;