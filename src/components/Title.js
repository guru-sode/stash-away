import React, { Component } from 'react';
import { Layout } from 'antd';
import { Input } from 'antd';
import RestoCards from './RestoCards';

const { Header } = Layout;
const { Search } = Input;

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(value) {
        let keyword = value.toLowerCase();
        if (this.state.data) {
            let restos = this.state.dataForSearch;
            let filteredRestos = {};
            filteredRestos = restos.filter(resto => {
                if (resto.Brand.toLowerCase().includes(keyword) || 
                    resto.Variety.toLowerCase().includes(keyword) || 
                    resto.Style.toLowerCase().includes(keyword) || 
                    resto.Country.toLowerCase().includes(keyword) ||
                    resto['Top Ten'].toLowerCase().includes(keyword))
                    return restos
            })
            this.setState({
                data: filteredRestos
            })
        }
    }

    componentWillMount() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const restoUrl = 'http://starlord.hackerearth.com/TopRamen';
        fetch(proxyUrl + restoUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data,
                    dataForSearch: data
                })
            })
            .catch((e) => {
                this.setState({
                    e
                })
            })
    }

    render() {
        return (
            <div>
                <div>
                    <Header style={{ alignContent: "center" }}>
                    <div style={{ float: "left" }}>
                        <h1>StashAway Top Ramen Restoraunts</h1>
                        </div>
                        <Search style={{ width: 200, float: "right", marginTop: "1%" }} placeholder="Search Restoraunts..." onSearch={value => this.handleSearch(value)} enterButton />
                    </Header>
                </div>
                <RestoCards data={this.state.data}/>
            </div>
        );
    }
}

export default Title;