import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import VideoIntroduce from './VideoIntroduce';
import VideoPlayer from './VideoPlayer';
import { connect } from 'react-redux';
import {loadVideo, loadUserInfo} from './method/index';
import { bindActionCreators } from 'redux';
import * as actions from './actions/action';

// ==================
// 最终要交给redux管理的所有变量
// ==================

function mapStateToProps (state) {
  return {
    info: state.reducer1
  };
}

// ==================
// 最终要交给redux管理的所有action
// 既定义哪些方法将成为action
// ==================
function mapDispatchToProps (dispatch) {
  //return bindActionCreators(actions, dispatch);

  return {
    setVedioInfo : (data) => dispatch(data),
    setUserInfo: (data) => dispatch(data)
  }

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
    const {setVedioInfo, setUserInfo} = this.props;
    setVedioInfo(loadVideo());
    setUserInfo(loadUserInfo());
  }


    render() {
        const {info} = this.props;
        return (
            <div className="container">
                //<Header title={info.name + '正在看XXX视频'} />
                <div className="content">
                    <VideoPlayer src={info.src}
                        poster={info.poster}
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
