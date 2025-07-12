## 📈 Monitor de Preço de Criptomoedas
Script em Node.js para monitorar o preço de uma criptomoeda usando a API da CoinGecko e enviar alertas quando o valor ultrapassar os limites definidos pelo usuário.



## 🧠 Pré-requisitos

- Ter o Node.js instalado



## 🚀 Como usar

### 1️⃣ Clone este repositório:

```bash
git clone https://github.com/viniciustixu/CryptoTrack
cd CryptoTrack
```


### 2️⃣ Instale as dependências:

```bash
npm install
```

### 3️⃣ Configure como quiser:

Dentro do código existem as variáveis:
- `const crypto = "solana"`
- `const currency = "usd"`

Para alteralas, visite o site da <a href="https://www.coingecko.com/pt">CoinGecko</a>
Selecione a sua moeda desejada e em "informações" copie o "ID da API"
<img src="https://i.ibb.co/7NG5WDhj/solana.png"><br>
Substitua `const crypto = "solana"` com o ID da sua moeda



### 4️⃣ Execute o script:

```bash
node script.js
```
