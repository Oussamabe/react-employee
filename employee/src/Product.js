import axios from "axios"; 
import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      id : ''
    };

    this.deleteRow = this.deleteRow.bind(this);
  }

  getname = name =>{
    console.log("bonjour from react" , name)
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/clients").then((res) => {
      const clients = res.data;
      this.setState({ clients });
    });
  }

  deleteRow(id, e){  
    axios.delete(`http://127.0.0.1:8000/api/clients/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const clients = this.state.clients.filter(client => client.id !== id);  
        this.setState({ clients });  
      })  
    
  }  

  render() {
    const { clients  } = this.state; 
    return (
      <div>

        <button className="btn btn-success" onClick={ this.getname.bind(this , 'oussama') }>getname</button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <th scope="row">1</th> 
                <td>{client.first_name}</td>
                <td>{client.last_name}</td>
                <td>{client.address}</td>
                <td>
                <Link className="edit-link" to={'/editclient/'+client.id}>
                                               <button className="btn btn-success">Edit</button>
                                               </Link>
                  <button  onClick={(e) => this.deleteRow(client.id, e)} size="sm" className='btn btn-success'>Delete</button>
                </td>
              
                 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
