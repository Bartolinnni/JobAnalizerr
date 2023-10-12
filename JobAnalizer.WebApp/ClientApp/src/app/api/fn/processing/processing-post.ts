/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Processing } from '../../models/processing';

export interface ProcessingPost$Params {
      body?: Processing
}

export function processingPost(http: HttpClient, rootUrl: string, params?: ProcessingPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Processing>> {
  const rb = new RequestBuilder(rootUrl, processingPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Processing>;
    })
  );
}

processingPost.PATH = '/Processing';
