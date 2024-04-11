using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InventoryItem : DragItem
{
    [HideInInspector]   public BaseItemObject Item;

    public void InitItem(BaseItemObject item)
    {
        Item = item;
        image.sprite = item.image;
    }
}
