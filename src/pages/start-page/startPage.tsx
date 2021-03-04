/* eslint-disable max-len */
import React, {useState} from 'react';
import * as Actions from 'src/data-layer/application/actionCreators';
import {connect} from 'react-redux';
import DataTable from 'src/components/table';
import ExtendedInfo from './ext-info';

interface StartPageProps {
  findApplicationsByParams: any
  applications: any
  refIsLoading: boolean
}

function StartPage(props: StartPageProps) {
  const {findApplicationsByParams, applications, refIsLoading} = props;
  const [setProcessingParams] = useState<any>({opened: false});
  return (
    <div>
      <DataTable
        dataIsLoading={refIsLoading}
        firstColLink={true}
        caption="Витрина заявок"
        editRow={setProcessingParams}
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
        ]}
        data={applications.data}/>
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
