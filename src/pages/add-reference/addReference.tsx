import React, {useState} from 'react';
import PageHolder from 'src/components/page-holder';
import {Col, Row} from 'src/components/layout';
import {Input} from '@openvtb/react-ui-kit';

interface AddReferencePageProps {
  wizardControls: {
    wizardData: any
    setWizardData: any
  }
  stepper: any
  currentStep: any
  routeRef: any
}

function AddReferencePage(props: AddReferencePageProps) {
  const {stepper, currentStep, wizardControls, routeRef} = props;
  const [controlErrors, setControlErrors] = useState<any>([]);
  const {wizardData, setWizardData} = wizardControls;
  const pageParams = wizardData.AddReferencePage || {};
  const [name, setReferenceName] = useState(pageParams.name);
  const [sysname, setReferenceSysname] = useState(pageParams.sysname);
  const [description, setReferenceDescription] =
  useState(pageParams.description);
  const pushToWizard = (key: string, value: any) => {
    setWizardData({
      ...wizardData,
      AddReferencePage: {
        ...wizardData.AddReferencePage,
        [key]: value
      }
    });
  };
  return (
    <PageHolder
      routeRef={routeRef}
      caption="Данные справочника"
      requiredControls={['name', 'sysname']}
      setControlErrors={setControlErrors}
      currentStep={currentStep}
      stepper={stepper}
      pageParams={wizardData.AddReferencePage}>
      <Row>
        <Col col={4}>
          <Input.Text
            id="edName"
            label="Наименование справочника"
            value={name}
            size="small"
            status={controlErrors.name}
            onChange={(event, value) => {
              setReferenceName(value);
              pushToWizard('name', value);
            }}
          />
        </Col>
        <Col col={4}>
          <Input.Text
            id="edSysname"
            label="Системное наименование справочника"
            value={sysname}
            size="small"
            status={controlErrors.sysname}
            onChange={(event, value) => {
              setReferenceSysname(value);
              pushToWizard('sysname', value);
            }}
          />
        </Col>
        <Col col={4}>
          <Input.Text
            id="edDescription"
            label="Описание справочника"
            value={description}
            size="small"
            status={controlErrors.description}
            onChange={(event, value) => {
              setReferenceDescription(value);
              pushToWizard('description', value);
            }}
          />
        </Col>
      </Row>
    </PageHolder>
  );
}

export default AddReferencePage;
