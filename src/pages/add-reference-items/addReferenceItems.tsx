import React, {useState} from 'react';
import {Row, Col} from 'src/components/layout';
import SimpleTable from 'src/components/simple-table';
import {Button, Input} from '@openvtb/react-ui-kit';
import editIcon from
  '@openvtb/admiral-icons/build/system/EditOutline.svg';
import trashIcon from
  '@openvtb/admiral-icons/build/system/DeleteOutline.svg';
import PageHolder from 'src/components/page-holder';
import DeleteConfirm from 'src/pages/modals/delete-confirm';

interface IElement {
  id?: number
  code: string
  name: string
  brief: string
  description?: string
}

interface AddReferenceItemsPageProps {
  wizardControls: {
    wizardData: any
    setWizardData: any
  }
  stepper: any
  currentStep: any
  routeRef: any
}

const AddReferenceItemsPage = function(props: AddReferenceItemsPageProps) {
  const {stepper, currentStep, wizardControls, routeRef} = props;
  const {wizardData, setWizardData} = wizardControls;
  const pageParams = wizardData.AddReferenceItemsPage || {};
  const [controlErrors, setControlErrors] = useState<any>([]);
  const [delModalParams, setDelModalParams] = useState<any>({opened: false});
  const [editRow, setEditRow] = useState<any>(false);

  const [code, setItemCode] = useState(pageParams.code || '');
  const [name, setItemName] = useState(pageParams.name || '');
  const [brief, setItemBrief] = useState(pageParams.brief || '');
  const [description, setItemDescription] =
  useState(pageParams.description || '');
  const [elements, setElements] = useState(pageParams.elements || []);
  const requiredControls = ['code', 'name', 'brief'];

  const pushToWizard = (key: string, value: any) => {
    setWizardData({
      ...wizardData,
      AddReferenceItemsPage: {
        ...wizardData.AddReferenceItemsPage,
        [key]: value
      }
    });
  };

  const clearInputData = () => {
    setItemCode(''); setItemName(''); setItemBrief('');
    setItemDescription('');
  };

  const callSetElements = (newElement: IElement[]) => {
    const newElements = [...newElement, ...elements];
    setElements(newElements);
    setWizardData({
      ...wizardData,
      AddReferenceItemsPage: {
        ...wizardData.AddReferenceItemsPage,
        elements: newElements,
        code: '', name: '', brief: '', description: ''
      }
    });
    clearInputData();
  };

  const setForEdit = ({id, code, name, brief, description}: any) => {
    setItemCode(code); setItemName(name);
    setItemBrief(brief); setItemDescription(description);
    setWizardData({
      ...wizardData,
      AddReferenceItemsPage: {
        ...wizardData.AddReferenceItemsPage,
        code, name, brief, description
      }
    });
    setEditRow({id, code, name, brief, description});
  };

  const deleteElement = (id: number) => {
    const newElements = elements.filter(
        (element:any)=>element.id !== id);
    setElements(newElements);
    setWizardData({
      ...wizardData,
      AddReferenceItemsPage: {
        ...wizardData.AddReferenceItemsPage,
        elements: newElements
      }
    });
  };

  const saveRow = (params: any) => {
    callSetElements([params]);
    setEditRow(false);
  };

  return (
    <PageHolder
      routeRef={routeRef}
      caption="Элементы"
      requiredControls={requiredControls}
      setControlErrors={setControlErrors}
      currentStep={currentStep}
      stepper={stepper}
      pageParams={wizardData.AddReferenceItemsPage}>
      <Row>
        <Col col={4}>
          <Input.Text
            id="edItemCode"
            label="Код элемента"
            value={code}
            size="small"
            status={controlErrors.code}
            onChange={(event, value) => {
              setItemCode(value);
              pushToWizard('code', value);
            }}
          />
        </Col>
        <Col col={4}>
          <Input.Text
            id="edItemName"
            label="Наименование элемента"
            value={name}
            size="small"
            status={controlErrors.name}
            onChange={(event, value) => {
              setItemName(value);
              pushToWizard('name', value);
            }}
          />
        </Col>
        <Col col={4}>
          <Input.Text
            id="edItemBrief"
            label="Краткое наименование элемента"
            value={brief}
            size="small"
            status={controlErrors.brief}
            onChange={(event, value) => {
              setItemBrief(value);
              pushToWizard('brief', value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col col={8}>
          <Input.Text
            id="edItemDescription"
            label="Описание элемента"
            value={description}
            status={controlErrors.description}
            size="small"
            onChange={(event, value) => {
              setItemDescription(value);
              pushToWizard('description', value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col col={3}>
          <Button
            kind="secondary"
            size="small"
            onClick={()=>{
              clearInputData();
            }}
          >
            Очистить
          </Button>
          {editRow &&
            <Button
              kind="primary"
              size="small"
              onClick={()=>{
                saveRow(editRow);
              }}
            >
              Отмена
            </Button>
          }
          <Button
            kind="primary"
            size="small"
            onClick={()=>{
              if (routeRef.current.checkControls &&
                routeRef.current.checkControls(requiredControls)) {
                return;
              }
              saveRow({id: new Date().getTime(), code, name, brief,
                description});
            }}
          >
            {editRow ? 'Сохранить' : 'Добавить строку'}
          </Button>
        </Col>
      </Row>
      {elements.length > 0 && <Row>
        <Col col={12}>
          <SimpleTable
            dataIsLoading={false}
            caption="Список элементов"
            headerElements={[
              {name: 'Код', fieldName: 'code'},
              {name: 'Наименование', fieldName: 'name'},
              {name: 'Краткое наименование', fieldName: 'brief'},
              {name: 'Описание', fieldName: 'description'}
            ]}
            actions={[
              {caption: 'Изменить', href: '#', type: 'icon', svg: editIcon,
                onClick: (item: any) => {
                  deleteElement(item.id);
                  setForEdit(item);
                }},
              {caption: 'Удалить', href: '#', type: 'icon', svg: trashIcon,
                onClick: (item: any) => {
                  setDelModalParams({...item, opened: true});
                }}
            ]}
            data={{
              content: elements,
              totalElements: elements.length
            }}/>
        </Col>
      </Row>}
      <DeleteConfirm
        params={delModalParams}
        onColseRequest={setDelModalParams}
        confirm={(params: any) => {
          setDelModalParams({opened: false});
          deleteElement(params.id);
        }}/>
    </PageHolder>
  );
};

export default AddReferenceItemsPage;
