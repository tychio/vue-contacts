<template>
<ul class="list-group">
    <li v-for="contact in contacts">
        <contact v-bind:info="contact"></contact>
    </li>
</ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Contact from './Contact.vue';

export default {
    name: 'Contacts',
    computed: mapGetters(['contacts']),
    components: {
        'contact': Contact
    },
    created () {
        this.$store.dispatch('loadContacts')
    }
}
</script>