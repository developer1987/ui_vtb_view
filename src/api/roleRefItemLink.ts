import axiosFetch from './axios';

const encodeParams = (data: any = {}) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
};

interface RoleRefItemLinkDTO {
  id: number
  refItemId: number
  roleId: number
}

export function getRoleRefItemLinks(params: any) {
  return axiosFetch({
    url: `/rolerefitemlinks?${encodeParams(params)}`,
    method: 'GET'
  });
}

export function roleRefItemLinkCreate(data: RoleRefItemLinkDTO ) {
  return axiosFetch({
    url: '/rolerefitemlinks/create',
    method: 'POST',
    data
  });
}

export function roleRefItemLinksMassCreate(data: RoleRefItemLinkDTO[]) {
  return axiosFetch({
    url: '/rolerefitemlinks',
    method: 'POST',
    data
  });
}

export function rolesRefItemLinksMassDelete(data: RoleRefItemLinkDTO[]) {
  return axiosFetch({
    url: '/rolerefitemlinks',
    method: 'DELETE',
    data
  });
}

