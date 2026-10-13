# pi-clear

Adds `/clear` to [pi](https://pi.dev) as an alias for the built-in `/new`.

## Install

```bash
pi install git:github.com/bradleydwyer/pi-clear
```

Restart pi, or run `/reload`, then type `/clear` to start a fresh session.

## What it does

One registered command that calls `ctx.newSession()`, the same session reset the
built-in `/new` runs, including its cancel handling. `/new` keeps working.

## Develop against a checkout

```bash
pi -e ./extensions/clear.ts
```
