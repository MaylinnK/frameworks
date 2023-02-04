<template>
  <div>
    <nav-bar />
    <section class="flex flex-col items-center mt-24">
      <h1>Random number generator</h1>
      <button class="bg-lightgrey my-5 py-1.5 px-7 rounded-3xl" @click="rng">
        Generate
      </button>
      <p>{{ randoNumber }}</p>
      <rounded-number :rando-number="randoNumber" />
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import RoundedNumber from '../components/RoundedNumber.vue'
export default {
  name: 'RandomNumberPage',
  components: {
    RoundedNumber,
  },
  setup() {
    const randoNumber = ref()
    function rng() {
      randoNumber.value = Math.random()
    }

    return {
      randoNumber,
      rng,
    }
  },
}
</script>
