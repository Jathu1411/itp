import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Header from './wardDocNav';
import Print from '../ward incharge/pdf'


const PatientAdd = (props) => (
  console.log("ID is " + props.clinicpres._id),
  
  <tr>
    <td>{props.clinicpres.name}</td>
    <td>{props.clinicpres.drugName}</td>
    <td>{props.clinicpres.quantity}</td>
    <td>{props.clinicpres.unit}</td>
    <td>
    <Button variant="success"
        onClick={() => {
          props.deleteClinicPres(props.clinicpres._id);
        }}
      >
        Delete
      </Button>
    </td>
  </tr>
  
);

class ViewcpresList extends Component {
  constructor(props) {
    super(props);

    this.state = { preslist: [] };
    this.deleteClinicPres = this.deleteClinicPres.bind(this);

    
   
  
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/wardprescription/")
      .then((response) => {
        this.setState({ preslist: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteClinicPres(id) {
    axios.delete("http://localhost:5000/api/wardprescription/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      preslist: this.state.preslist.filter((el) => el._id !== id),
    });
  }
   
   
  PresWholeList() {
    return this.state.preslist.map((currentpat) => {
      return (
        <PatientAdd
        clinicpres={currentpat}
        deleteClinicPres={this.deleteClinicPres}
          key={currentpat._id}
        />
      );
    });
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}} className='container'>
          <Header/>

        <Table striped bordered = {false} hover >
  <thead>
    <tr>
      <th>Name</th>
      <th>Drug name</th>
      <th>Quantity</th>
      <th>Unit</th>
      <th>Delete</th>



    </tr>
  </thead>
  <tbody>
    {this.PresWholeList()}
    <br/>
    <Print/>
  </tbody>{" "}
</Table>
      </div>
    );
  }
}

export default ViewcpresList;
