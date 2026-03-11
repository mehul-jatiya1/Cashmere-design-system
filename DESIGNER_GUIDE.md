# Cashmere Design System — Designer's Guide to Generating Components

> **Who is this for?** Junior designers who want to turn a Figma component into a live, coded component in the Cashmere design system — no coding experience required.

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

### Step 1 — Install Claude Code

Claude Code is the AI tool that does the work. Open your **Terminal** (press `Cmd + Space`, type "Terminal", press Enter) and run:

```bash
npm install -g @anthropic-ai/claude-code
```

When it finishes, verify it worked:
```bash
claude --version
```
You should see a version number like `1.x.x`.

### Step 2 — Get an Anthropic API Key

1. Go to **console.anthropic.com** in your browser
2. Sign in (ask Mehul for the team credentials)
3. Click **API Keys** in the left sidebar
4. Click **Create Key**, give it your name (e.g. "Priya's Key")
5. Copy the key — it starts with `sk-ant-...`

Now save it permanently so you never have to type it again:
```bash
echo 'export ANTHROPIC_API_KEY=sk-ant-PASTE-YOUR-KEY-HERE' >> ~/.zshrc
source ~/.zshrc
```

Verify it's saved:
```bash
echo $ANTHROPIC_API_KEY
```
You should see your key printed.

### Step 3 — Install the Component Generator Plugin

This installs the `/generate-component` command into Claude Code:

```bash
mkdir -p ~/.claude/skills/generate-cashmere-component
curl -o ~/.claude/skills/generate-cashmere-component/SKILL.md \
  https://raw.githubusercontent.com/mehul-jatiya1/Cashmere-design-system/main/.claude/skills/generate-cashmere-component/SKILL.md
```

> **If the above doesn't work**, ask Mehul to AirDrop you the file `SKILL.md` and place it at:
> `~/.claude/skills/generate-cashmere-component/SKILL.md`

### Step 4 — Install Node.js & pnpm (if not already installed)

```bash
# Check if they're installed (if you see version numbers, you're good)
node --version
pnpm --version

# If not installed:
brew install node
npm install -g pnpm
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
/generate-component https://www.figma.com/design/YOUR-FIGMA-LINK-HERE
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
Then visit http://localhost:6006 — your new component will appear in the left sidebar.

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

It also automatically updates `packages/cashmere/src/index.ts` to export your new component, and pushes everything to GitHub.

---

## Troubleshooting

**"command not found: claude"**
→ Restart your terminal and try again. If still broken, run `npm install -g @anthropic-ai/claude-code`

**"authentication error" or "invalid api key"**
→ Your API key isn't set. Run:
```bash
echo $ANTHROPIC_API_KEY
```
If it's empty, redo Step 2 of the One-Time Setup.

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
