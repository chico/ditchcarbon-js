/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Industry } from '../models/Industry';
import type { Organization } from '../models/Organization';
import type { OrganizationIdentifier } from '../models/OrganizationIdentifier';
import type { RecommendedActions } from '../models/RecommendedActions';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrganizationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Register a new organization.
     * Register a new organization with DitchCarbon. If you've already registered this organization, DitchCarbon will not register it again. Once registered, you can request updated information on the organization using `GET /organizations/{id}`
     * This endpoint also returns the latest carbon data on the organization.
     * @param requestBody Organization identifier
     * @returns Organization Organization data
     * @throws ApiError
     */
    public postOrganizations(
        requestBody: (OrganizationIdentifier & {
            currency?: string;
        }),
    ): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve data on an organization
     * Retrieve the latest data on an organization already registered using `POST /organizations`.
     * @param id The ID of the organization.
     * @param currency ISO three-letter currency code to provide revenue and emission factor in.
     * @returns Organization Organization data
     * @throws ApiError
     */
    public getOrganizationsId(
        id: number,
        currency?: string,
    ): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}',
            path: {
                'id': id,
            },
            query: {
                'currency': currency,
            },
            errors: {
                404: `Organizations Not Found`,
            },
        });
    }
    /**
     * Retrieve recommended actions for an organization
     * Retrieve recommended actions for an organization already registered using `POST /organizations`.
     * @param id The ID of the organization.
     * @returns RecommendedActions Recommended actions
     * @throws ApiError
     */
    public getOrganizationsIdRecommendedActions(
        id: number,
    ): CancelablePromise<RecommendedActions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}/recommended_actions',
            path: {
                'id': id,
            },
            errors: {
                404: `Organization Not found`,
            },
        });
    }
    /**
     * List industries
     * List all industries. This is useful for finding the `industry_id` parameter for the `/organizations` endpoint.
     * Pagination follows RFC 5988, with the `Link` header containing the `next` and `last` links. Follow the `next` link to get the next page of results.
     * @returns Industry Industries list
     * @throws ApiError
     */
    public getIndustries(): CancelablePromise<Array<Industry>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/industries',
        });
    }
    /**
     * Search industries
     * Search industries by name. This is useful for finding the `industry_id` parameter for the `/organizations` endpoint.
     * Pagination follows RFC 5988, with the `Link` header containing the `next` and `last` links. Follow the `next` link to get the next page of results.
     * @param q Search query
     * @returns Industry Industries list matching search query
     * @throws ApiError
     */
    public getIndustriesSearch(
        q: string,
    ): CancelablePromise<Array<Industry>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/industries/search',
            query: {
                'q': q,
            },
        });
    }
}
