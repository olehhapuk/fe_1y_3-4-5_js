import './styles/index.scss';

// import './scripts/randomInterval';
// import './scripts/counter';
// import './scripts/date';
// import './scripts/timer';
import { Timer } from './scripts/timer';

const timer = new Timer(
  '#startBtn',
  '#stopBtn',
  '#pauseBtn',
  '#output',
  '#notificationTime'
);
