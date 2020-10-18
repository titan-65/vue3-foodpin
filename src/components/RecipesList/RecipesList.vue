<template>
    <div class="col-md-4">
      <base-card>
        <template v-slot:header>
          <a href="#pablo">
            <img class="img" :src="image">
            <div class="card-title">
              {{title}}
            </div>
          </a>
          <div class="colored-shadow" style="background-image: url(&quot;./assets/img/examples/card-blog1.jpg&quot;); opacity: 1;"></div>
        </template>
        <template v-slot:card-body>
          <h6 class="card-category text-info">{{preview}}</h6>
          <p class="card-description">
            {{description}}
          </p>
          <button class="btn btn-danger" @click="deleteRecipe(id)">Delete</button>
        </template>
      </base-card>
    </div>
</template>

<script>
    export default {
      inject: ['removeRecipe'],
        props: {
          title: String,
          preview: String,
          description: String,
          image: String,
          id: String
        },
      data() {
          return {

          }
      },
      provide: {

      },
      methods: {
        deleteRecipe(id) {
          this.removeRecipe(id);
        }
      }
    };
</script>
