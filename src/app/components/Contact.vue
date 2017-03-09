<template>
<div class="card">
    <div class="card-block">
        <h4 class="card-title">{{fullname}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">
            <a :href="'mailto:'+ email">{{email}}</a>
        </h6>
        <div class="card-text">{{description}}</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Contact',
    props: {
        info: {
            type: Object,
            default: {}
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