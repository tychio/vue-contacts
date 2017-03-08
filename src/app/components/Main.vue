<template>
<main>
  <contacts></contacts>
</main>
</template>

<script>
import Contacts from './Contacts.vue';

export default {
  name: 'Main',
  components: {
    'contacts': Contacts
  }
};
</script>
