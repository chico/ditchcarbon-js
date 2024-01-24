/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrganizationPerformance = {
    year?: number;
    region?: string;
    /**
     * Total emissions divided by revenue (converted to provided currency)
     */
    emission_factor?: number;
    /**
     * ISO three-letter currency code
     */
    revenue_currency?: string;
    revenue?: number;
    emissions?: {
        scope_1?: {
            total?: number;
            stationary_combustion?: number;
            mobile_combustion?: number;
            fugitive_emissions?: number;
            process_emissions?: number;
            sum?: number;
        };
        scope_2?: {
            total?: number;
            purchased_electricity?: number;
            purchased_steam?: number;
            purchased_heat?: number;
            purchased_cooling?: number;
            total_location_based?: number;
            total_market_based?: number;
            sum?: number;
        };
        scope_1_and_2?: {
            total?: number;
            total_location_based?: number;
            total_market_based?: number;
        };
        scope_3?: {
            total?: number;
            purchased_goods_and_services?: number;
            capital_goods?: number;
            fuel_and_energy_related_activities?: number;
            upstream_transportation_and_distribution?: number;
            waste_generated_in_operations?: number;
            business_travel?: number;
            employee_commute?: number;
            upstream_leased_assets?: number;
            downstream_transportation_and_distribution?: number;
            processing_of_sold_products?: number;
            use_of_sold_products?: number;
            end_of_life_treatment_of_sold_products?: number;
            downstream_leased_assets?: number;
            franchises?: number;
            investments?: number;
            sum?: number;
        };
        total?: number;
        sum?: number;
    };
};

