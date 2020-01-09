import React, {Component} from 'react';

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Container, Card, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Detail extends Component {
  render() {
      return (
          <div className="map">
            <Container >
              <Card >
                <Card.Header align="center">Brewery Information</Card.Header>
         
                <Card.Body> 
                  <Card.Title align="center">{this.props.brewer.name.toUpperCase()}</Card.Title>
                  <hr/>

                  <Card.Subtitle align="center">--ADDRESS---</Card.Subtitle>
                    <br></br>
                    <Card.Text align="center" > 
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                          <th>Street</th>
                          <th>City</th>
                          <th>State</th>
                          <th>ZipCode</th>
                          </tr>
                        </thead>

                    
                        <tbody>
                          <tr>
                    
                           <td>{this.props.brewer.street}</td>
                           <td>{this.props.brewer.city}</td>
                           <td>{this.props.brewer.state}</td>
                           <td>{this.props.brewer.postal_code}</td>
                    
                          </tr>
                          </tbody>  
                      
                        </Table>      

                      </Card.Text>
                            
                        <hr/>
                           <Card.Subtitle align="center">--Brewery Type---</Card.Subtitle><br></br>
                            <h3 align="center">{this.props.brewer.brewery_type.toUpperCase()}</h3>
                              <hr/> 

                            <Card.Subtitle align="center">--Phone Number---</Card.Subtitle><br></br>
                            <h3 align="center">{this.props.brewer.phone.toLowerCase()}</h3>
                            <hr/> 
   
                            <Card.Subtitle align="center">--Website---</Card.Subtitle><br></br>
                             <h6 align="center"><a href={this.props.brewer.website_url} target="_blank">{this.props.brewer.website_url}</a></h6>
                              <hr/> 
     
                             <Card.Subtitle align="center">

                                  <Link to={`/list/${this.props.city}`}>
                                    <Button variant="primary"  align="center">Back to Results</Button>
                                   </Link>
                                    <hr/>
                                    <br></br>
                                </Card.Subtitle>
                                <Card.Subtitle align="center">--Google Map--<br></br></Card.Subtitle>
      
                  </Card.Body>
                </Card>
              </Container>
      
              <Map google={this.props.google} zoom={17}
                initialCenter={{
                   lat: this.props.brewer.latitude,
                  lng: this.props.brewer.longitude
                  }}>
                <Marker
                  title={""}
                  name={""}
                  position={{lat: this.props.brewer.latitude , lng: this.props.brewer.longitude}}/>


                </Map>
            </div>          
    )
  }
}
 
  export default GoogleApiWrapper({
      apiKey: "AIzaSyARmusPPMtojhG8JkSfSYjm0ZME6_-HZEg"
  })(Detail)














