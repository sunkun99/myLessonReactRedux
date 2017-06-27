import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/action';
import { Header } from './Header';
import { Footer } from './Footer';
import VideoIntroduce from './VideoIntroduce';
import VideoPlayer from './VideoPlayer';

// ==================
// 最终要交给redux管理的所有变量
// ==================

function mapStateToProps (state) {
  return {
    vedioData: state.vedioDetailReducer.vedioData,
    userInfo:  state.vedioDetailReducer.userInfo
  };
}

// ==================
// 最终要交给redux管理的所有action
// 既定义哪些方法将成为action
// ==================
function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);

  // return {
  //   setVedioInfo : (data) => dispatch(data),
  //   setUserInfo: (data) => dispatch(data)
  // }

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

  componentDidMount() {
    const {setVedioInfo, setUserInfo} = this.props;
    setVedioInfo();
    setUserInfo();
  }


    render() {
        const {vedioData, userInfo} = this.props;
        // console.log('sk', info);
        return (
            <div className="container">
                <Header title={userInfo.name + '正在看XXX视频'} />
                <div className="content">
                    <VideoPlayer src={vedioData.src}
                        poster={vedioData.poster}
                        onPlay={() => { console.log('视频正在播放') }}
                        onPause={() => { console.log('视频已经暂停') }} />
                    <VideoIntroduce paragraphs={vedioData.paragraphs} />
                </div>
                <Footer />
            </div>
        )
    }
}

// export default VideoDetail;
export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
