// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///E:/ah/web/lendo-assessment-master/lendoTask/node_modules/vite/dist/node/index.js";
import react from "file:///E:/ah/web/lendo-assessment-master/lendoTask/node_modules/@vitejs/plugin-react-swc/index.mjs";
import svgr from "file:///E:/ah/web/lendo-assessment-master/lendoTask/node_modules/vite-plugin-svgr/dist/index.js";
import Pages from "file:///E:/ah/web/lendo-assessment-master/lendoTask/node_modules/vite-plugin-pages/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\ah\\web\\lendo-assessment-master\\lendoTask";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    svgr({
      svgrOptions: {
        // svgo to optimize svg
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"]
      }
    }),
    react(),
    Pages({
      exclude: ["**/components/**/*"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxhaFxcXFx3ZWJcXFxcbGVuZG8tYXNzZXNzbWVudC1tYXN0ZXJcXFxcbGVuZG9UYXNrXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxhaFxcXFx3ZWJcXFxcbGVuZG8tYXNzZXNzbWVudC1tYXN0ZXJcXFxcbGVuZG9UYXNrXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9haC93ZWIvbGVuZG8tYXNzZXNzbWVudC1tYXN0ZXIvbGVuZG9UYXNrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJ1xuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQC8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHN2Z3Ioe1xuICAgICAgc3Znck9wdGlvbnM6IHtcbiAgICAgICAgLy8gc3ZnbyB0byBvcHRpbWl6ZSBzdmdcbiAgICAgICAgcGx1Z2luczogWydAc3Znci9wbHVnaW4tc3ZnbycsICdAc3Znci9wbHVnaW4tanN4J10sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHJlYWN0KCksXG4gICAgUGFnZXMoe1xuICAgICAgZXhjbHVkZTogWycqKi9jb21wb25lbnRzLyoqLyonXSxcbiAgICB9KSxcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZULE9BQU8sVUFBVTtBQUM5VSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sV0FBVztBQUpsQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNLEdBQUcsS0FBSyxRQUFRLGtDQUFXLEtBQUssQ0FBQztBQUFBLElBQ3pDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsS0FBSztBQUFBLE1BQ0gsYUFBYTtBQUFBO0FBQUEsUUFFWCxTQUFTLENBQUMscUJBQXFCLGtCQUFrQjtBQUFBLE1BQ25EO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsTUFDSixTQUFTLENBQUMsb0JBQW9CO0FBQUEsSUFDaEMsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
