<template>
    <div>
        <div>
            <!-- Show Test Store: {{ message }}<br/> -->
        </div>
    </br>
    </div>
</template>

<script setup lang="ts">
    import { testUseStore } from '../store/test.store';
    // import { storeToRefs } from 'pinia'
    // import { watch } from 'vue';

    // const { message } = storeToRefs(testUseStore())
    const store = testUseStore()

    store.$subscribe((mutation, state) => {
        console.log('Store changed:', mutation, state);
    }, { detached: true });

</script>