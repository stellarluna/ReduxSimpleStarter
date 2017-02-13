import React, { Component } from 'react';
// import the library named react and assign it to
// the variable React
// core react library to make components
import ReactDOM from 'react-dom';
// react library for rendering a component to the
// DOM
import YTSearch from 'youtube-api-search';
// Downward Dataflow: only the most parent component should be
// responsible for fetching data.
import SearchBar from './components/search_bar';
// . === 'in the current directory', go to the directory
// called 'components' and find the file named
// 'search_bar'
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';



const API_KEY = 'AIzaSyD45fp3JhWJiee7AI53CCGuwoyehAn1i0k';



// When we are creating a component, we are creating a
// class, a type of component. When the component is
// rendered, it creates an instance of that component.
// (Instantiating a component.)

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      videos: [],
      selectedVideo: null
    };

		YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
			this.setState( {
        videos: videos,
        selectedVideo: videos[0]
      } );
			// this.setState( {videos: videos} );
      // ^Using destructuring.
		});
		// Whenever the App first boots up and an instance
		// of App loads on the screen, the constructor will
		// run immediately and call the YTSearch function,
		// which in turn calls a callback function to
		// update state with a video query. (The YTSearch method
    // is included in the constructor function, so it runs
    // whenever an instance of `App` is instantiated.)
	}
	render() {
		return (
			<div>
				<SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generated HTML and put
// it on the page (in the DOM)


ReactDOM.render(<App />, document.querySelector('.container'));