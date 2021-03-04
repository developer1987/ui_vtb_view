import React, {useState} from 'react';
import {Caption, BlockView} from './style';
const styles = require('./style.css');
import {Accordion} from '@openvtb/react-ui-kit';
import {TextInfo} from 'src/components/text-info';
import {Row, Col} from 'src/components/layout';
import {IAppAttributes, IAppTransition} from 'src/data-layer/application/types';
import AppTransition from './app-attributes/appTransition';

interface ExtendedInfoProps {
  uuid: string
  id: string
  number: string
  creationDate: number
  creationDateStr: string
  clientFIO: string
  processingService: string
  state: string
  employeeFIO: string
  appTransition: IAppTransition[]
  appAttributes: IAppAttributes
}

function ExtendedInfoHOC(params: ExtendedInfoProps) {
  const {/* id, */appAttributes, clientFIO, appTransition} = params;
  const {city, salesChannel, depInitial, salesSecondChannel, typeGuaranty,
    product, programm, cityBuyCar, carShowroom, kindCar, typeCar, passportRF,
    markCar, modelCar, clientGender, clientBirthday, clientYear,
    clientPlaceBirthday, snils, citizenship, isResident, isSalaryClient,
    factRegistrationAddress, permanentRegistrationAddress, passportForeign,
    clientMobilePhone, clientPhoneOther} = appAttributes;
  const clientFIOArr = clientFIO.split(' ');
  const clientLastName = clientFIOArr[0];
  const clientFirstName = clientFIOArr[1];
  const clientMiddleName = clientFIOArr[2];
  const [list, setList] = useState([
    {id: 0,
      title: 'История состояний',
      content: <AppTransition appTransition={appTransition}/>,
      expanded: true},
  ]);
  const expandAcc = (id: React.ReactText, state: boolean) => {
    const newList = list.map((item: any) => {
      if (item.id === id) {
        item.expanded = state;
      }
      return item;
    });
    setList(newList);
  };

  return (
    <>
      <BlockView>
        <Caption>Общая информация</Caption>
        <Row>
          <Col col={4}>
            <TextInfo caption="Подразделение-инициатор">
              {depInitial}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Город подразделения-инициатора">
              {city}
            </TextInfo>
          </Col>
        </Row>
        <Row>
          <Col col={4}>
            <TextInfo caption="Канал продаж">
              {salesChannel}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Канал продаж (второй уровень)">
              {salesSecondChannel}
            </TextInfo>
          </Col>
        </Row>
      </BlockView>
      <BlockView>
        <Caption>Информация о продукте</Caption>
        <Row>
          <Col col={4}>
            <TextInfo caption="Тип обязательств">
              {typeGuaranty}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Продукт">
              {product}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Программа">
              {programm}
            </TextInfo>
          </Col>
        </Row>
        <Row>
          <Col col={4}>
            <TextInfo caption="Регион покупки автомобиля">
              {cityBuyCar}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Автосалон">
              {carShowroom}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Вид транспортного средства">
              {kindCar}
            </TextInfo>
          </Col>
        </Row>
        <Row>
          <Col col={4}>
            <TextInfo caption="Тип транспортного средства">
              {typeCar}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Марка">
              {markCar}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Модель">
              {modelCar}
            </TextInfo>
          </Col>
        </Row>
      </BlockView>
      <BlockView>
        <Caption>Основная информация</Caption>
        <Row>
          <Col col={4}>
            <TextInfo caption="Фамилия">
              {clientLastName}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Имя">
              {clientFirstName}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Отчество">
              {clientMiddleName}
            </TextInfo>
          </Col>
        </Row>
        <Row>
          <Col col={4}>
            <TextInfo caption="Пол">
              {clientGender}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Дата рождения">
              {clientBirthday}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Возраст, полных лет">
              {clientYear}
            </TextInfo>
          </Col>
        </Row>
        <Row>
          <Col col={4}>
            <TextInfo caption="Место рождения">
              {clientPlaceBirthday}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Гражданство">
              {citizenship}
            </TextInfo>
          </Col>
        </Row>
        <Row>
          <Col col={4}>
            <TextInfo caption="Резидент">
              {isResident}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Зарплатный клиент">
              {isSalaryClient}
            </TextInfo>
          </Col>
        </Row>
      </BlockView>
      <BlockView>
        <Caption>Ранее изменялось ФИО</Caption>
        <Row>
          <Col col={4}>
            <TextInfo caption="Фамилия">
              {clientLastName}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Имя">
              {clientFirstName}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Отчество">
              {clientMiddleName}
            </TextInfo>
          </Col>
        </Row>
      </BlockView>
      <BlockView>
        <Caption>Документы, удостоверяющие личность</Caption>
        <Row>
          <Col col={12}>
            <TextInfo caption="Паспорт">
              {passportRF}
            </TextInfo>
          </Col>
        </Row>
        <Row>
          <Col col={12}>
            <TextInfo caption="Загранпаспорт">
              {passportForeign}
            </TextInfo>
          </Col>
        </Row>
      </BlockView>
      <BlockView>
        <Caption>Регистрационные документы</Caption>
        <Row>
          <Col col={12}>
            <TextInfo caption="СНИЛС">
              {snils}
            </TextInfo>
          </Col>
        </Row>
      </BlockView>
      <BlockView>
        <Caption>Адреса</Caption>
        <Row>
          <Col col={12}>
            <TextInfo caption="Фактическое проживание">
              {factRegistrationAddress}
            </TextInfo>
          </Col>
        </Row>
        <Row>
          <Col col={12}>
            <TextInfo caption="Постоянная регистрация / Временная регистрация">
              {permanentRegistrationAddress}
            </TextInfo>
          </Col>
        </Row>
      </BlockView>
      <BlockView>
        <Caption>Контактная информация</Caption>
        <Row>
          <Col col={4}>
            <TextInfo caption="Мобильный телефон">
              {clientMobilePhone}
            </TextInfo>
          </Col>
          <Col col={4}>
            <TextInfo caption="Дополнительный контактный телефон">
              {clientPhoneOther}
            </TextInfo>
          </Col>
        </Row>
      </BlockView>
      <Row>
        <Col col={12}>
          <Accordion
            className={styles.accordion}
            list={list}
            onChange={(id, newState) => expandAcc(id, newState)}
          />
        </Col>
      </Row>
    </>
  );
}

export default ExtendedInfoHOC;
