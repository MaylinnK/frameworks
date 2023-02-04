<template>
  <div>
    <p v-if="randoNumber" class="mt-4">Rounded value: {{ rounded }}</p>
  </div>
</template>
<script lang="ts">
import { computed } from 'vue'
export default {
  name: 'RoundedNumber',
  props: {
    randoNumber: {
      type: Number,
      default: null,
    },
  },
  setup(props) {
    const rounded = computed(() => {
      return Math.round(props.randoNumber * 100) / 100
    })
    return {
      rounded,
    }
  },
}
</script>
