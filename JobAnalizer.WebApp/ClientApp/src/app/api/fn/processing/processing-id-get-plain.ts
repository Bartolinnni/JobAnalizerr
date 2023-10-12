/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Processing } from '../../models/processing';

export interface ProcessingIdGet$Plain$Params {
  id: number;
}

export function processingIdGet$Plain(http: HttpClient, rootUrl: string, params: ProcessingIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Processing>> {
  const rb = new RequestBuilder(rootUrl, processingIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Processing>;
    })
  );
}

processingIdGet$Plain.PATH = '/Processing/{id}';
