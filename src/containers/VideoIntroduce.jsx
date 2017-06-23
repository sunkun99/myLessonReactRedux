import React from 'react';
/**
 * props参数说明：
 * 1. paragraphs:介绍内容的段落数组
 */
function VideoIntroduce(props) {
    let introduceContent = props.paragraphs.map((paragraph, index) => { return <p key={index}>{paragraph}</p> })
    return (
        <section>
            {introduceContent}
        </section>
    )
}

export default VideoIntroduce;