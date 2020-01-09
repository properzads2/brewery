import React  from 'react';
import { Jumbotron, Container,  Image, Dropdown} from 'react-bootstrap';
import map from '../assests/map.jpg'
import {Link } from 'react-router-dom';



function Home(props) {
    return (
        <Container>
          <Jumbotron className="jumbobg">
                <h1 align="center" className="headertext"> Welcome to BreweryPointe</h1>
                <hr/>
                <Image src={map} fluid/>
                <hr/>
                <Dropdown align="center" variant="dark">
                    <Dropdown.Toggle variant="success" bg-variant="dark" id="dropdown-basic">
                        Choose Your City 
                    </Dropdown.Toggle>
       
                        <Dropdown.Menu>      
                          <Link to="/list/atlanta"><Dropdown.Item href="#/action" onClick={()=>props.change("atlanta")}>Atlanta</Dropdown.Item></Link>
                          <Link to="/list/miami"><Dropdown.Item href="#/action" onClick={()=>props.change("miami")}>Miami</Dropdown.Item></Link>
                          <Link to="/list/honolulu"><Dropdown.Item href="#/action" onClick={()=>props.change("honolulu")}>Honolulu</Dropdown.Item></Link>
                          <Link to="/list/san_francisco"><Dropdown.Item href="#/action" onClick={()=>props.change("san_francisco")}>San Francisco</Dropdown.Item></Link>
                          <Link to="/list/oakland"><Dropdown.Item href="#/action" onClick={()=>props.change("oakland")}>Oak Land</Dropdown.Item></Link>
                          <Link to="/list/fresno"><Dropdown.Item href="#/action" onClick={()=>props.change("fresno")}>Fresno</Dropdown.Item></Link>
                          <Link to="/list/san_jose"><Dropdown.Item href="#/action" onClick={()=>props.change("san_jose")}>San Jose</Dropdown.Item></Link>
                          <Link to="/list/bakersfield"><Dropdown.Item href="#/action" onClick={()=>props.change("bakersfield")}>Baker Field</Dropdown.Item></Link>
                          <Link to="/list/irvine"><Dropdown.Item href="#/action" onClick={()=>props.change("irvine")}>Irvine</Dropdown.Item></Link>
                          <Link to="/list/phoenix"><Dropdown.Item href="#/action" onClick={()=>props.change("phoenix")}>Phoenix</Dropdown.Item></Link>
                          <Link to="/list/mesa"><Dropdown.Item href="#/action" onClick={()=>props.change("mesa")}>Mesa</Dropdown.Item></Link>
                          <Link to="/list/tucson"><Dropdown.Item href="#/action" onClick={()=>props.change("tucson")}>Tucson</Dropdown.Item></Link>
                          <Link to="/list/lincoln"><Dropdown.Item href="#/action" onClick={()=>props.change("lincoln")}>Lincoln</Dropdown.Item></Link>
                          <Link to="/list/plano"><Dropdown.Item href="#/action" onClick={()=>props.change("plano")}>Plano</Dropdown.Item></Link>
                          <Link to="/list/austin"><Dropdown.Item href="#/action" onClick={()=>props.change("austin")}>Austin</Dropdown.Item></Link> 
                          <Link to="/list/detroit"><Dropdown.Item href="#/action" onClick={()=>props.change("Detroit")}>Detroit</Dropdown.Item></Link> 
                          <Link to="/list/cleveland"><Dropdown.Item href="#/action" onClick={()=>props.change("cleveland")}>Cleveland</Dropdown.Item></Link>
                          <Link to="/list/toledo"><Dropdown.Item href="#/action" onClick={()=>props.change("toledo")}>Toledo</Dropdown.Item></Link>
                          <Link to="/list/cincinnati"><Dropdown.Item href="#/action" onClick={()=>props.change("cincinnati")}>Cincinnati</Dropdown.Item></Link>
                          <Link to="/list/jersey_city"><Dropdown.Item href="#/action" onClick={()=>props.change("jersey_city")}>Jersey City</Dropdown.Item></Link>
                          <Link to="/list/new_york"><Dropdown.Item href="#/action" onClick={()=>props.change("new_york")}>NewYork City</Dropdown.Item></Link>
                          <Link to="/list/virginia_beach"><Dropdown.Item href="#/action" onClick={()=>props.change("virginia_beach")}>Virginia Beach</Dropdown.Item></Link>

      
                        </Dropdown.Menu>
              </Dropdown> 
          </Jumbotron>
        </Container>
    );
  }
  
  export default Home;