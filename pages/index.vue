<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-img class="image-background" :src="banner" height="400">
        <div class="hero-text black--text card text-center">
          <div class="text-h3">Someting</div>
          <div class="text-subtitle-1">subtitle</div>
          <v-btn>click</v-btn>
        </div>
      </v-img>
    </v-col>

  </v-row>
</template>

<script>
export default {
  data() {
    return {
    banner: 'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?cs=srgb&dl=pexels-peng-louis-1643456.jpg&fm=jpg&_gl=1*yu6gc7*_ga*MjAzNTg5MDQxMi4xNjY2ODAzNzEy*_ga_8JE65Q40S6*MTY2NjgwMzcxMi4xLjEuMTY2NjgwNjE2NS4wLjAuMA..'
    }
  },
};
</script>
<style scoped>
.image-background {
  position: relative;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1rem;
}

</style>
