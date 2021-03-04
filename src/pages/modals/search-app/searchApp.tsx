import React, {useEffect, useState} from 'react';
import {Modal, Button, Input} from '@openvtb/react-ui-kit';
import {Col, Row} from 'src/components/layout';


interface EdReferenceProps {
  params: any
  confirm: any
  onColseRequest: any
}

function SearchApp(props: EdReferenceProps) {
  const {params, confirm, onColseRequest} = props;
  const [name, setReferenceName] = useState(params.name);
  const [sysname, setReferenceSysname] = useState(params.sysname);
  const [description, setReferenceDescription] =
  useState(params.description);

  useEffect(() => {
    document.querySelector('#edBirthday').setAttribute('type', 'date');
  }, []);

  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      size="big"
      header="Поиск"
      opened={params.opened}
      onRequestClose={()=>onColseRequest({opened: false})}>
      <Row>
        <Col col={6}>
          <Input.Text
            id="edNumber"
            label="Номер заявки"
            value={name}
            size="micro"
            onChange={(event, value) => {
              setReferenceName(value);
              // pushToWizard('name', value);
            }}
          />
        </Col>
        <Col col={6}>
          <Input.Text
            id="edName"
            label="Фамилия"
            value={name}
            size="micro"
            onChange={(event, value) => {
              setReferenceName(value);
              // pushToWizard('name', value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col col={6}>
          <Input.Text
            id="edSysname"
            label="Имя"
            value={sysname}
            size="micro"
            onChange={(event, value) => {
              setReferenceSysname(value);
              // pushToWizard('sysname', value);/
            }}
          />
        </Col>
        <Col col={6}>
          <Input.Text
            id="edSysname"
            label="Отчество"
            value={sysname}
            size="micro"
            onChange={(event, value) => {
              setReferenceSysname(value);
              // pushToWizard('sysname', value);/
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col col={6}>
          <Input.Text
            id="edBirthday"
            label="Дата рождения"
            value={description}
            size="micro"
            onChange={(event, value) => {
              setReferenceDescription(value);
              // pushToWizard('description', value);
            }}
          />
        </Col>
      </Row>
      <Row style={{justifyContent: 'flex-end'}}>
        <Button
          kind="secondary" size="small" type="button"
          onClick={()=>onColseRequest({opened: false})}
        >Очистить</Button>
        <Button
          style={{marginLeft: '16px'}}
          kind="primary" size="small" type="button"
          onClick={()=>{
            confirm(params);
          }}
        >Применить</Button>
      </Row>
    </Modal>
  );
}

export default SearchApp;
