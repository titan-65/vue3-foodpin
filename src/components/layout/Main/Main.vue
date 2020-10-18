<template>
  <main>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="container mx-auto">
        <slot name="button"></slot>
        <!-- Recipes       -->
        <slot></slot>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>

<script>
    export default {
        props: {
        },
    };
</script>
