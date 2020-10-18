<template>
  <div class="card card-blog">
    <div class="card-header card-header-image">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="card-body"></slot>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
