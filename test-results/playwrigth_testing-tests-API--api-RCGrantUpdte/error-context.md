# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwrigth_testing\tests\API.spec.js >> /api/RCGrantUpdte
- Location: playwrigth_testing\tests\API.spec.js:135:1

# Error details

```
SyntaxError: Unexpected token '<', "
<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  43  |     {
  44  |       data: {
  45  |         app_type: "",
  46  |         app_status: "",
  47  |         current_stage: "38-",
  48  |         is_web: 1,
  49  |         school_name: "",
  50  |         District: "",
  51  |         school_type: "",
  52  |         limit: "10",
  53  |         offset: 0,
  54  |         suprndnt_sts: "",
  55  |         activeTab: 0,
  56  |       },
  57  |       headers: { Accept: "application/json" },
  58  |     },
  59  |   );
  60  |   console.log(await responsepost1.json());
  61  |   expect(responsepost1.status()).toBe(200);
  62  | });
  63  | 
  64  | ///api/rc_app_data
  65  | test("/api/rc_app_data", async ({ request }) => {
  66  |   const responsepost2 = await request.post(
  67  |     "https://tng2c1.tnschools.gov.in/api/rc_app_data",
  68  |     {
  69  |       data: {
  70  |         app_id: "300000312",
  71  |       },
  72  |       headers: { Accept: "application/json" },
  73  |     },
  74  |   );
  75  |   console.log(await responsepost2.json());
  76  |   expect(responsepost2.status()).toBe(200);
  77  | });
  78  | 
  79  | ///api/rc_curstage_update
  80  | test("/api/rc_curstage_update", async ({ request }) => {
  81  |   const responsepost3 = await request.post(
  82  |     "https://tng2c1.tnschools.gov.in/api/rc_curstage_update",
  83  |     {
  84  |       data: {},
  85  |       headers: { Accept: "application/json" },
  86  |     },
  87  |   );
  88  |   console.log(await responsepost3.json());
  89  |   expect(responsepost3.status()).toBe(200);
  90  | });
  91  | 
  92  | ///api/rc_applctn_search
  93  | test("/api/rc_applctn_search", async ({ request }) => {
  94  |   const responsepost4 = await request.post(
  95  |     "https://tng2c1.tnschools.gov.in/api/rc_applctn_search",
  96  |     {
  97  |       data: {},
  98  |       headers: { Accept: "application/json" },
  99  |     },
  100 |   );
  101 |   console.log(await responsepost4.json());
  102 |   expect(responsepost4.status()).toBe(200);
  103 | });
  104 | 
  105 | ///api/rc_preview
  106 | test("/api/rc_preview", async ({ request }) => {
  107 |   const responsepost5 = await request.post(
  108 |     "https://tng2c1.tnschools.gov.in/api/rc_preview",
  109 |     {
  110 |       data: {
  111 |         app_id: "300000312",
  112 |       },
  113 |       headers: { Accept: "application/json" },
  114 |     },
  115 |   );
  116 |   console.log(await responsepost5.json());
  117 |   expect(responsepost5.status()).toBe(200);
  118 | });
  119 | 
  120 | ///api/RCInfoByAppID
  121 | test("/api/RCInfoByAppID", async ({ request }) => {
  122 |   const responsepost6 = await request.post(
  123 |     "https://tng2c1.tnschools.gov.in/api/RCInfoByAppID",
  124 |     {
  125 |       data: { records: { AppID: "300000312", Apptyp: "3" } },
  126 |       headers: { accept: "application/json" },
  127 |     },
  128 |   );
  129 | 
  130 |   console.log(await responsepost6.json());
  131 |   expect(responsepost6.status()).toBe(200);
  132 | });
  133 | 
  134 | ///api/RCGrantUpdte
  135 | test("/api/RCGrantUpdte", async ({ request }) => {
  136 |   const responsepost7 = await request.post(
  137 |     "https://tng2c1.tnschools.gov.in/api/RCGrantUpdte",
  138 |     {
  139 |       data: {},
  140 |       headers: { Accept: "application/json" },
  141 |     },
  142 |   );
> 143 |   console.log(await responsepost7.json());
      |               ^ SyntaxError: Unexpected token '<', "
  144 |   expect(responsepost7.status()).toBe(200);
  145 | });
  146 | 
  147 | ///api/save_recommendations
  148 | test("/api/save_recommendations", async ({ request }) => {
  149 |   const responsepost8 = await request.post(
  150 |     "https://tng2c1.tnschools.gov.in/api/save_recommendations",
  151 |     {
  152 |       data: {},
  153 |       headers: { Accept: "application/json" },
  154 |     },
  155 |   );
  156 |   console.log(await responsepost8.json());
  157 |   expect(responsepost8.status()).toBe(200);
  158 | });
  159 | 
```