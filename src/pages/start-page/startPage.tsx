/* eslint-disable max-len */
import React, {useState} from 'react';
import * as Actions from 'src/data-layer/reference/actionCreators';
import {connect} from 'react-redux';
import DataTable from 'src/components/table';
import DeleteConfirm from 'src/pages/modals/delete-confirm';
import EditReference from 'src/pages/modals/edit-reference';
import ExtendedInfo from './ext-info';

interface StartPageProps {
  findApplicationsByParams: any
  applications: any
  refIsLoading: boolean
  removeReferenceById: any
  getReferenceItems: any
  deleteReferenceItem: any
}

function StartPage(props: StartPageProps) {
  const {findApplicationsByParams, applications, refIsLoading/* ,
  removeReferenceById, getReferenceItems, deleteReferenceItem*/} = props;
  const [delModalParams, setDelModalParams] = useState<any>({opened: false});
  const [editModalParams, setEditModalParams] = useState<any>({opened: false});
  const editRow = (item: any) => {
    console.log('edit...');
    setEditModalParams({...item, opened: true});
  };
  return (
    <div>
      <DataTable
        addCaption=""
        dataIsLoading={refIsLoading}
        addLocation="/input-reference"
        firstColLink={true}
        caption="Витрина заявок"
        editRow={editRow}
        extendedInfo={ExtendedInfo}
        method={(params: any) => findApplicationsByParams(params)}
        headerElements={[
          {name: 'Номер', fieldName: 'number'},
          {name: 'Дата подачи', fieldName: 'creationDateStr'},
          {name: 'ФИО клиента', fieldName: 'clientFIO'},
          // {name: 'Сервис обработки', fieldName: 'processingService'},
          {name: 'Статус', fieldName: 'state'},
          {name: 'ФИО Сотрудника', fieldName: 'employeeFIO'}
        ]}
        actions={[
          {caption: 'Обработать', href: '#', type: 'link'},
          // {caption: 'Список связей', href: '#', type: 'link'},
          // {caption: 'Изменить', href: '#', type: 'icon', svg: editIcon,
          //   onClick: editRow},
          // {caption: 'Удалить', href: '#', type: 'icon', svg: trashIcon,
          //   onClick: (item: any) => {
          //     setDelModalParams({...item, opened: true});
          //     /* if (confirm(`Вы уверены что хотите удалить "${item.name}"?`)) {
          //       removeReferenceById(item.id)
          //           .then(getReferenceItems({referenceId: item.id})
          //               .then((items:any) => {
          //                 items.forEach((itm: any) => {
          //                   itm.id >=1 && deleteReferenceItem(itm.id);
          //                 });
          //               })
          //               .then(refresh)
          //           );
          //     }*/
          //   }}
        ]}
        data={applications.data}/>
      {delModalParams.opened && <DeleteConfirm
        params={delModalParams}
        onColseRequest={setDelModalParams}
        confirm={(params: any) => {
          console.log('delete...' + params.id);
          setDelModalParams({opened: false});
        }}/>}
      {editModalParams.opened && <EditReference
        params={editModalParams}
        onColseRequest={setEditModalParams}
        confirm={(params: any) => {
          console.log('save...' + params.id);
          setEditModalParams({opened: false});
        }}/>}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    applications: state.applicationsReducer.applications || {data: {}},
    refIsLoading: state.applicationsReducer.refIsLoading || false
  };
};

export default connect(mapStateToProps, Actions)(StartPage);
