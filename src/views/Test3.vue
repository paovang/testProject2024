<template>
    <div>
        
        <button @click="increment">
            Count Store
        </button>
        <div>Show Result: {{ message }}</div>
    </div>
</template>

<script setup lang="ts">
    import { testUseStore } from '../store/test.store';
    import { storeToRefs } from 'pinia';

    const { increment } = testUseStore();
    const { message,  } = storeToRefs(testUseStore())
</script>

<style scoped>
 

</style>