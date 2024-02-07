import Blits from '@lightningjs/blits'
// @ts-ignore
import fontLoader from './fontloader.js?importChunkUrl'

import App from './App.js'

Blits.Launch(App, 'app', {
  w: 1920,
  h: 1080,
  multithreaded: false,
  debugLevel: 1,
  fontLoader: fontLoader,
  fonts: [
    {
      family: 'Black',
      type: 'msdf',
      png: '/fonts/Inter-Black.png',
      json: '/fonts/Inter-Black.json',
    },
    {
      family: 'TBlack',
      type: 'web',
      file: 'fonts/Inter-Black.ttf',
    },
  ],
})
