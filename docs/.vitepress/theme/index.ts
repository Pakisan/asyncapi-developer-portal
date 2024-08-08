import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Json from "../components/Json.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // register your custom global components
        app.component('Json', Json)
    }
} satisfies Theme