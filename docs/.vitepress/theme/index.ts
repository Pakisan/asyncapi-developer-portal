import './tailwind.css'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import Json from "../components/Json.vue";
import JetBrainsPluginPage from "./JetBrainsPluginPage.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // register your custom global components
        app.component('Json', Json)
        app.component('JetBrainsPluginPage', JetBrainsPluginPage)
    }
} satisfies Theme