interface BaseResponse {
    took: number;
    size: number;
}

interface SearchResult {
    username?: string;
    email?: string;
    lastip?: string;
    hash?: string;
    salt?: string;
    uid?: string;
    created?: string;
    regip?: string;
    password?: string;
    name?: string;
    _domain?: string;
    [key: string]: any;
}

interface SearchResponse extends BaseResponse {
    results: {
        [database: string]: SearchResult[];
    };
}

interface StatsResponse {
    rows: number;
    tables: {
        [tableName: string]: string[];
    };
    features: {
        view_more: string[];
        hash_lookup: string[];
        combo_lookup: string[];
    };
}

interface IPWhoisResult {
    as: string;
    asname: string;
    city: string;
    continent: string;
    continentCode: string;
    country: string;
    countryCode: string;
    hosting: boolean;
    isp: string;
    lat: number;
    lon: number;
    mobile: boolean;
    org: string;
    proxy: boolean;
    region: string;
    regionName: string;
    status: string;
    timezone: string;
    zip: string;
}




interface IPWhoisResponse extends BaseResponse {
    results: {
        [ip: string]: IPWhoisResult;
    };
    errors?: {
        [ip: string]: string;
    };
}

interface HashLookupResponse extends BaseResponse {
    results: {
        [database: string]: Array<{
            hash: string;
            password: string;
        }>;
    };
}

interface SearchParams {
    terms: string[];
    types: Array<'email' | 'username' | 'lastip' | 'password' | 'hash' | 'name' | '_domain'>;
    wildcard?: boolean;
    group_by?: string | false;
    tables?: string[];
}

interface IPWhoisParams {
    terms: string[];
}

interface HashLookupParams {
    terms: string[];
    types: Array<'hash' | 'password'>;
    wildcard?: boolean;
    group_by?: string | boolean;
    tables?: string[];
}