/* GLOBAL VARIABLE TO HOLD USERNAME SET ON LOGIN SCREEN */
var GLOBAL_USERNAME = '';

/* GETTER METHOD */
export const getGLOBAL_USERNAME = () => {
  return GLOBAL_USERNAME;
}

/* SETTER METHOD */
export const setGLOBAL_USERNAME = (tmpUsername) => {
  GLOBAL_USERNAME = tmpUsername;
}