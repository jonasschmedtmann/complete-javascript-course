import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {}, s * 1000);
    reject(new Error(`Request took too long! Timeout after ${s} second`));
  });
}

export const getJSON = async function (url) {
  try {
    // const promiseRace = [fetch(url), timeout(TIMEOUT_SEC)];
    // const res = await Promise.race(promiseRace);
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === 'fail') throw new Error(`${data.message}`);
    return data;
  } catch (err) {
    throw err;
  }
};
