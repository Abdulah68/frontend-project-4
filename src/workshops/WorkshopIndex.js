import React, { Component } from 'react';

import {index , destroy } from "./api"

class WorkShopIndex extends Component{

    state = {
 
        workshops:[]
    }
componentDidMount(){
    const user = this.props.user
    index(user)
    .then((response)=>{
      const workshops = response.data.workShops
      console.log(workshops)
      this.setState({
        workshops : workshops
      })
    })
    .catch(error =>console.log(error))
}
destroy = (id) => {
    const user = this.props.user

    destroy(user , id)
    .then(() => alert('Delete'))
    .then(()=>{
        const workshops = this.state.workshops.filter((workshop)=> workshop._id !==id)
        this.setState({ 
            workshops: workshops
        })
    })
}
    render(){
        return(
            <div className="wo">
                {this.state.workshops.map((workshop, index)=>(
                    <div key={index}>
                    <img src={this.state.image} alt="" height="200"width="200"></img>
                    <h3>title: {workshop.title}</h3>
                    <h3>Date:{workshop.date}</h3>
                    <h3>location: {workshop.location}</h3>
                    <button onClick={()=> this.destroy(workshop._id)}>Delete</button>
                    
                    </div>
                
                ))}

            </div>
        )
    }
}

export default  WorkShopIndex