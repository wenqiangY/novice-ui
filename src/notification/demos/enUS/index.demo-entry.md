# Notification

If something is to be telled to somebody.

Notification component is always with low piority so I can make a lot of useless animations on it.

<n-space vertical>
<n-alert title="Prerequisite" type="warning">
  If you want use notification, you need to wrap the component where you call related methods inside <n-text code>n-notification-provider</n-text> and use <n-text code>useNotification</n-text> to get the API.
</n-alert>

For example:

```html
<!-- App.vue -->
<n-notification-provider>
  <content />
</n-notification-provider>
```

```js
import { defineComponent } from 'vue'
import { useNotification } from 'novice-ui'

// content
export default defineComponent({
  setup () {
    const notification = useNotification()
    return {
      warning () {
        notification.warning('...')
      }
    }
  }
})
```

</n-space>

## Demos

```demo
basic
type
change-content
scrollable
closable
duration
max
placement
```

## API

### NotificationProvider Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| placement | `'top-right' \| 'top-left' \| 'bottom-left' \| 'bottom -right'` | `'top-right'` | Placement of all notifications. |
| max | `number` | `undefined` | Limit the number of notifications to display. |
| scrollable | `boolean` | `true` | Whether notification can be scroll. |
| to | `string \| HTMLElement` | `'body'` | Container node of notification container. |

### `notification` Injection Methods

| Name | Type | Description |
| --- | --- | --- |
| create | `(option: NotificationOption) => NotificationReactive` | Create a notification. |
| destroyAll | `() => void` | Destroy all popup notifications. |
| error | `(option: NotificationOption) => NotificationReactive` | Use `error` type notification. |
| info | `(option: NotificationOption) => NotificationReactive` | Use `info` type notification. |
| success | `(option: NotificationOption) => NotificationReactive` | Use `success` type notification. |
| warning | `(option: NotificationOption) => NotificationReactive` | Use `warning` type notification. |

### NotificationOption Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| action | `string \| (() => VNodeChild)` | `undefined` | Content of the operation area,, can be a render function. |
| avatar | `() => VNodeChild` | `undefined` | Content of the `avatar`, can be a render function. |
| closable | `boolean` | `true` | Whether to show close icon. |
| content | `string \| (() => VNodeChild)` | `undefined` | Content, can be a render function. |
| description | `string \| (() => VNodeChild)` | `undefined` | Content of the `description`, can be a render function. |
| duration | `number` | `undefined` | If not set, it won't automatically close. Unit is millisecond. |
| meta | `string \| (() => VNodeChild)` | `undefined` | Content of the `meta`, can be a render function. |
| title | `string \| (() => VNodeChild)` | `undefined` | Content of the `title`, can be a render function. |
| onAfterEnter | `Function` | `undefined` | Callback triggered after Transition's enter animation executed. |
| onAfterLeave | `Function` | `undefined` | Callback triggered after Transition's leave animation executed. |
| onClose | `() => boolean \| Promise<boolean>` | `undefined` | The callback of notification closing. Returning `false`, promise resolve `false` or promise reject will cancel this closing. |
| onLeave | `Function` | `undefined` | Callback triggered when Transition's leave animation executed. |

### NotificationReactive API

#### NotificationReactive Properties

Properties of NotificationReactive can be dynamically changed.

| Name | Type | Description |
| --- | --- | --- |
| action | `string \| (() => VNodeChild)` | Content of the operation area,, can be a render function. |
| avatar | `() => VNodeChild` | Content of the `avatar`, can be a render function. |
| closable | `boolean` | Whether to show close icon. |
| content | `string \| (() => VNodeChild)` | Content, can be a render function. |
| description | `string \| (() => VNodeChild)` | Content of the `description`, can be a render function. |
| duration | `number` | If not set, it won't automatically close. Unit is millisecond. |
| meta | `string \| (() => VNodeChild)` | Content of the `meta`, can be a render function. |
| title | `string \| (() => VNodeChild)` | Content of the `title`, can be a render function. |
| onAfterEnter | `Function` | Callback triggered after Transition's enter animation executed. |
| onAfterLeave | `Function` | Callback triggered after Transition's leave animation executed. |
| onClose | `() => boolean \| Promise<boolean>` | The callback of notification closing. Returning `false`, promise resolve `false` or promise reject will cancel this closing. |
| onLeave | `Function` | Callback triggered when Transition's leave animation executed. |

#### NotificationReactive Methods

| Name    | Type | Description               |
| ------- | ---- | ------------------------- |
| destroy | `()` | Destroy the notification. |