class Mock{
    generateProperties(): Property[]{
        var result: Property[] = [];
        result.push(new Property(){name: "test1", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.COMMON });
        result.push(new Property(){name: "test2", description: "test1", value: 10, power: 10, weightedRarity: 10,rarity: Rarity.COMMON });
        result.push(new Property(){name: "test3", description: "test1", value: 15, power: 15, weightedRarity: 15,rarity: Rarity.UNCOMMON });
        result.push(new Property(){name: "test4", description: "test1", value: 15, power: 15, weightedRarity: 40,rarity: Rarity.RARE });
        result.push(new Property(){name: "test5", description: "test1", value: 15, power: 15, weightedRarity: 15,rarity: Rarity.UNCOMMON });
        result.push(new Property(){name: "test6", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.RARE });
        result.push(new Property(){name: "test7", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.COMMON });
        result.push(new Property(){name: "test8", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.COMMON });
        result.push(new Property(){name: "test9", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.COMMON });
        result.push(new Property(){name: "test10", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.LEGENDARY });
        result.push(new Property(){name: "test11", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.COMMON });
        result.push(new Property(){name: "test12", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.COMMON });
        result.push(new Property(){name: "test13", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.COMMON });
        result.push(new Property(){name: "test14", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.COMMON });
        result.push(new Property(){name: "test15", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.COMMON });
        result.push(new Property(){name: "test16", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.COMMON });
        result.push(new Property(){name: "test17", description: "test1", value: 5, power: 5, weightedRarity: 5,rarity: Rarity.COMMON });
        return result;
    }
}