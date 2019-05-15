import Route from '@ember/routing/route';
//import { isEmpty } from '@ember/utils'; removed for now since we import but do nothing with it

export default Route.extend({
  model(params) {
    return this.store.findRecord('band', params.id);
  }
});
