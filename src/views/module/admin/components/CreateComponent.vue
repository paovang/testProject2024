<template>
    <div class="modal" :class="{ 'is-active': isModalAddActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Add Modal title</p>
            <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
            <form @submit.prevent="onSubmit">
            <div class="field">
                <input
                class="input is-link"
                type="text"
                v-model="name"
                placeholder="Please enter name"
                :class="{ 'is-danger': errors.name }"
                />
                <p v-if="errors.name" class="help is-danger">{{ errors.name }}</p>
            </div>
            <div class="field">
                <input
                class="input is-link"
                type="text"
                v-model="currency"
                :class="{ 'is-danger': errors.currency }"
                placeholder="Please enter currency"
                />
                <p v-if="errors.currency" class="help is-danger">{{ errors.currency }}</p>
            </div>
            <footer class="modal-card-foot">
            <div class="buttons">
                <button type="submit" class="button is-success">Save Data</button>
            </div>
            </footer>
        </form>
        </section>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useField, useForm } from 'vee-validate';
    import { validationSchema } from '../schema/index';
    import { testUseStore } from '../store/index';

    const { create } = testUseStore();

    const emit = defineEmits(['update:closeModal']);
    defineProps({
        isModalAddActive: {
            type: Boolean,
            required: true
        },
    })

    const { handleSubmit, errors } = useForm({
      validationSchema
    });
  
    const { value: name } = useField<string>('name');
    const { value: currency } = useField<string>('currency');
  
    const onSubmit = handleSubmit(async(value) => {
        await create(value);
    });


    const closeModal = () => {
        emit('update:closeModal', false);
    }
</script>