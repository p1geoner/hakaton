export const scrollToNode = (id: string) => {
  const nodeCoords = document.getElementById(id)?.getBoundingClientRect();

  if (nodeCoords) {
    window.scrollTo({
      left: 0,
      top: nodeCoords.top + window.scrollY - 20,
      behavior: 'smooth',
    });
  }
};
