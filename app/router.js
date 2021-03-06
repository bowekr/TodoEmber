import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', {path: '/'}, function() {
    this.route('new');
    this.route('show', {path: '/show/:todo_id'} );
    this.route('edit', {path: '/edit/:todo_id'} );
    this.route('index', {path: '/index'} );
  });
});

export default Router;
