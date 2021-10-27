
import React from 'react';
import client from './GraphqlClinet'
import {
 
  gql
} from "@apollo/client";

class Table extends React.Component {
  constructor(props){
    super(props)

    this.state={
      data:[]
    }
  }

componentDidMount(){

  client
  .query({
    query: gql`
      query GetRates {
        getBooks{
          id
          name
          author
          price
          
        }
      }
    `
  })
  .then(result => {
   this.setState({data:result.data.getBooks})
  });
}


    render() { 
        return<table class="table">
        <thead>
          <tr>
            <th scope="col">#Sl</th>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
         {
           this.state.data && this.state.data.map((el,index)=>{
             return(
              <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{el.name}</td>
              <td>{el.author}</td>
              <td>{el.price}</td>
            </tr>
             )
           })
         }
         
         
        </tbody>
      </table>;
    }
}
 
export default Table;