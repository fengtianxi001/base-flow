<template>
  <div class="item-preview">
    <div class="preview-header">
      <span>{{ Math.floor(current.sequence) }}</span>
      <span>{{ current.title }}</span>
    </div>
    <div class="preview-footer">
      <span>{{ current.operator }}</span>
      <span>{{ current.date }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { last } from 'lodash'
import { computed } from 'vue'

interface PropsType {
  data: any
}
const props = defineProps<PropsType>()

const current = computed(() => {
  if (props.data.status === 'initial') {
    return props.data.items[0]
  } else {
    return last(props.data.items.filter((item: any) => item.done))
  }
})
</script>
<style lang="scss" scoped>
.item-preview {
  border: 1px solid transparent;
  padding: 8px 10px;
  .preview-header {
    display: flex;
    grid-gap: 10px;
    font-size: 16px;
    color: #007873;
    font-weight: bolder;
  }
  .preview-footer {
    display: flex;
    justify-content: space-between;
    color: #7d7d7d;
    font-size: 13px;
    margin-top: 6px;
  }
}
</style>
