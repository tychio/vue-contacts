<template>
<main class="container">
  <b-alert :show="message.text !== ''" :state="message.type" dismissible>
    {{message.text}}
  </b-alert>
  <contacts></contacts>
</main>
</template>

<script>
import {mapGetters} from 'vuex';
import Contacts from './Contacts.vue';

export default {
  name: 'Main',
  computed: mapGetters(['message']),
  components: {
    'contacts': Contacts
  }
};
</script>
