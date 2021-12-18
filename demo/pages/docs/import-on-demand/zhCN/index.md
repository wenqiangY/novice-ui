# 按需引入（Tree Shaking）

Novice UI 支持 tree shaking，组件、语言、主题均可 tree-shaking。

默认情况组件主题为亮色，语言为英文，无需额外导入。

了解更多关于主题设定的信息，参见[调整主题](customize-theme)。

## 直接引入

```html
<script>
  import { defineComponent } from 'vue'
  import { NConfigProvider, NInput, NDatePicker, NSpace } from 'novice-ui'
  // theme
  import { createTheme, inputDark, datePickerDark } from 'novice-ui'
  // locale & dateLocale
  import { zhCN, dateZhCN } from 'novice-ui'

  export default defineComponent({
    components: {
      NConfigProvider,
      NInput,
      NDatePicker,
      NSpace
    },
    setup() {
      return {
        darkTheme: createTheme([inputDark, datePickerDark]),
        zhCN,
        dateZhCN
      }
    }
  })
</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-space vertical>
      <n-input />
      <n-date-picker />
    </n-space>
  </n-config-provider>
</template>

<style>
  body {
    background: black;
  }
</style>
```

## 按需全局安装组件

```js
import { createApp } from 'vue'
import {
  // create novice ui
  create,
  // component
  NButton
} from 'novice-ui'

const novice = create({
  components: [NButton]
})

const app = createApp()
app.use(novice)
```

安装后，你可以这样在 SFC 中使用你安装的组件。

```html
<template>
  <n-button>novice-ui</n-button>
</template>
```
