import React, {useState} from 'react';
import {Modal, Button, Input} from '@openvtb/react-ui-kit';
import {Col, Row} from 'src/components/layout';


interface EdReferenceProps {
  params: any
  confirm: any
  onColseRequest: any
}

function EditReference(props: EdReferenceProps) {
  const {params, confirm, onColseRequest} = props;
  const [controlErrors, setControlErrors] = useState<any>([]);
  const [name, setReferenceName] = useState(params.name);
  const [sysname, setReferenceSysname] = useState(params.sysname);
  const [description, setReferenceDescription] =
  useState(params.description);


  const checkRequiredControls = (controls: string[]) => {
    const errorControls: any = {};
    let hasErrors = false;
    controls.forEach((control) => {
      if (eval(control) === '' || eval(control) === undefined) {
        errorControls[control] = 'error';
        hasErrors = true;
      } else {
        errorControls[control] = 'default';
      }
    });
    setControlErrors(errorControls);
    return hasErrors;
  };

  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      size="big"
      header="Редактировать справочник"
      opened={params.opened}
      onRequestClose={()=>onColseRequest({opened: false})}>
      <Row>
        <Col col={12}>
          <Input.Text
            id="edName"
            label="Наименование справочника"
            value={name}
            size="micro"
            status={controlErrors.name}
            onChange={(event, value) => {
              setReferenceName(value);
              // pushToWizard('name', value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col col={12}>
          <Input.Text
            id="edSysname"
            label="Системное наименование справочника"
            value={sysname}
            size="micro"
            status={controlErrors.sysname}
            onChange={(event, value) => {
              setReferenceSysname(value);
              // pushToWizard('sysname', value);/
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col col={12}>
          <Input.Text
            id="edDescription"
            label="Описание справочника"
            value={description}
            size="micro"
            status={controlErrors.description}
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
        >Отмента</Button>
        <Button
          style={{marginLeft: '16px'}}
          kind="primary" size="small" type="button"
          onClick={()=>{
            if (checkRequiredControls(['name', 'sysname'])) {
              return;
            }
            confirm(params);
          }}
        >Сохранить</Button>
      </Row>
    </Modal>
  );
}

export default EditReference;
