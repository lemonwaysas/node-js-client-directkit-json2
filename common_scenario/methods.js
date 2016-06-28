// Load the config
const config = require('./config.js');

exports.RegisterWallet = function(params) {
	// Method name
	var methodName = "RegisterWallet";

	// Parameters
	var postData = {
		"wlLogin":  					config.wlLogin,
		"wlPass":   					config.wlPass,
		"language": 					config.language,
		"version":  					"1.1",
		"walletIp": 					config.walletIp,
		"walletUa": 					config.walletUa,
		"wallet":   					params.wallet,
		"clientMail": 					params.clientMail,
		"clientTitle": 					params.clientTitle,
		"clientFirstName": 				params.clientFirstName,
		"clientLastName": 				params.clientLastName,
		"street": 						params.street,
		"postCode": 					params.postCode,
		"city": 						params.city,
		"ctry": 						params.ctry,
		"birthdate": 					params.birthdate,
		"phoneNumber": 					params.phoneNumber,
		"mobileNumber": 				params.mobileNumber,
		"isCompany": 					params.isCompany,
		"companyName": 					params.companyName,
		"companyWebsite": 				params.companyWebsite,
		"companyDescription": 			params.companyDescription,
		"companyIdentificationNumber": 	params.companyIdentificationNumber,
		"isDebtor": 					params.isDebtor,
		"nationality": 					params.nationality,
		"birthcity": 					params.birthcity,
		"birthcountry": 				params.birthcountry,
		"payerOrBeneficiary": 			params.payerOrBeneficiary,
		"isOneTimeCustomer": 			params.isOneTimeCustomer
	};

	return config.sendRequest(methodName, postData);
}

exports.GetWalletDetails = function(params) {
	// Method name
	var methodName = "GetWalletDetails";

	// Parameters
	var postData = {
		"wlLogin": 	config.wlLogin,
		"wlPass": 	config.wlPass,
		"language": config.language,
		"version": 	"1.9",
		"walletIp": config.walletIp,
		"walletUa": config.walletUa,
		"wallet": 	params.wallet,
		"email": 	params.email
	};

	return config.sendRequest(methodName, postData);
}

exports.UpdateWalletDetails = function(params) {
	// Method name
	var methodName = "UpdateWalletDetails";

	// Parameters
	var postData = {
		"wlLogin": 							config.wlLogin,
		"wlPass": 							config.wlPass,
		"language": 						config.language,
		"version": 							"1.0",
		"walletIp": 						config.walletIp,
		"walletUa": 						config.walletUa,
		"wallet": 							params.wallet,
		"newEmail": 						params.newEmail,
	    "newTitle": 						params.newTitle,
	    "newFirstName": 					params.newFirstName,
	    "newLastName": 						params.newLastName,
	    "newStreet": 						params.newStreet,
	    "newPostCode": 						params.newPostCode,
	    "newCity": 							params.newCity,
	    "newCtry": 							params.newCtry,
	    "newIp": 							params.newIp,
	    "newPhoneNumber": 					params.newPhoneNumber,
	    "newMobileNumber": 					params.newMobileNumber,
	    "newBirthDate": 					params.newBirthDate,
	    "newIsCompany": 					params.newIsCompany,
	    "newCompanyName": 					params.newCompanyName,
	    "newCompanyWebsite": 				params.newCompanyWebsite,
	    "newCompanyDescription": 			params.newCompanyDescription,
	    "newCompanyIdentificationNumber": 	params.newCompanyIdentificationNumber,
	    "newIsDebtor": 						params.newIsDebtor,
	    "newNationality": 					params.newNationality,
	    "newBirthcity": 					params.newBirthcity,
	    "newBirthcountry": 					params.newBirthcountry
	};

	return config.sendRequest(methodName, postData);
}

exports.RegisterCard = function(params) {
	// Method name
	var methodName = "RegisterCard";

	// Parameters
	var postData = {
		"wlLogin": 			config.wlLogin,
		"wlPass": 			config.wlPass,
		"language": 		config.language,
		"version": 			"1.2",
		"walletIp": 		config.walletIp,
		"walletUa": 		config.walletUa,
		"wallet": 			params.wallet,
		"cardType": 		params.cardType,
	    "cardNumber": 		params.cardNumber,
	    "cardCode": 		params.cardCode,
	    "cardDate": 		params.cardDate,
	    "specialConfig": 	""
	};

	return config.sendRequest(methodName, postData);
}

exports.MoneyInWithCardId = function(params) {
	// Method name
	var methodName = "MoneyInWithCardId";

	// Parameters
	var postData = {
		"wlLogin": 			config.wlLogin,
		"wlPass": 			config.wlPass,
		"language": 		config.language,
		"version": 			"1.1",
		"walletIp": 		config.walletIp,
		"walletUa": 		config.walletUa,
		"wallet": 			params.wallet,
		"cardId": 			params.cardId,
	    "amountTot": 		params.amountTot,
	    "amountCom": 		params.amountCom,
	    "comment": 			params.comment,
	    "autoCommission": 	params.autoCommission,
	    "isPreAuth": 		params.isPreAuth,
	    "specialConfig": 	params.specialConfig,
	    "delayedDays": 		params.delayedDays,
	    "wkToken": 			params.wkToken
	};

	return config.sendRequest(methodName, postData);
}

exports.SendPayment = function(params) {
	// Method name
	var methodName = "SendPayment";

	// Parameters
	var postData = {
		"wlLogin": 			config.wlLogin,
		"wlPass": 			config.wlPass,
		"language": 		config.language,
		"version": 			"1.0",
		"walletIp": 		config.walletIp,
		"walletUa": 		config.walletUa,
		"debitWallet": 		params.debitWallet,
		"creditWallet": 	params.creditWallet,
		"amount": 			params.amount,
		"message": 			params.message,
		"scheduledDate": 	params.scheduledDate,
		"privateData": 		params.privateData
	};

	return config.sendRequest(methodName, postData);
}

exports.RegisterIBAN = function(params) {
	// Method name
	var methodName = "RegisterIBAN";

	// Parameters
	var postData = {
		"wlLogin": 			config.wlLogin,
		"wlPass": 			config.wlPass,
		"language": 		config.language,
		"version": 			"1.1",
		"walletIp": 		config.walletIp,
		"walletUa": 		config.walletUa,
		"wallet": 			params.wallet,
	    "holder": 			params.holder,
	    "bic": 				params.bic,
	    "iban": 			params.iban,
	    "dom1": 			params.dom1,
	    "dom2": 			params.dom2,
	    "comment": 			params.comment,
	    "ignoreIbanFormat": "1"
	};

	return config.sendRequest(methodName, postData);
}

exports.MoneyOut = function(params) {
	// Method name
	var methodName = "MoneyOut";

	// Parameters
	var postData = {
		"wlLogin": 			config.wlLogin,
		"wlPass": 			config.wlPass,
		"language": 		config.language,
		"version": 			"1.3",
		"walletIp": 		config.walletIp,
		"walletUa": 		config.walletUa,
		"wallet": 			params.wallet,
	    "amountTot": 		params.amountTot,
        "amountCom": 		params.amountCom,
        "message": 			params.message,
        "ibanId": 			params.ibanId,
        "autoCommission": 	params.autoCommission
	};

	return config.sendRequest(methodName, postData);
}