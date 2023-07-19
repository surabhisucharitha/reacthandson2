import React, { Component } from 'react';
import './App.css';

class FormClass extends Component{
        state={
            Name : '',
            Dept : '',
            Rating: '',
            EmpData : []
        }
    changeHandle = (e) =>{
        this.setState({[e.target.name]:e.target.value})
        
    }
     clickHandle=(e)=>{
        e.preventDefault();
        let newObj={
        name:this.state.Name,
        dept:this.state.Dept,
        rate:this.state.Rating
        }
        this.state.EmpData.push(newObj);
        this.setState({
            EmpData:this.state.EmpData
            
        });
        console.log(this.state.EmpData);

    }

    render(){
        return(
            <>
            <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
            <form>
            <label className='name'  htmlFor='name'>Name:</label>
            <input id='name' type='text' placeholder='enter name' name='Name' value={this.state.Name} onChange={this.changeHandle} /><br/>
            <label className='dept' htmlFor='dept'>Dept:</label>
            <input  id='dept' type='text' placeholder='enter Dept' name='Dept' value={this.state.Dept} onChange={this.changeHandle} /><br/>
            <label className='rate' htmlFor="rating">Rating:</label>
            <input id='rating' type='text' placeholder='rate us' name='Rating' value={this.state.Rating} onChange={this.changeHandle} /><br/>
            
             <button  onClick={this.clickHandle}>submit</button>
            </form>
            <div className='parent'>
            {this.state.EmpData.map((item,index)=>{
                return(
                    
                    <span className='boxes' key={index}>Name:{item.name} || Dept:{item.dept} || Rating:{item.rate}</span>
                    
                )
            })}
            </div>
            </>
        )
    }
}

export default FormClass;