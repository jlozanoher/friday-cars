import { debounce } from "lodash";

export const executeWithDebounce = (callback: any) => {
  search(callback);
};

const search = debounce((callback: any) => {
  callback();
}, 1000);
