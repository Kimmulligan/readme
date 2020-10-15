// function to generate markdown for README

function defaultContribute(answers) {
  if (answers.futureContributors === `# Contributor Covenant Code of Conduct`) {
    answers.futureContributors = `## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the
  overall community

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.

Community Impact Guidelines were inspired by [Mozilla's code of conduct
enforcement ladder](https://github.com/mozilla/diversity).

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see the FAQ at
https://www.contributor-covenant.org/faq. Translations are available at
https://www.contributor-covenant.org/translations.`;
  }
  //return answers;
}

function badgeCheck(answers) {
  if (answers.github === "" || answers.repo === "") {
    answers.badges = "";
  } else {
    answers.badges = `![issues badge](https://img.shields.io/github/issues/${answers.github}/${answers.repo})
    ![forks badge](https://img.shields.io/github/forks/${answers.github}/${answers.repo})
    ![stars badge](https://img.shields.io/github/stars/${answers.github}/${answers.repo})
    ![licence badge](https://img.shields.io/github/licence/${answers.github}/${answers.repo})`;
  }
}

function generateMarkdown(data) {
  defaultContribute(data);
  console.log(data);
  badgeCheck(data);
  const contributorArray = data.contributors.split(",");
  const thirdPartyAssets = data.thirdPartyAssets.split(",");
  console.log(contributorArray);
  let markdown = `
  ${data.badges}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Licence](#licence)
* [Contributors](#contributors)
* [Tests](#tests)
* [Run](#run)
* [Future Contributors](#future-contributors)
## Installation
${data.installation}
## Licence
${data.licence}
## Contributors
`;
  for (var i = 0; i <= contributorArray.length; i++) {
    if (contributorArray[i] !== undefined) {
      markdown += `* [${
        contributorArray[i]
      }](https://github.com/${contributorArray[i].trim()})\n`;
    }
  }
  markdown += `###Third-Party-Assets\n`;
  for (var i = 0; i <= thirdPartyAssets.length; i++) {
    if (thirdPartyAssets[i] !== undefined) {
      markdown += `* [link](${thirdPartyAssets[i].trim()})\n`;
    }
  }
  markdown += `## Tests
${data.tests}`;
  markdown += `
## Run
${data.run}
## Future-Contributors
${data.futureContributors}`;

  return markdown;
}
// https://img.shields.io/github/issues/Kimmulligan/timed-quiz
// GitHub forks:	GitHub forks badge	https://img.shields.io/github/forks/Kimmulligan/timed-quiz
// GitHub stars:	GitHub stars badge	https://img.shields.io/github/stars/Kimmulligan/timed-quiz
// GitHub license:	GitHub license badge	https://img.shields.io/github/license/Kimmulligan/timed-quiz
module.exports = generateMarkdown;

//make subsections for credits, test make a section
