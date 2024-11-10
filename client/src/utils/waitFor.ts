export const waitFor = (delay = 1000) =>
  new Promise((res) => setTimeout(res, delay))
