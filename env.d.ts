/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{ object }, { object }, unknown>
  export default component
}

//第一部分用于提供类型提示和代码补全功能，特别是在使用 Vite 作为构建工具时
// 声明一个常量 component，其类型为 DefineComponent。这里的泛型参数 {}, {}, any 分别对应组件的 props、emits 和 setup 函数的返回值。any 表示对 setup
//第三部分用于导出这个 Vue 组件的类型，以便在其他地方使用
