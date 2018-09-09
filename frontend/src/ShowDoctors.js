import React, { Component } from 'react';
import './ShowDoctors.css'

export class ShowDoctors extends Component{
    handleChange=(doctor)=>{
        let _doctor=doctor;
        this.props.vote(_doctor)
    }

    render(){
        let doctorList=this.props.doctors.map((doctor,i)=>
        <tr key={i}>
            <td onClick={this.handleChange.bind(this,doctor.name)}>{doctor.name}</td>
            <td>{doctor.rating}</td>
        </tr>)

        return(
            <div>
            <h3> Doctors </h3>
            <hr />
            <table >
                <tbody>
                    <tr>
                        <th>Doctor</th>
                        <th>Rating</th> 
                    </tr>
                    {doctorList}
                </tbody>
            </table>
          </div>
        )
    } 
}

export default ShowDoctors;