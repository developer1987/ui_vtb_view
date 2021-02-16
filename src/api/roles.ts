import axiosFetch from './axios';

const encodeParams = (data: any = {}) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
};

interface RoleDTO {
  id: number
  sysname: string
  name: string
  description: string
}

export function getRoles(params: any) {
  return axiosFetch({
    url: `/roles?${encodeParams(params)}`,
    method: 'GET'
  });
}

export function getRoleById(id: number) {
  return axiosFetch({
    url: `/roles/${id}`,
    method: 'GET'
  });
}

export function roleCreate(data: RoleDTO) {
  return axiosFetch({
    url: '/roles/create',
    method: 'POST',
    data
  });
}

export function rolesMassCreate(data: [RoleDTO]) {
  return axiosFetch({
    url: '/roles',
    method: 'POST',
    data
  });
}

export function roleUpdateById(data: RoleDTO, id: number) {
  return axiosFetch({
    url: `/roles/${id}`,
    method: 'PUT',
    data
  });
}

export function rolesMassUpdate(data: [RoleDTO]) {
  return axiosFetch({
    url: '/roles',
    method: 'PUT',
    data
  });
}

export function deleteRoleById(id: number) {
  return axiosFetch({
    url: `/roles/${id}`,
    method: 'DELETE'
  });
}

export function rolesMassDelete(data: [RoleDTO]) {
  return axiosFetch({
    url: '/roles',
    method: 'DELETE',
    data
  });
}
