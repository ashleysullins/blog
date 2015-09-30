import Ember from 'ember';

export default Ember.Component.extend({
  contentHeight: 200,
  postContent: "Some initial contents go here. Lorem Ipsum is simply dummy text of the printing.",
  editingDisabled: false,

  actions: {
    changeHeight(someObject) {
      var height = someObject.doSomeCalculationToGetHeight();
       this.set('contentHeight', height)
    },

    save() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        category: this.get('category'),
        title: this.get('title'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.sendAction('save', params);
    }
  }
});
