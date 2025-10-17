# 🇵🇭 Philippine Addresses & Locations

A lightweight npm package providing Philippine geographic data including **Regions, Provinces, Cities/Municipalities, and Barangays** with full hierarchy, ZIP codes, and search functionality. Designed for TypeScript and JavaScript applications.

## ✨ Features

- ✅ **Complete PSGC Database** - All regions, provinces, cities, and barangays
- ✅ **ZIP Code Support** - Postal codes for cities and municipalities
- ✅ **District Information** - Congressional district codes
- ✅ **Hierarchical Relationships** - Region → Province → City → Barangay
- ✅ **Search Functionality** - Find locations by name
- ✅ **TypeScript Support** - Full type definitions included
- ✅ **Zero Dependencies** - Lightweight and fast
- ✅ **Tree-shakeable** - Only import what you need

## 📦 Installation

```bash
npm install ph-addresses-location
```

```bash
yarn add ph-addresses-location
```

```bash
pnpm add ph-addresses-location
```

## 🚀 Quick Start

### ES6 Modules (React, Vue, Angular, etc.)

```javascript
import { 
  getRegions, 
  getProvinces, 
  getCities, 
  getBarangays 
} from 'ph-addresses-locations';
=======
} from 'ph-addresses-location';
 

// Get all regions
const regions = getRegions();
console.log(regions);
// [{ code: '0100000000', name: 'Region I (Ilocos Region)' }, ...]

// Get provinces by region
const provinces = getProvinces('0400000000'); // CALABARZON
console.log(provinces);
// [{ code: '0401000000', name: 'Batangas', regionCode: '0400000000' }, ...]

// Get cities by province with ZIP codes
const cities = getCities('0402100000'); // Cavite
console.log(cities);
// [{ code: '0402105000', name: 'City of Bacoor', zipCode: '4102', ... }, ...]

// Get barangays by city
const barangays = getBarangays('0102805000'); // Batac City
console.log(barangays);
// [{ code: '0102805001', name: 'Aglipay', cityCode: '0102805000' }, ...]
 
CommonJS (Node.js)
javascriptconst phLocations = require('ph-addresses-locations');

const regions = phLocations.getRegions();
const provinces = phLocations.getProvinces('0400000000');
Default Import
javascriptimport phLocations from 'ph-addresses-locations';

const regions = phLocations.getRegions();
const address = phLocations.getFullAddress('0102805001');
📖 API Reference
Region Functions
getRegions()
Get all regions in the Philippines.
javascriptconst regions = getRegions();
// Returns: Array<{ code: string, name: string }>
Example Response:
javascript[
=======
```

### CommonJS (Node.js)

```javascript
const phLocations = require('ph-addresses-location');

const regions = phLocations.getRegions();
const provinces = phLocations.getProvinces('0400000000');
```

### Default Import

```javascript
import phLocations from 'ph-addresses-location';

const regions = phLocations.getRegions();
const address = phLocations.getFullAddress('0102805001');
```

## 📖 API Reference

### Region Functions

#### `getRegions()`
Get all regions in the Philippines.

```javascript
const regions = getRegions();
// Returns: Array<{ code: string, name: string }>
```

**Example Response:**
```javascript
[
 
  { code: '0100000000', name: 'Region I (Ilocos Region)' },
  { code: '0200000000', name: 'Region II (Cagayan Valley)' },
  { code: '1300000000', name: 'NCR (National Capital Region)' },
  // ... 17 regions total
]
getRegion(regionCode)
Get a specific region by code.
javascriptconst region = getRegion('1300000000');
// Returns: { code: '1300000000', name: 'NCR (National Capital Region)' }

Province Functions
getProvinces(regionCode?)
Get provinces. If regionCode is provided, returns provinces in that region only.
javascript// Get provinces in CALABARZON
=======
```

#### `getRegion(regionCode)`
Get a specific region by code.

```javascript
const region = getRegion('1300000000');
// Returns: { code: '1300000000', name: 'NCR (National Capital Region)' }
```

---

### Province Functions

#### `getProvinces(regionCode?)`
Get provinces. If `regionCode` is provided, returns provinces in that region only.

```javascript
// Get provinces in CALABARZON
 
const provinces = getProvinces('0400000000');

// Get all provinces
const allProvinces = getProvinces();
Example Response:
javascript[
=======
```

**Example Response:**
```javascript
[
 
  { 
    code: '0401000000', 
    name: 'Batangas', 
    regionCode: '0400000000' 
  },
  { 
    code: '0402100000', 
    name: 'Cavite', 
    regionCode: '0400000000' 
  },
  // ...
]
getProvince(provinceCode)
Get a specific province by code.
javascriptconst province = getProvince('0402100000');
// Returns: { code: '0402100000', name: 'Cavite', regionCode: '0400000000' }

City/Municipality Functions
getCities(provinceCode?)
Get cities and municipalities. If provinceCode is provided, returns cities in that province only.
javascript// Get cities in Ilocos Norte
=======
```

#### `getProvince(provinceCode)`
Get a specific province by code.

```javascript
const province = getProvince('0402100000');
// Returns: { code: '0402100000', name: 'Cavite', regionCode: '0400000000' }
```

---

### City/Municipality Functions

#### `getCities(provinceCode?)`
Get cities and municipalities. If `provinceCode` is provided, returns cities in that province only.

```javascript
// Get cities in Ilocos Norte
 
const cities = getCities('0102800000');

// Get all cities
const allCities = getCities();
Example Response:
javascript[
=======
```

**Example Response:**
```javascript
[
 
  {
    code: '0102805000',
    name: 'City of Batac',
    provinceCode: '0102800000',
    zipCode: '2906',
    districtCode: '2nd'
  },
  {
    code: '0102812000',
    name: 'City of Laoag',
    provinceCode: '0102800000',
    zipCode: '2900',
    districtCode: '1st'
  },
  // ...
]

getCity(cityCode)
Get a specific city/municipality by code.
javascriptconst city = getCity('0102805000');
// Returns: { code: '0102805000', name: 'City of Batac', zipCode: '2906', ... }

Barangay Functions
getBarangays(cityCode?)
Get barangays. If cityCode is provided, returns barangays in that city only.
javascript// Get barangays in Batac City
=======
```

#### `getCity(cityCode)`
Get a specific city/municipality by code.

```javascript
const city = getCity('0102805000');
// Returns: { code: '0102805000', name: 'City of Batac', zipCode: '2906', ... }
```

---

### Barangay Functions

#### `getBarangays(cityCode?)`
Get barangays. If `cityCode` is provided, returns barangays in that city only.

```javascript
// Get barangays in Batac City
 
const barangays = getBarangays('0102805000');

// Get all barangays
const allBarangays = getBarangays();

Example Response:
javascript[
=======
```

**Example Response:**
```javascript
[
 
  { 
    code: '0102805001', 
    name: 'Aglipay', 
    cityCode: '0102805000' 
  },
  { 
    code: '0102805002', 
    name: 'Baay', 
    cityCode: '0102805000' 
  },
  // ...
]

getBarangay(barangayCode)
Get a specific barangay by code.
javascriptconst barangay = getBarangay('0102805001');
// Returns: { code: '0102805001', name: 'Aglipay', cityCode: '0102805000' }

Advanced Functions
getFullAddress(barangayCode)
Get complete address hierarchy from a barangay code.
javascriptconst address = getFullAddress('0102805001');
Example Response:
javascript{
=======
```

#### `getBarangay(barangayCode)`
Get a specific barangay by code.

```javascript
const barangay = getBarangay('0102805001');
// Returns: { code: '0102805001', name: 'Aglipay', cityCode: '0102805000' }
```

---

### Advanced Functions

#### `getFullAddress(barangayCode)`
Get complete address hierarchy from a barangay code.

```javascript
const address = getFullAddress('0102805001');
```

**Example Response:**
```javascript
{
 
  region: { 
    code: '0100000000', 
    name: 'Region I (Ilocos Region)' 
  },
  province: { 
    code: '0102800000', 
    name: 'Ilocos Norte' 
  },
  city: { 
    code: '0102805000', 
    name: 'City of Batac',
    zipCode: '2906',
    districtCode: '2nd'
  },
  barangay: { 
    code: '0102805001', 
    name: 'Aglipay' 
  }
}

getLocationHierarchy(code)
Get location hierarchy from any PSGC code (region, province, city, or barangay).
javascript// From city code
=======
```

#### `getLocationHierarchy(code)`
Get location hierarchy from any PSGC code (region, province, city, or barangay).

```javascript
// From city code
 
const hierarchy = getLocationHierarchy('0102805000');
// Returns hierarchy up to city level

// From region code
const regionHierarchy = getLocationHierarchy('0100000000');
// Returns only region
 
searchLocations(query, type?)
Search locations by name. Type can be 'all', 'region', 'province', 'city', or 'barangay'.
javascript// Search all location types
=======
```

#### `searchLocations(query, type?)`
Search locations by name. Type can be `'all'`, `'region'`, `'province'`, `'city'`, or `'barangay'`.

```javascript
// Search all location types
 
const results = searchLocations('batac');

// Search only cities
const cities = searchLocations('batac', 'city');
 
Example Response:
javascript{
=======
```

**Example Response:**
```javascript
{
 
  regions: [],
  provinces: [],
  cities: [
    { 
      code: '0102805000', 
      name: 'City of Batac',
      provinceCode: '0102800000',
      zipCode: '2906'
    }
  ],
  barangays: []
}
 
getLocationStats()
Get statistics about available locations.
javascriptconst stats = getLocationStats();
// Returns: { regions: 17, provinces: 82, cities: 1634, barangays: 42046 }
isValidPSGCCode(code, type?)
Validate PSGC code format.
javascriptisValidPSGCCode('0100000000', 'region'); // true
isValidPSGCCode('0102805000', 'city'); // true
isValidPSGCCode('12345', 'region'); // false

🎯 Usage Examples
1. Cascading Address Selector
javascriptimport { 
=======
```

#### `getLocationStats()`
Get statistics about available locations.

```javascript
const stats = getLocationStats();
// Returns: { regions: 17, provinces: 82, cities: 1634, barangays: 42046 }
```

#### `isValidPSGCCode(code, type?)`
Validate PSGC code format.

```javascript
isValidPSGCCode('0100000000', 'region'); // true
isValidPSGCCode('0102805000', 'city'); // true
isValidPSGCCode('12345', 'region'); // false
```

---

## 🎯 Usage Examples

### 1. Cascading Address Selector

```javascript
import { 
 
  getRegions, 
  getProvinces, 
  getCities, 
  getBarangays 
 
} from 'ph-addresses-locations';
=======
} from 'ph-addresses-location';
 

// Step 1: Load regions
const regions = getRegions();

// Step 2: User selects region
const selectedRegion = '0100000000'; // Region I
const provinces = getProvinces(selectedRegion);

// Step 3: User selects province
const selectedProvince = '0102800000'; // Ilocos Norte
const cities = getCities(selectedProvince);

// Step 4: User selects city
const selectedCity = '0102805000'; // Batac City
const barangays = getBarangays(selectedCity);

// Step 5: User selects barangay
const selectedBarangay = '0102805001'; // Aglipay
const fullAddress = getFullAddress(selectedBarangay);

console.log(fullAddress);
// Complete address with region, province, city, barangay, and ZIP code
 
2. React Component Example
jsximport React, { useState, useEffect } from 'react';
=======
```

### 2. React Component Example

```jsx
import React, { useState, useEffect } from 'react';
 
import { 
  getRegions, 
  getProvinces, 
  getCities, 
  getBarangays,
  getFullAddress 
 
} from 'ph-addresses-locations';
=======
} from 'ph-addresses-location';
 

function AddressSelector() {
  const [regions] = useState(getRegions());
  const [selectedRegion, setSelectedRegion] = useState('');
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [barangays, setBarangays] = useState([]);
  const [selectedBarangay, setSelectedBarangay] = useState('');
  const [fullAddress, setFullAddress] = useState(null);

  useEffect(() => {
    if (selectedRegion) {
      setProvinces(getProvinces(selectedRegion));
      setSelectedProvince('');
    }
  }, [selectedRegion]);

  useEffect(() => {
    if (selectedProvince) {
      setCities(getCities(selectedProvince));
      setSelectedCity('');
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedCity) {
      setBarangays(getBarangays(selectedCity));
      setSelectedBarangay('');
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedBarangay) {
      setFullAddress(getFullAddress(selectedBarangay));
    }
  }, [selectedBarangay]);

  return (
    <div className="address-selector">
      <select onChange={(e) => setSelectedRegion(e.target.value)}>
        <option value="">Select Region</option>
        {regions.map(r => (
          <option key={r.code} value={r.code}>{r.name}</option>
        ))}
      </select>

      <select 
        onChange={(e) => setSelectedProvince(e.target.value)} 
        disabled={!selectedRegion}
      >
        <option value="">Select Province</option>
        {provinces.map(p => (
          <option key={p.code} value={p.code}>{p.name}</option>
        ))}
      </select>

      <select 
        onChange={(e) => setSelectedCity(e.target.value)} 
        disabled={!selectedProvince}
      >
        <option value="">Select City/Municipality</option>
        {cities.map(c => (
          <option key={c.code} value={c.code}>
            {c.name} {c.zipCode && `(${c.zipCode})`}
          </option>
        ))}
      </select>

      <select 
        onChange={(e) => setSelectedBarangay(e.target.value)} 
        disabled={!selectedCity}
      >
        <option value="">Select Barangay</option>
        {barangays.map(b => (
          <option key={b.code} value={b.code}>{b.name}</option>
        ))}
      </select>

      {fullAddress && (
        <div className="full-address">
          <h3>Complete Address:</h3>
          <p>
            {fullAddress.barangay.name}, {fullAddress.city.name}, 
            {fullAddress.province.name}, {fullAddress.region.name}
          </p>
          <p>ZIP Code: {fullAddress.city.zipCode}</p>
        </div>
      )}
    </div>
  );
}

export default AddressSelector;
 
3. Search Implementation
javascriptimport { searchLocations } from 'ph-addresses-locations';
=======
```

### 3. Search Implementation

```javascript
import { searchLocations } from 'ph-addresses-location';
 

function handleSearch(searchTerm) {
  const results = searchLocations(searchTerm);
  
  console.log('Regions:', results.regions);
  console.log('Provinces:', results.provinces);
  console.log('Cities:', results.cities);
  console.log('Barangays:', results.barangays);
}

// Search for "batac"
handleSearch('batac');
// Returns cities and barangays matching "batac"
 
4. Display Full Address
javascriptimport { getFullAddress } from 'ph-addresses-locations';
=======
```

### 4. Display Full Address

```javascript
import { getFullAddress } from 'ph-addresses-location';
 

const barangayCode = '0102805001'; // Aglipay, Batac City
const address = getFullAddress(barangayCode);

const formatted = `
  ${address.barangay.name}, 
  ${address.city.name}, 
  ${address.province.name}, 
  ${address.region.name}
  ZIP: ${address.city.zipCode}
`;

console.log(formatted);
// Output: Aglipay, City of Batac, Ilocos Norte, Region I (Ilocos Region), ZIP: 2906
 

📊 Data Structure
PSGC Code Format
The Philippine Standard Geographic Code uses a 10-digit format:
=======
```

---

## 📊 Data Structure

### PSGC Code Format

The Philippine Standard Geographic Code uses a **10-digit format**:

```
 
0102805001
││││││││││
│││││││└└└─ Barangay (3 digits)
││││││└───── City/Municipality (3 digits)
││││└─────── Province (2 digits)
││└───────── Region (2 digits)
└─────────── Always starts with 0
 
Examples:

Region: 0100000000 (Region I)
Province: 0102800000 (Ilocos Norte)
City: 0102805000 (City of Batac)
Barangay: 0102805001 (Aglipay)

Data Objects
Region
typescript{
  code: string;      // e.g., '0100000000'
  name: string;      // e.g., 'Region I (Ilocos Region)'
}
Province
typescript{
=======
```

**Examples:**
- Region: `0100000000` (Region I)
- Province: `0102800000` (Ilocos Norte)
- City: `0102805000` (City of Batac)
- Barangay: `0102805001` (Aglipay)

### Data Objects

#### Region
```typescript
{
  code: string;      // e.g., '0100000000'
  name: string;      // e.g., 'Region I (Ilocos Region)'
}
```

#### Province
```typescript
{
 
  code: string;        // e.g., '0102800000'
  name: string;        // e.g., 'Ilocos Norte'
  regionCode: string;  // e.g., '0100000000'
}
 
City/Municipality
typescript{
=======
```

#### City/Municipality
```typescript
{
 
  code: string;          // e.g., '0102805000'
  name: string;          // e.g., 'City of Batac'
  provinceCode: string;  // e.g., '0102800000'
  zipCode: string;       // e.g., '2906'
  districtCode: string;  // e.g., '2nd' (congressional district)
}
 
Barangay
typescript{
=======
```

#### Barangay
```typescript
{
 
  code: string;      // e.g., '0102805001'
  name: string;      // e.g., 'Aglipay'
  cityCode: string;  // e.g., '0102805000'
}
 

🔧 TypeScript Support
This package includes full TypeScript definitions:
typescriptimport { 
=======
```

---

## 🔧 TypeScript Support

This package includes full TypeScript definitions:

```typescript
import { 
 
  Location, 
  Province, 
  City, 
  Barangay, 
  FullAddress,
  SearchResults,
  LocationStats,
  getRegions,
  getFullAddress
 
} from 'ph-addresses-locations';

const regions: Location[] = getRegions();
const address: FullAddress | null = getFullAddress('0102805001');
Available Types
typescriptinterface Location {
=======
} from 'ph-addresses-location';

const regions: Location[] = getRegions();
const address: FullAddress | null = getFullAddress('0102805001');
```

### Available Types

```typescript
interface Location {
 
  code: string;
  name: string;
}

interface Province extends Location {
  regionCode: string;
}

interface City extends Location {
  provinceCode: string;
  zipCode?: string;
  districtCode?: string;
}

interface Barangay extends Location {
  cityCode: string;
}

interface FullAddress {
  region: Location | null;
  province: Location | null;
  city: City | null;
  barangay: Location | null;
}

interface SearchResults {
  regions: Location[];
  provinces: Province[];
  cities: City[];
  barangays: Barangay[];
}

interface LocationStats {
  regions: number;
  provinces: number;
  cities: number;
  barangays: number;
}
 

📈 Database Coverage
TypeCountRegions17Provinces82+Cities/Municipalities1,634+Barangays42,000+
Data based on the latest Philippine Standard Geographic Code (PSGC) from the Philippine Statistics Authority (PSA).

🤝 Contributing
Contributions are welcome! Here's how you can help:

Report Issues - Found a bug or incorrect data? Open an issue
Submit PRs - Have a fix or improvement? Submit a pull request
Update Data - Help keep the PSGC data current
Improve Docs - Better examples or clearer explanations

Development Setup
bash# Clone the repository
git clone https://github.com/KuramitZui/ph-addresses-locations.git
cd ph-addresses-locations
=======
```

---

## 📈 Database Coverage

| Type | Count |
|------|-------|
| Regions | 17 |
| Provinces | 82+ |
| Cities/Municipalities | 1,634+ |
| Barangays | 42,000+ |

Data based on the latest Philippine Standard Geographic Code (PSGC) from the Philippine Statistics Authority (PSA).

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Report Issues** - Found a bug or incorrect data? [Open an issue](https://github.com/KuramitZui/ph-addresses-location/issues)
2. **Submit PRs** - Have a fix or improvement? Submit a pull request
3. **Update Data** - Help keep the PSGC data current
4. **Improve Docs** - Better examples or clearer explanations

### Development Setup

```bash
# Clone the repository
git clone https://github.com/KuramitZui/ph-addresses-location/
cd ph-addresses-location
 

# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build
 

📄 License
MIT © Vincent Esquivel

🙏 Acknowledgments

Data source: Philippine Statistics Authority (PSA)
Based on the Philippine Standard Geographic Code (PSGC)


📮 Support

🐛 Issues: GitHub Issues
💬 Discussions: GitHub Discussions
📧 Email: your.email@example.com


🔗 Links

NPM Package
GitHub Repository
Documentation
Changelog


Made with ❤️ for the Filipino Developer Community
=======
```

---

## 📄 License

MIT © [Vincent Esquivel](https://github.com/KuramitZui/ph-addresses-location/)

---

## 🙏 Acknowledgments

- Data source: [Philippine Statistics Authority (PSA)](https://psa.gov.ph/)
- Based on the Philippine Standard Geographic Code (PSGC)

---

## 📮 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/KuramitZui/ph-addresses-location/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/KuramitZui/ph-addresses-location/discussions)
- 📧 **Email**: vincent.esquivel@esquivince.online

---

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/ph-addresses-location)
- [GitHub Repository](https://github.com/KuramitZui/ph-addresses-location)
- [Documentation](https://github.com/KuramitZui/ph-addresses-location#readme)
- [Changelog](https://github.com/KuramitZui/ph-addresses-location/blob/main/CHANGELOG.md)

---

**Made with ❤️ for the Filipino Developer Community**
 
