/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProductService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Estimate a product's carbon footprint
     * We define "product" as "any goods or services."
     *
     * The API returns two carbon footprints:
     * * `manufacturer_declared_carbon_footprint` is the manufacturer's reported value for the product's net greenhouse gas emissions measured in kgCO2e.
     * * **Preferred:** `carbon_footprint` is a modified value that uses DitchCarbon's models. Our models consider aspects that have changed since the manufacturer's declaration (e.g. grid intensity) to provide a better estimate.
     *
     * In case there is no exact product match, you can provide the `category_name` parameter. Use the categories endpoint to find a list of possible categories. We'll return the category average and set `methodology="product_category"` if your requested product is not found.
     *
     * In case there is no exact product match and no exact category match, we'll use the industry standard spend-based methodology to estimate the carbon footprint of the requested product. The API expects the "price_cents" and "price_currency" parameters to be set in this case.
     *
     * @param name The name of the product (fuzzy-matched)
     * @param manufacturer The name of the organization that supplies the product (fuzzy-matched)
     * @param categoryName The name of the product's category (fuzzy-matched). Use the categories endpoint to browse supported categories.
     * @param unit For example, setting to m3 will make the API return a `carbon_footprint` value **per cubic meter**. Leave blank for countable products e.g. laptops
     * @param priceCents The price of the product in an integer number of cents.
     * @param priceCurrency Three-letter currency code.
     * @param months The number of months the product will be used for
     * @param country The two-letter country code the product is used in.
     * @returns any Successful response
     * @throws ApiError
     */
    public lookupProduct(
        name: string,
        manufacturer: string,
        categoryName?: string,
        unit?: string,
        priceCents?: number,
        priceCurrency?: string,
        months?: number,
        country?: string,
    ): CancelablePromise<{
        /**
         * The product or product category's full name
         */
        name?: string;
        manufacturer?: string;
        months?: number;
        country?: string;
        /**
         * The DitchCarbon estimated carbon footprint of a product measured in kgCO2e per `unit`.
         */
        carbon_footprint?: number;
        /**
         * The manufacturer's report of the product's carbon footprint measured in kgCO2e.
         */
        manufacturer_declared_carbon_footprint?: number;
        /**
         * `carbon_factor` is measured in `kgCO2e/<this value>`
         */
        unit?: string;
        /**
         * Describes the approach used to obtain the data. `product` when data is from a direct assessment of the requested product, `product_category` when the data is from a product category average, `supplier` when the data is from a spend-based calculation.
         */
        methodology?: 'product' | 'product_category' | 'supplier';
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1.0/product',
            query: {
                'name': name,
                'manufacturer': manufacturer,
                'category_name': categoryName,
                'unit': unit,
                'price_cents': priceCents,
                'price_currency': priceCurrency,
                'months': months,
                'country': country,
            },
            errors: {
                400: `bad input parameter`,
                401: `API key is missing or invalid`,
                404: `We couldn't match your requested product to any of the products in our database.`,
            },
        });
    }
}
