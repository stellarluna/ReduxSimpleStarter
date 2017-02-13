import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading . . .</div>;
  }
  // if we run a VideoDetail and a video is not provided, we
  // return an AJAX spinner (div with "Loading . . .") and don't
  // return the code below (because this is an if statement).

  // We want to be discerning with our checks; it's best to put
  // them on a parent component so a user doesn't see a lot of
  // spinners everywhere.

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  //^ ES6 String Interpolation: use backtics and ${} to inject
  // variable

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;