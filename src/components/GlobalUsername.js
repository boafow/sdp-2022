var GLOBAL_USERNAME = '';

export const getGLOBAL_USERNAME = () => {
  return GLOBAL_USERNAME;
}

export const setGLOBAL_USERNAME = (tmpUsername) => {
  GLOBAL_USERNAME = tmpUsername;
}