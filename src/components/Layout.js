import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
      const munchkin = function() {
        if (typeof document === 'undefined') {
          return;
        }
        var didInit = false;
        function initMunchkin() {
          if (didInit === false) {
            didInit = true;
            window.Munchkin.init('578-PUY-745', {
              "wsInfo": "j0hSd9jO",
            });
          }
        }
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//munchkin.marketo.net/munchkin.js';
        s.onreadystatechange = function() {
          if (this.readyState === 'complete' || this.readyState === 'loaded') {
            initMunchkin();
          }
        };
        s.onload = initMunchkin;
        document.getElementsByTagName('head')[0].appendChild(s);
      };

      return (
          <React.Fragment>
              <Helmet>
                  <title>{_.get(this.props, 'pageContext.frontmatter.title', null) && (_.get(this.props, 'pageContext.frontmatter.title', null) + ' | ')}{_.get(this.props, 'pageContext.site.siteMetadata.title', null)}</title>
                  <meta charSet="utf-8"/>
                  <meta name="viewport" content="width=device-width, initialScale=1.0" />
                  <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.excerpt', null) || _.get(this.props, 'pageContext.site.siteMetadata.description', null)}/>
                  <script src="//app-lon08.marketo.com/js/forms2/js/forms2.min.js"></script>
                  <script type="text/javascript">
                    {munchkin()}
                  </script>
              </Helmet>
              <div id="site-wrap" className="site">
                <form id="mktoForm_1259"></form>
                <Header {...this.props} />
                <main id="content" className="site-content">
                  {this.props.children}
                </main>
                <Footer {...this.props} />
              </div>
          </React.Fragment>
      );
    }
}
