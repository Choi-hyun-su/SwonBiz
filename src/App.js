import React, {Component} from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width:'100%',
    marginTop:theme.spacing.unit *3,
    overflowX : "auto"
  },
  table:{
    minWidth : 1080
  }
})

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
    'id':3,
    'name':'홍길동',
    'job':'산적',
    'birth':'930505',
    'image':'https://placeimg.com/64/64/3',
    'gender':'남자'
  }
]

class App extends Component {
  render(){
    const {classes} = this.props ;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>직업</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>생년월일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return( <Customer key={c.id} id={c.id} name={c.name} birth={c.birth} job={c.job} image={c.image} gender={c.gender} />);})}
          </TableBody>
        </Table>
        
      </Paper>
    );
  }
  
}

export default withStyles(styles)(App);
