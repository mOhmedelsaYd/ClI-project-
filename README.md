# Cryptocurrency CLI

Cryptocurrency CLI is a command-line interface tool for managing cryptocurrencies. It allows you to add your API key, delete your API key, list supported coins, and check the price of a specific coin with options to choose EUR or USD currency.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. Clone this repository to your local machine using command :   git clone https://github.com/mOhmedelsaYd/ClI-project-
2. Install dependencies using npm:
    a. npm install
   
    b. npm link
4. Add API Key :  coindex key set
5. use this API KEY  =>       	CG-AqtDWUD4U8yRqE5MGYrUfzVu

#### Note : without apiKey you can't check price 

## Features

### Add API Key
To add your API key, use the following command:  

![image](https://github.com/mOhmedelsaYd/ClI-project-/assets/114439989/6341c3b9-3fda-4bce-a8ad-49e4994e7f67)


### Show API Key
To show your API key, use the following command: 

![image](https://github.com/mOhmedelsaYd/ClI-project-/assets/114439989/fe3df17e-4523-4c86-a58e-757f757af20d)


### delete API Key
To delete your API key, use the following command:

![image](https://github.com/mOhmedelsaYd/ClI-project-/assets/114439989/5cac19d5-2e89-4d86-a7ce-58cac5a84f95)


### Check Price
A-To check the price of coin, use the following command:

![image](https://github.com/mOhmedelsaYd/ClI-project-/assets/114439989/7d2000e2-8031-41b0-b798-c4c6a0b3962d)

B-we can add option to check a specific coin using this command : 

coindex check price --coin <name of coin>   

type of coin:

1. ripple
2. bitcoin
3. ethereum
4. litecoin 
5. binancecoin 
6. stellar 
7. dogecoin 
8. solana 
9. polygon 



EX: 


![image](https://github.com/mOhmedelsaYd/ClI-project-/assets/114439989/2ba62bf9-8a8a-445e-a57f-87369f541feb)





C-we can check the price of coin in difference currency using this command: 

coindex check price --curr <name of curr>


type of currency:

1. USD for United States Dollar
2. EUR for Euro
3. GBP for British Pound
4. JPY for Japanese Yen
5. AUD for Australian Dollar
6. CAD for Canadian Dollar
7. CHF for Swiss Franc
8. CNY for Chinese Yuan
9. INR for Indian Rupee
10. RUB for Russian Ruble


Ex: 

![image](https://github.com/mOhmedelsaYd/ClI-project-/assets/114439989/7b758edb-9a61-4e51-89c4-f9628c46fd46)


D- We can use specific coin with specific currency using this command :

coindex check price --coin <name of coin>  --curr <name of curr>

Ex: 

![image](https://github.com/mOhmedelsaYd/ClI-project-/assets/114439989/27feb41d-d94b-42d5-85a7-85b45d8ba318)



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.






