/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { configurationClientIdGet } from '../fn/oidc-configuration/configuration-client-id-get';
import { ConfigurationClientIdGet$Params } from '../fn/oidc-configuration/configuration-client-id-get';

@Injectable({ providedIn: 'root' })
export class OidcConfigurationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `configurationClientIdGet()` */
  static readonly ConfigurationClientIdGetPath = '/_configuration/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configurationClientIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  configurationClientIdGet$Response(params: ConfigurationClientIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return configurationClientIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `configurationClientIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configurationClientIdGet(params: ConfigurationClientIdGet$Params, context?: HttpContext): Observable<void> {
    return this.configurationClientIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
