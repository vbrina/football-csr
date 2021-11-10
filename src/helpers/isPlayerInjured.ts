export const isPlayerInjured = (condition: string) => {
  if (condition === 'Yes') {
    return 'Sim';
  } else {
    return 'Não';
  }
};
