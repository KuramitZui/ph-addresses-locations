/**
 * Location object structure
 */
export interface Location {
  code: string;
  name: string;
}

export interface Province extends Location {
  regionCode: string;
}

export interface City extends Location {
  provinceCode: string;
}

export interface Barangay extends Location {
  cityCode: string;
}

export interface FullAddress {
  region: Location | null;
  province: Location | null;
  city: Location | null;
  barangay: Location | null;
}

export interface SearchResults {
  regions: Location[];
  provinces: Province[];
  cities: City[];
  barangays: Barangay[];
}

export interface LocationStats {
  regions: number;
  provinces: number;
  cities: number;
  barangays: number;
}

export function getRegions(): Location[];
export function getRegion(regionCode: string): Location | null;
export function getProvinces(regionCode?: string): Location[];
export function getProvince(provinceCode: string): Province | null;
export function getCities(provinceCode?: string): Location[];
export function getCity(cityCode: string): City | null;
export function getBarangays(cityCode?: string): Location[];
export function getBarangay(barangayCode: string): Barangay | null;
export function getFullAddress(barangayCode: string): FullAddress | null;
export function getLocationHierarchy(code: string): FullAddress | null;
export function searchLocations(query: string, type?: 'all' | 'region' | 'province' | 'city' | 'barangay'): SearchResults;
export function getLocationStats(): LocationStats;
export function isValidPSGCCode(code: string, type?: 'region' | 'province' | 'city' | 'barangay'): boolean;

declare const _default: {
  getRegions: typeof getRegions;
  getRegion: typeof getRegion;
  getProvinces: typeof getProvinces;
  getProvince: typeof getProvince;
  getCities: typeof getCities;
  getCity: typeof getCity;
  getBarangays: typeof getBarangays;
  getBarangay: typeof getBarangay;
  getFullAddress: typeof getFullAddress;
  getLocationHierarchy: typeof getLocationHierarchy;
  searchLocations: typeof searchLocations;
  getLocationStats: typeof getLocationStats;
  isValidPSGCCode: typeof isValidPSGCCode;
};

export default _default;