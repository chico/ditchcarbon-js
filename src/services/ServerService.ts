/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Emission } from '../models/Emission';
import type { Server } from '../models/Server';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ServerService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Find a server
     * Returns server that is the closest match to the requested parameters.
     * @param manufacturerName Manufacturer name
     * @param model Model name
     * @param ramBytes In bytes
     * @param cpuName CPU name
     * @param osName Operating System name
     * @param cpuCount Number of physical CPUs
     * @param coreCount Number of physical cores per chip (CPU)
     * @param threadCount Number of logical threads across all chips (CPUs)
     * @param isVirtual Whether the server is dedicated (the server is exclusively used by the entity on behalf of which the carbon emissions are being calculated) or virtual (the server is shared between the entity and others, such as with Virtual Private Servers on cloud platforms)
     * @param diskCount Number of physical disks
     * @returns Server OK
     * @throws ApiError
     */
    public getServer(
        manufacturerName: string,
        model: string,
        ramBytes: number,
        cpuName?: string,
        osName?: string,
        cpuCount?: number,
        coreCount?: number,
        threadCount?: number,
        isVirtual?: boolean,
        diskCount?: number,
    ): CancelablePromise<Server> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1.0/servers',
            query: {
                'manufacturer_name': manufacturerName,
                'model': model,
                'cpu_name': cpuName,
                'os_name': osName,
                'cpu_count': cpuCount,
                'core_count': coreCount,
                'thread_count': threadCount,
                'ram_bytes': ramBytes,
                'is_virtual': isVirtual,
                'disk_count': diskCount,
            },
        });
    }
    /**
     * Retrieve a server
     * Return details on requested server.
     * @param id Server ID
     * @returns Server OK
     * @throws ApiError
     */
    public getServerId(
        id: string,
    ): CancelablePromise<Server> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1.0/servers/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Estimate emissions from a server
     * Find the kg CO2e emitted by a server. The response is the total CO2e released (in kg) by the server throughout its lifetime according to DitchCarbon's life-cycle assessment (LCA).
     *
     * Find `id` using the `/servers` endpoint.
     * @param id Server ID
     * @param hours Number of hours the server has been in use. This includes idling.
     * @param region ISO two-letter country code in which the server is running. When left blank, we'll use global averages.
     * @param serverFarmSize The size of the data center where the server runs, ranging from hyperscale to closet. If null, we assume hyperscale.
     * @returns Emission OK
     * @throws ApiError
     */
    public getServerIdEmission(
        id: string,
        hours: number,
        region?: string,
        serverFarmSize?: 'hyperscale' | 'high-end' | 'midtier' | 'localized' | 'room' | 'closet' | null,
    ): CancelablePromise<Emission> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1.0/servers/{id}/emissions',
            path: {
                'id': id,
            },
            query: {
                'hours': hours,
                'region': region,
                'server_farm_size': serverFarmSize,
            },
        });
    }
}
