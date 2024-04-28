export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Produto[]) => {
  return items.reduce((acumulador, valorAtual) => {
    if (valorAtual.price) {
      return (acumulador += valorAtual.price)
    }
    return 0
  }, 0)
}
