const addCoomasToPostDate = (postDate: string) => {
  const year = postDate.slice(0, 4);
  const month = postDate.slice(4, 6);
  const day = postDate.slice(6, 8);
  const commaDate = `${year}. ${month}. ${day}.`;

  return commaDate;
};

export default addCoomasToPostDate;
