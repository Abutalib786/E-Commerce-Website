let response = fetch(url);
fetch(url)
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });
    fetch('/readme.txt')
    .then(response => response.text())
    .then(data => console.log(data));

    async function fetchText() {
        let response = await fetch('/readme.txt');
        let data = await response.text();
        console.log(data);
    }
    
// ------------------- Bambora payment API-----------------
[
    PaymentRequest {
        order_number : string
        amount* : number
        payment_method* : string
        language : string
        customer_ip : string
        term_url : string
        comments : string
        billing : RequestBillingAddress { }
        shipping : Address { }
        custom : Custom { }
        card : Card { }
        apple_pay : ApplePay { }
        android_pay : AndroidPay { }
        payment_profile : ProfilePurchase { }
        token : TokenPurchase { }
        recurring_payment : boolean
        level2 : Level2 { }
        card_on_file : CardOnFile { }
        } 
        
        ErrorResponse {
            code : integer
            category : integer
            message : string
            reference : string
            details : array of Detail { }
            validation : CardValidation { }
            }
]
[
    PaymentResponse {
        id : string
        authorizing_merchant_id : integer
        approved : integer
        message_id : integer
        message : string
        auth_code : string
        created : string
        order_number : string
        type : string
        risk_score : number
        amount : number
        payment_method : string
        custom : Custom { }
        card : CardPurchaseResponse { }
        3d_secure : 3DSecureResponse { }
        merchant_data : string
        contents : string
        interac_online : InteracOnlineResponse { }
        links : array of Link { }
        card_on_file : CardOnFileResponse { }
        }
]