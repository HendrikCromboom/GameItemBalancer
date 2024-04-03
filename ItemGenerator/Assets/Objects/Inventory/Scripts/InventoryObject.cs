using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName ="New Inventory", menuName ="ItemGenerator/Inventory")]
public class InventoryObject : ScriptableObject
{
    public List<InventorySlotObject> inventorySlotObjects = new List<InventorySlotObject>();
    public void AddItem(BaseItemObject item, int amount)
    {
        int itemIndex = inventorySlotObjects.FindIndex(i => i.itemObject == item);
        if(itemIndex > -1)
        {
            inventorySlotObjects[itemIndex].AddAmountToExistingInventory(amount);
        }else
        {
            inventorySlotObjects.Add(new InventorySlotObject(item, amount));
        }
    }
}
