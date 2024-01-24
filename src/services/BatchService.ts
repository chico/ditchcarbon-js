/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BatchService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Batch request
     * Send multiple requests to the Ditchcarbon API with one HTTP request.
     *
     * Notes:
     * * All requests share the same headers.
     * * URLs are relative. Set `url` to `/v1.0/supplier` rather than `https://api.ditcharbon...`
     * @param formData
     * @returns any An array of responses. The order of responses matches the order of requests.
     * @throws ApiError
     */
    public postBatch(
        formData?: {
            /**
             * JSON array of requests. See example.
             */
            requests?: string;
        },
    ): CancelablePromise<Array<{
        /**
         * HTTP status code of response
         */
        status?: number;
        headers?: Record<string, any>;
        /**
         * JSON array of responses.
         */
        body?: string;
    }>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1.0/batch',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
}
