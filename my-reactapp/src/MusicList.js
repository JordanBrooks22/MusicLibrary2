import axious from 'axious';

import React from 'react';


export default class MusicList extends React.Component {
    state = {
      music: []
    }
  
    componentDidMount() {
      axious.get('http://www.devcodecampmusiclibrary.com/api/music')
      .then(res => {
        const music = res.data;
        this.setState({ music });
      })
    }


    render() {
        if(this.state.loading == true){
            return(<div>Loading...</div>)
        }
        else{
        return(
            <p>
            { this.state.music[0].title}
          </p>  )
        }
        
       
    }
  }