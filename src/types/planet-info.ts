export interface IPlanetInfo {
    name: string,
    overview: {
      content: string,
      source: string
    },
    structure: {
      content: string,
      source: string
    },
    geology: {
      content: string,
      source: string,
    },
    rotation: string,
    revolution: string,
    radius: string,
    temperature: string,
    images: {
        overview: string,
        structure: string,
        geology: string
    }
}

export type TParameter = 'rotation' | 'revolution' | 'radius' | 'temperature';

export enum CardName {
    rotation = 'rotation time',
    revolution = 'revolution time',
    radius = 'radius',
    temperature = 'averege temp.'
}

export enum ButtonName {
  overview = 'overview',
  structure = 'internal structure',
  geology = 'surface geology'
}

export type TPlanetArticle = 'overview' | 'structure' | 'geology';
