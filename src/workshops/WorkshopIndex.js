import React, { Component } from 'react';

import {index} from "./api"

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
    render(){
        return(
            <div className="j">
                {this.state.workshops.map((workshop, index)=>(
                    <div key={index}>
                    <h3>title: {workshop.title}</h3>
                    <h3>Date:{workshop.date}</h3>
                    <h3>location: {workshop.location}</h3>
                    </div>
                
                ))}

            </div>
        )
    }
}

export default  WorkShopIndex