import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { show } from "./api";

class WorkShopShow extends Component {
    state = { 
      workshops: []
     }

     componentDidMount() {
        const user = this.props.user
        const workshopId = this.props.match.params.id 
        show(user, workshopId)
        .then( response => {
            const workshop = response.data.workshop
            this.setState({
              workshop: workshop
            })
        })
        .catch(error => console.log(error))
     }
     handleClicks(){this.handleClicks.bind(this);
      this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
      }));
  }
    
    render() { 
        
        return ( 
          <div>
          {this.state.workshops.map((workshop, show)=>(
            <div>
                
                <img src={this.state.workshop.image} alt=""/>
                <p>title: {this.state.workshop.title} </p> 
                <p>Date: {this.state.workshop.date} </p> 
                <p>time: {this.state.workshop.time}</p>
                <p>location: {this.state.workshop.location}</p>
                <button className="btn btn-secondary" onClick={ this.handleClicks.bind(this)}>
                 {this.state.isToggleOn ? 'ON' : 'OFF'} </button>
                
            </div>
          ))}
          </div>
         )
    }
}
 
export default withRouter(WorkShopShow)