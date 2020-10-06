import React from 'react';
import StoryReel from '../StoryReel/StoryReel';
import '../StoryReel/StoryReel.css';

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      {/* <MessageSender /> */}
    </div>
  );
};

export default Feed;
