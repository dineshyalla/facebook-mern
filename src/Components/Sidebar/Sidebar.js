import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ChatIcon from '@material-ui/icons/Chat';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';

import SidebarRow from '../SidebarRow/SidebarRow';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow src="" title="Frankie"></SidebarRow>
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
    </div>
  );
};

export default Sidebar;
