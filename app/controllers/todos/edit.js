import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateTodo(id) {
      var self = this;
      var title = this.get('model.title');

      // find record
      var store = this.store.findRecord('todo', id).then(function(todo) {
        todo.set('title', title);

        todo.save();

        self.transitionToRoute('todos.show', todo);
      });
    }
  }
});
