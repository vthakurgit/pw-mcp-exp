# MCP Server Examples

This Project excercise the Playwright MCP Server automatic code generation by Github Copilot using Agent mode.

## Install MCP Server:

Multiple ways to install mcp server are offically listed [here](https://github.com/mcp/microsoft/playwright-mcp). Below CLI method is most useful as this worked for me, got some npm auth related errors by other methods:

## For VS Code

```
code --add-mcp '{"name":"playwright","command":"npx","args":["@playwright/mcp@latest"]}'
```

### Run Playwright tests:

```
npx playwright test tests/hrmDemoTest.spec.ts --headed --project=chromium
```

### Prompt used

For this excercise with Playwright MCP server following prompt is used:

```
After login to hrm website(https://opensource-demo.orangehrmlive.com),
with username 'admin' and password 'admin123',
give me list of importat elements I can validate on the dashboard or home page.
```

Playwright MCP gave me suggessions for critical elements to validated on the page and written test, which had few errors on 1st attempt but I was able to be correct them easily with minimal efforts.

![MCP Server Example](_assets/MCPServerExcercise.png)
