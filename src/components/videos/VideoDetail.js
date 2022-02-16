import React from "react";

function VideoDetail({ data }) {
  return (
    <>
      <div className="videos-list">
        {data.map((item) => {
          return (
            <div key={Math.random()} className="videos-card">
              <iframe
                className="video"
                key={Math.random()}
                src={`https://www.youtube.com/embed/${item.id}`}
                allowFullScreen
                title="Video player"
              />

              <h1
                key={Math.random()}
                className="video-title"
                style={{ color: "white" }}
              >
                {item.title}
              </h1>
              <p key={Math.random()} className="video-description">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default VideoDetail;
