using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class DropHandler : MonoBehaviour, IDropHandler
{
    public void OnDrop(PointerEventData eventData)
    {
        if(transform.childCount == 0)
        {
            GameObject dropped = eventData.pointerDrag;
            DragItem dragItem = dropped.GetComponent<DragItem>();
            dragItem.originalParent = transform;
        }

    }
}
