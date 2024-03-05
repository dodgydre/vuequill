import {createApp} from "vue"
import App from "./App.vue"
import "quill/dist/quill.snow.css"
import { Editor } from "@ohgeorgie/vuequill"

const globalOptions = {
    debug: "warn",
    modules: {},
    placeholder: "Write something",
    theme: "snow",
}

Editor.props.globalOptions.default = () => {globalOptions}
createApp(App).component("Editor", Editor).mount("#app")