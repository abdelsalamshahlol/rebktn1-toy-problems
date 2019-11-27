<<<<<<< HEAD
# Immersive Toy Problems

### First non repeated character
Given an arbitrary input string, return the first nonrepeated character in the string. For example:
```javascript
firstNonRepeatedCharacter('ABA'); // => 'B' 
firstNonRepeatedCharacter('AACBDB'); // => 'C'
```

### Blackjack (aka 21)

Complete the function that determines the score of a hand in the card game **Blackjack** (aka 21).

The function receives an **array** of strings that represent each card in the hand `("2", "3", ..., "10", "J", "Q", "K" or "A")` and should return the score of the hand (integer).

Scoring rules:

 - Number cards count as their face value (2 through 10).
 - Jack, Queen and King count as 10.
 -  An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21. 
If there is no score less than or euqal to 21 return the smallest score more than 21.

Examples

```javascript
["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25 
```
=======
# Toy Problems

Welcome to Toy Problems. This repository will be updated every morning with a new
code challenge.

Feel free to use Google to aid you in solving the coding challenges!

## Using this Repository

You'll find each day's toy problem in its own folder.

## Getting a Copy of the Repo

If you haven't already, fork the repository on GitHub and clone your newly created
repo down to your computer.

## ES2015+ support

Spectator supports ES2015+ by transpiling files with [Babel](https://babeljs.io/). Any JavaScript feature included in the [latest preset](https://babeljs.io/docs/plugins/preset-latest/) can be used in a toy problem. The tradeoff for this support is that error messages can sometimes be a bit more obscure and/or line numbers in the stack trace don't map precisely to their original line numbers.

If this is not an acceptable tradeoff, you can write only ES5 code create a `spectator.json` file in the root of the problem directory that looks like this:

```js
{
  "babel": false
}
```

## Submitting your Solutions

**VERY IMPORTANT: Before submitting your solutions, find and fix all syntax errors**

Solutions are submitted via [Pull Request](https://help.github.com/articles/using-pull-requests). Follow these steps:

1. From **your fork**, select `Pull Requests` and then create a `New pull request`.
2. STOP. *Before* you `Click to create a pull request for this comparison` you must **adjust the target branch** (aka `base branch`) to be your username. Once changed, the pull-request heading should look like this:

  > hackreactor:username ... username:master

3. Click `Send pull request`

## Updating the Repository

Every morning, when a new toy problem is added, you'll need to sync your version of
the repo with hackreactor's. Git won't automatically pull in upstream changes for
you; it trusts that you'll pull them in as needed. Do so by giving Git a reference
to hackreactor's version of the repo:

    git remote add upstream https://github.com/hackreactor/xxxx##-toy-problems.git

  > Be sure to substitue `xxxx##` with your actual cohort prefix where xxxx is your campus and ## is your cohort number (ex: hrsf50)

After you've done that, updating your repo is as simple as running the following:

    git checkout master       // Your fork's master branch
    git pull upstream master  // Your class's master branch

This will check out your branch and tell git to grab any changes made to the main
repository and merge them into your branch.

## Resolving Spectator's Unmergeable Pull Request

You may encounter a scenario where Spectator will not merge your pull request. This
often happens as a result of your upstream branch becoming out of sync with your
local copy. To resolve this problem, run:

    git pull upstream <your-branch-name>

Resolve any conflicts, merge, commit and push. You will then be able to submit a
Pull Request that will get correctly merged.
>>>>>>> da99b9d95ed0c47f9806ea75b0069a51ef9eb025
