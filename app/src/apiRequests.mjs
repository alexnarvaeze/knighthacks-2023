//check have cheerio and fetch libraries (npm install cheerio and fetch)
import fetch from "node-fetch";
import cheerio from "cheerio";
import fs from "fs";
import express from "express";

//when button is clicked, the link inside of the textbox will become the inputted url
const inputtedUrl = "https://www.linkedin.com/in/dianneth-murillo/";

const encodedProfile = encodeURIComponent(inputtedUrl);

//makes the url readable for our API
const apiBase = "https://linkedin-profiles1.p.rapidapi.com/extract";
const apiQueryParams = `?url=${encodedProfile}&html=true`;
const apiUrl = `${apiBase}${apiQueryParams}`;

console.log(apiUrl);

const url = apiUrl;
//https://linkedin-profiles1.p.rapidapi.com/extract?url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdianneth-murillo%2F&html=false"
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fb230fcbe7msh63b1e57b0e6a094p18e4b9jsn4236c4d480f1",
    "X-RapidAPI-Host": "linkedin-profiles1.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();

  //Turns the text string of linkedin's data and parses it
  const data = JSON.parse(result);

  console.log(data);

  //Gets the person's name
  const name = data.extractor.name;
  console.log("Name:", name);

  //Get the description
  const description = data.extractor.description;
  console.log("Description:", description);

  //Gets education
  const educationArray = data.extractor.education;

  const educations = [];

  //Goes through every education
  educationArray.forEach((education, index) => {
    const schoolName = education.name;
    const activities = education.activities;
    const degree = education.degree;

    console.log(`Education ${index + 1}: `);
    console.log("School name:", schoolName);
    console.log("Degree:", degree);

    const formattedEducation = `Education ${
      index + 1
    } - School name: ${schoolName} - Degree: ${degree}`;

    educations.push(formattedEducation);
  });

  console.log("Educations:", educations);

  //reads the raw html file for skillsets
  const rawHtml = data.raw;
  const $ = cheerio.load(rawHtml);

  const bio = [];
  const userBio = $(".top-card-layout__headline");
  const bioText = userBio.text();
  bio.push(bioText);

  console.log(bioText);

  const experienceTiles = [];

  $(".profile-section-card__title").each((index, element) => {
    const title = $(element).text().trim();
    experienceTiles.push(title);
  });

  console.log("Experiences:", experienceTiles);

  /// Where the person worked
  const graphArray = data.graph["@graph"];

  const organizations = [];

  for (const obj of graphArray) {
    if (obj.alumniOf && Array.isArray(obj.alumniOf)) {
      for (const alumnniOfObj of obj.alumniOf) {
        if (alumnniOfObj.name) {
          organizations.push(alumnniOfObj.name);
        }
      }
    }
  }

  console.log("Past Organizations: ", organizations);

  //holds all the data
  const allDataFromLinkedIn = {
    Name: name,
    ProfileBio: bio,
    Descriptions: description,
    Educations: educations,
    Experiences: experienceTiles,
    Organizations: organizations,
  };

  const jsonData = JSON.stringify(allDataFromLinkedIn, null, 2);

  useEffect(() => {
    fetch("http://localhost:5000/parse_linkedin")
        .then(res => res.send(jsonData))
        .then(console.log(jsonData))
  }, [])

  console.log(`Data saved`);
} catch (error) {
  console.error(error);
}
