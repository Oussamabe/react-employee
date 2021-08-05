import React, { Component } from 'react'
import axios from 'axios'

export default class Editclient extends Component {

    constructor(props){
        super(props)

        this.state ={ 
            first_name : '',
            last_name : '',
            address : '', 
           
             
        }
    }

  async  componentDidMount() {
       const id = this.props.match.params.id;
       const res = await axios.get('http://127.0.0.1:8000/api/clients/' + id)
          this.setState({
            first_name : res.data.first_name,
            last_name : res.data.last_name,
            address : res.data.address
          })
      }


      changeInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    
      }

      submitform = (e) =>{
        e.preventDefault()

        const expenseObject = {
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            address : this.state.address
        };
    
        axios.put('http://127.0.0.1:8000/api/clients/' + this.props.match.params.id, expenseObject)
          .then((res) => {
            console.log(res.data)
            console.log('Expense successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
          
        // Redirect to Expense List 
        this.props.history.push('/produit')
      }
       



      render() {
        const { first_name  , last_name ,address}  = this.state;
        return (
            <div>

              <h1> ffff: {this.state.first_name}</h1>
 
            
                
                <h4>update  client</h4>

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
