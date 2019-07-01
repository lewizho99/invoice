import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('home-route', {path: '/'});
    this.route('view-route', {path: '/view/:invoiceId'});   /** Passing invoiceId as param. */
    this.route('404-route', {path: '/*wildcard'});  /** Show page 404 if not route is matched. */
});

export default Router;
