import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import VideoIntroduce from './VideoIntroduce';
import VideoPlayer from './VideoPlayer';

import { loadVideo, loadUserInfo, displaySk } from './actions';


class VideoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: '',
            poster: '',
            paragraphs: [],
            name: ''
        }
        this.handleStateChange = this.handleStateChange.bind(this);
    }

    handleStateChange() {
        let { store } = this.props;
        let state = store.getState();
        this.setState(Object.assign({}, state.reducer1, state.reducer2, state.reducer3));
    }

    componentWillMount() {
        let { store } = this.props;
        store.subscribe(this.handleStateChange);
    }

    componentDidMount() {
        let { store } = this.props;
        store.dispatch(loadVideo());
        store.dispatch(loadUserInfo());
        store.dispatch(displaySk());
    }

    render() {
        console.log("CURRENT_STATE:" + this.state.name);
        return (
            <div className="container">
                <Header title={this.state.name + '正在看XXX视频'} />
                <div className="content">
                    <VideoPlayer src={this.state.src}
                        poster={this.state.poster}
                        onPlay={() => { console.log('视频正在播放') }}
                        onPause={() => { console.log('视频已经暂停') }} />
                    <VideoIntroduce paragraphs={this.state.paragraphs} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default VideoDetail;
