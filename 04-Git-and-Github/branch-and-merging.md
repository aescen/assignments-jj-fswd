1. What does git clean do?
   Clean all untracked files
2. What do the -d and -f flags for git clean do?
   - Flag -d: clean untracked files in directory
   - Flag -f: forcibly clean untracked nested git repositories
3. What git command creates a branch?
   git branch <branch-name>
4. What is the difference between a fast-forward and recursive merge?
  - fast-forward: git will merge main and branch
    git merge <branch-name>
  - recursive: git will create a new commit of main and branch merged
    git merge --no-ff <branch-name>
5. What git command changes to another branch?
   git checkout <branch-name>
6. How do you remove modified or deleted files from the working directory?
   git checkout -f
7. What git command deletes a branch?
   git branch -d <branch-name>
8. What does the git diff command do?
   To see difference between current commit to the changes
9. How do you remove files from the staging area?
   git reset
10. How do merge conflicts happen?
   When merging a same line which is modified twice or more
