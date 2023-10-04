using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class QuizManager : MonoBehaviour
{
    public GameObject[] Levels;
    public GameObject ResetScreen;
    public int NextSceneNumber; 

    int currentLevel;


    public void wrongAnswer()
    {
        ResetScreen.SetActive(true);
    }

    public void ResetGame()
    {
        Application.LoadLevel(Application.loadedLevel);
    }

    public void correctAnswer()
    {
        if(currentLevel + 1 != Levels.Length)
        {
            Levels[currentLevel].SetActive(false);

            currentLevel++;
            Levels[currentLevel].SetActive(true);
        }
        else
        {
            SceneManager.LoadScene(NextSceneNumber);
            Levels[currentLevel].SetActive(false);
        }
    }

}
