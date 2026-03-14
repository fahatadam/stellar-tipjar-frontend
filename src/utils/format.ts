export function formatUsername(username: string) {
  return username.startsWith("@") ? username : `@${username}`;
}

export function truncateMiddle(value: string, head = 4, tail = 4) {
  if (value.length <= head + tail) {
    return value;
  }

  return `${value.slice(0, head)}...${value.slice(-tail)}`;
}
