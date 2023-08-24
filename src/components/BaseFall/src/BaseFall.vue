<template>
  <div class="base-fall">
    <div class="base-fall-column" v-for="items in source">
      <div class="base-fall-row" v-for="item in items">
        <component :is="item"></component>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { isEmpty } from 'lodash'
import { useSlots, computed } from 'vue'

const slots = useSlots()

const column = computed(() => {
  return Math.floor(window.innerWidth / 260) || 1
})
const source = computed(() => {
  const cache: any = []
  const children = slots.default?.() ?? []
  if (isEmpty(children)) return cache
  const list: any = children[0].children ?? []
  list.forEach((item: any, i: any) => {
    const index = i % column.value
    console.log('index', index)
    if (!cache[index]) cache[index] = []
    cache[index].push(item)
  })
  console.log('cache', cache)
  return cache
})
</script>
<style lang="scss" scoped>
$column: v-bind(column);
$gap: 20px;
.base-fall {
  display: flex;
  padding: $gap 0 $gap $gap;
  .base-fall-column {
    width: calc(100% / $column);
    margin-right: $gap;
  }
  .base-fall-row {
    margin-bottom: $gap;
  }
}
</style>
