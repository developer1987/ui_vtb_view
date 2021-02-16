import React from 'react';
import {Modal, Button} from '@openvtb/react-ui-kit';
import {TextContent} from './style';
import {Row} from 'src/components/layout';


interface DConfirmProps {
  params: any
  confirm: any
  onColseRequest: any
}

function DeleteConfirm(props: DConfirmProps) {
  const {params, confirm, onColseRequest} = props;
  return (
    <Modal
      size="medium"
      header="Подтвердите действие"
      opened={params.opened}
      onRequestClose={()=>onColseRequest({opened: false})}>
      <TextContent>
        {`Вы уверены, что хотите удалить «${params.name}»?`}
      </TextContent>
      <Row style={{justifyContent: 'flex-end'}}>
        <Button
          kind="secondary" size="small" type="button"
          onClick={()=>onColseRequest({opened: false})}
        >Отмента</Button>
        <Button
          style={{marginLeft: '16px'}}
          kind="primary" size="small" type="button"
          onClick={()=>confirm(params)}
        >Удалить</Button>
      </Row>
    </Modal>
  );
}

export default DeleteConfirm;
