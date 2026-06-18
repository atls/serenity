export class PortfolioUpdated {
  static readonly NAME = 'portfolio/portfolio-updated'

  $name = PortfolioUpdated.NAME

  $version = 0

  constructor(
    readonly portfolioId: string,
    readonly userId: string,
    readonly name: string,
    readonly images: string[]
  ) {}
}
