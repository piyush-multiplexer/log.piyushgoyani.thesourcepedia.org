<template>
  <vue-timeline-update
    :animation="true"
    animation-container=""
    :animation-duration="1500"
    category=""
    color="blue"
    :date="timeline.date"
    :description="timeline.description"
    icon=""
    :is-last="isLast"
    thumbnail=""
    theme="light"
    :title="timeline.title"
  ></vue-timeline-update>
</template>
<script>
export default {
  name: 'TimeLine',
  props: {
    timeline: {
      type: Object,
      required: true,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
