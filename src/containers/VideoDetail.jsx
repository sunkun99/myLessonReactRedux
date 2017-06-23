import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import VideoIntroduce from './VideoIntroduce';
import VideoPlayer from './VideoPlayer';
import { connect } from 'react-redux';
import { loadVideo, loadUserInfo } from './actions';
import { bindActionCreators } from 'redux';

// ==================
// 最终要交给redux管理的所有变量
// ==================

function mapStateToProps (state, ownProps) {
   return Object.assign({}, ownProps, state);
};

// ==================
// 最终要交给redux管理的所有action
// 既定义哪些方法将成为action
// ==================
function mapDispatchToProps (dispatch, ownProps) {
  return Object.assign({}, ownProps, {
    actions: bindActionCreators({loadVideo, loadUserInfo}, dispatch)
  });
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

  // 默认初始化时加载第一页数据
  componentWillMount() {
    () => loadVideo();
  }


    render() {
        // const {reducer1, reducer2} = this.props;
        // console.log("CURRENT_STATE1:" + reducer1);
        // console.log("CURRENT_STATE2:" + reducer2);
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

// export default VideoDetail;
export default connect(mapStateToProps, mapDispatchToProps, null, { pure : false})(VideoDetail);
