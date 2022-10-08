export function paginate(items: any, pageNumber: number, pageSize: number) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;
  return items.slice(startIndex, endIndex);
}
