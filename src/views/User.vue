<template>
    <div>
        <p>
            Ask a yes/no question:
            <input v-model="question" /><br/><br/>
            <button @click="submitPropsData">Submit Data</button>
        </p>
        
        <!-- <TextComponent :is-props-data="propsData" /> -->
        <!-- <TextComponent v-bind="propsData" @some-event.once="callback" /> -->
        <!-- <TextComponent v-bind="propsData" @some-event="callback" /> -->
        
        <!-- <TextComponent2>
            <template v-slot:header>
               <div>
                Hello World
               </div>
            </template>
        </TextComponent2> -->

        Text: {{ showText }}
        <hr/>
        <br/>
        <ChildrenComponent :isPropsData="propsData" @someEmit="callback" />
        <!-- <ChildrenComponent v-bind="propsData" @someEmit="callback" /> -->
         <br/>
         <hr/>
         <br/>
         <div>
            <input v-model="customer.name" placeholder="enter name">
            <input v-model="customer.email" placeholder="enter email">
            <button @click="submitData" v-if="!isEdit">Add Item</button>
            <button @click="editData" v-else>Edit Item</button>
         </div>
         <br/><br/>
         <div v-for="(item, index) in customerMemories" :key="index">
            <p>id: {{item.id}}</p>
            <p>Name: {{item.name}}</p>
            <p>Email: {{item.email}}</p>
            <p>
                <button @click="editItem(item)">Edit</button>
                <button @click="deleteItem(item.id)">Delete</button>
            </p>
            <hr/>
         </div>
    </div>
</template>

<script setup lang="ts">
    import { customerMemories } from '../database/memory';
    export interface PropData {
        name: string;
        surname: string;
        age?: string;
    }
    import { ref, watch, reactive } from 'vue';
    // import TextComponent from '../components/Text.Component.vue';
    import ChildrenComponent from '../components/Children.Component.vue';
    // import TextComponent2 from '../components/Texts.Component.vue';

    const isEdit = ref(false);
    const customer = reactive<any>({});
    const submitData = async () => {
        customerMemories.push({
            ...customer,
            id: String(customerMemories.length + 1)
        })
        customer.name = '';
        customer.email = '';
    }

    const editItem = async (item: any) => {
        isEdit.value = true;
        customer.id = item.id;
        customer.name = item.name;
        customer.email = item.email;
    }

    const editData = async () => {
        const idx = customerMemories.findIndex((item) => item.id === customer.id);
        if (idx > -1) {
            customerMemories[idx] = {...customer};

            customer.name = '';
            customer.email = '';
            
            isEdit.value = false;
        }
    }

    const deleteItem = async (id: string) => {
        const idx = customerMemories.findIndex((item) => item.id === id);
        if (idx > -1) {
            customerMemories.splice(idx, 1);

            console.log(customerMemories);
        }
    }


    const question = ref('');
    const propsData = reactive<PropData>({
        name: '',
        surname: '',
    });
    const showText = ref('');

    const submitPropsData = () => {
        propsData.name = 'Seng';
        propsData.surname = 'Xing';
    }

    const callback = (e: any) => {
        showText.value = e;
    }

    // watch 
    watch(question, async (newQuestion, oldQuestion) => {
        console.log(oldQuestion, newQuestion);
    })
</script>