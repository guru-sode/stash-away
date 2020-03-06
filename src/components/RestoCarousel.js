import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

class RestoCarousel extends Component {
    render() {
        const { data } = this.props;
        return (
                <Carousel>
                    <div>
                        <h3>{data.Brand}</h3>
                    </div>
                    <div>
                        <h3>{data.Variety.slice(0,25)}</h3>
                    </div>
                    <div>
                        <h3>{data.Style}</h3>
                    </div>
                    <div>
                        <h3>{data.Country}</h3>
                    </div>
                    <div>
                        <h3>{data.Stars}</h3>
                    </div>
                    <div>
                        <h3>{data['Top Ten']}</h3>
                    </div>
                </Carousel>
        );
    }
}
 
export default RestoCarousel;