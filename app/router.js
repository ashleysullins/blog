import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('post', {path: '/post/:post_id'});
  this.route('add-post');
  this.route('edit-post');
  this.route('update-post', {path: '/update/:post_id'});
});

export default Router;
