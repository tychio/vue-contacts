<template>
<body id="root">
  <header-component></header-component>
  <main-component></main-component>
  <footer-component></footer-component>
</body>
</template>

<script>
import Header from '../components/Header.vue';
import Main from '../components/Main.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Main',
  components: {
    'header-component': Header,
    'main-component': Main,
    'footer-component': Footer
  }
};
</script>
