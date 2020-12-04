import React from 'react';

import axios from 'axios';




export default class MusicList extends React.Component {
    state = {
      music: [],
      loading: true
    }
  
    componentDidMount() {
      axios.get('http://www.devcodecampmusiclibrary.com/api/music')
      .then(res => {
        const music = res.data;
       
        this.setState({ music });
        console.log(this.state.music);
        this.setState({
            loading: false
        })
      })
    }


    render() {
        if(this.state.loading === true){
            return(<div>
                Loading...
                {console.log("Loading for one sec!")}
            </div>)
        }
        else{
        return(
            <p>
            { this.state.music[0].title}
          </p> 
          )
        }
        
       
    }