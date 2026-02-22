

# MCP Server Examples
This Project excercise the Playwright MCP Server automatic code generation using Github Copilot using Agent mode.

## Install MCP Server:
Multiple ways to install listed [here](https://github.com/mcp/microsoft/playwright-mcp) listing CLI method as this worked for me:

## For VS Code
```
code --add-mcp '{"name":"playwright","command":"npx","args":["@playwright/mcp@latest"]}'
```

### Run Playwright tests:

```
npx playwright test tests/hrmDemoTest.spec.ts --headed --project=chromium
```
