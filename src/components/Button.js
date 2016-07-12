export default {
  template: '<div class="ui {{css}} button"><slot>Default</slot></div>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
}
