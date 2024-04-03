using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum ItemType
{
    DEFAULT,
    EQUIPMENT
}

public abstract class BaseItemObject : ScriptableObject
{
    public ItemType type;
    [TextArea(10,10)]
    public string description;

}
