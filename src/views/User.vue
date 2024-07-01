<template>
    <div>
        <p>
            Ask a yes/no question:
            <input v-model="question" /><br/><br/>
            <button @click="submitPropsData">Submit Data</button>
        </p>
        <hr/>
        <!-- <TextComponent :is-props-data="propsData" /> -->
        <!-- <TextComponent v-bind="propsData" @some-event.once="callback" /> -->
        <TextComponent v-bind="propsData" @some-event="callback" />
        
        <!-- <TextComponent2>
            <template v-slot:header>
               <div>
                Hello World
               </div>
            </template>
        </TextComponent2> -->
    </div>
</template>

<script setup lang="ts">
    import { ref, watch, reactive } from 'vue';
    import TextComponent from '../components/Text.Component.vue';
    // import TextComponent2 from '../components/Texts.Component.vue';

    const question = ref('');
    const propsData = reactive<any>({});

    const submitPropsData = () => {
        propsData.name = 'Pao';
        propsData.surname = 'Vang';
    }

    const callback = (e: any) => {
        console.log('emit success.', e);
    }

    // watch 
    watch(question, async (newQuestion, oldQuestion) => {
        console.log(oldQuestion, newQuestion);
    })
</script>