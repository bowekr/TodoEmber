import Ember from 'ember';

var counter = 114;

export default Ember.Controller.extend({
  actions: {
    addTodo() {
      var newTodo = this.store.createRecord('todo', {
        id: counter,
        title: this.get('title')
      });
      counter++

      newTodo.save().then( ()=> {
        this.transitionToRoute('todos.index');
      });

      this.set('title', '');
    }
  }
});
