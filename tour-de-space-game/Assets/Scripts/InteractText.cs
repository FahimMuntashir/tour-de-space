using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class InteractText : MonoBehaviour
{
    public TextMeshProUGUI textMesh;
    public GameObject TextPanel;
    public string DisplayText = "This is the text to be displayed.";

    void OnTriggerEnter ()
    {
        textMesh.text = "Press 'E' to interact";
        TextPanel.SetActive(true);
    }

    void OnTriggerStay ()
    {
        if (Input.GetKeyDown(KeyCode.E))
        {
            textMesh.text = DisplayText;
            TextPanel.SetActive(true);
        }
    }

    void OnTriggerExit ()
    {
        textMesh.text = "";
        TextPanel.SetActive(false);
    }
}
