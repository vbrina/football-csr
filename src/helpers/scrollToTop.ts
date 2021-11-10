export const scrollToTop = (id: string) => {
  setTimeout(() => {
    const element = document.getElementById(`${id}`);
    if (element) {
      element.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
      });
    }
  });
};
