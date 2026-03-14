# Contributing to Stellar Tip Jar Frontend

Thanks for your interest in contributing. New contributors are very welcome.

## How to Contribute

1. Find an issue or open a new issue describing the problem/feature.
2. Fork the repository to your own GitHub account.
3. Clone your fork locally.
4. Create a branch for your work.
5. Implement changes and add/update tests where relevant.
6. Open a Pull Request (PR) to the main repository.

## Fork the Repository

1. Click **Fork** on GitHub.
2. Clone your fork:

```bash
git clone https://github.com/<your-username>/stellar-tipjar-frontend.git
cd stellar-tipjar-frontend
```

3. Add upstream remote:

```bash
git remote add upstream https://github.com/<upstream-org>/stellar-tipjar-frontend.git
```

## Create Branches

Use clear branch names:

```bash
git checkout -b feat/add-wallet-provider
```

Examples:

- `feat/<feature-name>`
- `fix/<bug-name>`
- `docs/<topic>`
- `chore/<task>`

## Pull Request Guidelines

- Keep PRs focused on one logical change.
- Use a descriptive title and summary.
- Link related issues (`Closes #123`).
- Include screenshots for UI changes.
- Ensure lint and type checks pass before requesting review.
- Be responsive to feedback and requested changes.

## Coding Conventions

- Use TypeScript and keep strict typing where possible.
- Follow existing folder boundaries (`components`, `hooks`, `services`, `utils`).
- Prefer small, reusable components.
- Add comments only where the code is not immediately obvious.
- Keep styling in Tailwind utility classes and shared style files.

## Issue Guidelines

When opening an issue, include:

- Clear title
- Steps to reproduce (for bugs)
- Expected behavior
- Actual behavior
- Screenshots/logs when applicable
- Environment details (OS, Node.js version, browser)

## New Contributors

First-time open-source contributors are encouraged to participate. If you are new, look for labels like `good first issue` and ask questions in the issue discussion.
