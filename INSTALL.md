# Installation Instructions

## Install Dependencies

Since GSAP was added to the project, you need to install it. Run:

```bash
npm install
```

This will install all dependencies including GSAP.

## If you get PowerShell execution policy errors:

If you see errors like "cannot be loaded because running scripts is disabled", you have two options:

### Option 1: Enable PowerShell Scripts (Recommended)
Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run:
```bash
npm install
```

### Option 2: Use Command Prompt instead
Open Command Prompt (cmd) instead of PowerShell and run:
```bash
npm install
```

## After Installation

Once dependencies are installed, start the dev server:
```bash
npm run dev
```

The portfolio should now work with all GSAP animations!

