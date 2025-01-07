const fetch = require('node-fetch');
const notifier = require('node-notifier');

const checkPrice = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=the-sandbox&vs_currencies=usd');
  const data = await response.json();

  const currentPrice = data['the-sandbox'].usd;
  const targetPrice = 0.7; // Preço desejado em USD

  if (currentPrice >= targetPrice) {
    console.log(`Alerta! O preço do The Sandbox atingiu $${currentPrice}`);
    notifier.notify({
      title: 'Alerta de Preço',
      message: `O preço do The Sandbox atingiu $${currentPrice}`,
      sound: true,
    });

  } else {
    console.log(`Preço atual: $${currentPrice}. Aguardando...`);
  }
};

// Executa a cada 1 minuto
setInterval(checkPrice, 60000);
