<template>
  <div class="modal fade show" id="myModal2" tabindex="-1" role="dialog" style="display: block; padding-right: 15px;">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{title}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i class="material-icons">clear</i>
          </button>
        </div>
        <div class="modal-body">
          <p>Please check that you have enter values for all fields. Thank you</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger btn-link" data-dismiss="modal">Close<div class="ripple-container"><div class="ripple-decorator ripple-on ripple-out" style="left: 21.5781px; top: 19px; background-color: rgb(244, 67, 54); transform: scale(8.50976);"></div></div></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  methods: {
  }
}
</script>
