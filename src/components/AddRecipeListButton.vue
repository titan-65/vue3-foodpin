<template v-slot:button>
  <div class="flex flex-row">
    <button @click="selectedTab('add-recipe-list')" class="bg-black text-white active:bg-purple-100 rounded px-8 py-3"
            type="button" style="transition: all .15s ease">
      Add Recipe
    </button>

    <button @click="selectedTab('recipe-list')" class="bg-black text-white active:bg-purple-100 rounded ml-3 px-8 py-3"
            type="button" style="transition: all .15s ease">
      Show Recipes
    </button>
  </div>
</template>
<script>
export default {
  name: 'AddRecipeListButton',
  data(){
    return {
      selected: 'recipe-list'
    }
  },
  methods: {
    selectedTab(tab) {
      this.selected = tab;
    }
  }
}
</script>
