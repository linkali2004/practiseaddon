import { Container, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { Logo, Navigation, Icon } from '@plone/volto/components';
import zoomSVG from '@plone/volto/icons/zoom.svg';

const Header = ({ pathname }) => {
  return (
    <Segment basic className="header-wrapper" role="banner">
      <Container>
        <div className="header">
          <div className="logo-nav-wrapper">
            <div className="logo">
              <Logo />
            </div>
          </div>
          <div className="nav-wrapper">
            <Navigation pathname={pathname} />
          </div>
          <div className="tools-search-wrapper">
            <a className="try-now-link" href="demo.plone.org">
               Best
            </a>
            <div className="search">
              <button className="search-button" aria-label="search">
                <Icon name={zoomSVG} size="18px" />
              </button>{' '}
            </div>
          </div>
        </div>
      </Container>
    </Segment>
  );
};

export default Header;

Header.propTypes = {
  token: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  content: PropTypes.objectOf(PropTypes.any),
};

Header.defaultProps = {
  token: null,
  content: null,
};