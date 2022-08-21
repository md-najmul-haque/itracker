import React, { useState } from 'react';
import "./DarkMode.css";
import { BsMoonStars } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';

const DarkMode = () => {


    let clickedClass = "clicked"
  const body = document.body
  const lightTheme = "light"
  const darkTheme = "dark"
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme")
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem("theme", "light")
      theme = lightTheme
    } else {
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.add(clickedClass)
      localStorage.setItem("theme", "dark")
      theme = darkTheme
    }
  }
    return (
      <>
      
        {/* <button
    //  className={` toggle ${theme === "dark" ? clickedClass : ""}`}
 
      >click</button> */}

<label class="swap swap-rotate" >
  
  {/* <!-- this hidden checkbox controls the state --> */}
  <input type="checkbox"     id="darkMode"
     onClick={e => switchTheme(e)}/>
  
  {/* <!-- sun icon --> */}
    {/* <!-- sun icon --> */}
    <BsSun class="swap-on fill-current w-5 h-5 text-orange-300 "/>  

  
    {/* <!-- moon icon --> */}
    <BsMoonStars class="swap-off fill-current w-5 h-5 text-green-300" />

  
</label>
    
      </>
    );
};

export default DarkMode;
