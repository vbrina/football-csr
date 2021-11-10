export const playerPosition = (position: string) => {
  switch (position) {
    case 'Goalkeepers':
      return 'Goleiro';
    case 'Defenders':
      return 'Defensor';
    case 'Midfielders':
      return 'Meio campo';
    case 'Forwards':
      return 'Atacante';
    default:
      break;
  }
};
