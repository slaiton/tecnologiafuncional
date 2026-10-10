/** Desplaza suavemente hasta el elemento con ese id. Devuelve false si no existe. */
export const scrollToId = (id: string): boolean => {
  const element = document.getElementById(id);

  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  return Boolean(element);
};
