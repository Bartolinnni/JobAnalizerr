/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { arbeitNowGet } from '../fn/arbeit-now/arbeit-now-get';
import { ArbeitNowGet$Params } from '../fn/arbeit-now/arbeit-now-get';
import { arbeitNowGet$Plain } from '../fn/arbeit-now/arbeit-now-get-plain';
import { ArbeitNowGet$Plain$Params } from '../fn/arbeit-now/arbeit-now-get-plain';
import { arbeitNowProcIdGet } from '../fn/arbeit-now/arbeit-now-proc-id-get';
import { ArbeitNowProcIdGet$Params } from '../fn/arbeit-now/arbeit-now-proc-id-get';
import { arbeitNowProcIdGet$Plain } from '../fn/arbeit-now/arbeit-now-proc-id-get-plain';
import { ArbeitNowProcIdGet$Plain$Params } from '../fn/arbeit-now/arbeit-now-proc-id-get-plain';
import { JobOfferModel } from '../models/job-offer-model';

@Injectable({ providedIn: 'root' })
export class ArbeitNowService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `arbeitNowGet()` */
  static readonly ArbeitNowGetPath = '/ArbeitNow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `arbeitNowGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  arbeitNowGet$Plain$Response(params?: ArbeitNowGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobOfferModel>>> {
    return arbeitNowGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `arbeitNowGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  arbeitNowGet$Plain(params?: ArbeitNowGet$Plain$Params, context?: HttpContext): Observable<Array<JobOfferModel>> {
    return this.arbeitNowGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<JobOfferModel>>): Array<JobOfferModel> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `arbeitNowGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  arbeitNowGet$Response(params?: ArbeitNowGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobOfferModel>>> {
    return arbeitNowGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `arbeitNowGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  arbeitNowGet(params?: ArbeitNowGet$Params, context?: HttpContext): Observable<Array<JobOfferModel>> {
    return this.arbeitNowGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<JobOfferModel>>): Array<JobOfferModel> => r.body)
    );
  }

  /** Path part for operation `arbeitNowProcIdGet()` */
  static readonly ArbeitNowProcIdGetPath = '/ArbeitNow/{procId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `arbeitNowProcIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  arbeitNowProcIdGet$Plain$Response(params: ArbeitNowProcIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobOfferModel>>> {
    return arbeitNowProcIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `arbeitNowProcIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  arbeitNowProcIdGet$Plain(params: ArbeitNowProcIdGet$Plain$Params, context?: HttpContext): Observable<Array<JobOfferModel>> {
    return this.arbeitNowProcIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<JobOfferModel>>): Array<JobOfferModel> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `arbeitNowProcIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  arbeitNowProcIdGet$Response(params: ArbeitNowProcIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobOfferModel>>> {
    return arbeitNowProcIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `arbeitNowProcIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  arbeitNowProcIdGet(params: ArbeitNowProcIdGet$Params, context?: HttpContext): Observable<Array<JobOfferModel>> {
    return this.arbeitNowProcIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<JobOfferModel>>): Array<JobOfferModel> => r.body)
    );
  }

}
