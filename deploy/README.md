# amaeli on Proxmox (LXC 101)

Set up with the homelab runbook
[`add-a-site.md`](https://github.com/eliya-amanoeel/homelab/blob/main/docs/runbooks/add-a-site.md),
CT ID `101`, hostname `amaeli`, IP `192.168.68.21`. Nothing on top of it: a
static Vite build with no client-side routing, so no `try_files`.

| File here | Goes to |
|---|---|
| `Caddyfile` | `/etc/caddy/Caddyfile` |

The workflow deploys only the build output. A change to the `Caddyfile` is
copied by hand, from the Mac:

```bash
scp deploy/Caddyfile root@192.168.68.21:/etc/caddy/Caddyfile
ssh root@192.168.68.21 'caddy validate --config /etc/caddy/Caddyfile && systemctl reload caddy'
```
