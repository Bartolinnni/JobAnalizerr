/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Processing } from '../models/processing';
import { processingDelete } from '../fn/processing/processing-delete';
import { ProcessingDelete$Params } from '../fn/processing/processing-delete';
import { processingDelete$Plain } from '../fn/processing/processing-delete-plain';
import { ProcessingDelete$Plain$Params } from '../fn/processing/processing-delete-plain';
import { processingGet } from '../fn/processing/processing-get';
import { ProcessingGet$Params } from '../fn/processing/processing-get';
import { processingGet$Plain } from '../fn/processing/processing-get-plain';
import { ProcessingGet$Plain$Params } from '../fn/processing/processing-get-plain';
import { processingIdGet } from '../fn/processing/processing-id-get';
import { ProcessingIdGet$Params } from '../fn/processing/processing-id-get';
import { processingIdGet$Plain } from '../fn/processing/processing-id-get-plain';
import { ProcessingIdGet$Plain$Params } from '../fn/processing/processing-id-get-plain';
import { processingPost } from '../fn/processing/processing-post';
import { ProcessingPost$Params } from '../fn/processing/processing-post';
import { processingPost$Plain } from '../fn/processing/processing-post-plain';
import { ProcessingPost$Plain$Params } from '../fn/processing/processing-post-plain';
import { processingWithOffersGet } from '../fn/processing/processing-with-offers-get';
import { ProcessingWithOffersGet$Params } from '../fn/processing/processing-with-offers-get';
import { processingWithOffersGet$Plain } from '../fn/processing/processing-with-offers-get-plain';
import { ProcessingWithOffersGet$Plain$Params } from '../fn/processing/processing-with-offers-get-plain';

@Injectable({ providedIn: 'root' })
export class ProcessingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `processingGet()` */
  static readonly ProcessingGetPath = '/Processing';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processingGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingGet$Plain$Response(params?: ProcessingGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Processing>>> {
    return processingGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processingGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingGet$Plain(params?: ProcessingGet$Plain$Params, context?: HttpContext): Observable<Array<Processing>> {
    return this.processingGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Processing>>): Array<Processing> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingGet$Response(params?: ProcessingGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Processing>>> {
    return processingGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingGet(params?: ProcessingGet$Params, context?: HttpContext): Observable<Array<Processing>> {
    return this.processingGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Processing>>): Array<Processing> => r.body)
    );
  }

  /** Path part for operation `processingPost()` */
  static readonly ProcessingPostPath = '/Processing';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processingPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  processingPost$Plain$Response(params?: ProcessingPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Processing>> {
    return processingPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processingPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  processingPost$Plain(params?: ProcessingPost$Plain$Params, context?: HttpContext): Observable<Processing> {
    return this.processingPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Processing>): Processing => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processingPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  processingPost$Response(params?: ProcessingPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Processing>> {
    return processingPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processingPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  processingPost(params?: ProcessingPost$Params, context?: HttpContext): Observable<Processing> {
    return this.processingPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Processing>): Processing => r.body)
    );
  }

  /** Path part for operation `processingDelete()` */
  static readonly ProcessingDeletePath = '/Processing';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processingDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingDelete$Plain$Response(params?: ProcessingDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return processingDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processingDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingDelete$Plain(params?: ProcessingDelete$Plain$Params, context?: HttpContext): Observable<number> {
    return this.processingDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processingDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingDelete$Response(params?: ProcessingDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return processingDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processingDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingDelete(params?: ProcessingDelete$Params, context?: HttpContext): Observable<number> {
    return this.processingDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `processingIdGet()` */
  static readonly ProcessingIdGetPath = '/Processing/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processingIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingIdGet$Plain$Response(params: ProcessingIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Processing>> {
    return processingIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processingIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingIdGet$Plain(params: ProcessingIdGet$Plain$Params, context?: HttpContext): Observable<Processing> {
    return this.processingIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Processing>): Processing => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processingIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingIdGet$Response(params: ProcessingIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Processing>> {
    return processingIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processingIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingIdGet(params: ProcessingIdGet$Params, context?: HttpContext): Observable<Processing> {
    return this.processingIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Processing>): Processing => r.body)
    );
  }

  /** Path part for operation `processingWithOffersGet()` */
  static readonly ProcessingWithOffersGetPath = '/Processing/withOffers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processingWithOffersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingWithOffersGet$Plain$Response(params?: ProcessingWithOffersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Processing>>> {
    return processingWithOffersGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processingWithOffersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingWithOffersGet$Plain(params?: ProcessingWithOffersGet$Plain$Params, context?: HttpContext): Observable<Array<Processing>> {
    return this.processingWithOffersGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Processing>>): Array<Processing> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processingWithOffersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingWithOffersGet$Response(params?: ProcessingWithOffersGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Processing>>> {
    return processingWithOffersGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processingWithOffersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processingWithOffersGet(params?: ProcessingWithOffersGet$Params, context?: HttpContext): Observable<Array<Processing>> {
    return this.processingWithOffersGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Processing>>): Array<Processing> => r.body)
    );
  }

}
