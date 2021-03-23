/* eslint-disable max-len */
import React from 'react';
import * as Actions from 'src/data-layer/application/actionCreators';
import {connect} from 'react-redux';
import DataTable from 'src/components/table';
import ExtendedInfo from './ext-info';

interface StartPageProps {
  findApplicationsByParams: any
  applications: any
  appIsLoading: boolean
}

function StartPage(props: StartPageProps) {
  const {findApplicationsByParams, applications, appIsLoading} = props;
  return (
    <div>
      <DataTable
        dataIsLoading={appIsLoading}
        firstColLink={true}
        caption="Витрина заявок"
        extendedInfo={ExtendedInfo}
        method={(params: any) => findApplicationsByParams(params)}
        headerElements={[
          {name: 'Номер', fieldName: 'number'},
          {name: 'Дата подачи', fieldName: 'creationDateStr'},
          {name: 'ФИО клиента', fieldName: 'clientFIO'},
          // {name: 'Сервис обработки', fieldName: 'processingService'},
          {name: 'Статус', fieldName: 'stateName'},
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
    appIsLoading: state.applicationsReducer.appIsLoading || false
  };
};

export default connect(mapStateToProps, Actions)(StartPage);
