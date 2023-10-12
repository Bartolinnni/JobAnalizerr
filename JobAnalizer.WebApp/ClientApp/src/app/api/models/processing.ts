/* tslint:disable */
/* eslint-disable */
import { JobOfferModel } from '../models/job-offer-model';
export interface Processing {
  date?: Date | null;
  id?: number;
  offers?: null | Array<JobOfferModel>;
}
