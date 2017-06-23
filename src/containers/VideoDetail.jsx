import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import VideoIntroduce from './VideoIntroduce';
import VideoPlayer from './VideoPlayer';
import { connect } from 'react-redux';
import {loadVideo, loadUserInfo} from './actions';
import { bindActionCreators } from 'redux';

const LOAD_VIDEO_DATA = {
  type: 'LOAD_VIDEO_DATA',
  payload: {
    src: './resources/video.mp4',
    poster: './resources/video.jpg',
    paragraphs: [
      '聚焦大健康，健康管理治未病 作为健康医疗服务的平台级入口，平安好医生在平安集团“医、食、住、行、玩”五大战略规划中肩挑“医”板块重任。',
      '平安好医生创始人、平安健康互联网董事长兼CEO王涛表示，“O2O和医疗保健是如今市场两大热点，平安好医生拥有差异化的战略、背靠集团资源，是中国平安孵化的创新业务线中又一个重要项目。平安好医生将持续关注大健康领域，呼吁用户关注自身健康，摆脱亚健康状态。',
      '据了解，平安好医生以医生资源为核心，利用移动互联网平台与用户进行随时随地的医患实时沟通，从预防保健、导医初诊、预约挂号等诊前服务，到复诊随访、康复指导、慢病管理及用药提醒等诊后服务，面向亚健康及疾患人群提供一站式解决方案，从而达到健康管理治未病的目的。助跑马拉松，呼吁用户健康管理 为助力上海国际马拉松赛事，平安好医生此次发起2016上海国际马拉松备战计划，已吸引近百万用户参与，最终10名用户通过平安好医生APP赢得了上海国际马拉松的参赛机会。据了解，平安好医生作为国内移动医疗的第一入口级应用，将持续聚焦大健康领域，除了主打“在线咨询”、“健康到家”、“私人医生”等健康医疗维度的产品，也正持续关注用户的日常健康管理。从去年12月发起的全民健步奖励计划“步步夺金”到今年助力2016上海国际马拉松的备战计划，平安好医生积极倡导健康生活，鼓励人们关注自身健康。据上海国际马拉松的赛事组委会给出的数据，今年共计 153163 人参加了预报名，其中报名全马的有 64067 人，截止9月9日下午，2016年的上海国际马拉松赛官网的预报名结束，抽签结果也尘埃落定，31% 的中签率让众多跑步爱好者一票难求。平安好医生此次发起“上海马拉松2016备战计划”抢票活动中，提供了10个上海国际马拉松参与名额。记者了解到，并非所有人都适合马拉松这项运动。平安好医生高级医学总监谢红表示，“参与2016上海国际马拉松备战计划的用户，需要通过四周的慢跑训练，通过跑步距离和训练强度的逐步提升，让自己达到最佳状态。同时，建议平常没有跑步习惯的用户慎跑马拉松，因为马拉松比赛是一项专业性很强的运动，必须经过系统的训练，如果决定跑马拉松，必须有一定的运动基础，并且需要确认没有心脑血管疾病、心脏病史、低血糖等疾病，不可仅凭冲动去跑马拉松，这样是很危险的。如果跑步时发生运动损伤，应该停止比赛，用冰敷处理，而不应该坚持跑至终点，这样可以避免更严重的损害发生。”'
    ]
  }
};

const LOAD_USER_INFO = {
  type: 'LOAD_USER_INFO',
  payload: {
    name: 'sk'
  }
};

// ==================
// 最终要交给redux管理的所有变量
// ==================

function mapStateToProps (state) {
  return {
    data1: state.reducer1,
    data2: state.reducer2
  };
}

// ==================
// 最终要交给redux管理的所有action
// 既定义哪些方法将成为action
// ==================
function mapDispatchToProps (dispatch) {
  return {
    loadVideo1 : () => dispatch(LOAD_VIDEO_DATA),
    loadUserInfo1: () => dispatch(LOAD_USER_INFO)
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
    const {loadVideo1, loadUserInfo1} = this.props;
    loadVideo1(loadVideo());
    loadUserInfo1(loadUserInfo1);
  }


    render() {
        const {data1} = this.props;
        const {data2} = this.props;
        return (
            <div className="container">
                <Header title={data2.name + '正在看XXX视频'} />
                <div className="content">
                    <VideoPlayer src={data1.src}
                        poster={data1.poster}
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
