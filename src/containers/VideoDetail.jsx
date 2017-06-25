import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import VideoIntroduce from './VideoIntroduce';
import VideoPlayer from './VideoPlayer';
import { connect } from 'react-redux';
import {loadVideo, loadUserInfo} from './actions';
import { bindActionCreators } from 'redux';


// ==================
// 最终要交给redux管理的所有变量
// ==================

function mapStateToProps (state) {
  return {
    vedioInfo: state.reducer1,
    userInfo: state.reducer2
  };
}

// ==================
// 最终要交给redux管理的所有action
// 既定义哪些方法将成为action
// ==================
function mapDispatchToProps (dispatch) {
  return {
    dispatchVedioInfo : (data) => dispatch(data),
    dispatchUserInfo: (data) => dispatch(data)
  };

}


class VideoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: '',
            poster: '',
            paragraphs: [],
            name: ''
        }
    }

  componentWillMount() {
    const {dispatchVedioInfo, dispatchUserInfo} = this.props;
    dispatchVedioInfo(loadVideo());
    dispatchUserInfo(loadUserInfo());
  }


    render() {
        const {vedioInfo, userInfo} = this.props;
        return (
            <div className="container">
                <Header title={userInfo.name + '正在看XXX视频'} />
                <div className="content">
                    <VideoPlayer src={vedioInfo.src}
                        poster={vedioInfo.poster}
                        onPlay={() => { console.log('视频正在播放') }}
                        onPause={() => { console.log('视频已经暂停') }} />
                    <VideoIntroduce paragraphs={this.state.paragraphs} />
                </div>
                <Footer />
            </div>
        )
    }
}

// export default VideoDetail;
export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
