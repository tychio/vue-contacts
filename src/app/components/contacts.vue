<template>
    <ul>
        <li v-for="item in contacts">
            <contact v-bind:info="item"></contact>
        </li>
    </ul>
</template>

<script>
    import Contact from './contact.vue'

    export default {
        name: 'contacts',
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
            Contact
        }
    }
</script>