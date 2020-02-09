import React, { Component } from 'react';

import {index , destroy } from "./api"

import {Link } from 'react-router-dom'

class WorkShopIndex extends Component{

    state = {
 
        workshops:[],
        clicks:0
    }
componentDidMount(){
    const user = this.props.user
    index(user)
    .then((response)=>{
      const workshops = response.data.workShops
    //   console.log(workshops)
      this.setState({
        workshops : workshops
      })
    })
    .catch(error =>console.log(error))
}
handleClick() {
    this.setState((prevState) => ({
         clicks: prevState.clicks + 1
    }));
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
            <div className="container">
                <div className="row">
                
                {this.state.workshops.map((workshop, index)=>(
                    <div className="col-md-4">
                    <div key={index} className="card">
                    <img  className="card-img-top" src={workshop.image} alt="png" height="200"width="200"></img>
                    <div className="card-body">
                    <h4 className="card-title">{workshop.title}</h4>
                    <p className="card-title">  {workshop.date}</p>
                    {/* <p className="card-title">{workshop.time}</p> */}
                    <p> {workshop.location}</p>
                    </div>
                    <div className="btn-group">
                    <button  className="btn btn-danger" onClick={()=> this.destroy(workshop._id)}>Delete</button>
                    <Link className="btn btn-secondary"  to={`/workshops/${workshop._id}/edit`}>Update</Link>
                    {/* <Link className="btn btn-secondary" to={`/workshops/${workshop._id}`}>Show</Link> */}
                    {/* <button className="btn btn-secondary" onClick={this.handleClick.bind(this)}> {this.state.clicks} persons</button> */}
                    </div>
                    </div>
                    </div>
                ))}

            </div>
            
            </div>
            
        )}}

export default WorkShopIndex