import React from 'react';

const VideoListItem = (props) => {
    const { video, onVideoSelect } = props;
    if(!video) {
        return <div>Loading...</div>;
    }
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{videoTitle}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;