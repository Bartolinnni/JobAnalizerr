/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { JobOfferModel } from '../../models/job-offer-model';

export interface ArbeitNowProcIdGet$Params {
  procId: number;
}

export function arbeitNowProcIdGet(http: HttpClient, rootUrl: string, params: ArbeitNowProcIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobOfferModel>>> {
  const rb = new RequestBuilder(rootUrl, arbeitNowProcIdGet.PATH, 'get');
  if (params) {
    rb.path('procId', params.procId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<JobOfferModel>>;
    })
  );
}

arbeitNowProcIdGet.PATH = '/ArbeitNow/{procId}';
