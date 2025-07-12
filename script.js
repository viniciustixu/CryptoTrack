const fetch = require('node-fetch');
const notifier = require('node-notifier');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getCurrentPrice = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
    const data = await response.json();
    return data['solana'].usd;
  } catch (error) {
    console.error('Erro ao buscar o preço:', error);
    return null;
  }
};

const promptUser = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(parseFloat(answer)));
  });
};

const startMonitoring = async () => {
  const currentPrice = await getCurrentPrice();
  if (currentPrice === null) return rl.close();

  console.log(`Preço atual da moeda: $${currentPrice}`);

  const minPrice = await promptUser('Digite o preço mínimo desejado: ');
  const maxPrice = await promptUser('Digite o preço máximo desejado: ');

  console.log(`Monitorando moeda... Range definido: (${minPrice} ~ ${maxPrice})`);

  const checkPrice = async () => {
    const price = await getCurrentPrice();
    if (price === null) return;

    if (price >= maxPrice || price <= minPrice) {
      console.log(`Alerta! O preço da moeda atingiu $${price}`);
      notifier.notify({
        title: 'Alerta de Preço',
        message: `O preço da moeda atingiu $${price}`,
        sound: true,
      });
    } else {
      console.log(`Preço atual: $${price}. Aguardando... Range: (${minPrice} ~ ${maxPrice})`);
    }
  };

  setInterval(checkPrice, 60000);
  rl.close();
};

startMonitoring();
