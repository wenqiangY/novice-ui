import { createApp } from 'vue'
import novice, { NThemeEditor } from 'novice-ui'
import { installDemoComponents } from './setup'
import SiteRoot from './SiteRoot.vue'
import { routes } from './routes/routes'
import createDemoRouter from './routes/router'

const app = createApp(SiteRoot)

const router = createDemoRouter(app, routes)

app.use(router)
app.use(novice)
app.component('NThemeEditor', NThemeEditor)
installDemoComponents(app)

router.isReady().then(() => {
  app.mount('#app')
})
