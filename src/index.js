import './scss/style.scss';
import '../index.html';

// js modules
import Countdown from './js/countdown';

// =====================================================================
// =====================    COUNTDOWN     ==============================
// =====================================================================

// containers
const daysContainer = document.querySelector(`[data-days]`);
const hoursContainer = document.querySelector(`[data-hours]`);
const minutesContainer = document.querySelector(`[data-minutes]`);
const secondsContainer = document.querySelector(`[data-seconds]`);

// getTime turns date into miliseconds since 1 january 1970 00:00:00
const finalDate = new Date(`September 1, 2022 00:00:00`).getTime();

const countdown = new Countdown(daysContainer, hoursContainer, minutesContainer, secondsContainer, finalDate);

// Just run damn clock
countdown.runClock();
