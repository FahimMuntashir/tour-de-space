using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Menu : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Cursor.lockState = CursorLockMode.Locked;
        Cursor.visible = false;
    }

    public void OnPlayButton()
    {
        SceneManager.LoadScene(1);
    }

        public void OnPlayButton2()
    {
        SceneManager.LoadScene(2);
    }
        public void OnQuitButton()
    {
        Application.Quit();
    }
}
