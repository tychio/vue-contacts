<template>
<main>
  <title-component></title-component>
  <contacts></contacts>
</main>
</template>

<script>
import Title from '../Title.vue';
import Contacts from './Contacts.vue';

export default {
  name: 'Main',
  components: {
    'title-component': Title,
    'contacts': Contacts
  }
};
</script>
