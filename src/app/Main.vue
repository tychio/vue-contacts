<template>
  <div class="contacts__app" id="root">
    <main>
      <title-component></title-component>
      <contacts></contacts>
    </main>
  </div>
</template>

<script>
import Title from './Title.vue';
import Contacts from './components/Contacts.vue';

export default {
  name: 'Main',
  components: {
    'title-component': Title,
    'contacts': Contacts
  }
};
</script>
