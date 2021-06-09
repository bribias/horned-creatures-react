/* eslint-disable no-sequences */
import { Component } from 'react';
import './App.css';
import Header from './Header.js';
import data from './data.js';
import ImageList from './ImageList/ImageList.js';

export default class App extends Component {

  state = {
    filteredHorns: '',
    filteredKeyword: '',
  };

  handleHornChange = (e) => {
    this.setState({ fliteredHorns: e.target.value })
  };

  handleKeywordChange = (e)=> {
    this.setState({ filteredKeyword: e.target.value })
  };

  handleFilteredChange = (e) => {
    this.setState({ filteredKeyword: e.target.value })
  };


  render() {

    let filteredHorns = data;
    if (this.state.filteredHorns) {
      filteredHorns = filteredHorns.filter(animals => Number(this.state.filteredHorns) === animals.horns)
    }

    let filteredKeyword = data;
    if (this.state.filteredKeyword) {
      filteredKeyword = filteredKeyword.filter(animals => this.state.filteredKeyword === animals.keyword)
    }

    let filteredData = data;
    const objectData = Object.keys(filteredData);
    if (this.state.filteredData) {
      filteredData = filteredData.filter(animals => this.state.filteredData === objectData)
    }

    return (
      <div>
        <Header />
        <form>
          <label>
            <select onChange={this.handleHornChange}>
              <option value='0'>E V E R Y T H I N G</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>100</option>
            </select>
          </label>
        </form>
        <form>
          <label>
            <select onChange={this.handleKeywordChange}>
              <option value='0'>E V E R Y T H I N G</option>
              <option value='narwhal'>Narwhal</option>
              <option value='rhino'>Rhino</option>
              <option value='unicorn'>Unicorn</option>
              <option value='unilego'>UniLego</option>
              <option value='triceratops'>Triceratops</option>
              <option value='markhor'>Markhor</option>
              <option value='mouflon'>Mouflon</option>
              <option value='addax'>Addax</option>
              <option value='chameleon'>Chameleon</option>
              <option value='lizard'>Lizard</option>
              <option value='dragon'>Dragon</option>
            </select>
          </label>
        </form>
        <form>
          <label>
            <select onChange={this.handleFilteredChange}>
              {
                objectData.map(animals => <option>{objectData}</option>)
              }
            </select>
          </label>
        </form>
        <ImageList data1={filteredHorns, filteredKeyword, filteredData} />

      </div>
    );
  }
}
