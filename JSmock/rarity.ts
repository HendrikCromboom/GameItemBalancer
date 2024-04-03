enum Rarity{
    COMMON = 1,
    UNCOMMON = 2,
    RARE = 3,
    LEGENDARY = 4
}
class RarityArbitrator{
    private commonProperties = 1;
    private uncommonProperties = 2;
    private rareProperties = 3;
    private legendaryProperties = 5;
    private commonPower = 20;
    private uncommonPower = 50;
    private rarePower= 100;
    private legendaryPower = 500;


    public getMaxProperties(rarity: Rarity): number{
        switch(rarity){
            case Rarity.COMMON:
                return this.commonProperties;
            case Rarity.UNCOMMON:
                return this.uncommonProperties;
            case Rarity.RARE:
                return this.rareProperties;
            case Rarity.LEGENDARY:
                return this.legendaryProperties;
        }
    }
    public getMaxPower(rarity: Rarity): number{
        switch(rarity){
            case Rarity.COMMON:
                return this.commonPower;
            case Rarity.UNCOMMON:
                return this.uncommonPower;
            case Rarity.RARE:
                return this.rarePower;
            case Rarity.LEGENDARY:
                return this.legendaryPower;
        }
    }
}