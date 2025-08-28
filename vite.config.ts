/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command, mode }) => {
  if (mode === 'lib') {
    // Library build configuration
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'MCComponents',
          formats: ['es', 'umd'],
          fileName: (format) => `mc-ui.${format === 'es' ? 'js' : 'umd.js'}`
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              'react': 'React',
              'react-dom': 'ReactDOM'
            },
            assetFileNames: (assetInfo) => {
              if (assetInfo.name === 'style.css') {
                return 'mc-ui.css';
              }
              return assetInfo.name;
            }
          }
        },
        sourcemap: true,
        emptyOutDir: true,
        cssCodeSplit: false
      }
    };
  }

  // Development configuration
  return {
    plugins: [react()],
    test: {
      projects: [{
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{
              browser: 'chromium'
            }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }]
    }
  };
});