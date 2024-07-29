<template>
    <div>
        <input v-model="form.name" placeholder="please enter name..."><br/>
        <input v-model="form.surname" placeholder="please enter surname..."><br/>
        <input v-model="form.email" placeholder="please enter email..."><br/><br/>
        <button style="border: solid green;" @click="submitData">
            {{ isShow ? "Add Data" : "Can Not Add"  }}
        </button><br/><br/>
        <p>Name: {{ showData.name }}</p>
        <p>Surname: {{ showData.surname }}</p>
        <p>Email: {{ showData.email }}</p><br/><br/>
        <button @click="clearData">
            Clear Message
        </button>
        <hr/>
        <button @click="increment">
            Count Store
        </button>
        <div>Show Result: {{ message.count }}</div>
        <div>Show Emit: {{ message.msg }}</div>
        <br/>
        <div v-for="(item, index) in state.provinces" :key="index">
            <p>{{ index+1 }} => {{ item.currency }}.{{ item.name }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { testUseStore } from '../store/test.store';

 
const { message, increment, getAllUsers, getUsers, state } = testUseStore();



    const form = reactive<any>({});
    const showData = reactive<any>({});
    const isShow = ref<boolean>(true);

    const submitData = () => {
        showData.name = form.name;
        showData.surname = form.surname;
        showData.email = form.email;
        isShow.value = false;

        // Reset form fields to empty
        Object.keys(form).forEach(key => {
            form[key] = '';
        });
    }

    const clearData = () => {
        isShow.value = true;
        showData.name = '';
        showData.surname = '';
        showData.email = '';
    }

    onMounted(async () => {
        getAllUsers();
        await postData();
    })
</script>

<style scoped>
 

</style>