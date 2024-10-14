import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { AdminService } from "../service";
import { container } from "tsyringe";

export const testUseStore = defineStore("test-store", () => {
  const service = container.resolve<AdminService>(AdminService);

  const message = ref("");
  const form = reactive<any>({
    name: "",
    description: "",
    id: "",
  });

  function increment() {
    message.value = "Hello world!";
    console.log(message.value);
  }

  const state = reactive<any>({
    props: [],
    country: {},
  });

  // put, post, get, delete
  async function getAll() {
    const res = await service.getAll();
    state.props = res.data.results;
  }

  async function create(value: any) {
    await service.create(value);
  }

  async function update(value: any) {
    await service.update(value);
  }

  return { message, increment, state, getAll, create, update, form };
});
