import axiosFetch from './axios';

const encodeParams = (data: any) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
};

export function getReferences() {
  return axiosFetch({
    url: '/references',
    method: 'GET'
  });
}

export function getReferenceById(id: number) {
  return axiosFetch({
    url: `/references/${id}`,
    method: 'GET'
  });
}

export function saveReference(data: any) {
  return axiosFetch({
    url: '/references',
    method: 'POST',
    data
  });
}

export function saveReferenceItem(data: any) {
  return axiosFetch({
    url: '/refitems',
    method: 'POST',
    data
  });
}

export function updateReferenceItem(data: any, id:number) {
  return axiosFetch({
    url: `/refitems/${id}`,
    method: 'PUT',
    data
  });
}

export function deleteReferenceItem(id:number) {
  return axiosFetch({
    url: `/refitems/${id}`,
    method: 'DELETE'
  });
}

export function getReferenceItems(data: any) {
  const url = `/refitems?${encodeParams(data)}`;
  return axiosFetch({
    url,
    method: 'GET'
  });
}

export function updateReference(data: any, id: number) {
  return axiosFetch({
    url: `/references/${id}`,
    method: 'PUT',
    data
  });
}

export function removeReferenceById(id: number) {
  return axiosFetch({
    url: `/references/${id}`,
    method: 'DELETE'
  });
}

export function findReferenceByParams(params: any) {
  const url = `/references?${encodeParams(params)}`;
  return axiosFetch({
    url,
    method: 'GET'
  });
}

export function findApplicationsByParams(params: any) {
  const url = `/applications?${encodeParams(params)}`;
  return axiosFetch({
    url,
    method: 'GET'
  });
}

export function findReferenceByName(name: string) {
  return axiosFetch({
    url: `/references?name=${name}`,
    method: 'GET'
  });
}

export function findApplicationsByName(name: string) {
  return axiosFetch({
    url: `/applications?name=${name}`,
    method: 'GET'
  });
}

