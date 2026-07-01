const{test,expect}=require('@playwright/test')

//get
test('login api',async({request})=>
{
 const api=await request.get('');
 console.log(api.json());
 await expect(api.status()).toBe(200);
});

//post
test('',async({request})=>{
    const apipost=await request.post('',{data:{

    },headers:{"accept":"application/json"}});
    console.log(apipost.json());
    await expect(apipost.status()).toBe(200);
})