export function createWikipediaApiUrl(searchCriteria: string) {
  const params = new URLSearchParams();
  params.append('action', 'query');
  params.append('format', 'json');
  params.append('prop', 'pageimages');
  params.append('titles', searchCriteria);
  params.append('generator', 'images');
  params.append('piprop', 'name|original|thumbnail');
  params.append('pithumbsize', '300');
  params.append('gimlimit', '100');
  return `${process.env.REACT_APP_API_HOST}/w/api.php?${params.toString()}`;
}