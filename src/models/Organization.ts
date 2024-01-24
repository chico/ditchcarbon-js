/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Industry } from './Industry';
import type { OrganizationPerformance } from './OrganizationPerformance';
export type Organization = {
    name?: string;
    /**
     * ISO two-letter country code of the organization's headquarters.
     */
    hq_region?: string;
    industry?: Industry;
    website?: string;
    matching_organization?: {
        id?: number;
        names?: Array<{
            value?: string;
        }>;
        websites?: Array<{
            value?: string;
        }>;
        hq_region?: string;
        industry?: {
            id?: number;
            name?: string;
        };
        tickers?: Array<{
            exchange?: string;
            symbol?: string;
        }>;
    };
    performances?: Array<OrganizationPerformance>;
    /**
     * An array of sources that DitchCarbon used to create the response.
     */
    sources?: Array<{
        url?: string;
        mirror_url?: string;
    }>;
    /**
     * A score from 0 to 1 that indicates how well a given organization is performing, 0 being the worst and 1 being the best. See calculation methodology at https://ditchcarbon.com/calculation-methodologies/
     */
    score?: number;
    /**
     * Rank of the organization's in comparison to all other organizations.
     */
    rank?: Organization.rank;
    /**
     * Rank of the organization's industry in comparison to all other industries.
     */
    industry_rank?: Organization.industry_rank;
    /**
     * Rank of the organization's region in comparison to all other regions.
     */
    region_rank?: Organization.region_rank;
    /**
     * Status of the organization's environmental report.
     */
    related_environmental_report_status?: Organization.related_environmental_report_status;
    cdp?: {
        last_retrieved_at?: string;
        is_listed?: boolean;
        url?: string;
    };
    sbti?: {
        last_retrieved_at?: string;
        data?: Array<{
            created_at?: string;
            retrieved_at?: string;
            near_term?: {
                has_target?: boolean;
                target_status?: 'set' | 'committed' | 'removed' | 'none';
            };
            long_term?: {
                has_target?: boolean;
                target?: '1.5' | '2';
                year?: number;
            };
            net_zero?: {
                has_target?: boolean;
                target_year?: number;
            };
            business_ambition_1_5?: {
                has_target?: boolean;
                joined_at?: string;
            };
            target_detail?: string;
        }>;
    };
    un?: {
        last_retrieved_at?: string;
        url?: string;
        initiatives?: Array<{
            name?: string;
            slug?: string;
        }>;
    };
};
export namespace Organization {
    /**
     * Rank of the organization's in comparison to all other organizations.
     */
    export enum rank {
        VERY_HIGH = 'very_high',
        HIGH = 'high',
        MEDIUM = 'medium',
        LOW = 'low',
        VERY_LOW = 'very_low',
        UNKNOWN = 'unknown',
    }
    /**
     * Rank of the organization's industry in comparison to all other industries.
     */
    export enum industry_rank {
        VERY_HIGH = 'very_high',
        HIGH = 'high',
        MEDIUM = 'medium',
        LOW = 'low',
        VERY_LOW = 'very_low',
        UNKNOWN = 'unknown',
    }
    /**
     * Rank of the organization's region in comparison to all other regions.
     */
    export enum region_rank {
        VERY_HIGH = 'very_high',
        HIGH = 'high',
        MEDIUM = 'medium',
        LOW = 'low',
        VERY_LOW = 'very_low',
        UNKNOWN = 'unknown',
    }
    /**
     * Status of the organization's environmental report.
     */
    export enum related_environmental_report_status {
        PROCESSING = 'processing',
        FOUND = 'found',
        NOT_FOUND = 'not_found',
    }
}

