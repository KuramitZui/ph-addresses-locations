import regions from "./data/regions.json";
import provinces from "./data/provinces.json";
import cities from "./data/cities.json";
import barangays from "./data/barangays.json";

/**
 * Get all regions
 * @returns {Array<{code: string, name: string}>}
 */
export function getRegions() {
  return regions.map(r => ({ code: r.code, name: r.name }));
}

/**
 * Get a specific region by code
 * @param {string} regionCode - The region code
 * @returns {Object|null}
 */
export function getRegion(regionCode) {
  const region = regions.find(r => r.code === regionCode);
  return region ? { code: region.code, name: region.name } : null;
}

/**
 * Get provinces by region code
 * @param {string} regionCode - The region code
 * @returns {Array<{code: string, name: string}>}
 */
export function getProvinces(regionCode) {
  if (!regionCode) return provinces.map(p => ({ code: p.code, name: p.name }));
  return provinces
    .filter(p => p.regionCode === regionCode)
    .map(p => ({ code: p.code, name: p.name }));
}

/**
 * Get a specific province by code
 * @param {string} provinceCode - The province code
 * @returns {Object|null}
 */
export function getProvince(provinceCode) {
  const province = provinces.find(p => p.code === provinceCode);
  return province ? { 
    code: province.code, 
    name: province.name,
    regionCode: province.regionCode 
  } : null;
}

/**
 * Get cities/municipalities by province code
 * @param {string} provinceCode - The province code
 * @returns {Array<{code: string, name: string}>}
 */
export function getCities(provinceCode) {
  if (!provinceCode) return cities.map(c => ({ code: c.code, name: c.name }));
  return cities
    .filter(c => c.provinceCode === provinceCode)
    .map(c => ({ code: c.code, name: c.name }));
}

/**
 * Get a specific city by code
 * @param {string} cityCode - The city code
 * @returns {Object|null}
 */
export function getCity(cityCode) {
  const city = cities.find(c => c.code === cityCode);
  return city ? { 
    code: city.code, 
    name: city.name,
    provinceCode: city.provinceCode 
  } : null;
}

/**
 * Get barangays by city code
 * @param {string} cityCode - The city code
 * @returns {Array<{code: string, name: string}>}
 */
export function getBarangays(cityCode) {
  if (!cityCode) return barangays.map(b => ({ code: b.code, name: b.name }));
  return barangays
    .filter(b => b.cityCode === cityCode)
    .map(b => ({ code: b.code, name: b.name }));
}

/**
 * Get a specific barangay by code
 * @param {string} barangayCode - The barangay code
 * @returns {Object|null}
 */
export function getBarangay(barangayCode) {
  const barangay = barangays.find(b => b.code === barangayCode);
  return barangay ? { 
    code: barangay.code, 
    name: barangay.name,
    cityCode: barangay.cityCode 
  } : null;
}

/**
 * Get full address chain from barangay code
 * @param {string} barangayCode - The barangay code
 * @returns {Object|null}
 */
export function getFullAddress(barangayCode) {
  const barangay = barangays.find(b => b.code === barangayCode);
  if (!barangay) return null;

  const city = cities.find(c => c.code === barangay.cityCode);
  if (!city) return null;

  const province = provinces.find(p => p.code === city.provinceCode);
  if (!province) return null;

  const region = regions.find(r => r.code === province.regionCode);

  return {
    region: region ? { code: region.code, name: region.name } : null,
    province: { code: province.code, name: province.name },
    city: { code: city.code, name: city.name },
    barangay: { code: barangay.code, name: barangay.name }
  };
}

/**
 * Search locations by name (case-insensitive, partial match)
 * @param {string} query - Search query
 * @param {string} [type] - Type to search: 'region', 'province', 'city', 'barangay', or 'all'
 * @returns {Object}
 */
export function searchLocations(query, type = 'all') {
  if (!query) return { regions: [], provinces: [], cities: [], barangays: [] };
  
  const lowerQuery = query.toLowerCase();
  const results = {
    regions: [],
    provinces: [],
    cities: [],
    barangays: []
  };

  if (type === 'all' || type === 'region') {
    results.regions = regions
      .filter(r => r.name.toLowerCase().includes(lowerQuery))
      .map(r => ({ code: r.code, name: r.name }));
  }

  if (type === 'all' || type === 'province') {
    results.provinces = provinces
      .filter(p => p.name.toLowerCase().includes(lowerQuery))
      .map(p => ({ code: p.code, name: p.name, regionCode: p.regionCode }));
  }

  if (type === 'all' || type === 'city') {
    results.cities = cities
      .filter(c => c.name.toLowerCase().includes(lowerQuery))
      .map(c => ({ code: c.code, name: c.name, provinceCode: c.provinceCode }));
  }

  if (type === 'all' || type === 'barangay') {
    results.barangays = barangays
      .filter(b => b.name.toLowerCase().includes(lowerQuery))
      .map(b => ({ code: b.code, name: b.name, cityCode: b.cityCode }));
  }

  return results;
}

/**
 * Get location hierarchy (breadcrumb) from any code
 * @param {string} code - Any PSGC code
 * @returns {Object|null}
 */
export function getLocationHierarchy(code) {
  if (!code) return null;

  // Try barangay first (9 digits)
  if (code.length === 9) {
    return getFullAddress(code);
  }

  // Try city (6 digits or ends with 000)
  const city = cities.find(c => c.code === code || c.code.startsWith(code.substring(0, 6)));
  if (city) {
    const province = provinces.find(p => p.code === city.provinceCode);
    const region = regions.find(r => r.code === province?.regionCode);
    return {
      region: region ? { code: region.code, name: region.name } : null,
      province: province ? { code: province.code, name: province.name } : null,
      city: { code: city.code, name: city.name },
      barangay: null
    };
  }

  // Try province (4 digits or ends with 00000)
  const province = provinces.find(p => p.code === code || p.code.startsWith(code.substring(0, 4)));
  if (province) {
    const region = regions.find(r => r.code === province.regionCode);
    return {
      region: region ? { code: region.code, name: region.name } : null,
      province: { code: province.code, name: province.name },
      city: null,
      barangay: null
    };
  }

  // Try region (2 digits or ends with 0000000)
  const region = regions.find(r => r.code === code || r.code.startsWith(code.substring(0, 2)));
  if (region) {
    return {
      region: { code: region.code, name: region.name },
      province: null,
      city: null,
      barangay: null
    };
  }

  return null;
}

/**
 * Get location statistics
 * @returns {Object}
 */
export function getLocationStats() {
  return {
    regions: regions.length,
    provinces: provinces.length,
    cities: cities.length,
    barangays: barangays.length
  };
}

/**
 * Validate PSGC code format
 * @param {string} code - PSGC code
 * @param {string} [type] - Expected type: 'region', 'province', 'city', 'barangay'
 * @returns {boolean}
 */
export function isValidPSGCCode(code, type) {
  if (!code || typeof code !== 'string') return false;

  const patterns = {
    region: /^\d{2}0{7}$/,
    province: /^\d{4}0{5}$/,
    city: /^\d{6}0{3}$/,
    barangay: /^\d{9}$/
  };

  if (type) {
    return patterns[type] ? patterns[type].test(code) : false;
  }

  return Object.values(patterns).some(pattern => pattern.test(code));
}

// Default export
export default {
  getRegions,
  getRegion,
  getProvinces,
  getProvince,
  getCities,
  getCity,
  getBarangays,
  getBarangay,
  getFullAddress,
  getLocationHierarchy,
  searchLocations,
  getLocationStats,
  isValidPSGCCode
};