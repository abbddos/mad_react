import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

const ProjNames = [
    {
        Code: "CS:1234",
        StartDate: "12/10/2014",
        EndDate: "11/10/2015",
        Location: "Rural Damascus",
        Managers: ["Abdo", "Dima"],
        Description: "This is a WASH project that is supposed to serve several villages in Rural Damascus"
    },
    {
        Code: "CS:2256",
        StartDate: "15/04/2015",
        EndDate: "14/04/2016",
        Location: "Homs",
        Managers: ["Abdo", "Dima"],
        Description: "This project aims to repair damaged houses in Old Homs district to help returnees settle down in their homes."
    }
]
    
class Cards extends Component{
 

    render(){
        return(
            <div>
                <div className="search-n-create">
                    <button className = "btn-outline" onClick = {this.Clicker}>Create New Project</button>
                    <input  className = "search-bar" type = "text" placeholder = "search" name ='srch'/>
                </div>
                <div className = "cards-container">
                    {ProjNames.map((item, index) =>{
                        return(
                            <div className = "card" key = {index}>
                                <h2 className = "card-title">{item.Code}</h2>
                                <table className = 'card-info'>
                                    <tr>
                                    <td className = 'card-info-title'><p>Start Date:</p></td>
                                    <td><p>{item.StartDate}</p></td>
                                    </tr>
                                    <tr>
                                    <td className = 'card-info-title'><p>End Date:</p></td>
                                    <td><p>{item.EndDate}</p></td>
                                    </tr>
                                    <tr>
                                    <td className = 'card-info-title'><p>Location</p></td>
                                    <td><p>{item.Location}</p></td>
                                    </tr>
                                    <tr>
                                    <td className = 'card-info-title'><p>Managers:</p></td>
                                    <td><p key = {index}>{item.Managers.map((itm, ky) =>{
                                        return <span key = {ky}>{itm}, </span>
                                    })}</p></td>
                                    </tr>
                                    <tr>
                                    <td className = 'card-info-title'><p>Description:</p></td>
                                    <td><p>{item.Description}</p></td>
                                    </tr>
                                    <tr>
                                    <td><Link><button className = "btn-normal">View Project</button></Link></td>
                                    <td><Link><button className = "btn-normal">Go!</button></Link></td>
                                    </tr>
                                </table>
                            </div>
                        )
                        
                    })}
                </div>
            </div>
        )
    }
}

export default Cards;