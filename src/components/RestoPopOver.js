import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class RestoPopOver extends Component {
    state = {  }
    render() {
        const { data } = this.props
        return(
            <div>
            <p>Title : {data.Brand}</p>
            <p>Variety :{data.Variety}</p>
            <p>Style :{data.Style}</p>
            <p>Country :{data.Country}</p>
            <p>Stars :{data.Stars}</p>
            <p>Year and Positio: {data['Top Ten']}</p>
            <Button type="primary" href={data.applylink} style={{marginLeft:"35%"}}>Details</Button>
        </div>
        );
    }
}
 
export default RestoPopOver;