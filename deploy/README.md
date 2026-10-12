# amaeli on Proxmox (LXC)

Set up with the homelab runbook `add-a-site.md`, hostname `amaeli`. Nothing on
top of it: a static Vite build with no client-side routing, so no `try_files`.

| File here | Goes to |
|---|---|
| `Caddyfile` | `/etc/caddy/Caddyfile` |

The workflow deploys only the build output. A change to the `Caddyfile` is
copied by hand, from the Mac, through the `amaeli` host alias in
`~/.ssh/config`:

```bash
scp deploy/Caddyfile amaeli:/etc/caddy/Caddyfile
ssh amaeli 'caddy validate --config /etc/caddy/Caddyfile && systemctl reload caddy'
```
