import { debounce } from 'lodash';
import { error, alert, notice, success, info } from '@pnotify/core';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import './styles/index.scss';

notice({
  text: 'Test notice message',
});
