<template>
<ul>
    <li v-for="contact in contacts">
        <contact v-bind:info="contact"></contact>
    </li>
</ul>
</template>

<script>
import Contact from './Contact.vue'

export default {
    name: 'Contacts',
    data() {
        return {
            contacts: [{
                id: 1,
                first_name: "John",
                last_name: "Smith",
                email: "test@gmail.com",
                description: "about me"
            }]
        };
    },
    components: {
        'contact': Contact
    }
}
</script>