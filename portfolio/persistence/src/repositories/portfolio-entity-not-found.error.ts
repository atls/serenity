export class PortfolioEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`PortfolioEntity with id ${id} was not found`)
    this.name = 'PortfolioEntityNotFoundError'
  }
}
