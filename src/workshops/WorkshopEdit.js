import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';

class WorkshopEdit extends Component{
    state={
        workshopForm:{
        image: "",
        title: "",
        date: "",
        location: ""
        }
    }

    componentDidMount(){
        const user = this.props.user;
        const workshopId = this.props.match.params.id;
        show(user,workshopId)
        .then((response) => {
            const workshop = response.data.workshop
            this.setState({
                workshopForm:workshop
            })
        })
        .catch(error => console.log(error))
    }


    handleChange = (event) => {
        //get the name of input
        const name = event.target.name;
        // get the value of input
        const value = event.target.value;
        const newForm = Object.assign(this.state.workshopForm)
        newForm[name] = value;
        this.setState({
            workshopForm:newForm
        })
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.props)
        const user = this.props.user;
        const workshopId = this.props.match.params.id;
        const updateWorkshop = this.state.workshopForm;
        update(user,updateWorkshop,workshopId)
        .then(() => this.props.history.push(`/workshops/${workshopId}`))
        .catch((error) => console.log(error))
    }


    render(){
        // console.log(this.props)
        return(
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

     <button type="submit">Update</button>
        </form>
        )
    }
}



export default withRouter(WorkshopEdit)