import React, {Component} from 'react';
import {show,update} from './api';
import { withRouter} from 'react-router-dom';

class WorkshopEdit extends Component{
    state={
        workshopForm:{
        image: "",
        title: "",
        date: "",
        time:"",
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
        const name = event.target.name
        // get the value of input
        const value = event.target.value
        const newForm = Object.assign(this.state.workshopForm)
        // console.log(newForm)
        newForm[name] = value;
        this.setState({
            workshopForm:newForm
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(this.props)
        const user = this.props.user;
        const workshopId = this.props.match.params.id;
        const updateWorkshop = this.state.workshopForm
        // console.log(updateWorkshop)
    //     console.log(user,workshopId,updateWorkshop)
        update(user,updateWorkshop,workshopId)
        // .then(() => alert('updated sucessufly'))
        .then(()=>( this.props.history.push(`/workshops/${workshopId}`)) )
        .catch((error) => console.log(error))
    }


    render(){
        // console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
             <label for="formGroupExampleInput">Image</label>
             <input 
                name="image"
                type="text"
                className="form-control"
                value={this.state.workshopForm.image}
                onChange={this.handleChange}
              />
              </div>
            <br/>
            <div className="form-group">
            <label for="formGroupExampleInput">Title</label>
            <input 
            name="title"
            type="text"
            className="form-control"
            value={this.state.workshopForm.title}
            onChange={this.handleChange}
             />
             </div>
             <br/>
             <div className="form-group">
            <label for="formGroupExampleInput">Date</label>
            <input 
            name="date"
            type="date"
            className="form-control"
            value={this.state.workshopForm.date}
            onChange={this.handleChange}
            />
            </div><div classNam="form-group">
            <label for="formGroupExampleInput">Time</label>
            <input 
            name="time"
            type="time"
            className="form-control"
            value={this.state.workshopForm.date}
            onChange={this.handleChange}
            />
            </div>
            <br/>
            <div className="form-group">
            <label for="formGroupExampleInput">Location</label>
             <input 
            name="location"
            type="text"
            className="form-control"
            value={this.state.workshopForm.location}
            onChange={this.handleChange}
            />
            </div>
            <br/>
            <button className="btn btn-success" type="submit">Update</button>
             </form>
        )
    }
}



export default withRouter(WorkshopEdit)