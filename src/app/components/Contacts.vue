<template>
<div>
  <section class="section clearfix">
    <button class="btn btn-primary float-right create_button" @click="openModal()">Add</button>
  </section>
  <section class="section contacts_list">
    <ul class="list-group">
      <li v-for="contact in contacts">
        <contact :info="contact" @edit="openModal(contact)"></contact>
      </li>
    </ul>
    <dialogue
      :id="'contact_modal'"
      :title="'Create contact'"
      :isOpening="openingModal"
      @close="closeModal()"
      @save="saveContact()"
    >
      <form class="form">
        <b-form-fieldset class="field_first_name" label="First Name" :labelSize="3" :horizontal="true">
          <b-form-input v-model="editing.first_name"></b-form-input>
        </b-form-fieldset>
        <b-form-fieldset class="field_last_name" label="Last Name" :labelSize="3" :horizontal="true">
          <b-form-input v-model="editing.last_name"></b-form-input>
        </b-form-fieldset>
        <b-form-fieldset class="field_email" label="Email" 
          :labelSize="3" :horizontal="true" 
          :feedback="tips.email" :state="tips.email ? 'warning': ''">
          <b-form-input v-model="editing.email"></b-form-input>
        </b-form-fieldset>
        <b-form-fieldset class="field_description" label="Description" :labelSize="3" :horizontal="true">
          <b-form-input v-model="editing.description" :textarea="true"></b-form-input>
        </b-form-fieldset>
      </form>
    </dialogue>
  </section>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import emailValidator from 'email-validator';
import Contact from './Contact.vue';
import Dialog from './Dialog.vue';

export default {
    name: 'Contacts',
    data() {
      return {
        openingModal: false,
        editing: {},
        tips: {}
      }
    },
    computed: mapGetters(['contacts']),
    methods: {
      ...mapActions(['loadContacts', 'addContact', 'editContact']),
      openModal (contact={}) {
        this.editing = Object.assign({}, contact);
        this.openingModal = true;
      },
      closeModal () {
        this.openingModal = false;
      },
      saveContact () {
        const id = this.editing.id;
        if (id > 0) {
          this.editContact(this.editing);
        } else {
          this.addContact(this.editing);
        }
        this.closeModal();
      }
    },
    watch: {
      'editing.email' () {
        const email = this.editing.email;
        const erorr = email && !emailValidator.validate(email)
        this.tips.email = erorr ? 'Please input an email!' : '';
      }
    },
    components: {
        'contact': Contact,
        'dialogue': Dialog
    },
    created () {
        this.loadContacts();
    }
}
</script>