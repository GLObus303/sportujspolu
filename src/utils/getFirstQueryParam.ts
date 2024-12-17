export const getFirstQueryParam = (
  param: string | string[] | undefined,
  defaultParam: string,
) => {
  const firstParam = Array.isArray(param) ? param[0] : param;

  return firstParam || defaultParam;
};
