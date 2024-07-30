<template>
    <div>
      <button class="button is-primary" @click="openModal">Add New</button>
      <hr/>
      <table class="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Currency</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Laos</td>
            <td>KIP</td>
            <td>2024-08-01 19:00 AM</td>
            <td>
              <i class="fas fa-pen" style="width: 50px;"></i>
              <i class="fas fa-trash" style="color: red"></i>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modal Add -->
      <div class="modal" :class="{ 'is-active': isModalActive }">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">List Country</p>
            <button class="delete" aria-label="close" @click="closeModal"></button>
          </header>
          <section class="modal-card-body">
            <form @submit.prevent="onSubmit">
              <div class="field">
                <input
                  v-model="name"
                  class="input is-link"
                  type="text"
                  :class="{ 'is-danger': errors.name }"
                  placeholder="please enter name..."
                />
                <p v-if="errors.name" class="help is-danger">{{ errors.name }}</p>
              </div>
            
              <div class="field">
                <input
                  v-model="currency"
                  class="input is-link"
                  type="text"
                  placeholder="please enter currency..."
                  :class="{ 'is-danger': errors.currency }"
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
      <!-- End Modal Add -->
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useForm, useField } from 'vee-validate';
  import * as yup from 'yup';
  
  const validationSchema = yup.object({
    name: yup.string().required('Name is required.'),
    currency: yup.string()
        .required('Currency is required.')
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
  
  const isModalActive = ref(false);
  
  const openModal = () => {
    isModalActive.value = true;
  };
  
  const closeModal = () => {
    isModalActive.value = false;
  };
  </script>
  
  <style scoped>
  /* Add any additional scoped styles here if needed */
  </style>
  