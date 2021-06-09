import { Component } from 'react';
import './App.css';
import Header from './Header.js';
import data from './data.js';
import ImageList from './ImageList/ImageList.js';
import HornDropdown from './HornDropdown';
import KeywordDropdown from './KeywordDropdown';

export default class App extends Component {

  state = {
    filteredHorns: '',
    filteredKeyword: '',
  };

  handleHornChange = (e) => {
    this.setState({ filteredHorns: e.target.value })
  };

  handleKeywordChange = (e)=> {
    this.setState({ filteredKeyword: e.target.value })
  };

  render() {

    let filteredData = data;

    if (this.state.filteredHorns) {
      filteredData = filteredData.filter(animals => animals.horns === +(this.state.filteredHorns))
    }

    if (this.state.filteredKeyword) {
      filteredData = filteredData.filter(animals => this.state.filteredKeyword === animals.keyword)
    }

    return (
      <div>
        <Header />
        <HornDropdown handleHornChange={this.handleHornChange} />
        <KeywordDropdown handleKeywordChange={this.handleKeywordChange} />
      
        <ImageList data={filteredData} />
      </div>
    );
  }
}