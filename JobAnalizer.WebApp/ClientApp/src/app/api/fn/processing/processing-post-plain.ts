/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Processing } from '../../models/processing';

export interface ProcessingPost$Plain$Params {
      body?: Processing
}

export function processingPost$Plain(http: HttpClient, rootUrl: string, params?: ProcessingPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Processing>> {
  const rb = new RequestBuilder(rootUrl, processingPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

processingPost$Plain.PATH = '/Processing';
