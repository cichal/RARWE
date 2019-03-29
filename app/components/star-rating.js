import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['rating-panel'],

  rating: 0,
  maxRating: 5,
  item: null,
  onClick()  {},

  stars: computed('rating', 'maxRating', function() {
    let stars = [];
    for (let i=1; i <= this.maxRating; i++) {
      stars.push({ rating: i, isFull: this.rating >= i });
    }
    return stars;
  }),

  actions: {
    //refer to page 113 for function differnce if things break for rating. also check page 116 if really confused.
    setRating(newRating) {
      return this.onClick(newRating);
    }
  }
});
