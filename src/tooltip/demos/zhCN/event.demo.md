# 事件

```html
<n-space>
  <n-tooltip placement="bottom" trigger="hover" @update:show="handleUpdateShow">
    <template #trigger>
      <n-button> 悬浮 </n-button>
    </template>
    <span> I wish they all could be California girls </span>
  </n-tooltip>
  <n-tooltip placement="bottom" trigger="click" @update:show="handleUpdateShow">
    <template #trigger>
      <n-button> 点击 </n-button>
    </template>
    <span> I wish they all could be California girls </span>
  </n-tooltip>
  <n-tooltip :show="showPopover" trigger="manual" placement="bottom">
    <template #trigger>
      <n-button @click="showPopover = !showPopover">
        手动（不会有事件发出来）
      </n-button>
    </template>
    <span> I wish they all could be California girls </span>
  </n-tooltip>
</n-space>
```

```js
import { defineComponent, ref } from 'vue'
import { useMessage } from 'novice-ui'

export default defineComponent({
  setup () {
    const message = useMessage()
    return {
      showPopover: ref(false),
      handleUpdateShow (show) {
        message.success(show)
      }
    }
  }
})
```
