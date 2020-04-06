import React from 'react'



const Introduction = props => {

  
        return (
            <section id="introduction" class="container">

                       <div>
                            <img src={props.description[0].src} alt={props.alt} />
                            <h1>{props.description[1].h1}</h1>
                            <div className="paragrahes">
                                    <p>{props.description[2].p}</p>
                                    <p>{props.description[2].p}</p>
                                     
                            </div>
                        </div>


                    
            </section>
        )
    
}
export default Introduction;