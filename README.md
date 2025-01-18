# Snusbase

Visit the [official documentation](https://docs.snusbase.com) for more information.
A client for interacting with Snusbase.

## NOTE

This library is not offical. It is not maintained by Snusbase.

## Installation

```bash
npm install snusbase
```

## Usage

```typescript
import SnusbaseAPI from "snusbase";

const api = new SnusbaseAPI("sb-your-api-key");

(async () => {
  const results = await api.search({
    terms: ["someone@example.com"],
    types: ["email"],
  });
  console.log(results);
})();
```

## Available Methods

• `search(params: SearchParams)`: Searches leaked databases.  
• `getStats()`: Retrieves database statistics.  
• `ipWhois(params: IPWhoisParams)`: Looks up IP WHOIS information.  
• `hashLookup(params: HashLookupParams)`: Performs hash lookups.
