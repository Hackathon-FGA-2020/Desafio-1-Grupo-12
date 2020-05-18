import React from 'react'
import Request from '../utils/Request'

class Info extends React.Component{
  constructor(props){
    super(props);
    this.state ={json_info: ""}
  }
  componentDidMount(){
    Request('https://covid19-brazil-api.now.sh/api/report/v1', "GET").then(json => {
    console.log(json.info);
    this.setState({json_info: json.data})
    })
  }

  render(){

    Array.prototype.sum = function (prop) {
      var total = 0
      for ( var i = 0, _len = this.length; i < _len; i++ ) {
          total += this[i][prop]
      }
      return total
    }
    const json_info = Array.from(this.state.json_info)
    const total = json_info.sum("deaths")
    console.log(total)
    const listStates = json_info.map(state =>
    <tr>
            <td>{state.uid}     </td>
            <td>{state.uf}      </td>
            <td>{state.state}   </td>
            <td>{state.cases}   </td>
            <td>{state.deaths}  </td>
            <td>{state.suspects}</td>
            <td>{state.refuses} </td>
            <td>{state.datetime}</td>
       </tr>
       );
    console.log(json_info)
    return(
      <div>
        <table>
        <tr>
          <th>uid</th>
          <th>uf</th>
          <th>state</th>
          <th>cases</th>
          <th>deaths</th>
          <th>suspects</th>
          <th>refuses</th>
          <th>datetime</th>
        </tr>
          {listStates}
        </table>
      </div>
    )
  }
} 

export default Info;
