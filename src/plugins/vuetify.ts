/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#3829e0",
          secondary: "#7280a7",
          paleblue: "#e0e8ff",
          verypaleblue: "#f5f7ff",
          desaturatedblue: "#7280a7",
          darkblue: "#1f2f56",
        },
      },
    },
  },
});
