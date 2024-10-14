import axios from "axios";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { AdminService } from "../service";
import { container } from "tsyringe";

export const testUseStore = defineStore("test-store", () => {
  const service = container.resolve<AdminService>(AdminService);

  const message = ref("");

  function increment() {
    message.value = "Hello world!";
    console.log(message.value);
  }

  const state = reactive<any>({
    countries: [],
    country: {},
  });

  // put, post, get, delete
  async function getAll() {
    await axios({
      method: "get",
      url: "https://api.hellonewyears.com/api/countries",
    })
      .then(function (res) {
        state.countries = res.data.data;
      })
      .catch(function (error) {
        console.error("Error fetching countries:", error);
      });
  }

  async function create(value: any) {
    await service.create(value);
  }

  async function update(value: any) {
    await service.update(value);
  }

  return { message, increment, state, getAll, create, update };
});
