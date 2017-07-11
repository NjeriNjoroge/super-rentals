import Ember from 'ember';

export default Ember.Route.extend({
  addNewAnnouncement: false,
  actions: {
    newAnnouncement(){
      this.set('addNewAnnouncement', true);
    }
  }
});
