<template>
  <div class="item-list">
    <div
      class="item-list-item"
      v-for="item in data.items"
      :class="{ done: item.done }"
    >
      <div class="list-item-header">
        <span>{{ item.sequence }}</span>
        <span>{{ item.title }}</span>
        <img :src="item.done ? CheckNormal : CheckDiabled" />
      </div>
      <div class="list-item-footer">
        <span>{{ item.operator }}</span>
        <span>{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CheckNormal from '../assets/check.png'
import CheckDiabled from '../assets/check2.png'

interface PropsType {
  data: any
}
const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.item-list {
  border-top: none;
  border-radius: 0 0 5px 5px;
  padding: 8px 10px;
  .item-list-item {
    box-sizing: border-box;
    color: #aaa;

    &.done {
      color: $primary;
    }
    &:not(:last-child) {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #e8e8e8;
    }
    .list-item-header {
      position: relative;
      display: flex;
      grid-gap: 10px;
      font-size: 16px;

      font-weight: bolder;

      span:nth-child(2) {
        flex: 1;
      }
      img {
        height: 20px;
      }
    }
    .list-item-footer {
      display: flex;
      justify-content: space-between;
      // color: $primary;
      font-size: 13px;
      margin-top: 6px;
    }
  }
}
</style>
