<template>
  <div class="m-2 p-6">
    <div class="mb-6">
      <VueTailWindPicker :init="false" @change="(v) => (date = v)">
        <input v-model="date" placeholder="Example initial value" />
      </VueTailWindPicker>
    </div>
    <div class="mb-6">
      <label
        for="title"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Title</label
      >
      <input
        id="title"
        v-model="title"
        type="text"
        class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Title"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="description"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >Your comment!</label
      >
      <textarea
        id="description"
        v-model="description"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Description.."
      ></textarea>
    </div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="addLog"
    >
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddLog',
  components: { VueTailWindPicker: () => import('vue-tailwind-picker') },
  data() {
    return {
      date: '',
      title: '',
      description: '',
      url: 'http://localhost:3000/api/',
    }
  },
  methods: {
    async addLog() {
      await fetch(`${this.url}addLog`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          date: new Date(this.date).toDateString(),
        }),
      })
      this.title = ''
      this.description = ''
      this.date = ''
    },
  },
}
</script>
