import { Logo } from '@plone/volto/components';
import { Container, List, Grid } from 'semantic-ui-react';
import { defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => {
  const { siteActions = [] } = useSelector(
    (state) => ({
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );

  return (
    <div id="footer">
      <Container>
        <div id="footer-main">
          <Grid textAlign="left" columns={4}>
            <Grid.Column>
              <List>
                <List.Header>
                  <UniversalLink href="/why-plone">About Plone</UniversalLink>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <UniversalLink href="/try-plone">Try Plone</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/download">
                      Download Plone
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://6.docs.plone.org">Documentation</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://training.plone.org">Training</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/security">Security</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/roadmap">Roadmap</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://github.com/plone">Github</UniversalLink>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Header>
                  <UniversalLink href="/community">Community</UniversalLink>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <UniversalLink href="https://community.plone.org/">Forum</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/community/chat">Chat</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/contribute">
                      Contribute code
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/community/bugs">Report an issue</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/news-and-events">
                      News and events
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://ploneconf.org">Conference</UniversalLink>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Header>
                  <UniversalLink href="/foundation">Foundation</UniversalLink>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <UniversalLink href="/foundation/members/application-procedure">
                      Join the foundation
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/foundation/board">
                      Board
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://github.com/sponsors/plone">Donate</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/foundation/sponsorship">
                      Sponsors
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/foundation/materials/foundation-resolutions/code-of-conduct">
                      Code of conduct
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/foundation/members">
                      Foundation members
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://plone.teemill.com/">Shop</UniversalLink>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column className="separated">
              <List>
                <List.Header>
                  <UniversalLink href="/news-and-events/plone-in-social-media">
                    Follow us
                  </UniversalLink>
                </List.Header>
                <List.Content>
                  <Grid textAlign="left" columns={2}>
                    <Grid.Column>
                      <List>
                        <List.Content>
                          <List.Item>
                            <UniversalLink href="https://plone.social/@plone" rel="me">
                              Mastodon
                            </UniversalLink>
                          </List.Item>
                          <List.Item>
                            <UniversalLink href="https://x.com/plone">Twitter</UniversalLink>
                          </List.Item>
                          <List.Item>
                            <UniversalLink href="https://www.instagram.com/plonecms/">
                              Instagram
                            </UniversalLink>
                          </List.Item>
                        </List.Content>
                      </List>
                    </Grid.Column>
                    <Grid.Column>
                      <List>
                        <List.Content>
                          <List.Item>
                            <UniversalLink href="https://www.youtube.com/@plonecms">
                              YouTube
                            </UniversalLink>
                          </List.Item>
                          <List.Item>
                            <UniversalLink href="https://www.linkedin.com/company/plone-foundation/">
                              Linkedin
                            </UniversalLink>
                          </List.Item>
                          <List.Item>
                            <UniversalLink href="https://www.facebook.com/plonecms">
                              Facebook
                            </UniversalLink>
                          </List.Item>
                        </List.Content>
                      </List>
                    </Grid.Column>
                  </Grid>
                </List.Content>
              </List>
              <List>
                <List.Header>
                  <List.Item>
                    <UniversalLink href="/privacy-policy">
                      Privacy Policy
                    </UniversalLink>
                  </List.Item>
                </List.Header>
                <List.Content>
                  <List.Item>Cookie Settings</List.Item>
                </List.Content>
              </List>
            </Grid.Column>
          </Grid>
        </div>
      </Container>
      <div id="footer-small-wrapper">
        <Container>
          <div id="footer-small">
            <div className="logo">
              <Logo />
            </div>
            <div className="address">
              The text and illustrations in this website are licensed by the
              Plone Foundation under a Creative Commons Attribution-ShareAlike
              4.0 International license. Plone and the Plone® logo are
              registered trademarks of the Plone Foundation, registered in the
              United States and other countries. For guidelines on the permitted
              uses of the Plone trademarks, see
              https://plone.org/foundation/logo. All other trademarks are owned
              by their respective owners.
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
