import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


class Table extends React.Component {
    contructor(props) {
        super(props)
            this.state = {
                music: props.music
            }
        }

        renderTableHeader() {
            let header = Object.keys(this.state.music[0])
            return header.map((music, index) => {
                return <th key={index}>{music.toUpperCase()}</th>
            })

        }
        renderTableData() {
            return this.state.music.map((music, index) => {
                const { id, title, album, artist, genre, releaseDate } = music
                return (
                    <tr index={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{album}</td>
                        <td>{artist}</td>
                        <td>{genre}</td>
                        <td>{releaseDate}</td>
                    </tr>                
                    )
            })
        }
        render() {
            return (
                <div>

                    <h1 id='title'>React Dynamic Table</h1>
                    <table id='music'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
export default Table;
