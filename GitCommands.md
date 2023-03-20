# Git Commands

## Setup

Configure user information used across all local repositories

```
git config --global user.name "[firstname lastname]"
```

Set a name that is identifiable for credit when review version history

---

```
git config --global user.email "[valid-email]"
```

Set an email addresss that will be associated with each history marker

---

```
git config --global color.ui auto
```

Set automatic command line coloring for Git for easy reviewing

---

## Setup & Init

Configure user information used across all local repositiories

```
git init
```

Initalize an existing directory as a Git repository

---

```
git clone [url]
```

Retrieve an entire repository from a hosted location via URL

---

## Stage &amp; Snapshot

Working with snapshots and the Git staging area

```
git status
```

Show modified files in working directory staged for the next commit

---

```
git add [file]
```

Add a file as it looks now to the next commit (stage)

---

```
git reset [file]
```

Unstage a file while retaining the changes in working directory 

---

```
git diff
```

Diff of what is staged but not yet committed

---

```
git diff --staged
```

Diff of what is staged but not yet committed

---

```
git commit -m "[descriptive message]"
```

Commit the staged content as a new commit snapshot


## Branch &amp; Merge
Isolating work in branches, changing context, and integrating changes

```
git branch
```

List all branches. A \* will appear next to the currently active branch

---

```
git branch [branch-name]
```

Create a new branch at the current commit

---

```
git checkout
```

Switch to another branch and check it out in the working directory

---

```
git merge [branch]
```

Merge the specified branch's history into the current one

## Inspect &amp; Compare
Examinging logs, diffs, and object information

```
git log
```

Show the commit history for the current active branch

---

```
git log branchB..branchA
```

Show the commits on branchA that are not on branchB

---

```
git log --follow [file]
```

Show the commits that changed file, even across renames

---

```
git diff branchB...branchA
```

Show the diff of what is in branchA that is not in branchB

---

```
git show [SHA]
```

Show any object in Git in human-readable format


## Tracking Path Changes
Versioning file removes and path changes

```
git rm [file]
```

Delete the file from project and stage the removal for commit

---

```
git mv [existing-path] [new-path]
```

Change an existing file path and stage the move

---

```
git log --stat -M
```

Show all commit logs with indication of any paths that moved

## Ignoring Patterns
Preventing unintentional staging or commiting of files

```
logs/
*.notes pattern*/
```

Save a file with desired patterns as.gitignore with either direct string matches or widcard globs

---

```
git config --global core.excludefile [file]
```

System wide ignore pattern for all local repositories

## Share &amp; Update

## Rewrite History

## Temporary commits