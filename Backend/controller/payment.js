
const axios =require ('axios')
module.exports ={
    Add:async (req,res) =>{
        const url="https://developers.flouci.com/api/generate_payment"
        const payload={
            "app_token":"83e34080-4e61-4b16-bc20-f153c56c785f",
            "app_secret":process.env.FLOUCI_SERCRET,
            "amount":req.body.amount,
            "accept_card": "true",
            "session_timeout_secs": 1200,
            "success_link":"http://localhost:4000/success" , 
            "fail_link":"http://localhost:4000/fail",
            "developer_tracking_id":"5e0dbfab-ca76-4d80-8d3e-ff621afc9aae"

             
        }
       

        await axios 
        .post(url,payload)
        .then (result=>{
            res.send(result.data)
        })
        .catch ((err)=>console.error(err))
    },
    verify: async (req,res) =>{
        const payment_id =req.param.id
         
        await axios.get (`https://developers.flouci.com/api/verify_payment/${payment_id}`,{
            header:{ 'Content-Type': 'application/json',
            'apppublic': "83e34080-4e61-4b16-bc20-f153c56c785f",
            'appsecret': process.env.FLOUCI_SERCRET
         }
        })
        .then ((result)=>{
            res.send(result.data) 
        })
        .catch ((err)=>{console.log(err.message)})
    }
}