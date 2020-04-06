import React, { Component } from 'react'



export default class Sec2 extends Component {

        render() {
            return (
               
                                 <div>
                                        <span>{this.props.card[0].span} </span> 
                                        <h2> {this.props.card[1].h2}</h2>
                                        <select>
                                                {this.props.card[2].option.map((element,index)=> (
                                        
                                                        <option>{element.title}</option>
                                                )                               
                                                )}
                                        </select>
                                        <img className="computer_figure" src={this.props.image} />   
                                 </div>
                                 )}
                               

                       
                
                
                    
            
        
    }