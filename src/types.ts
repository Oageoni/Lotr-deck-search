export type Deck = {
    heroes: {
      [key: string]: number;
    };
    date_creation: string;
    date_update: string;
    id: number;
    is_published: boolean;
    name: string;
    slots: {
      [key: string]: number;
    };
    sideslots: any[];
    tags: string;
    user_id: number;
    version: string;
  };

export type Card = {
    pack_code: string;
    pack_name: string;
    type_code: string;
    type_name: string;
    sphere_code: string;
    sphere_name: string;
    position: number;
    code: string;
    name: string;
    traits: string;
    text: string;
    flavor: string;
    is_unique: boolean;
    threat: number;
    willpower: number;
    attack: number;
    defense: number;
    health: number;
    quantity: number;
    deck_limit: number;
    illustrator: string;
    octgnid: string;
    has_errata: boolean;
    url: string;
    imagesrc: string;
}