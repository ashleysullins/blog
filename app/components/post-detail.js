import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
  saveComment(params) {
    this.sendAction('saveComment', params);
  },
  deleteOKAY(comment) {
    if(confirm('Are you super sure??')) {
      this.sendAction('deleteComment', comment);
    }
  }
}
});
