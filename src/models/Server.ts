/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Server = {
    id?: number;
    manufacturer_name?: string;
    model?: string;
    /**
     * In bytes
     */
    ram_bytes?: number;
    cpu_name?: string;
    os_name?: string;
    /**
     * Number of physical CPUs
     */
    cpu_count?: number;
    /**
     * Number of physical cores per chip (CPU)
     */
    core_count?: number;
    /**
     * Number of logical threads across all chips (CPUs)
     */
    thread_count?: number;
    /**
     * Whether the server is dedicated (the server is exclusively used by the entity on behalf of which the carbon emissions are being calculated) or virtual (the server is shared between the entity and others, such as with Virtual Private Servers on cloud platforms)
     */
    is_virtual?: boolean;
    disk_count?: number;
};

