import React, {useMemo, useState} from 'react';
import {Modal, Button, MultiSelect} from '@openvtb/react-ui-kit';
import {Col, Row} from 'src/components/layout';
import {itemsToValues, listToItems} from '../../../helpers/selectItems';
import {StateAppFilterMap} from 'src/constants/lang';
import {Container, RadioLabel, StyledRadioGroup} from './style';

export interface ApplicationFilter {
  periodAppFilter: string;
  viewAppFilter: string;
  stateAppFilter: string[];
}

export function getSellersFilterDefaults(): ApplicationFilter {
  return {
    periodAppFilter: '',
    viewAppFilter: '',
    stateAppFilter: [],
  };
}

interface FilterApplicationProps {
  params: any
  confirm: any
  onColseRequest: any
}

function FilterApp(props: FilterApplicationProps) {
  const {params, confirm, onColseRequest} = props;
  const [name, setReferenceName] = useState(params.name);
  const [sysname, setReferenceSysname] = useState(params.sysname);
  const [radioValue, setRadioValue] = useState(params.radioValue);// example
  const [radioValue2, setRadioValue2] = useState('viewAppBoard');
  const [description, setReferenceDescription] =
  useState(params.description);

  const IntervalDateFilterList = useMemo(
      () => [
        {label: 'Все', value: 'intervalDateAll'},
        {label: 'Сегодня', value: 'intervalDateToday'},
        {label: 'Неделя', value: 'intervalDateWeek'},
        {label: 'Месяц', value: 'intervalDateMonth'},
      ],
      []
  );

  const ViewAppFilterList = useMemo(
      () => [
        {label: 'Доска', value: 'viewAppBoard'},
        {label: 'Таблица', value: 'viewAppTable'},
      ],
      []
  );

  const StateAppFilterList = listToItems(
      Object.entries(StateAppFilterMap),
      ([value, label]) => [label, value]
  );

  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      size="big"
      header="Фильтры"
      opened={params.opened}
      onRequestClose={()=>onColseRequest({opened: false})}>
      <Row style={{paddingTop: '0px'}}>
        <Col col={12}>
          <Container>
            <RadioLabel>Период</RadioLabel>
            <StyledRadioGroup
              id='periodAppFilter'
              value={radioValue}
              size={'big'}
              list={IntervalDateFilterList}
              onChange={({value}) => setRadioValue(value)}
            />
          </Container>
        </Col>
      </Row>
      <Row style={{paddingTop: '0px'}}>
        <Col col={12}>
          <Container>
            <RadioLabel>Отображение заявок</RadioLabel>
            <StyledRadioGroup
              id='viewAppFilter'
              value={radioValue2}
              size={'big'}
              list={ViewAppFilterList}
              onChange={({value}) => setRadioValue2(value)}
            />
          </Container>
        </Col>
      </Row>
      <Row style={{paddingTop: '0px'}}>
        <Col col={6}>
          <MultiSelect
            label="Состояние заявки"
            size="micro"
            list={StateAppFilterList}
            placeholder="Выберите из списка"
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

export default FilterApp;
