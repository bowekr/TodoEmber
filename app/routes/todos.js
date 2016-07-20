import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.peekAll('todo');
  },
  actions: {
    newTodo() {
      this.transitionTo('todos.new');
    }
  }
});
