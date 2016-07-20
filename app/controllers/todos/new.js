import Ember from 'ember';

var counter = 0;

export default Ember.Controller.extend({
  actions: {
    addTodo() {
      var newTodo = this.store.createRecord('todo', {
        id: counter,
        title: this.get('title')
      });
      counter++
      this.transitionToRoute('todos');

      this.set('title', '');
    }
  }
});
