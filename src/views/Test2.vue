<template>
    <div>
        My Component:
        <Children1Component1>
            <template v-slot:headers>
                Hello world
            </template>
        </Children1Component1>
        <hr/>
        Provide: {{ myMessage }}

        <div>
            Component 1
        </div>
        <div>
            Component 2
        </div>
        <hr/>
        <button @click="increment">Test</button>
        <div>
            Show Test Store: {{ message.count }}<br/>
            Show Test Store1 : {{ message.msg }}<br/>
            <div>
                Show: {{ getUsers }}
            </div>
        </div>
    </br>
    <br/>
        <div v-for="(item, index) in state.provinces" :key="index">
            <p>{{ index+1 }} => {{ item.currency }}.{{ item.name }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Children1Component1 from '../components/Children1.Component.vue';
    import { testUseStore } from '../store/test.store';
    import { onMounted } from 'vue';
 
    const { message, increment, getAllUsers, getUsers, state } = testUseStore();
    
    
    onMounted(() => {
        getAllUsers();
    })
</script>