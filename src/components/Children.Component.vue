
<template>
  <div>
    Children Component {{ props.isPropsData.name }} {{ props.isPropsData.surname }}
    <button @click="$emit('someEmit', 'ok')">Click Emit</button>  
    {{  data }}

    <p style="color: red" v-if="isShow">PAO</p>
    <p style="color: green" v-else="!isShow">PAO1</p>

    <p :class="isShow ? 'isActive' : 'unIsActive'"></p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps(['isPropsData'])
  import { ref } from 'vue';

  const data = ref<any>([]);
  const isShow = ref(false);
  // const state = reactive<any>({ count: 10 })

  //  const props = defineProps<{
  //       name: string,
  //       surname: string
  //   }>()
</script>

<style>
.isActive {
  color: red;
}

.unIsActive {
  color: green;
}
</style>