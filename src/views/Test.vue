
<template>
    <div>
        ສະບາຍດີ ປີໃໝ່ລາວ 2024: {{ name }} {{ surname }} <br/><br/>
        show: {{ pao.name }} {{ pao.surname }} | {{ pao.items.name }} {{ pao.items.surname }} <br/><br/>
        Show Books: {{ publishedBooksMessage }} <br/>
        <p v-if="gender === 'male'">Gender: {{ gender }}</p>
        <p v-else-if="gender === 'female'">Gender: {{ gender }}</p>
        <p v-else>Gender: Not</p>
        <br/><br/>
        

        <div style="background-color: red; height: 200px;" @click="changeData">
            <br/>
            <button>Click Show Data:</button><br/>
            ShowName: {{ text }}
            <input v-model="text">
        </div> 
        <br/>
        <div :class="isActive ? 'text-danger': 'text-blue'">ShowDatra22</div>

        <div v-if="isActive" class="text-danger">ShowData22</div>
        <div v-else="!isActive" class="text-blue">ShowData22</div>
        <br/>
        <TextComponent/>
        <TextComponent2/>
    </div>
</template>

<script lang="ts" setup>
    import { ref, reactive, computed, onMounted } from 'vue';
    import TextComponent from '../components/Text.Component.vue';
    import TextComponent2 from '../components/Texts.Component.vue';

    const isActive = ref(true)

    const name = ref('pao');
    const surname = ref('vang');
    const text = ref('');

    const gender = ref('dfgdf');

    const author = reactive({
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery',
            'Vue 5 - The Mystery',
        ]
    })

    const publishedBooksMessage = computed(() => {
        return author.books.length > 0 ? 'Yes' : 'No'
    })

    const pao = reactive({
        name: 'pao',
        surname: 'vang',
        items: {
            name: 'alex',
            surname: 'sander'
        }
    });

    // const changeData = () => {
    //     name.value = 'Seng';
    // } 

    function changeData() {
        name.value = 'Seng';
    }

    onMounted(() => {
        console.log(`the component is now mounted.`);
    })
</script>

<style>
    .text-danger {
        color: red
    }

    .text-blue {
        color: blue
    }
</style>