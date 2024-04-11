using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using UnityEngine;

public class BaseItemObject : ScriptableObject
{
    public Sprite image;
    public ItemType type; 
}
public enum ItemType
{
    ARMOR,
    WEAPON
}
