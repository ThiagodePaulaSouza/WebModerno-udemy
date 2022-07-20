const sequence = {
  _id: 1,
  get id() {
    return this._id;
  },
};

const produtos = {};

const salvarProduto = () => {
  if (!produtos.id) produto = sequence.id;
  produtos[produto._id] = produto
  return produto
};

function getProduto(id) {produtos[id] || {}}

function getProdutos () {return Object.values(produtos)}


module.exports = { salvarProduto, getProduto, getProdutos }