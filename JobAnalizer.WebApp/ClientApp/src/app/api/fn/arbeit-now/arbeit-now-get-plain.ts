/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { JobOfferModel } from '../../models/job-offer-model';

export interface ArbeitNowGet$Plain$Params {
}

export function arbeitNowGet$Plain(http: HttpClient, rootUrl: string, params?: ArbeitNowGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobOfferModel>>> {
  const rb = new RequestBuilder(rootUrl, arbeitNowGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<JobOfferModel>>;
    })
  );
}

arbeitNowGet$Plain.PATH = '/ArbeitNow';