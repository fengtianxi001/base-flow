<template>
  <div class="item-header">
    <div class="item-sequence">{{ sequence }}</div>
    <div class="item-title">{{ data.title }}</div>
    <img
      class="item-arrow"
      :src="arrow"
      @click="emits('update:collapse', !collapse)"
    />
  </div>
</template>
<script setup lang="ts">
import arrow from '../assets/arrow.png'
import { StatusColor } from '../configs'
import { computed } from 'vue'

interface PropsType {
  collapse: boolean
  data: any
}
const props = defineProps<PropsType>()
const emits = defineEmits(['update:collapse'])

const color = computed(() => StatusColor[props.data.status] ?? '#007873')

const transform = computed(() =>
  props.collapse ? 'rotate(-180deg)' : 'rotate(0deg)'
)

const sequence = computed(() => {
  const filter = props.data.items.filter((item: any) => item.done)
  if (filter.length === 0) {
    return 0
  } else {
    return Math.floor(filter[filter.length - 1].sequence)
  }
})
</script>
<style lang="scss" scoped>
$color: v-bind(color);
$collapse: v-bind(collapse);
$transform: v-bind(transform);
.item-header {
  display: flex;
  grid-gap: 6px;
  align-items: center;
  padding: 10px;
  color: #fff;
  background-color: $color;

  .item-sequence {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    font-weight: bolder;
    color: $color;
    background-color: #fff;
    border-radius: 50%;
    font-size: 20px;
  }

  .item-title {
    flex: 1;
    font-size: 14px;
    line-height: 16px;
  }
  .item-arrow {
    user-select: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: $transform;
  }
}
</style>
