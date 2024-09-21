<template>
    <div class="modal" :class="{ 'is-active': isModalAddActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
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
    import * as yup from 'yup';
    import { useField, useForm } from 'vee-validate';

    defineProps({
        isModalAddActive: {
            type: Boolean,
            required: true
        },
    });
    const emit = defineEmits(['update:isModalAddActive']);

    const validationSchema = yup.object({
      name: yup.string().required('Please enter name.'),
      currency: yup.string()
        .required('Please enter currency.')
        .max(3, 'Currency must be at most 3 characters.')
    });

    const { handleSubmit, errors } = useForm({
      validationSchema
    });
  
    const { value: name } = useField<string>('name');
    const { value: currency } = useField<string>('currency');
  
    const onSubmit = handleSubmit(async(value) => {
      console.log('Submitted values:', value);
    });

    const closeModal = () => {
        emit('update:isModalAddActive', false);
    }
</script>