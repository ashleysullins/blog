import Ember from 'ember';

export default Ember.Component.extend({
  addComment: false,
  actions: {
    addCommentForm() {
      this.set('addComment', true);
    },
    saveComment() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        email: this.get('email') ? this.get('email') : "",
        text: this.get('text') ? this.get('text') : "",
        post: this.get('post') ? this.get('post') : "",
      };
      this.set('addComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
