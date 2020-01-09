import React, {Component} from 'react';
import CityList from './CityList';
import Detail from './Detail'
import Home from './Home'
import { Switch, Route} from 'react-router-dom';

export default class Breweri extends Component{
 

  constructor(){
     super()
        this.state={
         brewery: [],
         city: ""
        }  


  }  

     

    


    ClickHandler =(name) =>{
      this.setState({city:name})
       fetch(`https://api.openbrewerydb.org/breweries?by_city=${name}`,{
    
          method: 'get',
         headers: {'Content-Type':'application/json'}})
       .then(response => response.json())
       .then(data => {this.setState({brewery:data})}) 
    
      
      // Below Fetch Request is used for custom build api from ruby rails running on local port 3000
      
      // fetch('http://localhost:3000/brew', {
      //   method: 'post',
      //   headers: {'Content-Type':'application/json'},
      //   body: JSON.stringify({
      
      //   "c":name
      //   })}
      //   )
      //   .then((data) => {
      //     console.log(data); 
      //   });
      
        
         
      //   fetch(`http://localhost:3000/brew`,{
    
      //         method: 'get',
      //        headers: {'Content-Type':'application/json'}})
      //      .then(response => response.json())
      //      .then(data => {this.setState({brewery:data})}) 
        
       
    
    
    }

   render(){

      return  (

               
      <Switch>
        <Route path="/" exact component={()=> {return <Home change={this.ClickHandler}/>}}/>   
        <Route path="/list/:city"  component={()=>{return <CityList list={this.state.brewery} city={this.state.city}/>}} />
        <Route path="/detail/:id"  component={(props)=>{
            let brewid = parseInt(props.match.params.id)
            let selectedBrewery = this.state.brewery.find(brew => brew.id === brewid)
            return selectedBrewery ? <Detail brewer={selectedBrewery} city={this.state.city} /> : null }} />
      
      </Switch>
                 



      )  

    }
  }

