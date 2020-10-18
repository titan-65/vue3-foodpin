<template>
  <nav class="col-md-3 bg-white shadow">
    <ul class="nav flex-column pt-lg-5 p-5">
      <li class="nav-item">
        <form @submit.prevent="submitRecipe">
          <div class="form-control">
            <label for="title">Title</label>
            <input id="title" v-model="title" name="title" ref="title" type="text">
          </div>
          <div class="form-control">
            <label for="preview">Preview</label>
            <input id="preview" v-model="preview" name="preview" ref="preview" type="text">
          </div>
          <div class="form-group mt-2">
            <label class="form-control-label bmd-label-floating" for="description">Description</label>
            <textarea class="form-control" v-model="description" id="description" ref="description" name="description" rows="5"/>
          </div>
          <div class="form-control mt-5">
            <label for="image">Image</label>
            <input id="image" name="image" v-model="image" ref="image" type="url">
          </div>
          <div>
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </li>

    </ul>
  </nav>
  <base-modal v-if="inputInvalid" @click="closeModal" title="Invalid input"/>
</template>

<script>
  /*
  Two methods can be used to collect the data from the form
  1. Using data field and adding v-model
  2. Using $refs
  This tutorial shall use the later
   */
    export default {
        props: {
        },
      inject: ['addRecipe'],
      data() {
          return {
            title: '',
            preview: '',
            description: '',
            image: '',
            inputInvalid: false
          }
      },
      methods: {
          submitRecipe() {
            const enteredTitle = this.$refs.title.value;
            const enteredPreview = this.$refs.preview.value;
            const enteredDescription = this.$refs.description.value;
            const enteredImage = this.$refs.image.value;

            if(enteredTitle.trim() === '' | enteredPreview.trim() === '' | enteredDescription.trim() === '' | enteredImage.trim() === '') {
              this.inputInvalid = true;
              return;
            }

            this.addRecipe(enteredTitle, enteredPreview, enteredDescription, enteredImage)
            this.title = '';
            this.preview = '';
            this.description = '';
            this.image = '';
          },
        closeModal() {
            this.inputInvalid = false;
        }
      }
    };
</script>
