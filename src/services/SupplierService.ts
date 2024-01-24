/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SupplierService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @deprecated
     * Supplier carbon emissions calculation
     * This endpoint is deprecated, please use Organizations instead.
     *
     * Look up the emissions factor of a supplier.
     *
     * `ef_kg_co2eq` is the carbon footprint of the supplier per monetary unit. In other words, it's how much a supplier emits per $. You can change the currency of this field using the `currency` parameter.
     *
     * @param name The name of the supplier
     * @param currency ISO three-letter currency code. The response will have `ef_kg_co2e` converted to be in terms of this currency. Currency conversion uses rates from the current day.
     * @param country Country of supplier's operations. ISO two-letter country code.
     * @param date Emission factors change over time, so providing a date improves the accuracy of the estimation. Defaults to today.
     * @param category The name of the supplier's industry. Providing this parameter improves the accuracy for less-known suppliers.
     * @returns any carbon emissions result
     * @throws ApiError
     */
    public lookupSupplier(
        name: string,
        currency: string = 'USD',
        country?: string,
        date?: string,
        category?: string,
    ): CancelablePromise<{
        /**
         * Name of supplier
         */
        supplier?: string;
        ef_kg_co2eq?: number;
        /**
         * A measure of how relevant the returned data is to the request. Ranges from 1 (best) - 5 (worst)
         */
        quality?: number;
        finances?: {
            revenue?: {
                cents?: number;
                currency_iso?: string;
            } | null;
            source_url?: string | null;
        } | null;
        emissions?: {
            total_kg_co2?: number | null;
            scope_1_kg_co2?: number | null;
            scope_2_kg_co2?: number | null;
            scope_3_kg_co2?: number | null;
        } | null;
        sources?: {
            supplier_financials_source_url?: string | null;
            supplier_carbon_emissions_source_url?: string | null;
            year?: number | null;
            country?: string | null;
        };
        /**
         * This indicates if a company has disclosed via CDP
         */
        cdp?: {
            /**
             * If a company has disclosed via CDP this URL when you are logged into CDP will take you to the disclosure for the requested year.
             */
            link?: string;
        } | null;
        /**
         * SBTi shows companies and financial institutions that have set science-based targets, or have committed to developing targets.
         */
        sbti?: {
            /**
             * This is the date which the organization's commitment/target was published.
             */
            date?: string;
            /**
             * Is the company classed as "taking action" by SBTI
             */
            net_zero_committed?: string;
            /**
             * What date has the company set to be NetZero by
             */
            near_term_target_year?: string;
            /**
             * Organizations whose target status is ‘targets set’ have had their targets independently validated by the SBTi.
             * Organizations whose target status is ‘committed’ have made a public commitment to set a science-based target aligned with the SBTi’s target-setting criteria within 24 months.
             */
            near_term_target_status?: string;
            /**
             * Temperature increase commitment, these companies are committing to keeping global warming to 1.5/2c
             */
            near_term_target_classification?: string;
        } | null;
        category_name?: string;
        currency?: string;
        /**
         * @deprecated
         */
        emissions_scope?: number | null;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1.0/supplier',
            query: {
                'name': name,
                'currency': currency,
                'country': country,
                'date': date,
                'category': category,
            },
            errors: {
                400: `bad input parameter`,
                401: `API key is missing or invalid`,
            },
        });
    }
}
