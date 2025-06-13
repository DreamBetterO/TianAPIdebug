<template>
  <span :style="computedStyle" class="theme-gradient">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// 只接收字体大小属性，支持字符串或数字
const props = defineProps<{
  size?: string | number
}>();

const computedStyle = computed(() => ({
  fontSize: props.size ? (typeof props.size === 'number' ? props.size + 'px' : props.size) : undefined,
}));
</script>

<script lang="ts">
export default {
  name: 'ThemeFont',
};
</script>

<style scoped lang="scss">
@use '@/styles/font.scss';
span {

/*主题样式 */

  font-family: Noto Serif SC, Noto Serif SC;
  font-weight: bold;
  font-size: 64px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  // background: linear-gradient(90deg, #B3DAFF 0%, #80C1FF 100%);

}


</style>
