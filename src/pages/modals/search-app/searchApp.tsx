import React, {useEffect, useState} from 'react';
import {Modal, Button, Input} from '@openvtb/react-ui-kit';
import {Col, Row} from 'src/components/layout';
import {ISearchParams} from 'src/data-layer/application/types';

interface IAppSearch {
  params: ISearchParams
  opened: boolean
  confirm: any
  onCloseRequest: any
}

function SearchApp(props: IAppSearch) {
  const {params, opened, confirm, onCloseRequest} = props;
  const [documentNumberSearch, setDocumentNumberSearch] =
  useState(params.documentNumberSearch);
  const [clientLastNameSearch, setClientLastNameSearch] =
  useState(params.clientLastNameSearch);
  const [clientFirstNameSearch, setClientFirstNameSearch] =
  useState(params.clientFirstNameSearch);
  const [clientMiddleNameSearch, setClientMiddleNameSearch] =
  useState(params.clientMiddleNameSearch);
  const [clientBirthdaySearch, setClientBirthdaySearch] =
  useState(params.clientBirthdaySearch);

  useEffect(() => {
    document.querySelector('#edBirthDay').setAttribute('type', 'date');
  }, []);

  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      size="big"
      header="Поиск"
      opened={opened}
      onRequestClose={()=>onCloseRequest({opened: false})}>
      <Row>
        <Col col={6}>
          <Input.Text
            id="edDocNumber"
            label="Номер заявки"
            value={documentNumberSearch}
            size="micro"
            onChange={(_event, value) => setDocumentNumberSearch(value)}
          />
        </Col>
        <Col col={6}>
          <Input.Text
            id="edClientLastName"
            label="Фамилия"
            value={clientLastNameSearch}
            size="micro"
            onChange={(_event, value) => setClientLastNameSearch(value)}
          />
        </Col>
      </Row>
      <Row>
        <Col col={6}>
          <Input.Text
            id="edClientFirstName"
            label="Имя"
            value={clientFirstNameSearch}
            size="micro"
            onChange={(_event, value) => setClientFirstNameSearch(value)}
          />
        </Col>
        <Col col={6}>
          <Input.Text
            id="edClientMiddleName"
            label="Отчество"
            value={clientMiddleNameSearch}
            size="micro"
            onChange={(_event, value) => setClientMiddleNameSearch(value)}
          />
        </Col>
      </Row>
      <Row>
        <Col col={6}>
          <Input.Text
            id="edBirthDay"
            label="Дата рождения"
            value={clientBirthdaySearch}
            size="micro"
            onChange={(_event, value) => setClientBirthdaySearch(value)}
          />
        </Col>
      </Row>
      <Row style={{justifyContent: 'flex-end'}}>
        <Button
          kind="secondary" size="small" type="button"
          onClick={()=> {
            confirm({...params, documentNumberSearch: '',
              clientLastNameSearch: '', clientFirstNameSearch: '',
              clientMiddleNameSearch: '',
              clientBirthdaySearch: ''});
          }}
        >Очистить</Button>
        <Button
          style={{marginLeft: '16px'}}
          kind="primary" size="small" type="button"
          onClick={()=>{
            confirm({...params, documentNumberSearch, clientLastNameSearch,
              clientFirstNameSearch, clientMiddleNameSearch,
              clientBirthdaySearch});
          }}
        >Применить</Button>
      </Row>
    </Modal>
  );
}

export default SearchApp;
