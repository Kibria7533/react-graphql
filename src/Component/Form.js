import React from 'react';
import {gql} from "@apollo/client";
import client from './GraphqlClinet'
 class Form extends React.Component {
   constructor(){
     super()
     this.state={
       name:"",
       author:"",
       price:0
     }
   }

    Submit=async(e)=>{
      e.preventDefault();
      console.log(this.state)
        let gqlInputType='book';
        let mutationType='storeBook';

      const mutation = gql`
      mutation storeBook($input: ${gqlInputType}!) {
          ${mutationType}(input: $input) {
              id
          }
      }`;

      const input = {
          name: this.state.name,
          author:this.state.author,
          price:parseInt(this.state.price)
      };

    let res=  await client.mutate({
          variables: {input},
          mutation: mutation,
      });

      console.log(res)
      this.setState({name:"",author:"",price:""})

      alert('Succefully stored')

   }

   onChangeHandeler=(e)=>{
     this.setState({[e.target.name]:e.target.value})

   }
     render() { 
         return <form onSubmit={this.Submit}>
         <div class="mb-3 offset-3">
           <label for="exampleInputEmail1" class="form-label">Book Name</label>
           <input type="text" name="name" placeholder="Enter book name" value={this.state.name} onChange={(e)=>this.onChangeHandeler(e)} class="form-control"/>
         </div>
         <div class="mb-3  offset-3">
           <label for="exampleInputEmail1" class="form-label">Author Name</label>
           <input type="text"  name="author" placeholder="Enter author name" value={this.state.author} onChange={(e)=>this.onChangeHandeler(e)} class="form-control"/>
         </div>
         <div class="mb-3  offset-3">
           <label for="exampleInputEmail1" class="form-label">Price</label>
           <input type="text"  name="price" placeholder="Enter price" value={this.state.price}  onChange={(e)=>this.onChangeHandeler(e)} class="form-control"/>
         </div> 
         
         <div className="mb-3  offset-3">
         <button type="submit" class="btn btn-primary">Submit</button>
         </div>
       </form>;
     }
 }
  
 export default Form;