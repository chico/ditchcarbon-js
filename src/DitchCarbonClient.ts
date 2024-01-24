/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ActivityService } from './services/ActivityService';
import { BatchService } from './services/BatchService';
import { CategoryService } from './services/CategoryService';
import { ExpenseService } from './services/ExpenseService';
import { OrganizationService } from './services/OrganizationService';
import { ProductService } from './services/ProductService';
import { ServerService } from './services/ServerService';
import { SupplierService } from './services/SupplierService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class DitchCarbonClient {
    public readonly activity: ActivityService;
    public readonly batch: BatchService;
    public readonly category: CategoryService;
    public readonly expense: ExpenseService;
    public readonly organization: OrganizationService;
    public readonly product: ProductService;
    public readonly server: ServerService;
    public readonly supplier: SupplierService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.ditchcarbon.com',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.activity = new ActivityService(this.request);
        this.batch = new BatchService(this.request);
        this.category = new CategoryService(this.request);
        this.expense = new ExpenseService(this.request);
        this.organization = new OrganizationService(this.request);
        this.product = new ProductService(this.request);
        this.server = new ServerService(this.request);
        this.supplier = new SupplierService(this.request);
    }
}

