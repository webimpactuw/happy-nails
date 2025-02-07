# Happy Nails website
This is a happy nails website using React

# Set up
1. install a react
`npm install -g create-react-app`

2. create a project
`npx create-react-app nailsweb`

3. move to nailsweb directory
`cd nailsweb`

4. run the project
`npm run start`

5. if some modules are need to be installed, use npm install `package name`
`npm install web-vitals`

# Git flow
1. Create a Feature Branch
Each developer should create a separate feature branch based on the latest main:

`git checkout -b feature-branch`

2. move to the branch you created
` git checkout feature-branch`

3. Commit and Push
Work on your feature, commit changes regularly, and push them:

```
git add .
git commit -m "Implemented feature X"
git push origin feature-branch
```

4. Open a Pull Request (PR) for Review
Before merging, open a pull request (PR) to main so teammates can review your code.

5. Ensure Code is Tested & Reviewed
Run tests before merging.
Request reviews from other developers.
Address feedback if needed.

6. Merge with main
Before merging your feature, update it with the latest changes from main to avoid conflicts:

```
git checkout main
git commit
git merge feature-branch
```
