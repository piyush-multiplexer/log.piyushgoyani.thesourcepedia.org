<template>
  <div class="">
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
    this.url = window.location.href + 'api/'
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
