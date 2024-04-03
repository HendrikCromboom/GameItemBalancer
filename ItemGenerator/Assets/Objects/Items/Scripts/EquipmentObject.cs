using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "New Equipment", menuName ="ItemGenerator/Items/Equipment")]
public class EquipmentObject : BaseItemObject
{
    private void Awake()
    {
        type = ItemType.EQUIPMENT;
    }
}
