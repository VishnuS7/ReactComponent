import logo from './logo.svg';
import './App.css';
import Student from './components/student';
import College from './components/college';
import { Component } from 'react';


  class App extends Component{
    render() {
    return (
    <>
    <Student name="Vahn" number= "1997" enrolled = {[0,1]}/>
    <Student name="Noa" number= "1998" enrolled = {[0]}/>
    <Student name="Gala" number= "1995" enrolled = {[0,1,2]}/>
    
    <College name="George Brown" location="Casa Loma"/>
    </>
    


  );
}
}


export default App;
