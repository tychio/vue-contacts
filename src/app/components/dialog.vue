<template>
<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true"
  :class="{'show': isOpening}" 
  :style="{'display': isOpening ? 'block' : 'none'}"
  :id="id"
>
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
        <button type="button" class="do_button btn btn-primary" @click="doAction()">Save</button>
      </div>
    </div>
  </div>
</div>
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
    },
    closeHandler: {
      type: Function,
      default: () => {}
    },
    actionHandler: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    close () {
      this.closeHandler();
    },
    doAction () {
      this.actionHandler();
    }
  }
}
</script>