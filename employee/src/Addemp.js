import axios from 'axios';
import React, { Component } from 'react'

export default class Addemp extends Component {

    constructor(props){
        super(props);

        this.state ={
            first_name : '',
            last_name : '' , 
            address : ''
        }

        // this.submitform = this.submitform.bind(this) 

        // if you create function fleche you can't bind the methode 
        // if you create simple function you must bind the parameter
    }

    changeInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitform = (e) => {
        e.preventDefault(); 
     const clients = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      address: this.state.address
    };
    axios.post('http://127.0.0.1:8000/api/clients/', clients)
      .then(res => console.log(res.data));
    console.log(`Expense successfully created!`);
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Amount: ${this.state.amount}`);
    // console.log(`Description: ${this.state.description}`);

    this.setState({ first_name : '' , last_name : '' , address : ''})
  
    }

    render() {
        const { first_name  , last_name ,address}  = this.state;
        return (
            <div>
                
                <h4>ajouter nv client</h4>

                <div className="container">
                <form action="" onSubmit={this.submitform}>
                <div class="form-group">
                  <label>nom</label>
                  <input type="text" class="form-control" name="first_name" value={first_name} onChange={this.changeInput}  placeholder="Enter nom"/> 
                </div>

                <div class="form-group">
                  <label>prenom</label>
                  <input type="text" class="form-control" name="last_name"value={last_name} onChange={this.changeInput}  placeholder="Enter prenom"/> 
                </div>

                <div class="form-group">
                  <label>age</label>
                  <input type="text" class="form-control" name="address" value={address} onChange={this.changeInput}  placeholder="Enter age"/> 
                </div>

                <input type="submit" name="btn" className="btn btn-success"/>
                </form>
                </div>
            </div>
        )
    }
}
