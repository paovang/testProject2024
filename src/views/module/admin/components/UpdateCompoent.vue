<template>
    <div class="modal" :class="{ 'is-active': isModalUpdateActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Update Modal title</p>
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
                v-model="description"
                :class="{ 'is-danger': errors.description }"
                placeholder="Please enter description"
                />
                <p v-if="errors.description" class="help is-danger">{{ errors.description }}</p>
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
    import { watch } from 'vue';
    import { validationSchema } from '../schema/index';
    import { testUseStore } from '../store/index';

    const { update, form } = testUseStore();

    const emit = defineEmits(['update:closeModal']);

    const props = defineProps({
        isModalUpdateActive: {
            type: Boolean,
            required: true
        },
        itemValue: {
            type: Object,
            required: true
        }
    })

    const { handleSubmit, errors, setValues } = useForm({
      validationSchema
    });
  
    const { value: name } = useField<string>('name');
    const { value: description } = useField<string>('description');
    
    const onSubmit = handleSubmit(async(value) => {
        form.name = value.name;
        form.description = value.description;
      await update(form);
    });


    const closeModal = () => {
        emit('update:closeModal', false);
    }

    watch(() => props.itemValue, (newItem) => {
        if (Object.keys(newItem).length > 0) {
            form.id = newItem.id;

            setValues({
                name: newItem.name,
                description: newItem.description
            });
        }
    }, { immediate: true });
</script>