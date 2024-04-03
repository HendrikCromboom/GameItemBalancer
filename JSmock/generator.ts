class Generator{
    mock: Mock = new Mock;
    rarityArbitrator: RarityArbitrator = new RarityArbitrator;

    generateItem(name: string, itemType: ItemType, rarity: Rarity): Item{
        var item: Item = new Item;
        item.name = name;
        item.type = itemType;
        item.rarity = rarity;
        //Ill ignore basestats for this demonstration
        item.properties = this.setProperties(item.rarity);
        return item;
    }
    setProperties(rarity: Rarity): Property[]{
        var result: Property[] = [];
        var allProperties = this.mock.generateProperties();
        var eligiblePropertiesByRarity = this.filterPropertiesByRarity(allProperties, rarity);
        var remainingProperties = this.rarityArbitrator.getMaxProperties(rarity);
        var remainingPower = this.rarityArbitrator.getMaxPower(rarity);
        for(let i = 1; i < remainingProperties; i++){
            var selectedProperty = this.getRandomProperty(this.filterPropertiesByPower(eligiblePropertiesByRarity, remainingPower));
            remainingPower -= selectedProperty.power;
            result.push(selectedProperty);
        }
        return result;
    }
    filterPropertiesByRarity(properties: Property[], rarity: Rarity): Property[]{
        var result: Property[] = [];
        for(var p of properties){
            if(p.rarity <= rarity){
                result.push(p);
            }
        }
        return result;
    }
    filterPropertiesByPower(properties: Property[], power: number): Property[]{
        var result: Property[] = [];
        for(var p of properties){
            if(p.power <= power){
                result.push(p);
            }
        }
        return result;
    }
    getRandomProperty(properties: Property[]): Property{
        return properties[Math.floor(Math.random() * properties.length -1)];
    }
}