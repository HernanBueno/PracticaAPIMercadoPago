class PaymentController{
    constructor (subscriptionService) {
        this.subscriptionService = subscriptionService
    }

//init_point es el link de pago
    async getPaymentLink(req, res){
        try {
            const payment = await this.subscriptionService.createPayment();
            return res.json(payment)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:true, msg: "Failed to create Payment"})
        }
    }



    async getSubscriptionLink(req,res){
        try {
            const subscription = await this.subscriptionService.createSubscription()
            return res.json(subscription)
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:true, msg:"Failed to create subscription"})
        }
    }
}

module.exports = PaymentController;