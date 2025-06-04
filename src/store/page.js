import { defineStore } from 'pinia';

export const usePageStore = defineStore('page', {
  // 1. State: The data that the store holds.
  //    It's a function that returns the initial state.
  state: () => ({
    count: 0,
    pageId: '',
    pageCount:'01',
    byClick: false,
  }),



  // 3. Actions: Methods that can mutate the state.
  //    They can be synchronous or asynchronous.
  actions: {
    clickPage(value) {
      // Actions can directly mutate the state using `this`
      this.pageId = value;
      this.byClick = true
      console.log('Page clicked:', this.pageId);
    },
 
  },
});