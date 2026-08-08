# Computer Networks II

## Advanced Protocols & Network Services

This section covers application-layer protocols, routing, wireless standards, and network security.

### Key Topics
- DNS: hierarchy, record types, and resolution process
- DHCP: DORA process, relay agents, and IP assignment
- HTTP/HTTPS: request/response cycle, methods, and status codes
- Email: SMTP, POP3, IMAP, and mail flow
- Routing: static vs dynamic, distance vector, and link-state
- Switching: VLANs, trunking, and STP
- Wireless: Wi-Fi standards (802.11a/b/g/n/ac/ax), channels, and security
- Network security: firewalls, VPNs, IPSec, and zero trust
- Monitoring: SNMP, NetFlow, and packet capture with Wireshark

```bash
# Example: Packet capture
sudo tcpdump -i eth0 port 443 -w capture.pcap
wireshark capture.pcap
```

## References
- [Wireshark Documentation](https://www.wireshark.org/docs/)
