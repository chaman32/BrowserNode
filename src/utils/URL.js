

function parsedURL(url) {
  try {
    const parsed = new URL(url);
    const result = {
      href: parsed.href,
      origin: parsed.origin,
      protocol: parsed.protocol,
      host: parsed.host,
      hostname: parsed.hostname,
      port: parsed.port,
      pathname: parsed.pathname,
      search: parsed.search,
      searchParams: Object.fromEntries(parsed.searchParams.entries()),
      hash: parsed.hash
    };
    return result;
  } catch (error) {
    console.error('Invalid URL:', error);
    return null;
  }
}

 
export {parsedURL};