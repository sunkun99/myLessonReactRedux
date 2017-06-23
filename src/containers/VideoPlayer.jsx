import React from 'react';
class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
    }
    handlePlay = () => {
        this.playVideo();
        this.props.onPlay();
    }
    handlePause = () => {
        this.pauseVideo();
        this.props.onPause();
    }
    playVideo() {
        this.video.play();
    }
    pauseVideo() {
        this.video.pause();
    }
    render() {
        return (
            <div>
                <video ref={video => { this.video = video; }} src={this.props.src} poster={this.props.poster} width="100%"></video>
                <div className="video-controlls">
                    <button className="button" onClick={this.handlePlay}>播放</button>
                    <button className="button" onClick={this.handlePause}>暂停</button>
                </div>
            </div>
        );
    }
}
VideoPlayer.propTypes = {
    src: React.PropTypes.string.isRequired,//视频地址
    poster: React.PropTypes.string.isRequired,//视频图片
    onPlay: React.PropTypes.func,//视频播放事件回调
    onPause: React.PropTypes.func//视频暂停事件回调
}
VideoPlayer.defaultProps = {
    onPlay: () => { },
    onPause: () => { }
}

export default VideoPlayer;