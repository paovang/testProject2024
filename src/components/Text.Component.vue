<template>
    <div>
        <!-- Show Props: {{ props.isPropsData }} -->
        <!-- Show Props: {{ isPropsData?.name }} -->
        <!-- Show Props: {{ isPropsData.name }} -->
        <!-- Show Props: {{ props.name }} {{ props.surname }} -->
        <button @click="$emit('someEvent', 1)">Click Me</button>  
    </div>
</template>

<script setup lang="ts">
    // const props = defineProps(['isPropsData'])

    // defineProps({
    //   isPropsData: Object
    // })

    // defineProps<{
    //     isPropsData?: any
    // }>()

    // const props = defineProps<{
    //     name: string,
    //     surname: string
    // }>()
</script>