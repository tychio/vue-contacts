<template>
  <div id="root">
    <header-component></header-component>
    <main-component></main-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Header from '../Header.vue';
import Main from '../Main.vue';
import Footer from '../Footer.vue';

export default {
  name: 'Main',
  components: {
    'header-component': Header,
    'main-component': Main,
    'footer-component': Footer
  }
};
</script>
