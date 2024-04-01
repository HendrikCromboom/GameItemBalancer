# GameItemBalancer
 Recently I was asked in an interview the following theoretical question:

    - Think about a game with randomly/semi-randomly generated items(arpg, moba,...)

    - These items have certain properties(eg: attack power, attack speed, elemental damage, etc ...)

    - You are in the process of developing the generator for said items but don't want a never ending balance patch cycle after release

    - How would you go about solving this challenge before and after alpha

My answer was along the lines of:

    - I would design the properties of these items in such a way that they are assigned an arbitrary weight in both power and rarity

    - Depending on the power/rarity scale I would assign the total rarity of the item

    - The total combined power of the properties an item can not be higher then its allowed power/rarity scale

    - Whenever the game gets tested we can survey the balance of these items and reassign both power or scarcity of certain properties

    - After initial release I would keep track of the usuage of certain properties by the playerbase if possible
    
    - These statistics could then be used to rebalance post release if nescecary

The purpose of this repository is to create said generator and to see if the usage of it would indeed be feasible along my remarks.