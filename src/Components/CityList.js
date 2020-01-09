import React,{Component} from 'react';
import { Container, Table, Button} from 'react-bootstrap';
import {  Link } from 'react-router-dom';




export default class CityList extends Component{
  
  





  render()
   
  {
    return( 
        <div>
           <h1 align="center">{this.props.city.toUpperCase().replace("_"," ")}</h1>
          <Container className="list">

               {this.props.list ?  

                  <Table striped bordered hover>
             
                      <thead>
                          <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Address</th>
                            <th>WebSite</th>
                          </tr>
                      </thead>

                      {this.props.list.map(x => 
                        <tbody>
                          <tr>
                            <Link to={`/detail/${x.id}`}> <td>{x.name}</td></Link>
                            <td>{x.brewery_type}</td>
                            <td>{x.street},{x.city}, {x.state}, {x.postal_code}</td>
                            <td><a href={x.website_url} target="_blank">{x.website_url}</a></td>
                          </tr>
                        </tbody>)  
                      }
                  </Table>   

                    :
                  <h1> Please Select the City to view the list of cities</h1> 
              } 

                <Link to="/"><Button variant="primary"  className="citybutton"> Select Another City</Button></Link>

            </Container> 
          </div>          

    )



  }  



}