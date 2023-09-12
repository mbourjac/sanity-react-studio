import { defineConfig, isDev } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial';
import { customStructure } from './desk/desk.structure';

const devOnlyPlugins = [getStartedPlugin()];

export default defineConfig({
  name: 'default',
  title: 'sanity-sandbox',
  projectId: 'u97bmxkv',
  dataset: 'production',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool({
      structure: customStructure,
    }),
    visionTool(),
    ...(isDev ? devOnlyPlugins : []),
  ],
});
