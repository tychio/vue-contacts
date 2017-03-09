<template>
<div>
  <section class="section clearfix">
    <button class="btn btn-primary float-right" @click="openModal()">Add</button>
  </section>
  <section class="section">
    <ul class="list-group">
      <li v-for="contact in contacts">
        <contact :info="contact"></contact>
      </li>
    </ul>
    <dialogue
      :id="'contact_modal'"
      :title="'Create contact'"
      :isOpening="openingModal"
      :closeHandler="closeModal"
    ></dialogue>
  </section>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Contact from './Contact.vue';
import Dialog from './Dialog.vue';

export default {
    name: 'Contacts',
    data() {
      return {
        openingModal: false
      }
    },
    computed: mapGetters(['contacts']),
    methods: {
      openModal () {
        this.openingModal = true;
      },
      closeModal () {
        this.openingModal = false;
      }
    },
    components: {
        'contact': Contact,
        'dialogue': Dialog
    },
    created () {
        this.$store.dispatch('loadContacts')
    }
}
</script>