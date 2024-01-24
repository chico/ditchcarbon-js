/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExpenseService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @deprecated
     * Expense carbon emissions calculation
     * This endpoint is deprecated, please use Organizations instead.
     *
     * By passing in the appropriate options, you can calculate the carbon emissions of an expense.
     *
     * @param supplier provide the name of the supplier of the expense
     * @param amount value of the expense. For example, for an expense of $120, `amount=120` and `amount_currency=USD`.
     * @param description provide a description of the expense
     * @param amountCurrency Currency of `amount`.
     * @param date date of the expense
     * @param region The ISO two-letter code of the country in which the expense occurred.
     * @returns any carbon emissions result
     * @throws ApiError
     */
    public runCalculation(
        supplier: string,
        amount: number,
        description?: string,
        amountCurrency: string = 'GBP',
        date?: string,
        region: string = 'US',
    ): CancelablePromise<{
        supplier?: string;
        description?: string;
        amount?: number;
        date?: string;
        kgco2?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1.0/calculate',
            query: {
                'supplier': supplier,
                'description': description,
                'amount': amount,
                'amount_currency': amountCurrency,
                'date': date,
                'region': region,
            },
            errors: {
                400: `bad input parameter`,
                401: `API key is missing or invalid`,
            },
        });
    }
}
