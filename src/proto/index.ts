/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import {generateApplicationEntry} from './faker';
import {IApplication} from '../data-layer/application/types';

interface IApplicationIndexed {
  [key: string]: IApplication;
}

declare global {
  interface Window {
    __vtb_proto_data_applications: IApplication[];
    __vtb_proto_sub_data_applications: IApplication[][];
  }
}

const applications = new Array(100).fill(0).map(generateApplicationEntry);
// eslint-disable-next-line guard-for-in
// for (const key in applications) {
//   applications[key] = new Array(10).fill(0).map(generateApplicationEntry);
// }

const applicationsIndexed: IApplicationIndexed = {};

applications.forEach((item) => {
  applicationsIndexed[item.uuid] = item;
});

window.__vtb_proto_data_applications = applications;
