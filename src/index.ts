export interface Location {
  code: string;
  name: string;
}

export interface Province extends Location {
  regionCode: string;
}

export interface City extends Location {
  provinceCode: string;
  zipCode?: string;
  districtCode?: string;
}

export interface Barangay extends Location {
  cityCode: string;
}

export interface FullAddress {
  region: Location | null;
  province: Location | null;
  city: City | null;
  barangay: Location | null;
}

export function getRegions(): Location[] {
  return []; 
}

export function getProvinces(regionCode?: string): Province[] {
  return [];
}

export function getCities(provinceCode?: string): City[] {
  return [];
}

export function getBarangays(cityCode?: string): Barangay[] {
  return [];
}

export function getFullAddress(barangayCode: string): FullAddress | null {
  return null;
}
