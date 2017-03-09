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
    >
      <form class="form">
        <b-form-fieldset label="First Name" :labelSize="3" :horizontal="true">
          <b-form-input v-model="editing.firstName"></b-form-input>
        </b-form-fieldset>
        <b-form-fieldset label="Last Name" :labelSize="3" :horizontal="true">
          <b-form-input v-model="editing.lastName"></b-form-input>
        </b-form-fieldset>
        <b-form-fieldset label="Email" :labelSize="3" :horizontal="true">
          <b-form-input v-model="editing.email"></b-form-input>
        </b-form-fieldset>
        <b-form-fieldset label="Description" :labelSize="3" :horizontal="true">
          <b-form-input v-model="editing.description" :textarea="true"></b-form-input>
        </b-form-fieldset>
      </form>
    </dialogue>
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
        openingModal: false,
        editing: {
          id: 0,
          firstName: '',
          lastName: '',
          email: '',
          description: ''
        }
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