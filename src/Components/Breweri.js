import React, {Component} from 'react';
import CityList from './CityList';
import Detail from './Detail'
import Home from './Home'
import { Switch, Route, Link } from 'react-router-dom';

export default class Breweri extends Component{
 

  constructor(){
     super()
        this.state={
         brewery: [],
         city: ""
        }  


  }  

     

    

  // componentDidMount(){
     
     
  //      let url = `'https://api.openbrewerydb.org/breweries?by_city=${this.state.city}'`
  //      console.log(url) 
  //      fetch(`https://api.openbrewerydb.org/breweries?by_city=${this.state.city}`,{
  //   //  fetch(url,{
  //       method: 'get',
  //       headers: {'Content-Type':'application/json'}})
  //       .then(response => response.json())
  //       .then(data => {this.setState({brewery:data})})
  //     //}
  //  }

    ClickHandler =(name) =>{
      this.setState({city:name})
      fetch(`https://api.openbrewerydb.org/breweries?by_city=${name}`,{
    
         method: 'get',
        headers: {'Content-Type':'application/json'}})
      .then(response => response.json())
      .then(data => {this.setState({brewery:data})}) 
    }

   render(){

      return  (

               
      <Switch>
        <Route path="/" exact component={()=> {return <Home change={this.ClickHandler}/>}}/>   
        <Route path="/list/:city"  component={()=>{return <CityList list={this.state.brewery} city={this.state.city}/>}} />
        <Route path="/detail/:id"  component={(props)=>{
            let brewid = parseInt(props.match.params.id)
            let selectedBrewery = this.state.brewery.find(brew => brew.id == brewid)
            return selectedBrewery ? <Detail brewer={selectedBrewery} city={this.state.city} /> : null }} />
      
      </Switch>
                 



      )  

    }
  }

