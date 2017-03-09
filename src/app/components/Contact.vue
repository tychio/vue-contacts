<template>
<div class="card">
    <div class="card-block">
        <h4 class="card-title">{{people.firstName}}&nbsp;{{people.lastName}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">
            <a :href="'mailto:'+ people.email">{{people.email}}</a>
        </h6>
        <div class="card-text">{{people.description}}</div>
    </div>
</div>
</template>

<script>
class People {
    constructor (info) {
        info = info || {};
        this.id = info.id || 0;
        this.firstName = info.first_name || '';
        this.lastName = info.last_name || '';
        this.email = info.email || '';
        this.description = info.description || '';
    }
}

export default {
    name: 'Contact',
    props: ['info'],
    data() {
        return {
            people: new People(this.info)
        };
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