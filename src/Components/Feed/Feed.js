import React from 'react';
import StoryReel from '../StoryReel/StoryReel';
import '../StoryReel/StoryReel.css';
import MessageSender from '../MessageSender/MessageSender';
import '../MessageSender/MessageSender.css';
import Post from '../Post/Post';

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic=""
        message="yoo this is the message"
        timestamp="1601493943737"
        imgName="imgName"
        username="Sachin"
      />
    </div>
  );
};

export default Feed;
