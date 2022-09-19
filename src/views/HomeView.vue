<template>
  <div class="home">
    <CarCrashes />
  </div>
</template>

<script>
// @ is an alias to /src
import CarCrashes from '@/components/CarCrashes.vue'

export default {
  name: 'HomeView',
  components: {
    CarCrashes
  }
}
</script>
