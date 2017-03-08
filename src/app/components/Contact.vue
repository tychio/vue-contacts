<template>
<div>
    <span>{{people.firstName}}</span>
    <span>{{people.lastName}}</span>
    <span>{{people.email}}</span>
    <span>{{people.description}}</span>
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