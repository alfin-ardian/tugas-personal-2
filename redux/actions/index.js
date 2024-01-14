export const setData = (field, value) => ({
  type: "SET_DATA",
  payload: {
    field,
    value,
  },
});
