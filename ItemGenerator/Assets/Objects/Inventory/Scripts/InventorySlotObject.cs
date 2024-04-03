using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class InventorySlotObject : ScriptableObject
{
    public BaseItemObject itemObject;
    public int slot;
    public int amount;

    public InventorySlotObject(BaseItemObject itemObject, int amount)
    {
        this.itemObject = itemObject;
        this.amount = amount;
    }
    public InventorySlotObject(BaseItemObject itemObject, int amount, int slot)
    {
        this.itemObject = itemObject;
        this.amount = amount;
        this.slot = slot;
    }
    public void AddAmountToExistingInventory(int amount)
    {
        this.amount += amount;
    }
}
