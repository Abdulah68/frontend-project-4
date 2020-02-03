import React, { Component } from 'react';

import {show } from './api'

class WorkShopShow extends Component{
    state = {
 
        workshops:[]
    }
    componentDidMount(){
    const user = this.props.user
    show(user)
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
        // const workshopObj = this.props.workShops
        return(
            <div className="show">
        <img src={this.state.image} alt="" height="200"width="200"></img>
        <h2>{this.state.title}</h2>
        <h2>{this.state.date}</h2>
        <h2>{this.state.location}</h2>        
        
        </div>
        )
    }
}

export default WorkShopShow