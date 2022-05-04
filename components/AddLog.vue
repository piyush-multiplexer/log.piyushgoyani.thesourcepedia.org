<template>
  <div class="m-2 p-6">
    <div
      v-if="isAlert"
      class="flex p-4 mb-4 bg-green-100 border-t-4 border-green-500 dark:bg-green-200"
    >
      <div class="ml-3 text-sm font-medium text-green-700">
        Activity Logged!
      </div>
      <button
        class="ml-auto -mx-1.5 -my-1.5 bg-green-100 dark:bg-green-200 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 dark:hover:bg-green-300 inline-flex h-8 w-8"
        aria-label="Close"
        @click="isAlert = false"
      >
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div class="mb-6">
      <VueTailWindPicker
        :theme="theme"
        :init="true"
        start-date="1990-01-01"
        @change="(v) => (date = v)"
      >
        <label
          for="date"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Date
        </label>
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            id="date"
            v-model="date"
            placeholder="Select Date"
            class="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </VueTailWindPicker>
    </div>
    <div class="mb-6">
      <label
        for="title"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Title
      </label>
      <input
        id="title"
        v-model="title"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Title"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="description"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Your comment!
      </label>
      <textarea
        id="description"
        v-model="description"
        rows="4"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Description.."
      ></textarea>
    </div>
    <button
      type="submit"
      class="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-base my-2 mr-2"
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
      url: '',
      isAlert: false,
      theme: {
        background: '#FFFFFF',
        text: 'text-gray-700',
        border: 'border-gray-200',
        currentColor: 'text-gray-200',
        navigation: {
          background: 'bg-gray-100',
          hover: 'hover:bg-gray-200',
          focus: 'bg-gray-200',
        },
        picker: {
          rounded: 'rounded-full',
          selected: {
            background: 'bg-red-500',
            border: 'border-red-500',
            hover: 'hover:border-red-500',
          },
          holiday: 'text-red-400',
          weekend: 'text-green-400',
          event: 'bg-indigo-500',
        },
        event: {
          border: 'border-gray-200',
        },
      },
    }
  },
  mounted() {
    this.url = window.location.href + 'api/'
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
      this.isAlert = true
      this.title = ''
      this.description = ''
      this.date = ''
    },
  },
}
</script>
