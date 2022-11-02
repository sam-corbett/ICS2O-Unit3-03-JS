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
 * This function displays an alert.
 */
function calculateVOLUME() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
