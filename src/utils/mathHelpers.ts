export const dmToCm = (decimeters: number): string => {
  return String(decimeters * 10).concat(' cm');
};

export const hgToKg = (hectograms: number): string => {
  return String(hectograms / 10).concat(' kg');
};
