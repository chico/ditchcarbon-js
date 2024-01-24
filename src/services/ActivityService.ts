/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ActivityService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve activity categories
     * Top-level activities are categories of activities. For example, "Stationary Combustion". This endpoint retrieves a list of available categories.
     * @param region ISO two-letter country code of activity region. Filters the response to include categories that are available only in this region.
     * @returns any OK
     * @throws ApiError
     */
    public getTopLevelActivities(
        region?: string,
    ): CancelablePromise<Array<{
        name?: string;
    }>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1.0/activities/top-level',
            query: {
                'region': region,
            },
        });
    }
    /**
     * Retrieve activities
     * Retrieve a paginated list of all activities. Use the `region` and `name[]` parameters to filter by region and activity category.
     *
     * If you're getting empty responses, leave the `region` and `name` parameters blank.
     *
     * This endpoint is paginated so the response isn't too big. Use the `page` parameter to retrieve the next page of data. Pagination follows [RFC8288](https://www.rfc-editor.org/rfc/rfc8288).
     * @param region ISO two-letter country code or `Global`. Filters activities to only those available in this region. Leave empty to get all activities.
     * @param nameArray Filter by top-level activity name.
     * @param page Pagination page number
     * @returns any OK
     * @throws ApiError
     */
    public getActivities(
        region?: string,
        nameArray?: string,
        page?: number,
    ): CancelablePromise<Array<{
        id?: string;
        name?: Array<string>;
        /**
         * Units you can assess this activity with.
         */
        available_declared_units?: Array<string>;
    }>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1.0/activities',
            query: {
                'region': region,
                'name[]': nameArray,
                'page': page,
            },
        });
    }
    /**
     * Retrieve an activity
     * Retrieve an activity. This endpoint returns what units are available for this activity.
     * @param id Activity ID
     * @returns any OK
     * @throws ApiError
     */
    public getActivitiesId(
        id: string,
    ): CancelablePromise<{
        id?: string;
        name?: Array<string>;
        available_declared_units?: Array<string>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1.0/activities/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve an assessment of an activity
     * Retrieve the GHG emission factor of an activity.
     * @param id Activity ID
     * @param region ISO two-letter country code.
     * @param declaredUnit GHG emission factors will be in reference to this unit.
     * @param year Source year to use. e.g. 2022 will use 2022's data.
     * @returns any OK
     * @throws ApiError
     */
    public getActivitiesIdAssessment(
        id: string,
        region: string,
        declaredUnit: string,
        year?: number,
    ): CancelablePromise<{
        region?: string;
        /**
         * Found year. This may be different to requested year if that data isn't available.
         */
        year?: number;
        declared_unit?: string;
        /**
         * Greenhouse gas emission factors in kg.
         */
        ghg_emission_factors?: {
            ch4?: number;
            co2?: number;
            n2o?: number;
            co2e?: number;
        };
        source_url?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1.0/activities/{id}/assessment',
            path: {
                'id': id,
            },
            query: {
                'region': region,
                'year': year,
                'declared_unit': declaredUnit,
            },
        });
    }
}
