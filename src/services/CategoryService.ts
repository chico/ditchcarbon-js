/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from '../models/Category';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CategoryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search for a category
     * You can provide a "category" to improve carbon footprint estimates throughout the API. This endpoint helps you decide which category to use by returning a searchable, paginated list of categories.
     *
     * Pagination follows [RFC8288](https://www.rfc-editor.org/rfc/rfc8288).
     * @param q Search term. Results are ordered by closeness to this parameter.
     * @param page Pagination page number
     * @returns any OK
     * @throws ApiError
     */
    public getCategories(
        q?: string,
        page?: number,
    ): CancelablePromise<{
        data?: Array<Category>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1.0/categories',
            query: {
                'q': q,
                'page': page,
            },
        });
    }
}
