const express = require("express")
const router = express.Router()

const prod = process.env.NODE_ENV === "production"

let key

let YOUR_DOMAIN
let price

if(prod) {
    YOUR_DOMAIN = "https://naomi-education-71d2b94474f0.herokuapp.com"
    key = process.env.key
    price = "price_1T9uRe1SgHy0ncjsujGluQQE"
    
}

else {
    YOUR_DOMAIN = 'http://localhost:5173'
    key = "sk_test_51T8sWDIiV4SP0hhgO5FYbxcM4oBkkBtQgNcj3HqHoXScs7KDYCFKece8nWGmFl6v4YJpN4jmcpXre59ayGtJ8J2M00m29E2s3N"
    price = 'price_1T9v6FIiV4SP0hhgdRwOy6zo'
}

const stripe = require("stripe")(key)

router.post("/create-checkout-session", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: price,
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success`,
        cancel_url: `${YOUR_DOMAIN}/`,
    })

    await res.json({url: session.url});
})

router.get("/session", (req, res) => {

    if (error) {
        throw error
    }

    res.status(200)
})

module.exports = router;