import './styles/index.scss';
import { CountdownTimer } from './CountdownTimer';

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('02-04-2023 14:30'),
});
