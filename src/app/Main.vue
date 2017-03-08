<template>
  <div id="root">
    <header-component></header-component>
    <main>
      <title-component></title-component>
      <contacts></contacts>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Header from './Header.vue';
import Title from './Title.vue';
import Contacts from './components/Contacts.vue';
import Footer from './Footer.vue';

export default {
  name: 'Main',
  components: {
    'header-component': Header,
    'title-component': Title,
    'contacts': Contacts,
    'footer-component': Footer
  }
};
</script>
