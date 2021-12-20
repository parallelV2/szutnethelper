import { readFileSync } from 'fs';
import {
  exposeInMainWorld,
  browserWindowPreloadApis,
} from '@modern-js/runtime/electron-render';

export const apis = {
  ...browserWindowPreloadApis,
  readFileSync: (path: string) => readFileSync(path),
  ok: () => 'ok',
};

exposeInMainWorld(apis);
