import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import data from './Data.json'
const Inventory = () => {
    const[unit,setUnit] =useState(data)
  return (
    <div style={{}}>
         <div className='display- felx space between them'>
         <Button variant="primary">uplaoditems</Button>
         <Button variant="primary">Actions</Button>
         <div>
      


    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Item id</th>
          <th>Item Name</th>
          <th>Item catogery</th>
          <th>current stock</th>
          <th>unit</th>
          <th>price</th>
          <th>type</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>

        <th>A</th>
          <th>Item Name</th>
          <th>Item catogery</th>
          <th>current stock</th>
          <th>unit</th>
          <th>price</th>
          <th>type</th>
         
       
      
        </tr>
        <tr>
          <td>2</td>
          <td>SKU00002</td>
          <td>Thornton</td>
          <td>-</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>-</td>
         
        </tr>
        <tr>
          <td>4</td>
          <td colSpan={2}>110</td>
          <td>SKU00002</td>
          <td>100</td>

          <td>5</td>
          <td colSpan={2}>110</td>
          <td>SKU00002</td>
          <td>100</td>
         
        </tr>
      </tbody>
    </Table>
  



         </div>
         </div>
        </div>
  )
}

export default Inventory