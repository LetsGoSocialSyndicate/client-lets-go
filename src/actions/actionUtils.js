/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
const getRequestOptions = (method, token, body = null) => {
  const opts = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
  if (body) {
    opts.body = JSON.stringify(body)
  }
  return opts
}

export { getRequestOptions }
