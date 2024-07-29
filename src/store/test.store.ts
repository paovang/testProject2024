import axios from "axios";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const testUseStore = defineStore("test-store", () => {
  const message = reactive<any>({
    count: 0,
    msg: "",
  });
  function increment() {
    message.count++;
    message.msg = "Success";
  }

  const getUsers = reactive<any>({});

  const state = reactive<any>({
    provinces: [],
  });
  async function getAllUsers() {
    // get, post, put , delete
    try {
      const response = await axios.get(
        "https://api.hellonewyears.com/api/countries"
      );
      state.provinces = response.data.data;
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  return { message, increment, getAllUsers, getUsers, state };
});
