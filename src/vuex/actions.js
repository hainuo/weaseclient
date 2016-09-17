/**
 * Created by fengliu on 2016/9/17.
 */
export const incrementCounter = ({ dispatch, state }) => {
  console.log(state);
  dispatch('INCREMENT', 10);
};
