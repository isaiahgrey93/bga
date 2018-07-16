import React from 'react';

import {
  MobileRenderer as StyledMobileRenderer,
  TabletRenderer as StyledTabletRenderer,
  DesktopRenderer as StyledDesktopRenderer,
} from './styles';

export default ({ children, mobile, tablet, desktop, ...props }) => {
  return [
    <StyledMobileRenderer key={'mobile'} visible={mobile} {...props}>
      {children}
    </StyledMobileRenderer>,
    <StyledTabletRenderer key={'tablet'} visible={tablet} {...props}>
      {children}
    </StyledTabletRenderer>,
    <StyledDesktopRenderer key={'desktop'} visible={desktop} {...props}>
      {children}
    </StyledDesktopRenderer>,
  ];
};
