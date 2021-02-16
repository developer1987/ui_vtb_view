import axiosFetch from './axios';

const encodeParams = (data: any = {}) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
};

interface RoleRefLinkDTO {
  id: number
  referenceId: number
  roleId: number
}

export function getRoleRefLinks(params: any) {
  return axiosFetch({
    url: `/rolereflinks?${encodeParams(params)}`,
    method: 'GET'
  });
}

export function roleRefLinkCreate(data: RoleRefLinkDTO) {
  return axiosFetch({
    url: '/rolereflinks/create',
    method: 'POST',
    data
  });
}

export function roleRefLinksMassCreate(data: RoleRefLinkDTO[]) {
  return axiosFetch({
    url: '/rolereflinks',
    method: 'POST',
    data
  });
}

export function rolesRefLinksMassDelete(data: RoleRefLinkDTO[]) {
  return axiosFetch({
    url: '/rolereflinks',
    method: 'DELETE',
    data
  });
}

