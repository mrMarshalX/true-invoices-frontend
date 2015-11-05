module.exports = {
	invoices: [{
		"businessId": "123",
		"documentDate": "2015-11-11",
		"soldDate": "2015-11-21",
		"paymentKind": "CASH",
		"items": [{
			"commodity": "Pruning trees",
			"auxiliarySymbol": "SWW/PKWIU/1",
			"measure": "item",
			"quantity": 1,
			"singleNetPrice": 1499.99,
			"taxRate": 5
		}, {
			"commodity": "Mowing",
			"auxiliarySymbol": "SWW/PKWIU/2",
			"measure": "item",
			"quantity": 2,
			"singleNetPrice": 499.99,
			"taxRate": 7
		}],
			"purchasers": [{
			"name": "John Doe Inc.",
			"address": "Spitfire Street 12, London",
			"taxIdentifier": "1234567890",
			"role": "Purchaser"
		}]
	}]
};