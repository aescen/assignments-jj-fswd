**1. What is the difference between git reset and git revert. When would you use one over the other?**

- git reset: simply undo/move commit position to other previous commit (altering commit history)
  git reset --soft HEAD~N -> will move file/changes from local commit to staging area
  git reset --mixed HEAD~N -> will move file/changes from local commit to working directory
  git reset --hard HEAD~N -> will delete file/changes from working directory
- git revert: undo/move commit position to other commit by creating new commit (safe from rewriting commit history)
- use git reset to completely reset changes to a commit point (rewriting commit history)
- use git revert to create a new commit based on previous commit point (without rewriting commit history)
  _source: https://stackoverflow.com/questions/27032850/what-is-the-difference-between-git-reset-and-git-revert_

**2. What is the difference between git merge and git rebase. When would you use one over the other?**

**2.1. Suppose originally there were 3 commits: A, B, C:**

[![A, B, C commit](https://i.stack.imgur.com/lJRq7.png)](#)

**2.2. Then developer Dan created commit D, and developer Ed created commit E:**

[![A, B, C, D, E commit](https://i.stack.imgur.com/pK7Zb.png)](#)

**2.3. Obviously, this conflict should be resolved somehow. For this, there are 2 ways:**

**2.4. Git merge:**
[![A, B, C, D, E, M commit](https://i.stack.imgur.com/9Ul5w.png)](#)

Both commits D and E are still here, but we create merge commit M that inherits changes from both D and E. However, this creates diamond shape, which many people find very confusing.

**2.5. Git rebase:**
[![A, B, C, D, !E, M commit](https://i.stack.imgur.com/TvXuJ.png)](#)

We create commit R, which actual file content is identical to that of merge commit M above. But, we get rid of commit E, like it never existed (denoted by dots - vanishing line). Because of this obliteration, E should be local to developer Ed and should have never been pushed to any other repository. Advantage of rebase is that diamond shape is avoided, and history stays nice straight line.

**2.6. Use git merge:**

- Preserve commits history.
- Create one merge commit.
- Create non linear (diamond) history.
- Safe to use from a potential data loss perspective.
- More straight forward

**2.7. Use git rebase:**

- Rewrite commits history.
- Reapplying commits on top of main branch / another branch.
- Rebasing is better to streamline a complex history.
- Create linear history.
- Avoiding conflict.
- Branch is done/complete as stable.
- Possible to actually lose data when rebasing.

Rebase will change commit hash, so that if you want to avoid much of conflict, just use rebase when that branch is done/complete as stable.

- Common issues related to rebase:

  - Don't rebase a branch that’s been published remotely.
  - Unless you know you are the only one working on it (and feel safe force pushing).
  - Prior to rebasing, create a backup branch from the tip of the branch you’re about to rebase, as it will allow you to easily compare the outcome (once done) and jump back to the pre-rebase state if necessary.

_source: https://stackoverflow.com/questions/16666089/whats-the-difference-between-git-merge-and-git-rebase_

**3. What is the difference between git stash pop and git stash apply. When would you use one over the other?**

- **git stash**: The git stash takes uncommitted both staged and unstaged changes, saves them away for further use, and then returns them from your working copy.
  [![git stash](https://www.w3docs.com/uploads/media/default/0001/03/a62cf03969b5e023300fca0e686b2d4b35b1dca8.png)](#)
- **git stash pop**: throws away the (topmost, by default) stash after applying it also removes it from the stash list.
- **git stash apply**: throws away the topmost (default), but leaves it in the stash list for possible later reuse or you can then git stash drop it.
  _source:_

  - _https://www.w3docs.com/learn-git/git-stash.html_
  - _https://stackoverflow.com/questions/15286075/difference-between-git-stash-pop-and-git-stash-apply_
