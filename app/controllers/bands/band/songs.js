import Controller from '@ember/controller';
import { empty, sort } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
  isAddingSong: false,
  newSongTitle: '',

  isAddButtonDisabled: empty('newSongTitle'),

  sortBy: 'ratingDesc',

  sortProperties: computed('sortBy', function() {
    let options = {
      ratingDesc: ['rating:desc', 'title:asc'],
      ratingAsc:  ['rating:asc', 'title:asc'],
      titleDesc:   ['title:desc'],
      titleAsc:   ['title:asc']
    };
    return options[this.sortBy];
  }),

  sortedSongs: sort('model.songs', 'sortProperties'),
  
  actions: {
    addSong() {
      this.set('isAddingSong', true);
    },

    cancelAddSong() {
      this.set('isAddingSong', false);
    },

    async saveSong(event) {
      event.preventDefault();
      // eslint-disable-next-line no-unused-vars
      let newSong = this.get('store').createRecord('song', {
        title: this.get('newSongTitle'),
        band: this.model
      });
      this.set('newSongTitle', '');
    },

    updateRating(song, rating) {
      song.set('rating', song.rating === rating ? 0 : rating);
      return song.save();
    },

    updateSortBy(sortBy) {
      this.set('sortBy', sortBy);
    },
  }
});
