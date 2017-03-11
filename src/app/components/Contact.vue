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

<style lang="scss" scoped>
    @import '../styles/variable';

    .card {
        margin-bottom: 1rem;
        border-color: desaturated(darken($color_item, 10%), 20%);
        border-radius: 0;
        background-color: $color_item;
        -webkit-box-shadow: -4px 4px 0px -1px rgba(227,224,211,0.6);
        -moz-box-shadow: -4px 4px 0px -1px rgba(227,224,211,0.6);
        box-shadow: -4px 4px 0px -1px rgba(227,224,211,0.6);
    }

    .card-title {
        color: $color_title;
    }

    .card-subtitle {
        a,
        a:link,
        a:active,
        a:visited {
            color: $color_subtitle;
        }

        a:hover {
            color: lighten($color_subtitle, 10%);
        }
    }

    .card-text {
        padding-right: 4rem;
        color: $color_text;
    }

    .card-block {
        padding: .5rem;
        .close {
            position: relative;
            top: -.2rem;
        }
    }

    @media (min-width: 768px) {
        .card-block {
            padding: 1rem;
            .close {
                top: -.5rem;
            }
        }
    }
</style>