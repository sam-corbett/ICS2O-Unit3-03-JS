// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-03-JS/sw.js", {
    scope: "/ICS2O-Unit3-03-JS/",
  })
}

/**
 * This function displays the Volume Of The Sphere.
 */
function calculateVOLUME() {
  //input
  const radius = parseFloat(document.getElementById("radius-of-sphere").value)

  //process
  const volume = (4 / 3) * Math.PI * radius ** 3

  //output
  document.getElementById("volume").innerHTML =
    "The Volume For Your Sphere Is Approx: " + volume.toFixed(2) + "cm³"

}
