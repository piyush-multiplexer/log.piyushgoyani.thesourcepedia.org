<template>
  <div>
    <div v-if="!$auth.loggedIn" class="m-2 p-6 w-2/5 justify-center">
      <div class="mb-6">
        <label
          for="username"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Username
        </label>
        <input
          id="username"
          v-model="username"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Username"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Password
        </label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Password"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-base my-2 mr-2"
        @click="login"
      >
        Login
      </button>
    </div>
    <div v-else>
      <AddLog />
      <Journey />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  mounted() {
    console.log('mounted', this.$auth)
  },
  methods: {
    async login() {
      const res = await this.$auth.loginWith('local', {
        data: {
          username: this.username,
          password: this.password,
        },
      })
      console.log('login', res)
      this.$auth.setUser(res.data)

      console.log('login', this.$auth)
    },
  },
}
</script>
