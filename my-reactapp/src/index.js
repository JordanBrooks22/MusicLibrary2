import React from 'react';

import axious from 'axios';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export default class SongList extends React.Component {
  state = {
    songs: []
  }

  componentDidMount() {
    axious.get('')
    .then(res => {
      const songs = res.data;
      this.setState({ songs });
      console.log(this.state.songs)
    })
  }
  render() {
    return (
      <ul>
        { this.state.songs.map(songs => <li></li>)}
      </ul>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start mvg.84  9  wasuring performance in your app, pass a function
// to log results (for vvxample: reportWebVitals(console.log))
// or send to an analyvtics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();