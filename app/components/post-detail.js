import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
  saveComment(params) {
    this.sendAction('saveComment', params);
  },
  update(comment,params) {
    this.sendAction('update', comment, params);
  },
  deleteOKAY(comment) {
    if(confirm('Are you super sure??')) {
      this.sendAction('deleteComment', comment);
    }
  }
}
});
