const loaderEventTarget = new EventTarget();

export const showLoader = () => {
  loaderEventTarget.dispatchEvent(new Event("show-loader"));
};

export const hideLoader = () => {
  loaderEventTarget.dispatchEvent(new Event("hide-loader"));
};

export default loaderEventTarget;
