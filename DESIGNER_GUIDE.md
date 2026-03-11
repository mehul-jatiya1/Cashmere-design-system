# Cashmere Design System — Designer's Guide to Generating Components

> **Who is this for?** Any designer or non-developer who wants to turn a Figma component into a live, coded component in the Cashmere design system — no coding experience required.

---

## What You'll Be Doing

You will take a component you designed in Figma (e.g. a Badge, Modal, Tooltip) and use Claude AI to:
1. Read your Figma design
2. Write the React component code
3. Write the Storybook stories (so it shows up at http://localhost:6006)
4. Save and push everything to GitHub automatically

The whole process takes about 5 minutes.

---

## One-Time Setup (Do This Once)

### Step 1 — Get a Claude Pro Subscription

1. Go to **claude.ai** in your browser
2. Sign up and subscribe to **Claude Pro** ($20/month)
3. That's it — no API keys needed

### Step 2 — Install Claude Code

Claude Code is the AI tool that runs in Terminal. Open your **Terminal** (press `Cmd + Space`, type "Terminal", press Enter) and run:

```bash
npm install -g @anthropic-ai/claude-code
```

When it finishes, verify it worked:
```bash
claude --version
```
You should see a version number like `1.x.x`.

### Step 3 — Log In to Claude Code

Run this in Terminal:
```bash
claude
```

The first time, it will open a browser window — log in with the **same email and password** you use on claude.ai. You'll only need to do this once.

### Step 4 — Install the Component Generator Plugin

Run this in Terminal to install the `/generate-cashmere-component` command:

```bash
mkdir -p ~/.claude/skills/generate-cashmere-component
curl -o ~/.claude/skills/generate-cashmere-component/SKILL.md \
  https://raw.githubusercontent.com/mehul-jatiya1/Cashmere-design-system/main/.claude/skills/generate-cashmere-component/SKILL.md
```

> **If the above doesn't work**, ask Mehul to AirDrop you the file `SKILL.md` and place it at:
> `~/.claude/skills/generate-cashmere-component/SKILL.md`

### Step 5 — Install Node.js & pnpm (if not already installed)

```bash
# Check if they're installed (if you see version numbers, you're good)
node --version
pnpm --version

# If not installed:
brew install node
npm install -g pnpm
```

### Step 6 — Clone the Cashmere Repo (if you don't have it)

```bash
git clone https://github.com/mehul-jatiya1/Cashmere-design-system.git ~/Documents/cashmere
cd ~/Documents/cashmere
pnpm install
```

---

## Every Time You Want to Generate a Component

### Step 1 — Get the Figma Link for Your Component

1. Open Figma and go to your component's frame
2. Right-click the component frame → **Copy link to selection**
3. The link looks like: `https://www.figma.com/design/ABC123.../Cashmere?node-id=123-456`

### Step 2 — Open the Project in Claude Code

Open Terminal and run:
```bash
cd ~/Documents/cashmere
claude
```

You'll see the Claude Code prompt appear.

### Step 3 — Run the Generator

Type this command (replace the URL with your actual Figma link):

```
/generate-cashmere-component https://www.figma.com/design/YOUR-FIGMA-LINK-HERE
```

Then press **Enter** and watch Claude do its work. You'll see it:
- Reading your Figma design
- Writing component code
- Writing Storybook stories
- Exporting the component
- Pushing to GitHub

**Do not close the terminal while it's running.**

### Step 4 — View Your Component in Storybook

Once Claude says it's done, open your browser and go to:

**http://localhost:6006**

If Storybook isn't running yet, open a new terminal tab and run:
```bash
cd ~/Documents/cashmere
pnpm dev
```
Then visit http://localhost:6006 — your new component will appear in the left sidebar under **Components**.

---

## What Gets Created Automatically

For a component called e.g. `Badge`, Claude will create these files for you:

```
packages/cashmere/src/components/Badge/
  ├── Badge.tsx          ← The actual React component
  ├── Badge.module.css   ← All the styles
  └── index.ts           ← Export file

apps/storybook/src/stories/
  └── Badge.stories.tsx  ← Storybook preview with all variants
```

It also automatically updates the main export file and pushes everything to GitHub.

---

## Troubleshooting

**"command not found: claude"**
→ Restart your terminal and try again. If still broken, run `npm install -g @anthropic-ai/claude-code`

**"not logged in" or "authentication error"**
→ Run `claude` in terminal — it will open a browser to log in with your claude.ai account.

**Storybook shows a blank page**
→ Wait 30 more seconds and refresh. It takes ~30s to compile after `pnpm dev`.

**"I can't find my component in Storybook"**
→ Look under **Components** in the Storybook left sidebar. Search by the component name.

**Claude says "I can't access the Figma file"**
→ Make sure your Figma link is correct and the file is set to "Anyone with the link can view". In Figma: Share → Change to "Anyone with the link" → View.

---

## Tips for Better Results

- **Name your Figma frame clearly** — name it exactly what you want the component to be called (e.g. "Badge", not "New Frame 3")
- **Use auto-layout in Figma** — components with auto-layout produce cleaner code
- **Include all variants in one frame** — if your component has multiple states (default, hover, disabled), put them all in one Figma frame before copying the link
- **Use Cashmere tokens** — use the token variables in Figma (not raw hex values) so the generated CSS uses the right token names

---

## File Locations Reference

| What | Where |
|------|-------|
| Project folder | `~/Documents/cashmere` |
| Component source code | `~/Documents/cashmere/packages/cashmere/src/components/` |
| Storybook stories | `~/Documents/cashmere/apps/storybook/src/stories/` |
| Live Storybook URL | http://localhost:6006 |
| GitHub repo | https://github.com/mehul-jatiya1/Cashmere-design-system |
| Netlify (live site) | https://sparkly-syrniki-6b1472.netlify.app |

---

## Questions?

Ping **Mehul** on Slack or check the main `README.md` in this folder.
