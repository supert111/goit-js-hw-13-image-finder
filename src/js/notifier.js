import { alert, defaultModules, error} from '.././../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '.././../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/Material.css';

import { defaults } from '@pnotify/core';
import 'material-design-icons/iconfont/material-icons.css';

defaultModules.set(PNotifyMobile, {});
defaults.styling = 'material';
defaults.icons = 'material';

// import {Stack} from '@pnotify/core';
// alert({
//   text: "Notice 1 stack.",
//   delay: 3000,
//   stack: new Stack({
//     dir1: 'down', dir2: 'right', // Position from the top left corner.
//     firstpos1: 90, firstpos2: 90 // 90px from the top, 90px from the left.
//   })
// });



export {alert, defaultModules, PNotifyMobile, error};
