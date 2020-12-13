import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
import BootstrapTable from 'react-bootstrap-table-next';





class Search extends React.Component {
    state = {
      query: '',
      results: [],
      loading: true
    }
  
    getInfo = () => {
      axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
        .then(({ data }) => {
          console.log(data);
          this.setState({
            results: data.data
          });
          this.setState({ loading: false })
        })
    }
  
    handleInputChange = () => {
      this.setState({
        query: this.search.value
      }, () => {
        if (this.state.query && this.state.query.length > 1) {
          let returnList = [];
          axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
            .then(res => {
              const results = res.data;
              results.map(item => {
                const checkString = item.title.toLowerCase();
                if (checkString.includes(this.state.query.toLowerCase())) {
                  returnList.push(item);
                }
              });
              console.log(results);
              console.log(returnList);
              this.setState({ returnList });
              const element = <Suggestions results={returnList}/>
              ReactDOM.render(
                element,
                document.getElementById('searchBox')
              );
            })
          //if (this.state.query.length % 2 === 0) {
          // this.getInfo()
          //}
        } else if (!this.state.query) {
        }       
  
  
      })
    }
  
    render() {
      return (
        // alert("Return works"), used this to trace through to output
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <div id="searchBox"> </div>
        </form>
  
      )
    }
  }
  
  export default Search
  



//
//
//
//  <ToolkitProvider
//keyField="id"
//data={ music }
//colums={ colums }
//search
//>
//    {
//        props => (
//            <div>
//                <h3>Input something at  the input field:</h3>
//                <SearchBar { ...props.searchProps } />
//                <hr />
//                <BootstrapTable
//                { ...props.baseProps }
//                />
//            </div>
//        )
//    }
//
//</ToolkitProvider>
//

import { Nav, Navbar, NavDropdown, FormControl, Form, Button} from 'react-bootstrap/Navbar';