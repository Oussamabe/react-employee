import React, { Component } from "react";  
import axios from 'axios'
import { Link } from 'react-router-dom';


export default class Client extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clients: [],    
    
            
    }

}

 
componentDidMount() {
  axios.get(`http://127.0.0.1:8000/api/clients`)
    .then(res => {
      const clients = res.data;
      this.setState({ clients });
    })
}


deleteExpense() {
  axios.delete('http://127.0.0.1:8000/api/clients/' + this.props.client.id)
      .then((res) => {
          console.log('Expense removed deleted!')
      }).catch((error) => {
          console.log(error)
      })
}

  // MoneySysService.searchPorteurs(this.state.cmp_RIB).then( res => {
  //   this.setState({  porteurs: res.data});
  //   })



  


 

  render() {

    // const {porteurs} =this.state;
 

    return (
      <div>
        <div className="money-acceuill mt-2 px-3 py-3">
          <h3>Porteurs :</h3>
          

          <h3>Liste des Porteurs :</h3>

          <table className="table table-bordered table-striped mt-5">
                                <thead>
                                  <tr>
                                    
                                    <th scope="col">N de compte</th>
                                    <th scope="col">nom et prenom</th>
                                    <th scope="col">CIN</th>
                                    <th scope="col">Sexe</th>
                                    <th scope="col">Banque</th>
                                    <th scope="col">Agence</th>
                                  </tr>
                                </thead>
                                <tbody>
                                {
                                   this.state.clients.map(
                                        client => 
                                        <tr>
                                             {/* <td> {client.name} </td> */}
                                            <td> {client.first_name} </td>
                                             <td> {client.last_name} </td>   
                                             <td> {client.address}</td> 

                                             <td>
                                                 
                                             
                                                 <button onClick={this.deleteExpense} size="sm" variant="danger">Delete</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                              </table>





        </div>
      </div>
    );
  }
}
