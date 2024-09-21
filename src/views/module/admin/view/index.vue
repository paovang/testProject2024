<template>
    <div>
      <button @click="setLocale('en')">EN</button>
      <button @click="setLocale('la')">LA</button>
      <hr/>
      <button class="button is-primary" @click="openModal">{{ $t('message.button_add') }}</button>
      <h1>{{ $t('message.hello') }}</h1>
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
            <tr v-for="(item, idx) in state.countries" :key="idx">
              <td>{{idx+1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.currency}}</td>
              <td>{{item.created_at}}</td>
              <td>
                <i class="fas fa-pen" style="width: 50px; color: blue" @click="openUpdate(item.id)"></i>
                <i class="fas fa-trash" style="color: red" @click="openDelete(item.id)"></i>
              </td>
            </tr>
          </tbody>
        </table>
  
        <!-- Modal Add -->
        <CreateComponent :is-modal-add-active="isModalAddActive" @update:isModalAddActive="isModalAddActive = $event"/>
        <!-- End Modal Add -->

        <!-- Modal Update -->
        <UpdateComponent :item="item" :is-modal-update-active="isModalUpdateActive" @update:isModalUpdateActive="isModalUpdateActive = $event"/>
        <!-- End Modal Update -->
  
    </div>
  </template>
  
  <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    // import { useForm, useField } from 'vee-validate';
    // import * as yup from 'yup';
    import { testUseStore } from '../store';
    import CreateComponent from '../components/CreateComponent.vue';
    import UpdateComponent from '../components/UpdateCompoent.vue';
  
    const { state, getAll } = testUseStore();
  
    // const validationSchema = yup.object({
    //   name: yup.string().required('Please enter name.'),
    //   currency: yup.string()
    //     .required('Please enter currency.')
    //     .max(3, 'Currency must be at most 3 characters.')
    // });
  
    const setLocale = (value: string) => {
      localStorage.setItem('locale', value);
      window.location.reload();
    }
  
    // const { handleSubmit, errors, setValues } = useForm({
    //   validationSchema
    // });
  
    // const { value: name } = useField<string>('name');
    // const { value: currency } = useField<string>('currency');
  
    // const onSubmit = handleSubmit(async(value) => {
    //   console.log('Submitted values:', value);
    // });
  
    // const onSubmitUpdate = handleSubmit(async(value) => {
    //   console.log('Submitted Update values:', value);
    // });
  
    const openDelete = (id: number) => {
      console.log('delete:', id);
    }
   
    const isModalAddActive = ref(false);
    const isModalUpdateActive = ref(false);
    const item = ref<any>({});
  
    const openModal = () => {
      isModalAddActive.value = true;
    }
  
    const openUpdate = (id: number) => {
      const countryToUpdate = state.countries.find((item: any) => item.id === id);
      if (countryToUpdate) {
        item.value = countryToUpdate;
        state.country = countryToUpdate;
        isModalUpdateActive.value = true;
      }
    }
  
    onMounted(async () => {
      await getAll();
    })
  </script>
  
  <style>
  
  </style>