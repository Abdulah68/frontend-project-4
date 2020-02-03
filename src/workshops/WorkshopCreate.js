import React, { Component } from 'react';
import {create} from './api'
import {withRouter} from 'react-router-dom'

class WorkShopCreate extends Component{
    
    state={
        workshopForm:{
        image: "",
        title: "",
        date: "",
        location: ""
        }
    }
    
handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
   const newForm = Object.assign(this.state.workshopForm)
        newForm[name] = value;
        this.setState({
            workshopForm:newForm
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const newWorkshop = this.state.workshopForm
        const user = this.props.user
        // console.log(user,newWorkshop)
        create(user,newWorkshop)
        .then((res) => {
            alert('created')
            // console.log(res)
        })
        .then(() => this.props.history.push('/workshops'))
        .catch((error) => console.log(error))
    }

render(){
return(
<div>
<h3>Create New WorkShop</h3>
<form onSubmit={this.handleSubmit}>
    <label>Image</label>
 <input 
    name="image"
    type="text"
    value={this.state.workshopForm.image}
    onChange={this.handleChange}
  />
<br/>
<label>Title</label>
<input 
name="title"
type="text"
value={this.state.workshopForm.title}
onChange={this.handleChange}
 />
 <br/>
<label>Date</label>
<input 
name="date"
type="text"
value={this.state.workshopForm.date}
onChange={this.handleChange}
/>
<br/>
<label>Location</label>
 <input 
name="location"
type="text"
value={this.state.workshopForm.location}
onChange={this.handleChange}
/>
<br/>
<button type="submit">Create</button>
 </form>
</div>
)}}

export default withRouter(WorkShopCreate)
