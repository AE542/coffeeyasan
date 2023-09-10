// here we can create a new instance of a coffee shop class
// which we can reuse over the app

export interface CoffeeShop {
    id: number;
    name: string;
    description: string;
    location: string;
}

// now lets go and reuse this back in the coffeeshop.component.ts
