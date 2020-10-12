import React from 'react';

const Widget = () => {
  return (
    <div className="widgets">
      <div
        class="fb-page"
        data-href="https://www.facebook.com/facebook"
        data-tabs="timeline"
        data-width="340"
        data-height="1500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></div>
    </div>
  );
};

export default Widget;
