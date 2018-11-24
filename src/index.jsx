import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideosList from './components/VideosList';
import VideoDetail from './components/VideoDetails';
const YOUTUBE_API_KEY = '';

class App extends Component {
    state = { videos: [], selectedVideo: null, term: null }

    componentDidMount() {
        this.videoSearch(null);
    }

    videoSearch(term) {
        YoutubeSearch({
            key: YOUTUBE_API_KEY,
            term: term
        }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {
        return (<div>
            <SearchBar onSearchChange={term => this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideosList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                videos={this.state.videos} 
            />
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));