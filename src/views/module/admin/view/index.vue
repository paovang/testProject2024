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
              <th>Description</th>
              <th>Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in state.props" :key="idx">
              <td>{{idx+1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.description}}</td>
              <td>{{item.created_at}}</td>
              <td>
                <i class="fas fa-pen" style="width: 50px; color: blue" @click="openUpdate(item.id)"></i>
                <i class="fas fa-trash" style="color: red" @click="openDelete(item.id)"></i>
              </td>
            </tr>
          </tbody>
        </table>
  
        <!-- Modal Add -->
        <CreateComponent :is-modal-add-active="isModalAddActive" @update:close-modal="isModalAddActive = $event" />
        <!-- End Modal Add -->
  
        <!-- Modal Update -->
        <UpdateComponent :item-value="item" :is-modal-update-active="isModalUpdateActive" @update:close-modal="isModalUpdateActive = $event" />
        <!-- End Modal Update -->
  
    </div>
  </template>
  
  <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { testUseStore } from '../store';
    import CreateComponent from '../components/CreateComponent.vue';
    import UpdateComponent from '../components/UpdateCompoent.vue';
  
    const { state, getAll } = testUseStore();
  
    const setLocale = (value: string) => {
      localStorage.setItem('locale', value);
      window.location.reload();
    }

  
    const openDelete = (id: number) => {
      console.log('delete:', id);
    }
   
    const isModalAddActive = ref(false);
    const isModalUpdateActive = ref(false);
    const item =  ref({});
  
    const openModal = () => {
      isModalAddActive.value = true;
    }
  
    const openUpdate = (id: number) => {
      const countryToUpdate = state.props.find((item: any) => item.id === id);
      if (countryToUpdate) {
        item.value = countryToUpdate;
        isModalUpdateActive.value = true;
      }
    }
  
    onMounted(async () => {
      await getAll();
    })
  </script>
  
  <style>
  
  </style>