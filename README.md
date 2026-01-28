# Unit Challenge: JavaScript Fundamentals

## Overview

In this challenge, you'll practice fundamental JavaScript skills by completing the challenges located in `src/main.js`. They're organized loosely in order of difficulty, so we recommend starting at the top and working through the functions one by one, although they can be completed in any order.

## Getting Started

- [ ] Fork and clone this repository. If you need a refresher, just follow the instructions found [here](https://github.com/CodesmithLLC/dev-environment-setup/blob/main/fork-clone.md)!

Once both partners have forked and cloned a copy of the repo, you should add remote connections to _both_ the [upstream repo](https://github.com/CodesmithLLC/unit-1-js-fundamentals) and your partner's fork. This will ensure you're able to easily pull updates into your local copy of the repository.

- [ ] Add a remote connection to the upstream by running the following command in your terminal:

```sh
git remote add upstream https://github.com/CodesmithLLC/unit-1-js-fundamentals.git
```

NOTE: If you're using SSH to authenticate yourself, you can use the SSH URL instead of the HTTPS URL in the example above. You'll know if this applies to you!

- [ ] Add a remote connection to your partner's repo by running the following command in your terminal, making sure to replace "PARTNERS_GITHUB_HANDLE" with your partner's github handle:

```sh
git remote add partner https://github.com/PARTNERS_GITHUB_HANDLE/unit-1-js-fundamentals.git
```

NOTE: Both partners should do this!

As you work, periodically push your changes to your repo with `git push origin main`. Your partner can then use `git pull partner main` to get the changes onto their machine, followed by `git push origin main` to push those changes to their own GitHub repo!

This is especially true when using VS Code [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare). Whichever partner is sharing their copy of the repo via Live Share should make sure to commit and push those changes so that the other partner can pull updates into their fork after the session ends.

## Testing

At this point in your engineering journey, you may be used to writing your own test cases directly after your functions and running the file in order to inspect the console.log output. **This is a great practice that you should definitely continue!**

In addition, we've supplied a testing suite intended to _automate_ the testing process without littering your code with additional console.log statements. In order to run the pre-written tests found in `main.test.js`, first open your terminal and run the following command in order to make sure the automatic test runner is installed:

```sh
npm install
```

Now, whenever you want to test your functions, just run the following in order to view the test results in your terminal:

```sh
npm test
```

HINT: Not seeing details on failing tests? Make sure to scroll up or expand your window to see the full output. Testing will continue in the background as you work, but you can stop the process at any point by typing either `q` or `ctrl+c`.

The reward for a job well done... is another job! As soon as one test is passing, the test runner will automatically move onto the next. If for any reason you'd like the test runner to skip a challenge, simply navigate to the test file: `/src/main.test.js`, find the testing logic for that challenge and add `.skip` as shown below.

```js
describe.skip("isNegativeOrOdd", () => {});
```
