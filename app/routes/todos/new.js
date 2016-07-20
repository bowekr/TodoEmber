import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addTodo() {
      var title = this.get('title');
      alert(title);
    }
  }
});
