import React from 'react';
import * as Actions from 'src/data-layer/role/actionCreators';
import {connect} from 'react-redux';

import DataTable from 'src/components/table';
import editIcon from
  '@openvtb/admiral-icons/build/system/EditOutline.svg';
import trashIcon from
  '@openvtb/admiral-icons/build/system/DeleteOutline.svg';

interface StartPageProps {
  getRoles: any
  roles: any
  roleIsLoading: boolean
}

function RolesPage(props: StartPageProps) {
  const {getRoles, roles, roleIsLoading} = props;
  return (
    <div>
      <DataTable
        addCaption="Новая роль"
        dataIsLoading={roleIsLoading}
        addLocation="./add-role"
        caption="Список ролей"
        method={(params: any) => getRoles(params)}
        headerElements={[
          {name: 'ID', fieldName: 'id'},
          {name: 'Наименование роли', fieldName: 'name'},
          {name: 'Системное наименование', fieldName: 'sysname'},
          {name: 'Описание', fieldName: 'description'}
        ]}
        actions={[
          {caption: 'Изменить', href: '#', type: 'icon', svg: editIcon,
            onClick: () => {
              console.log('edit...');
            }},
          {caption: 'Удалить', href: '#', type: 'icon', svg: trashIcon}
        ]}
        data={roles.data}/>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    roles: state.roleReducer.roles || {data: {}},
    roleIsLoading: state.roleReducer.roleIsLoading || false
  };
};

export default connect(mapStateToProps, Actions)(RolesPage);
