import React from 'react'



const Destination = props => {

       
        return (
               
                <section id="section6" class="container">
                      {props.worldcard.map((element, index) => (
                               <div class="card6">
                                       <a href=""> <img src={element.image} /></a>
                                       <div class="card-title">
                                                <p>{element.p}</p>
                                                <button>See openings</button>
                                        </div>
                                </div>
                                )
                                )}
                        
                       
                </section>
                    
           
        )
    
}
export default Destination;
