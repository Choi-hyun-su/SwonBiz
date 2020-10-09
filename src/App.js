import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers=[
  {
    'id':1,
    'name':'신사임당',
    'job':'화가',
    'birth':'901111',
    'image':'https://placeimg.com/64/64/1',
    'gender':'여자'
  },
  {
    'id':2,
    'name':'임깍정',
    'job':'전업남편',
    'birth':'931212',
    'image':'https://placeimg.com/64/64/2',
    'gender':'남자'
  },
  {
    'id':1,
    'name':'홍길동',
    'job':'산적',
    'birth':'930505',
    'image':'https://placeimg.com/64/64/3',
    'gender':'남자'
  }
]

class App extends Component {
  render(){
    return (
      customers.map(c => {
        return( <Customer key={c.id} id={c.id} name={c.name} birth={c.birth} job={c.job} image={c.image} gender={c.gender} />);})
        );
  }
  
}

export default App;
