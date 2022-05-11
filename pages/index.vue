<template>
  <div class="text-center">
    <AddLog class="text-left" />
    <button
      type="submit"
      class="w-4/5 text-white bg-gradient-to-tr from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-base my-2"
      @click="addLog"
    >
      View Journey
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    addLog() {
      this.$router.push('/journey');
    },
  },
}
</script>
