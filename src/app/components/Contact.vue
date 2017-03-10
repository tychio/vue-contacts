<template>
<div class="card">
    <div class="card-block">
        <button type="button" class="close" @click="remove()">
            <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="card-title text-nowrap">{{fullname}}</h4>
        <h6 class="card-subtitle mb-2 text-muted text-nowrap">
            <a :href="'mailto:'+ email">{{email}}</a>
        </h6>
        <button class="btn btn-sm btn-success float-right edit_button" @click="edit()">Edit</button>
        <div class="card-text text-nowrap">{{description}}</div>
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
        return {
            id: this.info.id
        };
    },
    computed: {
        fullname () {
            const info = this.info;
            return [info['first_name'], info['last_name']].join(' ');
        },
        email () {
            return this.info.email
        },
        description () {
            return this.info.description
        }
    },
    methods: {
        ...mapActions(['deleteContact']),
        remove () {
            this.deleteContact(this.info.id);
        },
        edit () {
            this.$emit('edit');
        }
    }
}
</script>

<style lang="scss">
    .card {
        margin-bottom: 1rem;

    }

    .card-text {
        padding-right: 4rem;
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