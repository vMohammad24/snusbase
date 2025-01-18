import axios, { type AxiosInstance } from 'axios';



/**
 * Snusbase API client for searching leaked databases, performing WHOIS lookups, and more.
 * @see https://docs.snusbase.com/
 */
class SnusbaseAPI {
    private api: AxiosInstance;
    private auth: string;

    /**
     * Creates a new Snusbase API client instance
     * @param auth - Your Snusbase API key (starts with 'sb')
     */
    constructor(auth: string) {
        if (!auth.startsWith('sb')) {
            throw new Error('Invalid API key format. Key should start with "sb"');
        }
        this.auth = auth;
        this.api = axios.create({
            baseURL: 'https://api.snusbase.com',
            headers: {
                'Auth': this.auth,
                'Content-Type': 'application/json',
            },
            timeout: 5000,
            timeoutErrorMessage: 'Request timed out',
        });
    }

    /**
     * Search the Snusbase database for leaked information
     * @param params - Search parameters including terms and types
     * @returns Promise with search results grouped by database
     * @throws Errosr if the request fails or rate limit is exceeded
     */
    async search(params: SearchParams): Promise<SearchResponse> {
        const response = await this.api.post<SearchResponse>('/data/search', params);
        return response.data;
    }

    /**
     * Get statistics about available databases and their contents
     * @returns Promise with database statistics and features
     * @throws Error if the request fails
     */
    async getStats(): Promise<StatsResponse> {
        const response = await this.api.get<StatsResponse>('/data/stats');
        return response.data;
    }

    /**
     * Lookup WHOIS information for IP addresses
     * @param params - Object containing array of IP addresses
     * @returns Promise with WHOIS information for each IP
     * @throws Error if the request fails
     */
    async ipWhois(params: IPWhoisParams): Promise<IPWhoisResponse> {
        const response = await this.api.post<IPWhoisResponse>('/tools/ip-whois', params);
        return response.data;
    }

    /**
     * Search for corresponding plaintext passwords or vice versa
     * @param params - Hash lookup parameters including terms and types
     * @returns Promise with hash lookup results
     * @throws Error if the request fails
     */
    async hashLookup(params: HashLookupParams): Promise<HashLookupResponse> {

        const response = await this.api.post<HashLookupResponse>('/tools/hash-lookup', params);
        return response.data;
    }
}

export default SnusbaseAPI;
