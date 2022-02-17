export const testUrl = (path: string) => {
  return new URL(path, process.env.REACT_APP_SERVER_URL).toString();
};
