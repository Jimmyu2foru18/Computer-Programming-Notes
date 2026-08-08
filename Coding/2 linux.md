# Linux Administration II

## Networking, Scripting & Security

Advanced Linux administration covering networking, automation, user management, and systemd.

### Key Topics
- Networking commands: ip, ss, netstat, ping, and curl
- Process management: ps, top, htop, kill, and nice
- System information: uname, lscpu, free, and df
- Shell scripting: bash syntax, variables, loops, and functions
- User & group management: useradd, usermod, sudo, and groups
- Systemd services: unit files, journalctl, and service management
- Logs & maintenance: logrotate, journald, and troubleshooting
- Backups & recovery: rsync, tar, cron, and snapshots
- Security & firewall: iptables/nftables, ufw, and fail2ban
- Troubleshooting & optimization: strace, perf, and tuning

```bash
# Example: Systemd service
[Unit]
Description=My App
After=network.target

[Service]
ExecStart=/usr/bin/myapp
Restart=always

[Install]
WantedBy=multi-user.target
```

## References
- [TLDR Pages](https://tldr.sh/)
