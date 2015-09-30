import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        category: this.get('category'),
        title: this.get('title'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.set('addNewStory', false),
        this.sendAction('save', params);
      }
  }
});
