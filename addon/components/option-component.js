import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNameBindings: ['current:is-active'],
  current: computed('currentHighlight', 'index', function() {
    return this.get('currentHighlight') === this.get('index');
  }),
  click() {
    this.sendAction("onClick", this.get('option'));
  }
});
