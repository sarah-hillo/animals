import React from 'react';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

class FilterData extends React.Component  {
  handleFilter=(event)=>{
event.preventDefault();

let optionData = (parseInt(event.target.value));
this.props.setFilterValue(optionData)

console.log(this.props.setFilterValue(optionData))
  }
    render() {

        return (
<Form>
<Form.Select aria-label="Default select example" onChange={this.handleFilter} name='name'>
  <option value='0'>Select option</option>
  <option value='0'>All</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="100">Wow ..!</option>
</Form.Select>
</Form>

        ) 
    }

}

export default FilterData;
