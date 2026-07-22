import{ test, expect } from "@playwright/test";


///api/RCDistList
test("/api/RCDistList", async ({ request }) => {
  const response1 = await request.get(
    "https://tng2c1.tnschools.gov.in/api/RCDistList",
  );
  console.log(await response1.json());
  expect(response1.status()).toBe(200);
});

///api/RcAppType
test("/api/RcAppType", async ({ request }) => {
  const response2 = await request.get(
    "https://tng2c1.tnschools.gov.in/api/RcAppType",
  );
  console.log(await response2.json());
  expect(response2.status()).toBe(200);
});

///api/RCLog?appid={id}
test("/api/RCLog?appid={id}", async ({ request }) => {
  const response3 = await request.get(
    "https://tng2c1.tnschools.gov.in/api/RCLog?appid=1",
  );
  console.log(await response3.json());
  expect(response3.status()).toBe(200);
});

///api/Claslist
test("/api/Claslist", async ({ request }) => {
  const response3 = await request.get(
    "https://tng2c1.tnschools.gov.in/api/Claslist",
  );
  console.log(await response3.json());
  expect(response3.status()).toBe(200);
});

///api/rc_app_list
test("/api/rc_app_list", async ({ request }) => {
  const responsepost1 = await request.post(
    "https://tng2c1.tnschools.gov.in/api/rc_app_list",
    {
      data: {
        app_type: "",
        app_status: "",
        current_stage: "38-",
        is_web: 1,
        school_name: "",
        District: "",
        school_type: "",
        limit: "10",
        offset: 0,
        suprndnt_sts: "",
        activeTab: 0,
      },
      headers: { Accept: "application/json" },
    },
  );
  console.log(await responsepost1.json());
  expect(responsepost1.status()).toBe(200);
});

///api/rc_app_data
test("/api/rc_app_data", async ({ request }) => {
  const responsepost2 = await request.post(
    "https://tng2c1.tnschools.gov.in/api/rc_app_data",
    {
      data: {
        app_id: "300000312",
      },
      headers: { Accept: "application/json" },
    },
  );
  console.log(await responsepost2.json());
  expect(responsepost2.status()).toBe(200);
});

///api/rc_curstage_update
test("/api/rc_curstage_update", async ({ request }) => {
  const responsepost3 = await request.post(
    "https://tng2c1.tnschools.gov.in/api/rc_curstage_update",
    {
      data: {},
      headers: { Accept: "application/json" },
    },
  );
  console.log(await responsepost3.json());
  expect(responsepost3.status()).toBe(200);
});

///api/rc_applctn_search
test("/api/rc_applctn_search", async ({ request }) => {
  const responsepost4 = await request.post(
    "https://tng2c1.tnschools.gov.in/api/rc_applctn_search",
    {
      data: {},
      headers: { Accept: "application/json" },
    },
  );
  console.log(await responsepost4.json());
  expect(responsepost4.status()).toBe(200);
});

///api/rc_preview
test("/api/rc_preview", async ({ request }) => {
  const responsepost5 = await request.post(
    "https://tng2c1.tnschools.gov.in/api/rc_preview",
    {
      data: {
        app_id: "300000312",
      },
      headers: { Accept: "application/json" },
    },
  );
  console.log(await responsepost5.json());
  expect(responsepost5.status()).toBe(200);
});

///api/RCInfoByAppID
test("/api/RCInfoByAppID", async ({ request }) => {
  const responsepost6 = await request.post(
    "https://tng2c1.tnschools.gov.in/api/RCInfoByAppID",
    {
      data: { records: { AppID: "300000312", Apptyp: "3" } },
      headers: { accept: "application/json" },
    },
  );

  console.log(await responsepost6.json());
  expect(responsepost6.status()).toBe(200);
});

///api/RCGrantUpdte
test.only("/api/RCGrantUpdte", async ({ request }) => {
  const responsepost7 = await request.post(
    "https://tng2c1.tnschools.gov.in/api/RCGrantUpdte",
    {
      data: {},
      headers: { Accept: "application/json" },
    },
  );
  console.log(await responsepost7.json());
  expect(responsepost7.status()).toBe(200);
});

///api/save_recommendations
test("/api/save_recommendations", async ({ request }) => {
  const responsepost8 = await request.post(
    "https://tng2c1.tnschools.gov.in/api/save_recommendations",
    {
      data: {},
      headers: { Accept: "application/json" },
    },
  );
  console.log(await responsepost8.json());
  expect(responsepost8.status()).toBe(200);
});





///api/RCDistList
test("/api/getMasterDistrict", async ({ request }) => {
  const response11 = await request.get(
    "https://tng2c2.tnschools.gov.in/emis3APICode/api/getMasterDistrict",
  );
  console.log(await response11.json());
  expect(response11.status()).toBe(200);
});