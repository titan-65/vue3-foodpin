<template>
  <Nav/>
  <TheHeader/>
  <div class="row">
  <TheSidebar/>
  <Main>
      <div class="col-md-9">
      <AddRecipeListButton/>
      <div class="row">
        <RecipesList v-for="recipe in recipes" :key="recipe.id"
                     :id="recipe.id"
                     :title="recipe.title" :preview="recipe.preview"
                     :description="recipe.description"
                     :image="recipe.image"/>
      </div>
    </div>
  </Main>
  </div>
</template>

<script>
import Nav from './components/layout/Nav.vue'
import Main from "@/components/layout/Main/Main";
import AddRecipeListButton from "@/components/AddRecipeListButton";
import RecipesList from "@/components/RecipesList/RecipesList";
import TheSidebar from "@/components/layout/TheSidebar/TheSidebar";
import TheHeader from "@/components/layout/TheHeader.vue";
export default {
  name: 'App',
  components: {
    TheHeader,
    TheSidebar,
    RecipesList,
    AddRecipeListButton,
    Main,
    Nav
  },
  data() {
    return {
      recipes: [
        {
          id: 1,
          title: 'French Make',
          preview: 'lore',
          image: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/q/2000/quick_and_easy_french_toast_new_2000x1125.jpg?vd=20200628T070902Z&hash=BC3427A3F141526D1217F3589AEA487D',
          description: 'this is an initial recipe'
        },
        {
          id: 2,
          title: 'French Toast',
          preview: 'Brunch',
          image: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/s/2000/stuffed-french-toast-with-spiced-syrup-crepes-of-wrath.jpg?vd=20200628T030755Z&hash=84367140AA3533EB9E96592122499D2C',
          description: 'Beat egg, vanilla and cinnamon in shallow dish. Stir in milk. Dip bread in egg mixture, ' +
              'turning to coat both sides evenly. Cook bread slices on lightly greased nonstick griddle or skillet on medium heat until browned on both sides.'
        },
        {
          id: 3,
          title: 'Apple Cinnamon Pancakes',
          preview: 'lorem ipmssaj[',
          description: 'Sugar, spice and everything nice – in a mug! Apple Cinnamon Sugar and Spice Blend takes center stage in this 90-second, microwavable muffin recipe.',
          image: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/a/2000/apple_cinnamon_muffin_in_a_mug_2000x1125.jpg?vd=20200628T040330Z&hash=826FB38A4F1EC465ADABB7D7AB6C815D'
        },
        {
          id: 4,
          title: 'Vanilla Chocolate Chip Cookies',
          preview: 'lorem ipmssaj[',
          description: 'Add chocolate chips to a vanilla-infused batter for a muffin that\'s great for breakfast, brunch, lunchbox treat or afternoon break.',
          image: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/v/2000/vanilla-rich-chocolate-chip-muffins.jpg?vd=20200628T054231Z&hash=12C0F89C49553F63B1B14A8FB1270FD1'
        }

      ]
    }
  },
  provide() {
    return {
      addRecipe: this.addRecipes,
      removeRecipe: this.removeRecipes,
    }
  },
  methods: {
    addRecipes(title, preview, description, image) {
      const newRecipe = {
        id: new Date().toISOString(),
        title: title,
        preview: preview,
        description: description,
        image: image,
      }
      this.recipes.unshift(newRecipe)
    },
    removeRecipes(id) {
      const recipeIndex = this.recipes.findIndex(res => {
        return res.id === id
      })
      this.recipes.splice(recipeIndex, 1)
    }
  }
}
</script>

<style>

</style>
