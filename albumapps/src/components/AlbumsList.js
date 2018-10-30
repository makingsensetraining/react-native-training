import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const baseUrl = 'http://rallycoding.herokuapp.com/api/music_albums';

export default class AlbumList extends Component {

    state = { albums: [] };

    async componentDidMount() {
        
        try {

            var response = await axios.get(baseUrl);
            this.setState({ albums: response.data });

        } catch (error) {
            console.log('Error: '+ error);
        }
    }
    
    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
