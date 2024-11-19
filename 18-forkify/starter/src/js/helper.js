import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const ajax = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(uploadData)
      })
      : fetch(url);

    const response = await Promise.race([
      fetchPro,
      timeout(TIMEOUT_SEC)
    ]);
    const data = await response.json();

    if (!response.ok)
      throw new Error(`${data.message} (${response.status})`);

    return data;

  } catch (err) {
    /* throwing err here so that it will precipitate upward to reject promise of getJson */
    throw err;
  }
};

/*
export const getJson = async function (url) {
  try {
    const res = await Promise.race([
      fetchPro,
      timeout(TIMEOUT_SEC)
    ]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    // throwing err here so that it will precipitate upward to reject promise of getJson
    throw err;
  }
};

export const sendJson = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(uploadData)
    });

    const res = await Promise.race([
      fetchPro,
      timeout(TIMEOUT_SEC)
    ]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
*/