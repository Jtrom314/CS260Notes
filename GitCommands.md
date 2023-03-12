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
