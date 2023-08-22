<template>
  <div class="base-flow-item">
    <ItemHeader v-model:collapse="collapse" :data="data" />
    <ItemPreview v-show="collapse" :data="data" />
    <ItemList v-show="!collapse" :data="data" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import ItemHeader from './ItemHeader.vue'
import ItemPreview from './ItemPreview.vue'
import ItemList from './ItemList.vue'
interface PropsType {
  data: {
    title: string
    status: 'initial' | 'progress ' | 'success ' | 'error'
    items: Array<{
      sequence: number
      title: string
      operator: string
      date: string
      done: boolean
    }>
  }
}
defineProps<PropsType>()

const collapse = ref(true)
const span = computed(() => (collapse.value ? 1 : 10))
</script>
<style lang="scss" scoped>
$span: v-bind(span);
.base-flow-item {
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 6px 0px #00000026;
  border: 1px solid $gray;
  grid-row: span $span;
}
</style>
