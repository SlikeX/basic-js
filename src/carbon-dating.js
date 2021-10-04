import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


export default function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== "string" || MODERN_ACTIVITY < sampleActivity || sampleActivity < 0) {
    return false;
  }
  let a = parseFloat(sampleActivity);
  if (!a) {
    return false;
  }
  return Math.ceil(((Math.log(MODERN_ACTIVITY / a)) / (Math.log(2)) * HALF_LIFE_PERIOD));
}
