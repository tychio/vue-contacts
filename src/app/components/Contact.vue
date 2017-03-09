<template>
<div class="card">
    <div class="card-block">
        <button type="button" class="close" @click="remove()">
            <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="card-title">{{fullname}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">
            <a :href="'mailto:'+ email">{{email}}</a>
        </h6>
        <div class="card-text">{{description}}</div>
    </div>
</div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'Contact',
    props: {
        info: {
            type: Object,
            default: () => {return {};}
        }
    },
    data() {
        const info = this.info;
        return {
            id: info.id,
            email: info.email,
            description: info.description
        };
    },
    computed: {
        fullname () {
            const info = this.info;
            return [info['first_name'], info['last_name']].join(' ');
        }
    },
    methods: {
        ...mapActions(['deleteContact']),
        remove () {
            this.deleteContact(this.info.id);
        }
    }
}
</script>

<style lang="scss">
    .card {
        margin-bottom: 1rem;

    }

    .card-block {
        padding: 0.5rem;
    }

    @media (min-width: 768px) {
        .card-block {
            padding: 1rem;
        }
    }
</style>