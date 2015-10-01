import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  text: DS.attr(),
  post: DS.belongsTo('post', { async: true }),
});
