export class PortfolioCreated {
  static readonly NAME = 'portfolio/portfolio-created'

  $name = PortfolioCreated.NAME

  $version = 0

  constructor(
    readonly portfolioId: string,
    readonly userId: string,
    readonly name: string,
    readonly images: string[]
  ) {}
}
