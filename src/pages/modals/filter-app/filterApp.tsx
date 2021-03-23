import React, {useMemo, useState} from 'react';
import {Modal, Button, MultiSelect} from '@openvtb/react-ui-kit';
import {Col, Row} from 'src/components/layout';
import {listToItems} from '../../../helpers/selectItems';
import {StateAppFilterMap} from 'src/constants/lang';
import {Container, RadioLabel, StyledRadioGroup} from './style';
import {IFilterParams, stateAppFilter} from 'src/data-layer/application/types';

interface IFilterApplicationProps {
  params: IFilterParams
  opened: boolean
  confirm: any
  onCloseRequest: any
}

function FilterApp(props: IFilterApplicationProps) {
  const {params, opened, confirm, onCloseRequest} = props;
  const [periodAppFilter, setPeriodAppFilter] =
  useState(params.periodAppFilter);
  const [viewAppBoardFilter, setViewAppFilter] =
  useState(params.viewAppBoardFilter);
  const [stateAppItemsFilter, setStateAppFilter] =
  useState(params.stateAppItemsFilter);

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
  StateAppFilterList.unshift({label: 'Все', value: 'stateAll'});

  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      size="big"
      header="Фильтры"
      opened={opened}
      onRequestClose={()=>onCloseRequest({opened: false})}>
      <Row style={{paddingTop: '0px'}}>
        <Col col={12}>
          <Container>
            <RadioLabel>Период</RadioLabel>
            <StyledRadioGroup
              id='periodAppFilter'
              value={periodAppFilter}
              size={'big'}
              list={IntervalDateFilterList}
              onChange={({value}) => setPeriodAppFilter(value)}
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
              value={viewAppBoardFilter}
              size={'big'}
              list={ViewAppFilterList}
              onChange={({value}) => setViewAppFilter(value)}
            />
          </Container>
        </Col>
      </Row>
      <Row style={{paddingTop: '0px'}}>
        <Col col={6}>
          <Container>
            <MultiSelect
              label="Состояние заявки"
              size="micro"
              initialValue={params.stateAppItemsFilter ?
                params.stateAppItemsFilter.map(
                    (item: stateAppFilter) => ({
                      label: item.label,
                      value: item.value,
                    })):[]}
              list={StateAppFilterList}
              clearable={true}
              placeholder="Выберите из списка"
              onChange={(value) => {
                setStateAppFilter(value);
              }}
            />
          </Container>
        </Col>
      </Row>
      <Row style={{justifyContent: 'flex-end'}}>
        <Button
          kind="secondary"
          size="small"
          type="button"
          onClick={()=> {
            confirm({...params, periodAppFilter: '', viewAppBoardFilter: '',
              stateAppItemsFilter: ''});
          }}
        >Очистить</Button>
        <Button
          style={{marginLeft: '16px'}}
          kind="primary"
          size="small"
          type="button"
          onClick={()=>{
            confirm({...params,
              periodAppFilter, viewAppBoardFilter, stateAppItemsFilter});
          }}
        >Применить</Button>
      </Row>
    </Modal>
  );
}

export default FilterApp;
