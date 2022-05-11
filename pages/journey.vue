<template>
  <div class="m-2 p-4">
    <h2 class="mb-4">Timeline</h2>
    <div v-for="(timeline, idx) in logs" :key="idx">
      <TimeLine
        :timeline="timeline"
        :is-last="idx === logs.length - 1"
      ></TimeLine>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Journey',
  data() {
    return {
      logs: [],
      url: '',
    }
  },
  mounted() {
    this.url = `${window.location.origin}/api/`
    this.getLogs()
  },
  methods: {
    async getLogs() {
      await fetch(`${this.url}getLogs`)
        .then((res) => res.json())
        .then((res) => {
          this.logs = res.data
        })
    },
  },
}
</script>
