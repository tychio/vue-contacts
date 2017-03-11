<template>
<transition name="fade">
<div class="modal show" v-show="isOpening" :id="id">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{title}}</h5>
        <button type="button" class="close" @click="close()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="close_button btn btn-secondary" @click="close()">Close</button>
        <button type="button" class="save_button btn btn-primary" @click="save()">Save</button>
      </div>
    </div>
  </div>
</div>
</transition>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    id: {
      type: String,
      default: 'modal_id'
    },
    title: {
      type: String,
      default: 'Modal'
    },
    isOpening: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close');
    },
    save () {
      this.$emit('save');
    }
  }
}
</script>

<style lang="scss">
  .modal {
    background-color: rgba(0,0,0,.5);

    &.show {
      display: block;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>