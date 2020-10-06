import React from 'react';
import StoryReel from '../StoryReel/StoryReel';
import '../StoryReel/StoryReel.css';
import MessageSender from '../MessageSender/MessageSender';
import '../MessageSender/MessageSender.css';

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
};

export default Feed;
