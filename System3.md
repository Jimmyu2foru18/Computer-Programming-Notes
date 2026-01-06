# ️ System Administration & Operating Systems:
---

## Introduction
### What is System Administration?
System Administration is the practice of managing and maintaining computer systems, servers, and networks to ensure they operate efficiently, securely, and reliably. System administrators are the backbone of IT infrastructure, responsible for everything from user management to system security.
### Why Learn System Administration?
```python
class SystemAdminBenefits:
def __init__(self):
self.career_opportunities = {
'high_demand': 'Critical role in every organization',
'job_security': 'Essential for business operations',
'salary_potential': 'Competitive compensation packages',
'growth_path': 'Clear progression to senior roles'
}
self.skills_developed = [
'Problem-solving and troubleshooting',
'Automation and scripting',
'Security and compliance',
'Performance optimization',
'Project management',
'Communication and documentation'
]
self.industry_applications = {
'enterprise': 'Large-scale infrastructure management',
'cloud_computing': 'AWS, Azure, Google Cloud administration',
'devops': 'CI/CD pipeline management',
'cybersecurity': 'Security operations and incident response',
'data_centers': 'Server and network infrastructure'
}
```
### ️ Learning Path Overview
```python
class SystemAdminLearningPath:
def __init__(self):
self.beginner_level = {
'duration': '3-6 months',
'focus': [
'Operating system basics',
'Command line proficiency',
'Basic networking concepts',
'User and permission management'
]
}
self.intermediate_level = {
'duration': '6-12 months',
'focus': [
'Server administration',
'System monitoring and logging',
'Automation scripting',
'Security implementation'
]
}
self.advanced_level = {
'duration': '1-2 years',
'focus': [
'Enterprise infrastructure design',
'Cloud platform management',
'DevOps practices',
'Disaster recovery planning'
]
}
```
---
## Operating System Fundamentals
### ️ What is an Operating System?
```python
class OperatingSystem:
def __init__(self):
self.definition = "Software that manages computer hardware and provides services for applications"
self.core_functions = {
'process_management': {
'description': 'Managing running programs and their resources',
'responsibilities': [
'Process creation and termination',
'CPU scheduling',
'Inter-process communication',
'Synchronization'
]
},
'memory_management': {
'description': 'Managing system memory allocation',
'responsibilities': [
'Memory allocation and deallocation',
'Virtual memory management',
'Memory protection',
'Garbage collection'
]
},
'file_system_management': {
'description': 'Managing data storage and retrieval',
'responsibilities': [
'File creation, deletion, and modification',
'Directory structure management',
'File permissions and security',
'Storage device management'
]
},
'device_management': {
'description': 'Managing hardware devices',
'responsibilities': [
'Device driver management',
'I/O operations',
'Hardware abstraction',
'Plug and play support'
]
}
}
self.types = {
'desktop_os': {
'examples': ['Windows 10/11', 'macOS', 'Ubuntu Desktop'],
'characteristics': ['User-friendly interface', 'Multimedia support', 'Application ecosystem']
},
'server_os': {
'examples': ['Windows Server', 'Linux distributions', 'Unix variants'],
'characteristics': ['High reliability', 'Multi-user support', 'Network services']
},
'mobile_os': {
'examples': ['Android', 'iOS', 'Windows Mobile'],
'characteristics': ['Touch interface', 'Power efficiency', 'App stores']
},
'embedded_os': {
'examples': ['FreeRTOS', 'VxWorks', 'Embedded Linux'],
'characteristics': ['Real-time capabilities', 'Resource constraints', 'Specialized functions']
}
}
```
### ️ OS Architecture
```python
class OSArchitecture:
def __init__(self):
self.kernel_types = {
'monolithic_kernel': {
'description': 'All OS services run in kernel space',
'advantages': ['High performance', 'Efficient communication'],
'disadvantages': ['Less stable', 'Harder to maintain'],
'examples': ['Linux', 'Unix']
},
'microkernel': {
'description': 'Minimal kernel with services in user space',
'advantages': ['More stable', 'Modular design'],
'disadvantages': ['Performance overhead', 'Complex communication'],
'examples': ['Minix', 'QNX']
},
'hybrid_kernel': {
'description': 'Combination of monolithic and microkernel',
'advantages': ['Balance of performance and stability'],
'disadvantages': ['Complexity'],
'examples': ['Windows NT', 'macOS']
}
}
self.system_layers = {
'hardware_layer': {
'components': ['CPU', 'Memory', 'Storage', 'I/O devices'],
'description': 'Physical components of the computer'
},
'kernel_layer': {
'components': ['Process scheduler', 'Memory manager', 'File system', 'Device drivers'],
'description': 'Core OS functionality'
},
'system_call_interface': {
'components': ['API for applications', 'System call handlers'],
'description': 'Interface between user and kernel space'
},
'user_space': {
'components': ['Applications', 'System utilities', 'User interface'],
'description': 'Where user programs execute'
}
}
```
### Process and Thread Management
```python
class ProcessManagement:
def __init__(self):
self.process_states = {
'new': 'Process is being created',
'ready': 'Process is waiting to be assigned to CPU',
'running': 'Process is currently executing',
'waiting': 'Process is waiting for I/O or event',
'terminated': 'Process has finished execution'
}
self.scheduling_algorithms = {
'first_come_first_served': {
'description': 'Processes executed in arrival order',
'advantages': ['Simple to implement'],
'disadvantages': ['Poor average waiting time']
},
'shortest_job_first': {
'description': 'Shortest process executed first',
'advantages': ['Optimal average waiting time'],
'disadvantages': ['Requires knowledge of execution time']
},
'round_robin': {
'description': 'Each process gets fixed time slice',
'advantages': ['Fair allocation', 'Good for interactive systems'],
'disadvantages': ['Context switching overhead']
},
'priority_scheduling': {
'description': 'Processes scheduled by priority',
'advantages': ['Important processes get preference'],
'disadvantages': ['Starvation of low-priority processes']
}
}
self.thread_vs_process = {
'process': {
'definition': 'Independent program in execution',
'characteristics': [
'Own memory space',
'Own resources',
'Heavy context switching',
'Inter-process communication required'
]
},
'thread': {
'definition': 'Lightweight unit of execution within process',
'characteristics': [
'Shared memory space',
'Shared resources',
'Light context switching',
'Direct communication possible'
]
}
}
```
### Memory Management
```python
class MemoryManagement:
def __init__(self):
self.memory_hierarchy = {
'registers': {
'size': 'Bytes to KB',
'speed': 'Fastest',
'cost': 'Highest',
'location': 'CPU'
},
'cache': {
'size': 'KB to MB',
'speed': 'Very fast',
'cost': 'High',
'location': 'CPU/Motherboard'
},
'main_memory': {
'size': 'GB',
'speed': 'Fast',
'cost': 'Medium',
'location': 'RAM modules'
},
'secondary_storage': {
'size': 'TB',
'speed': 'Slow',
'cost': 'Low',
'location': 'Hard drives, SSDs'
}
}
self.memory_allocation_strategies = {
'contiguous_allocation': {
'description': 'Process allocated contiguous memory block',
'types': ['Fixed partitioning', 'Dynamic partitioning'],
'problems': ['Internal fragmentation', 'External fragmentation']
},
'non_contiguous_allocation': {
'description': 'Process memory can be scattered',
'types': ['Paging', 'Segmentation'],
'advantages': ['Better memory utilization', 'Eliminates external fragmentation']
}
}
self.virtual_memory = {
'concept': 'Technique to use secondary storage as extension of main memory',
'benefits': [
'Larger address space than physical memory',
'Memory protection between processes',
'Efficient memory sharing',
'Program relocation flexibility'
],
'implementation': {
'paging': 'Fixed-size blocks (pages)',
'segmentation': 'Variable-size blocks (segments)',
'page_replacement': ['FIFO', 'LRU', 'Optimal']
}
}
```
---
## Linux System Administration
### Getting Started with Linux
```bash
# Essential Linux Commands for System Administration
# System Information
uname -a # System information
hostname # Display hostname
whoami # Current user
id # User and group IDs
uptime # System uptime and load
# File and Directory Operations
ls -la # List files with details
cd /path/to/directory # Change directory
pwd # Print working directory
mkdir -p /path/to/dir # Create directory (with parents)
rmdir directory # Remove empty directory
rm -rf directory # Remove directory and contents
cp -r source destination # Copy files/directories
mv source destination # Move/rename files
find /path -name "*.txt" # Find files by name
locate filename # Locate files in database
# File Permissions and Ownership
chmod 755 filename # Change file permissions
chown user:group filename # Change ownership
chgrp group filename # Change group ownership
umask 022 # Set default permissions
# Text Processing
cat filename # Display file content
less filename # View file with pagination
head -n 10 filename # First 10 lines
tail -f filename # Follow file changes
grep "pattern" filename # Search text patterns
sed 's/old/new/g' file # Stream editor
awk '{print $1}' file # Text processing
# System Monitoring
top # Process monitor
htop # Enhanced process monitor
ps aux # List all processes
ps -ef | grep process # Find specific process
kill -9 PID # Kill process by PID
killall process_name # Kill process by name
# Disk Usage
df -h # Disk space usage
du -sh directory # Directory size
lsblk # List block devices
fdisk -l # List disk partitions
# Network Commands
ifconfig # Network interface configuration
ip addr show # Show IP addresses
netstat -tuln # Network connections
ss -tuln # Socket statistics
ping hostname # Test connectivity
wget URL # Download files
curl URL # Transfer data
```
### User and Group Management
```bash
#!/bin/bash
# User and Group Management Script
# User Management
useradd -m -s /bin/bash username # Create user with home directory
usermod -aG sudo username # Add user to sudo group
userdel -r username # Delete user and home directory
passwd username # Change user password
su - username # Switch to user
sudo command # Execute as root
# Group Management
groupadd groupname # Create group
groupdel groupname # Delete group
groupmod -n newname oldname # Rename group
groups username # Show user's groups
# Password and Account Policies
chage -l username # View password aging info
chage -M 90 username # Set password expiry to 90 days
chage -E 2024-12-31 username # Set account expiry date
# Viewing User Information
cat /etc/passwd # User account information
cat /etc/group # Group information
cat /etc/shadow # Password hashes (root only)
who # Currently logged in users
w # Detailed user activity
last # Login history
```
### System Services Management
```bash
#!/bin/bash
# Systemd Service Management
# Service Control
systemctl start service_name # Start service
systemctl stop service_name # Stop service
systemctl restart service_name # Restart service
systemctl reload service_name # Reload configuration
systemctl enable service_name # Enable at boot
systemctl disable service_name # Disable at boot
# Service Status
systemctl status service_name # Service status
systemctl is-active service_name # Check if active
systemctl is-enabled service_name # Check if enabled
systemctl list-units --type=service # List all services
# System Control
systemctl reboot # Restart system
systemctl poweroff # Shutdown system
systemctl suspend # Suspend system
systemctl hibernate # Hibernate system
# Logs and Troubleshooting
journalctl -u service_name # View service logs
journalctl -f # Follow system logs
journalctl --since "2024-01-01" # Logs since date
journalctl -p err # Error messages only
# Creating Custom Service
cat > /etc/systemd/system/myapp.service << EOF
[Unit]
Description=My Application
After=network.target
[Service]
Type=simple
User=myuser
WorkingDirectory=/opt/myapp
ExecStart=/opt/myapp/start.sh
Restart=always
[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload # Reload systemd configuration
systemctl enable myapp.service # Enable custom service
```
### Package Management
```bash
#!/bin/bash
# Package Management for Different Distributions
# Debian/Ubuntu (APT)
apt update # Update package lists
apt upgrade # Upgrade packages
apt install package_name # Install package
apt remove package_name # Remove package
apt purge package_name # Remove package and config
apt search keyword # Search packages
apt show package_name # Package information
apt autoremove # Remove unused packages
# Red Hat/CentOS/Fedora (YUM/DNF)
yum update # Update packages (CentOS 7)
dnf update # Update packages (CentOS 8+/Fedora)
yum install package_name # Install package
yum remove package_name # Remove package
yum search keyword # Search packages
yum info package_name # Package information
yum history # Transaction history
# SUSE (Zypper)
zypper refresh # Refresh repositories
zypper update # Update packages
zypper install package_name # Install package
zypper remove package_name # Remove package
zypper search keyword # Search packages
# Snap Packages (Universal)
snap list # List installed snaps
snap install package_name # Install snap package
snap remove package_name # Remove snap package
snap refresh # Update all snaps
# Flatpak (Universal)
flatpak list # List installed flatpaks
flatpak install package_name # Install flatpak
flatpak uninstall package_name # Remove flatpak
flatpak update # Update all flatpaks
```
### ️ File System Management
```bash
#!/bin/bash
# File System Management
# Disk Partitioning
fdisk /dev/sda # Partition disk (interactive)
parted /dev/sda # Advanced partitioning
lsblk # List block devices
blkid # Show UUID and file system types
# File System Creation
mkfs.ext4 /dev/sda1 # Create ext4 file system
mkfs.xfs /dev/sda1 # Create XFS file system
mkfs.btrfs /dev/sda1 # Create Btrfs file system
# Mounting File Systems
mount /dev/sda1 /mnt/data # Mount file system
umount /mnt/data # Unmount file system
mount -a # Mount all in /etc/fstab
# /etc/fstab Configuration
cat >> /etc/fstab << EOF
# Device Mount Point FS Type Options Dump Pass
/dev/sda1 /mnt/data ext4 defaults 0 2
UUID=xxx-xxx /home ext4 defaults,noatime 0 2
EOF
# File System Checking and Repair
fsck /dev/sda1 # Check file system
fsck -f /dev/sda1 # Force check
e2fsck -f /dev/sda1 # Check ext2/3/4
xfs_repair /dev/sda1 # Repair XFS
# LVM (Logical Volume Management)
pvcreate /dev/sda1 # Create physical volume
vgcreate vg_data /dev/sda1 # Create volume group
lvcreate -L 10G -n lv_data vg_data # Create logical volume
lvextend -L +5G /dev/vg_data/lv_data # Extend logical volume
resize2fs /dev/vg_data/lv_data # Resize file system
# RAID Configuration
mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sda1 /dev/sdb1
mdadm --detail /dev/md0 # RAID status
cat /proc/mdstat # RAID information
```
---
## Windows System Administration
### ️ Windows Server Management
```powershell
# PowerShell Commands for Windows Administration
# System Information
Get-ComputerInfo # Detailed system information
Get-WmiObject -Class Win32_OperatingSystem # OS information
Get-Process # Running processes
Get-Service # System services
Get-EventLog -LogName System -Newest 10 # System event logs
# User and Group Management
New-LocalUser -Name "username" -Password (ConvertTo-SecureString "password" -AsPlainText -Force)
Add-LocalGroupMember -Group "Administrators" -Member "username"
Get-LocalUser # List local users
Get-LocalGroup # List local groups
Remove-LocalUser -Name "username" # Delete user
# Active Directory (if domain controller)
Import-Module ActiveDirectory
New-ADUser -Name "John Doe" -SamAccountName "jdoe" -UserPrincipalName "jdoe@domain.com"
Get-ADUser -Filter * # List all AD users
Get-ADGroup -Filter * # List all AD groups
Add-ADGroupMember -Identity "GroupName" -Members "username"
# Service Management
Start-Service -Name "ServiceName" # Start service
Stop-Service -Name "ServiceName" # Stop service
Restart-Service -Name "ServiceName" # Restart service
Set-Service -Name "ServiceName" -StartupType Automatic # Set startup type
Get-Service | Where-Object {$_.Status -eq "Running"} # Running services
# Registry Management
Get-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion"
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer" -Name "ShowHidden" -Value 1
New-Item -Path "HKLM:\SOFTWARE\MyApp" -Force
Remove-Item -Path "HKLM:\SOFTWARE\MyApp" -Recurse
# File and Folder Operations
Get-ChildItem -Path C:\ -Recurse # List files recursively
Copy-Item -Path "source" -Destination "destination" -Recurse
Move-Item -Path "source" -Destination "destination"
Remove-Item -Path "file_or_folder" -Recurse -Force
Get-Acl -Path "C:\folder" # Get permissions
Set-Acl -Path "C:\folder" -AclObject $acl # Set permissions
# Network Configuration
Get-NetIPConfiguration # Network configuration
Get-NetAdapter # Network adapters
Set-NetIPInterface -InterfaceAlias "Ethernet" -DHCP Enabled
New-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress "192.168.1.100" -PrefixLength 24
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses "8.8.8.8","8.8.4.4"
# Windows Features
Get-WindowsFeature # List available features
Install-WindowsFeature -Name "IIS-WebServerRole" -IncludeManagementTools
Uninstall-WindowsFeature -Name "FeatureName"
Enable-WindowsOptionalFeature -Online -FeatureName "Microsoft-Windows-Subsystem-Linux"
# Scheduled Tasks
$action = New-ScheduledTaskAction -Execute "PowerShell.exe" -Argument "-File C:\Scripts\backup.ps1"
$trigger = New-ScheduledTaskTrigger -Daily -At 2AM
Register-ScheduledTask -TaskName "DailyBackup" -Action $action -Trigger $trigger
Get-ScheduledTask # List scheduled tasks
Start-ScheduledTask -TaskName "TaskName" # Run task manually
```
### Group Policy Management
```powershell
# Group Policy Management
# Import Group Policy module
Import-Module GroupPolicy
# Create new GPO
New-GPO -Name "Security Policy" -Comment "Company security settings"
# Link GPO to OU
New-GPLink -Name "Security Policy" -Target "OU=Computers,DC=domain,DC=com"
# Backup and Restore GPOs
Backup-GPO -Name "Security Policy" -Path "C:\GPOBackups"
Restore-GPO -Name "Security Policy" -Path "C:\GPOBackups" -BackupId $backupId
# Generate GPO Reports
Get-GPOReport -Name "Security Policy" -ReportType HTML -Path "C:\Reports\SecurityPolicy.html"
# Common Group Policy Settings via Registry
# Disable USB storage
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\USBSTOR" -Name "Start" -Value 4
# Set password policy
secedit /export /cfg C:\secpol.cfg
# Edit the file to modify password settings
secedit /configure /db C:\Windows\security\local.sdb /cfg C:\secpol.cfg
# Windows Update settings
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU" -Name "NoAutoUpdate" -Value 0
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU" -Name "AUOptions" -Value 4
```
### ️ Windows Security Management
```powershell
# Windows Security Management
# Windows Defender
Get-MpComputerStatus # Defender status
Update-MpSignature # Update definitions
Start-MpScan -ScanType QuickScan # Quick scan
Start-MpScan -ScanType FullScan # Full scan
Set-MpPreference -DisableRealtimeMonitoring $false # Enable real-time protection
# Firewall Management
Get-NetFirewallProfile # Firewall profiles
Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled True
New-NetFirewallRule -DisplayName "Allow HTTP" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow
Get-NetFirewallRule | Where-Object {$_.Enabled -eq 'True'} # Active rules
Remove-NetFirewallRule -DisplayName "RuleName"
# BitLocker Management
Get-BitLockerVolume # BitLocker status
Enable-BitLocker -MountPoint "C:" -EncryptionMethod XtsAes256 -UsedSpaceOnly
Unlock-BitLocker -MountPoint "C:" -Password (ConvertTo-SecureString "password" -AsPlainText -Force)
Suspend-BitLocker -MountPoint "C:" # Suspend encryption
Resume-BitLocker -MountPoint "C:" # Resume encryption
# Certificate Management
Get-ChildItem -Path Cert:\LocalMachine\My # List certificates
Import-Certificate -FilePath "C:\cert.cer" -CertStoreLocation Cert:\LocalMachine\Root
Export-Certificate -Cert $cert -FilePath "C:\exported_cert.cer"
Remove-Item -Path "Cert:\LocalMachine\My\$thumbprint"
# Audit Policy
auditpol /get /category:* # Get audit policies
auditpol /set /subcategory:"Logon" /success:enable /failure:enable
Get-WinEvent -LogName Security -MaxEvents 100 # Security event logs
```
---
## System Security
### ️ Security Fundamentals
```python
class SystemSecurity:
def __init__(self):
self.security_principles = {
'confidentiality': {
'definition': 'Information accessible only to authorized users',
'implementation': [
'Encryption at rest and in transit',
'Access controls and authentication',
'Data classification and handling',
'Secure communication protocols'
]
},
'integrity': {
'definition': 'Information remains accurate and unaltered',
'implementation': [
'Digital signatures and checksums',
'Version control and audit trails',
'Input validation and sanitization',
'Backup and recovery procedures'
]
},
'availability': {
'definition': 'Information and systems accessible when needed',
'implementation': [
'Redundancy and failover systems',
'Load balancing and scaling',
'Disaster recovery planning',
'Performance monitoring and optimization'
]
}
}
self.threat_landscape = {
'malware': {
'types': ['Viruses', 'Worms', 'Trojans', 'Ransomware', 'Spyware'],
'prevention': [
'Antivirus software',
'Regular system updates',
'User education',
'Email filtering',
'Application whitelisting'
]
},
'network_attacks': {
'types': ['DDoS', 'Man-in-the-middle', 'Port scanning', 'Packet sniffing'],
'prevention': [
'Firewalls and IDS/IPS',
'Network segmentation',
'VPN and encrypted communications',
'Regular security assessments'
]
},
'social_engineering': {
'types': ['Phishing', 'Pretexting', 'Baiting', 'Tailgating'],
'prevention': [
'Security awareness training',
'Email security solutions',
'Physical access controls',
'Incident response procedures'
]
}
}
```
### Access Control and Authentication
```bash
#!/bin/bash
# Linux Security Configuration
# SSH Hardening
cat > /etc/ssh/sshd_config << EOF
# SSH Security Configuration
Port 2222 # Change default port
Protocol 2 # Use SSH protocol 2
PermitRootLogin no # Disable root login
PasswordAuthentication no # Use key-based auth only
PubkeyAuthentication yes # Enable public key auth
MaxAuthTries 3 # Limit authentication attempts
ClientAliveInterval 300 # Client timeout
ClientAliveCountMax 2 # Max client alive messages
AllowUsers user1 user2 # Restrict allowed users
DenyUsers baduser # Deny specific users
EOF
systemctl restart sshd # Restart SSH service
# Firewall Configuration (iptables)
#!/bin/bash
# Basic iptables firewall rules
# Flush existing rules
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X
# Set default policies
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT
# Allow loopback
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT
# Allow established connections
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
# Allow SSH (custom port)
iptables -A INPUT -p tcp --dport 2222 -j ACCEPT
# Allow HTTP and HTTPS
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
# Allow ping
iptables -A INPUT -p icmp --icmp-type echo-request -j ACCEPT
# Save rules
iptables-save > /etc/iptables/rules.v4
# UFW (Uncomplicated Firewall) - Ubuntu
ufw enable # Enable firewall
ufw default deny incoming # Default deny incoming
ufw default allow outgoing # Default allow outgoing
ufw allow ssh # Allow SSH
ufw allow 80/tcp # Allow HTTP
ufw allow 443/tcp # Allow HTTPS
ufw status verbose # Show firewall status
# File Permissions and Security
# Set secure permissions on important files
chmod 600 /etc/ssh/ssh_host_*_key # SSH private keys
chmod 644 /etc/passwd # Password file
chmod 640 /etc/shadow # Shadow password file
chmod 755 /etc # System configuration directory
# Find and fix insecure permissions
find / -type f -perm -002 2>/dev/null # World-writable files
find / -type f -perm -004000 2>/dev/null # SUID files
find / -type f -perm -002000 2>/dev/null # SGID files
# SELinux Configuration (Red Hat/CentOS)
getenforce # Check SELinux status
setenforce 1 # Enable SELinux
setsebool -P httpd_can_network_connect on # Set boolean
restorecon -R /var/www/html # Restore context
ls -Z /var/www/html # Show SELinux context
# AppArmor Configuration (Ubuntu/SUSE)
aa-status # AppArmor status
aa-enforce /etc/apparmor.d/usr.bin.firefox # Enforce profile
aa-complain /etc/apparmor.d/usr.bin.firefox # Complain mode
```
### Security Monitoring and Logging
```bash
#!/bin/bash
# Security Monitoring and Logging
# System Log Analysis
# Monitor authentication logs
tail -f /var/log/auth.log # Real-time auth monitoring
grep "Failed password" /var/log/auth.log # Failed login attempts
grep "sudo" /var/log/auth.log # Sudo usage
# Monitor system logs
tail -f /var/log/syslog # System messages
grep "error\|warning" /var/log/syslog # Errors and warnings
# Security-focused log analysis
# Failed SSH attempts
awk '/Failed password/ {print $1, $2, $3, $11}' /var/log/auth.log | sort | uniq -c
# Successful SSH logins
awk '/Accepted password/ {print $1, $2, $3, $9, $11}' /var/log/auth.log
# Root access attempts
grep "su:" /var/log/auth.log
# Intrusion Detection with AIDE
# Install and configure AIDE
apt install aide # Install AIDE
aide --init # Initialize database
mv /var/lib/aide/aide.db.new /var/lib/aide/aide.db
aide --check # Check for changes
# Create AIDE check script
cat > /usr/local/bin/aide-check.sh << 'EOF'
#!/bin/bash
AIDE_LOG="/var/log/aide.log"
aide --check > $AIDE_LOG 2>&1
if [ $? -ne 0 ]; then
echo "AIDE detected changes!" | mail -s "AIDE Alert" admin@company.com
cat $AIDE_LOG | mail -s "AIDE Report" admin@company.com
fi
EOF
chmod +x /usr/local/bin/aide-check.sh
# Schedule daily AIDE checks
echo "0 2 * * * root /usr/local/bin/aide-check.sh" >> /etc/crontab
# Fail2ban for Intrusion Prevention
apt install fail2ban # Install fail2ban
# Configure fail2ban
cat > /etc/fail2ban/jail.local << EOF
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3
[sshd]
enabled = true
port = 2222
logpath = /var/log/auth.log
[apache-auth]
enabled = true
port = http,https
logpath = /var/log/apache2/error.log
[apache-badbots]
enabled = true
port = http,https
logpath = /var/log/apache2/access.log
EOF
systemctl restart fail2ban # Restart fail2ban
fail2ban-client status # Check status
fail2ban-client status sshd # Check SSH jail
```
---
## System Monitoring & Performance
### Performance Monitoring Tools
```bash
#!/bin/bash
# System Performance Monitoring
# CPU Monitoring
top # Real-time process monitor
htop # Enhanced process monitor
sar -u 1 10 # CPU utilization (1 sec, 10 times)
mpstat 1 5 # Multi-processor statistics
vmstat 1 5 # Virtual memory statistics
# Memory Monitoring
free -h # Memory usage
cat /proc/meminfo # Detailed memory info
sar -r 1 10 # Memory utilization
ps aux --sort=-%mem | head -10 # Top memory consumers
# Disk I/O Monitoring
iostat -x 1 5 # Extended I/O statistics
sar -d 1 10 # Disk activity
iotop # I/O usage by process
lsof | grep deleted # Find deleted files still open
# Network Monitoring
netstat -tuln # Network connections
ss -tuln # Socket statistics
sar -n DEV 1 10 # Network interface statistics
iftop # Network usage by connection
nload # Network load monitor
# System Load Monitoring
uptime # System uptime and load
w # Who is logged in and what they're doing
sar -q 1 10 # Queue length and load averages
# Process Monitoring
ps aux # All processes
ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem # Processes sorted by memory
pgrep -f process_name # Find process by name
kill -USR1 $(pgrep process_name) # Send signal to process
# Log File Monitoring
tail -f /var/log/syslog # Follow system log
multitail /var/log/syslog /var/log/auth.log # Monitor multiple logs
logwatch --detail high --mailto admin@company.com # Log analysis
```
### Performance Monitoring Scripts
```python
#!/usr/bin/env python3
# System Performance Monitor
import psutil
import time
import json
from datetime import datetime
class SystemMonitor:
def __init__(self):
self.metrics = {}
def collect_cpu_metrics(self):
"""Collect CPU metrics"""
cpu_percent = psutil.cpu_percent(interval=1)
cpu_count = psutil.cpu_count()
load_avg = psutil.getloadavg()
return {
'cpu_percent': cpu_percent,
'cpu_count': cpu_count,
'load_average': {
'1min': load_avg[0],
'5min': load_avg[1],
'15min': load_avg[2]
}
}
def collect_memory_metrics(self):
"""Collect memory metrics"""
memory = psutil.virtual_memory()
swap = psutil.swap_memory()
return {
'memory': {
'total': memory.total,
'available': memory.available,
'used': memory.used,
'percent': memory.percent
},
'swap': {
'total': swap.total,
'used': swap.used,
'percent': swap.percent
}
}
def collect_disk_metrics(self):
"""Collect disk metrics"""
disk_usage = psutil.disk_usage('/')
disk_io = psutil.disk_io_counters()
return {
'disk_usage': {
'total': disk_usage.total,
'used': disk_usage.used,
'free': disk_usage.free,
'percent': (disk_usage.used / disk_usage.total) * 100
},
'disk_io': {
'read_bytes': disk_io.read_bytes,
'write_bytes': disk_io.write_bytes,
'read_count': disk_io.read_count,
'write_count': disk_io.write_count
}
}
def collect_network_metrics(self):
"""Collect network metrics"""
network_io = psutil.net_io_counters()
network_connections = len(psutil.net_connections())
return {
'network_io': {
'bytes_sent': network_io.bytes_sent,
'bytes_recv': network_io.bytes_recv,
'packets_sent': network_io.packets_sent,
'packets_recv': network_io.packets_recv
},
'connections': network_connections
}
def collect_process_metrics(self):
"""Collect top process metrics"""
processes = []
for proc in psutil.process_iter(['pid', 'name', 'cpu_percent', 'memory_percent']):
try:
processes.append(proc.info)
except (psutil.NoSuchProcess, psutil.AccessDenied):
pass
# Sort by CPU usage
top_cpu = sorted(processes, key=lambda x: x['cpu_percent'] or 0, reverse=True)[:5]
# Sort by memory usage
top_memory = sorted(processes, key=lambda x: x['memory_percent'] or 0, reverse=True)[:5]
return {
'top_cpu_processes': top_cpu,
'top_memory_processes': top_memory,
'total_processes': len(processes)
}
def collect_all_metrics(self):
"""Collect all system metrics"""
timestamp = datetime.now().isoformat()
metrics = {
'timestamp': timestamp,
'cpu': self.collect_cpu_metrics(),
'memory': self.collect_memory_metrics(),
'disk': self.collect_disk_metrics(),
'network': self.collect_network_metrics(),
'processes': self.collect_process_metrics()
}
return metrics
def monitor_continuous(self, interval=60, output_file='system_metrics.json'):
"""Continuously monitor system and log metrics"""
print(f"Starting system monitoring (interval: {interval}s)")
while True:
try:
metrics = self.collect_all_metrics()
# Print summary to console
print(f"\n[{metrics['timestamp']}]")
print(f"CPU: {metrics['cpu']['cpu_percent']:.1f}%")
print(f"Memory: {metrics['memory']['memory']['percent']:.1f}%")
print(f"Disk: {metrics['disk']['disk_usage']['percent']:.1f}%")
print(f"Load: {metrics['cpu']['load_average']['1min']:.2f}")
# Save to file
with open(output_file, 'a') as f:
f.write(json.dumps(metrics) + '\n')
time.sleep(interval)
except KeyboardInterrupt:
print("\nMonitoring stopped.")
break
except Exception as e:
print(f"Error collecting metrics: {e}")
time.sleep(interval)
if __name__ == "__main__":
monitor = SystemMonitor()
# Collect metrics once
metrics = monitor.collect_all_metrics()
print(json.dumps(metrics, indent=2))
# Start continuous monitoring
# monitor.monitor_continuous(interval=30)
```
### Alert System
```bash
#!/bin/bash
# System Alert Script
# Configuration
EMAIL="admin@company.com"
CPU_THRESHOLD=80
MEMORY_THRESHOLD=85
DISK_THRESHOLD=90
LOAD_THRESHOLD=5.0
# Function to send alert
send_alert() {
local subject="$1"
local message="$2"
echo "$message" | mail -s "$subject" "$EMAIL"
logger "ALERT: $subject - $message"
}
# Check CPU usage
check_cpu() {
local cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)
if (( $(echo "$cpu_usage > $CPU_THRESHOLD" | bc -l))); then
send_alert "High CPU Usage" "CPU usage is ${cpu_usage}% (threshold: ${CPU_THRESHOLD}%)"
fi
}
# Check memory usage
check_memory() {
local memory_usage=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')
if [ "$memory_usage" -gt "$MEMORY_THRESHOLD" ]; then
send_alert "High Memory Usage" "Memory usage is ${memory_usage}% (threshold: ${MEMORY_THRESHOLD}%)"
fi
}
# Check disk usage
check_disk() {
while read -r line; do
local usage=$(echo "$line" | awk '{print $5}' | cut -d'%' -f1)
local partition=$(echo "$line" | awk '{print $6}')
if [ "$usage" -gt "$DISK_THRESHOLD" ]; then
send_alert "High Disk Usage" "Disk usage on $partition is ${usage}% (threshold: ${DISK_THRESHOLD}%)"
fi
done < <(df -h | grep -E '^/dev/')
}
# Check system load
check_load() {
local load_1min=$(uptime | awk -F'load average:' '{print $2}' | awk -F',' '{print $1}' | xargs)
if (( $(echo "$load_1min > $LOAD_THRESHOLD" | bc -l))); then
send_alert "High System Load" "1-minute load average is $load_1min (threshold: $LOAD_THRESHOLD)"
fi
}
# Check for failed services
check_services() {
local failed_services=$(systemctl --failed --no-legend | wc -l)
if [ "$failed_services" -gt 0 ]; then
local services=$(systemctl --failed --no-legend | awk '{print $1}' | tr '\n' ' ')
send_alert "Failed Services" "$failed_services service(s) failed: $services"
fi
}
# Check log errors
check_log_errors() {
local error_count=$(journalctl --since "1 hour ago" --priority=err --no-pager -q | wc -l)
if [ "$error_count" -gt 10 ]; then
send_alert "High Error Rate" "$error_count errors in system logs in the last hour"
fi
}
# Main monitoring function
run_checks() {
echo "$(date): Running system checks..."
check_cpu
check_memory
check_disk
check_load
check_services
check_log_errors
echo "$(date): System checks completed."
}
# Run checks
run_checks
# Add to crontab for regular monitoring:
# */5 * * * * /usr/local/bin/system-alert.sh
```
---
## Process Management
### Process Control and Monitoring
```bash
#!/bin/bash
# Advanced Process Management
# Process Information
ps aux # All processes with details
ps -ef # All processes (different format)
ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%cpu # Custom format, sorted by CPU
ps -C process_name # Processes by name
ps -u username # Processes by user
# Process Tree
pstree # Process tree
pstree -p # With PIDs
pstree username # User's process tree
# Finding Processes
pgrep -f "pattern" # Find processes by pattern
pidof process_name # Get PID by process name
which command # Find command location
whereis command # Find command and manual
# Process Signals
kill -l # List all signals
kill -TERM PID # Graceful termination
kill -KILL PID # Force kill
kill -HUP PID # Hangup (reload config)
kill -USR1 PID # User-defined signal 1
killall process_name # Kill all instances
pkill -f "pattern" # Kill by pattern
# Job Control
jobs # List active jobs
bg %1 # Put job 1 in background
fg %1 # Bring job 1 to foreground
nohup command & # Run command immune to hangups
screen -S session_name # Start screen session
tmux new-session -s session_name # Start tmux session
# Process Priority
nice -n 10 command # Start with lower priority
renice 5 PID # Change priority of running process
ionice -c 3 PID # Set I/O priority
# System Resource Limits
ulimit -a # Show all limits
ulimit -n 4096 # Set file descriptor limit
ulimit -u 1024 # Set process limit
ulimit -f 1000000 # Set file size limit
# Process Monitoring Tools
top # Real-time process monitor
htop # Enhanced process monitor
atop # Advanced system monitor
iotop # I/O monitor
iftop # Network monitor
```
### Process Automation and Scheduling
```bash
#!/bin/bash
# Process Scheduling and Automation
# Cron Jobs
crontab -l # List user's cron jobs
crontab -e # Edit user's cron jobs
crontab -r # Remove all cron jobs
sudo crontab -l -u username # List another user's cron jobs
# Cron Examples
# Minute Hour Day Month DayOfWeek Command
# 0 2 * * * /usr/local/bin/backup.sh # Daily at 2 AM
# */15 * * * * /usr/local/bin/check-status.sh # Every 15 minutes
# 0 0 1 * * /usr/local/bin/monthly-report.sh # Monthly on 1st
# 0 9-17 * * 1-5 /usr/local/bin/business-hours.sh # Business hours
# System-wide cron
cat /etc/crontab # System crontab
ls /etc/cron.d/ # Additional cron files
ls /etc/cron.daily/ # Daily scripts
ls /etc/cron.weekly/ # Weekly scripts
ls /etc/cron.monthly/ # Monthly scripts
# At Command (one-time scheduling)
at 14:30 # Schedule for 2:30 PM
at now + 1 hour # Schedule for 1 hour from now
at 2:30 tomorrow # Schedule for tomorrow
atq # List scheduled jobs
atrm job_number # Remove scheduled job
# Systemd Timers (modern alternative to cron)
cat > /etc/systemd/system/backup.timer << EOF
[Unit]
Description=Daily Backup Timer
Requires=backup.service
[Timer]
OnCalendar=daily
Persistent=true
[Install]
WantedBy=timers.target
EOF
cat > /etc/systemd/system/backup.service << EOF
[Unit]
Description=Backup Service
[Service]
Type=oneshot
ExecStart=/usr/local/bin/backup.sh
User=backup
Group=backup
EOF
systemctl daemon-reload # Reload systemd
systemctl enable backup.timer # Enable timer
systemctl start backup.timer # Start timer
systemctl list-timers # List all timers
# Process Monitoring Script
cat > /usr/local/bin/process-monitor.sh << 'EOF'
#!/bin/bash
# Process Monitoring and Auto-restart
PROCESS_NAME="$1"
COMMAND="$2"
LOG_FILE="/var/log/process-monitor.log"
if [ -z "$PROCESS_NAME" ] || [ -z "$COMMAND" ]; then
echo "Usage: $0 <process_name> <command_to_start>"
exit 1
fi
log_message() {
echo "$(date): $1" >> "$LOG_FILE"
}
while true; do
if! pgrep -f "$PROCESS_NAME" > /dev/null; then
log_message "Process $PROCESS_NAME not found. Starting..."
$COMMAND &
log_message "Process $PROCESS_NAME started with PID $!"
fi
sleep 60
done
EOF
chmod +x /usr/local/bin/process-monitor.sh
# Usage: /usr/local/bin/process-monitor.sh "nginx" "systemctl start nginx"
```
### Process Performance Analysis
```python
#!/usr/bin/env python3
# Process Performance Analyzer
import psutil
import time
import argparse
from collections import defaultdict
class ProcessAnalyzer:
def __init__(self):
self.process_history = defaultdict(list)
def get_process_info(self, pid):
"""Get detailed process information"""
try:
proc = psutil.Process(pid)
return {
'pid': proc.pid,
'name': proc.name(),
'status': proc.status(),
'cpu_percent': proc.cpu_percent(),
'memory_percent': proc.memory_percent(),
'memory_info': proc.memory_info(),
'num_threads': proc.num_threads(),
'create_time': proc.create_time(),
'cmdline': ' '.join(proc.cmdline()),
'connections': len(proc.connections()),
'open_files': len(proc.open_files())
}
except (psutil.NoSuchProcess, psutil.AccessDenied):
return None
def monitor_process(self, pid, duration=60, interval=5):
"""Monitor a specific process over time"""
print(f"Monitoring process {pid} for {duration} seconds...")
start_time = time.time()
samples = []
while time.time() - start_time < duration:
info = self.get_process_info(pid)
if info:
info['timestamp'] = time.time()
samples.append(info)
print(f"CPU: {info['cpu_percent']:5.1f}% | "
f"Memory: {info['memory_percent']:5.1f}% | "
f"Threads: {info['num_threads']:3d} | "
f"Files: {info['open_files']:3d}")
else:
print(f"Process {pid} no longer exists")
break
time.sleep(interval)
return samples
def analyze_samples(self, samples):
"""Analyze collected samples"""
if not samples:
return
cpu_values = [s['cpu_percent'] for s in samples]
memory_values = [s['memory_percent'] for s in samples]
thread_values = [s['num_threads'] for s in samples]
print("\n=== Process Analysis Report ===")
print(f"Process: {samples[0]['name']} (PID: {samples[0]['pid']})")
print(f"Command: {samples[0]['cmdline']}")
print(f"Samples collected: {len(samples)}")
print(f"Duration: {samples[-1]['timestamp'] - samples[0]['timestamp']:.1f} seconds")
print("\n--- CPU Usage ---")
print(f"Average: {sum(cpu_values)/len(cpu_values):5.1f}%")
print(f"Maximum: {max(cpu_values):5.1f}%")
print(f"Minimum: {min(cpu_values):5.1f}%")
print("\n--- Memory Usage ---")
print(f"Average: {sum(memory_values)/len(memory_values):5.1f}%")
print(f"Maximum: {max(memory_values):5.1f}%")
print(f"Minimum: {min(memory_values):5.1f}%")
print("\n--- Thread Count ---")
print(f"Average: {sum(thread_values)/len(thread_values):5.1f}")
print(f"Maximum: {max(thread_values):3d}")
print(f"Minimum: {min(thread_values):3d}")
# Detect anomalies
cpu_avg = sum(cpu_values) / len(cpu_values)
high_cpu_samples = [s for s in samples if s['cpu_percent'] > cpu_avg * 2]
if high_cpu_samples:
print(f"\n--- High CPU Usage Detected ---")
print(f"Samples with >2x average CPU: {len(high_cpu_samples)}")
def find_resource_intensive_processes(self, limit=10):
"""Find most resource-intensive processes"""
processes = []
for proc in psutil.process_iter(['pid', 'name', 'cpu_percent', 'memory_percent']):
try:
proc.cpu_percent() # First call returns 0.0
time.sleep(0.1)
info = proc.info
info['cpu_percent'] = proc.cpu_percent()
processes.append(info)
except (psutil.NoSuchProcess, psutil.AccessDenied):
pass
# Sort by CPU usage
cpu_sorted = sorted(processes, key=lambda x: x['cpu_percent'] or 0, reverse=True)
# Sort by memory usage
mem_sorted = sorted(processes, key=lambda x: x['memory_percent'] or 0, reverse=True)
print("\n=== Top CPU Consumers ===")
for i, proc in enumerate(cpu_sorted[:limit]):
print(f"{i+1:2d}. {proc['name']:20s} (PID: {proc['pid']:5d}) - {proc['cpu_percent']:5.1f}%")
print("\n=== Top Memory Consumers ===")
for i, proc in enumerate(mem_sorted[:limit]):
print(f"{i+1:2d}. {proc['name']:20s} (PID: {proc['pid']:5d}) - {proc['memory_percent']:5.1f}%")
if __name__ == "__main__":
parser = argparse.ArgumentParser(description='Process Performance Analyzer')
parser.add_argument('--pid', type=int, help='Process ID to monitor')
parser.add_argument('--duration', type=int, default=60, help='Monitoring duration in seconds')
parser.add_argument('--interval', type=int, default=5, help='Sampling interval in seconds')
parser.add_argument('--top', action='store_true', help='Show top resource consumers')
args = parser.parse_args()
analyzer = ProcessAnalyzer()
if args.top:
analyzer.find_resource_intensive_processes()
elif args.pid:
samples = analyzer.monitor_process(args.pid, args.duration, args.interval)
analyzer.analyze_samples(samples)
else:
print("Use --pid to monitor a specific process or --top to show resource consumers")
```
---
## Storage Management
### ️ File System Management
```bash
#!/bin/bash
# Advanced Storage Management
# Disk Information
lsblk # List block devices
blkid # Show UUIDs and labels
fdisk -l # List disk partitions
parted -l # Advanced partition info
lshw -class disk # Hardware disk info
smartctl -a /dev/sda # SMART disk health info
# File System Operations
mkfs.ext4 /dev/sdb1 # Create ext4 filesystem
mkfs.xfs /dev/sdb1 # Create XFS filesystem
mkfs.btrfs /dev/sdb1 # Create Btrfs filesystem
tune2fs -l /dev/sdb1 # Show ext2/3/4 info
xfs_info /dev/sdb1 # Show XFS info
# Mounting and Unmounting
mount /dev/sdb1 /mnt/data # Mount filesystem
umount /mnt/data # Unmount filesystem
mount -o remount,ro /mnt/data # Remount read-only
mount -a # Mount all in fstab
findmnt # Show mounted filesystems
# /etc/fstab Management
cat >> /etc/fstab << EOF
# Device Mount Point FS Type Options Dump Pass
/dev/sdb1 /mnt/data ext4 defaults,noatime 0 2
UUID=xxx-xxx /home ext4 defaults 0 2
//server/share /mnt/smb cifs username=user,password=pass,uid=1000,gid=1000 0 0
EOF
# LVM (Logical Volume Management)
pvcreate /dev/sdb1 /dev/sdc1 # Create physical volumes
vgcreate vg_data /dev/sdb1 /dev/sdc1 # Create volume group
lvcreate -L 100G -n lv_data vg_data # Create logical volume
lvextend -L +50G /dev/vg_data/lv_data # Extend logical volume
resize2fs /dev/vg_data/lv_data # Resize filesystem
# LVM Information
pvdisplay # Physical volume info
vgdisplay # Volume group info
lvdisplay # Logical volume info
pvs # Physical volume summary
vgs # Volume group summary
lvs # Logical volume summary
# RAID Management
mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1
mdadm --detail /dev/md0 # RAID array details
cat /proc/mdstat # RAID status
mdadm --add /dev/md0 /dev/sdd1 # Add spare disk
mdadm --fail /dev/md0 /dev/sdb1 # Mark disk as failed
mdadm --remove /dev/md0 /dev/sdb1 # Remove failed disk
```
### Storage Monitoring and Optimization
```bash
#!/bin/bash
# Storage Monitoring Script
# Disk Usage Analysis
df -h # Human-readable disk usage
df -i # Inode usage
du -sh /* # Directory sizes
du -sh /var/log/* | sort -hr # Log file sizes
ncdu / # Interactive disk usage
# Find Large Files
find / -type f -size +100M 2>/dev/null | head -20 # Files >100MB
find /var/log -name "*.log" -size +10M -mtime +7 # Large old logs
# I/O Monitoring
iostat -x 1 5 # Extended I/O statistics
sar -d 1 10 # Disk activity
iotop # I/O usage by process
lsof | grep deleted # Deleted files still open
# Storage Health Monitoring
smartctl -H /dev/sda # Quick health check
smartctl -a /dev/sda # Detailed SMART info
smartctl -t short /dev/sda # Run short self-test
smartctl -l selftest /dev/sda # View test results
# Automated Storage Cleanup
cat > /usr/local/bin/cleanup-storage.sh << 'EOF'
#!/bin/bash
# Automated Storage Cleanup
LOG_FILE="/var/log/cleanup.log"
MAX_LOG_AGE=30
MAX_TEMP_AGE=7
MAX_CACHE_SIZE="1G"
log_message() {
echo "$(date): $1" | tee -a "$LOG_FILE"
}
log_message "Starting storage cleanup..."
# Clean old log files
find /var/log -name "*.log" -mtime +$MAX_LOG_AGE -exec rm -f {} \;
log_message "Cleaned log files older than $MAX_LOG_AGE days"
# Clean temporary files
find /tmp -type f -mtime +$MAX_TEMP_AGE -delete
find /var/tmp -type f -mtime +$MAX_TEMP_AGE -delete
log_message "Cleaned temporary files older than $MAX_TEMP_AGE days"
# Clean package cache
apt-get clean 2>/dev/null || yum clean all 2>/dev/null
log_message "Cleaned package cache"
# Clean user cache if too large
for user_home in /home/*; do
if [ -d "$user_home/.cache" ]; then
cache_size=$(du -s "$user_home/.cache" | cut -f1)
if [ "$cache_size" -gt 1048576 ]; then # 1GB in KB
find "$user_home/.cache" -type f -mtime +7 -delete
log_message "Cleaned cache for $(basename "$user_home")"
fi
fi
done
# Report disk usage
log_message "Current disk usage:"
df -h | tee -a "$LOG_FILE"
log_message "Storage cleanup completed"
EOF
chmod +x /usr/local/bin/cleanup-storage.sh
# Schedule weekly cleanup
echo "0 2 * * 0 root /usr/local/bin/cleanup-storage.sh" >> /etc/crontab
```
---
## Network Administration
### Network Configuration
```bash
#!/bin/bash
# Network Configuration and Management
# Network Interface Information
ip addr show # Show IP addresses
ip link show # Show network interfaces
ifconfig # Traditional interface config
netstat -i # Interface statistics
# Static IP Configuration (Ubuntu/Debian)
cat > /etc/netplan/01-network.yaml << EOF
network:
version: 2
ethernets:
eth0:
dhcp4: false
addresses:
- 192.168.1.100/24
gateway4: 192.168.1.1
nameservers:
addresses:
- 8.8.8.8
- 8.8.4.4
EOF
netplan apply # Apply network configuration
# Network Interface Control
ip link set eth0 up # Bring interface up
ip link set eth0 down # Bring interface down
ifup eth0 # Bring interface up (traditional)
ifdown eth0 # Bring interface down (traditional)
# Routing Configuration
ip route show # Show routing table
ip route add 192.168.2.0/24 via 192.168.1.1 # Add route
ip route del 192.168.2.0/24 # Delete route
route -n # Show routing table (traditional)
# DNS Configuration
cat > /etc/resolv.conf << EOF
nameserver 8.8.8.8
nameserver 8.8.4.4
nameserver 1.1.1.1
search company.local
EOF
# Network Testing
ping -c 4 google.com # Test connectivity
traceroute google.com # Trace route
mtr google.com # Network diagnostic tool
nslookup google.com # DNS lookup
dig google.com # DNS lookup (detailed)
telnet server.com 80 # Test port connectivity
nc -zv server.com 80 # Test port with netcat
```
---
## System Automation
### Shell Scripting for Automation
```bash
#!/bin/bash
# System Administration Automation Scripts
# System Health Check Script
cat > /usr/local/bin/system-health-check.sh << 'EOF'
#!/bin/bash
# Comprehensive System Health Check
REPORT_FILE="/var/log/system-health-$(date +%Y%m%d).log"
EMAIL="admin@company.com"
CRITICAL_THRESHOLD=90
WARNING_THRESHOLD=80
# Colors for output
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color
log_message() {
echo "$(date '+%Y-%m-%d %H:%M:%S'): $1" | tee -a "$REPORT_FILE"
}
check_disk_usage() {
log_message "=== Disk Usage Check ==="
while read -r line; do
usage=$(echo "$line" | awk '{print $5}' | sed 's/%//')
partition=$(echo "$line" | awk '{print $6}')
if [ "$usage" -gt "$CRITICAL_THRESHOLD" ]; then
echo -e "${RED}CRITICAL: $partition is ${usage}% full${NC}" | tee -a "$REPORT_FILE"
elif [ "$usage" -gt "$WARNING_THRESHOLD" ]; then
echo -e "${YELLOW}WARNING: $partition is ${usage}% full${NC}" | tee -a "$REPORT_FILE"
else
echo -e "${GREEN}OK: $partition is ${usage}% full${NC}" | tee -a "$REPORT_FILE"
fi
done < <(df -h | grep -E '^/dev/')
}
check_memory_usage() {
log_message "=== Memory Usage Check ==="
memory_usage=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')
if [ "$memory_usage" -gt "$CRITICAL_THRESHOLD" ]; then
echo -e "${RED}CRITICAL: Memory usage is ${memory_usage}%${NC}" | tee -a "$REPORT_FILE"
elif [ "$memory_usage" -gt "$WARNING_THRESHOLD" ]; then
echo -e "${YELLOW}WARNING: Memory usage is ${memory_usage}%${NC}" | tee -a "$REPORT_FILE"
else
echo -e "${GREEN}OK: Memory usage is ${memory_usage}%${NC}" | tee -a "$REPORT_FILE"
fi
}
check_cpu_load() {
log_message "=== CPU Load Check ==="
load_1min=$(uptime | awk -F'load average:' '{print $2}' | awk -F',' '{print $1}' | xargs)
cpu_count=$(nproc)
load_percentage=$(echo "scale=2; $load_1min / $cpu_count * 100" | bc)
if (( $(echo "$load_percentage > $CRITICAL_THRESHOLD" | bc -l))); then
echo -e "${RED}CRITICAL: CPU load is ${load_percentage}%${NC}" | tee -a "$REPORT_FILE"
elif (( $(echo "$load_percentage > $WARNING_THRESHOLD" | bc -l))); then
echo -e "${YELLOW}WARNING: CPU load is ${load_percentage}%${NC}" | tee -a "$REPORT_FILE"
else
echo -e "${GREEN}OK: CPU load is ${load_percentage}%${NC}" | tee -a "$REPORT_FILE"
fi
}
check_services() {
log_message "=== Critical Services Check ==="
critical_services=("ssh" "nginx" "apache2" "mysql" "postgresql")
for service in "${critical_services[@]}"; do
if systemctl is-active --quiet "$service"; then
echo -e "${GREEN}OK: $service is running${NC}" | tee -a "$REPORT_FILE"
else
if systemctl list-unit-files | grep -q "^$service.service"; then
echo -e "${RED}CRITICAL: $service is not running${NC}" | tee -a "$REPORT_FILE"
fi
fi
done
}
check_security() {
log_message "=== Security Check ==="
# Check for failed login attempts
failed_logins=$(grep "Failed password" /var/log/auth.log | wc -l)
if [ "$failed_logins" -gt 10 ]; then
echo -e "${YELLOW}WARNING: $failed_logins failed login attempts found${NC}" | tee -a "$REPORT_FILE"
fi
# Check for root login attempts
root_attempts=$(grep "root" /var/log/auth.log | grep "Failed password" | wc -l)
if [ "$root_attempts" -gt 0 ]; then
echo -e "${RED}CRITICAL: $root_attempts failed root login attempts${NC}" | tee -a "$REPORT_FILE"
fi
}
# Main execution
log_message "Starting system health check..."
check_disk_usage
check_memory_usage
check_cpu_load
check_services
check_security
log_message "System health check completed."
# Email report if critical issues found
if grep -q "CRITICAL" "$REPORT_FILE"; then
mail -s "CRITICAL: System Health Alert - $(hostname)" "$EMAIL" < "$REPORT_FILE"
fi
EOF
chmod +x /usr/local/bin/system-health-check.sh
# User Management Automation
cat > /usr/local/bin/user-management.sh << 'EOF'
#!/bin/bash
# Automated User Management
create_user() {
local username="$1"
local full_name="$2"
local groups="$3"
if id "$username" &>/dev/null; then
echo "User $username already exists"
return 1
fi
useradd -m -c "$full_name" -s /bin/bash "$username"
if [ -n "$groups" ]; then
usermod -aG "$groups" "$username"
fi
# Generate random password
password=$(openssl rand -base64 12)
echo "$username:$password" | chpasswd
# Force password change on first login
chage -d 0 "$username"
echo "User $username created successfully"
echo "Temporary password: $password"
echo "User must change password on first login"
}
deactivate_user() {
local username="$1"
if! id "$username" &>/dev/null; then
echo "User $username does not exist"
return 1
fi
# Lock the account
usermod -L "$username"
# Expire the account
chage -E 0 "$username"
echo "User $username has been deactivated"
}
list_inactive_users() {
local days="${1:-90}"
echo "Users inactive for more than $days days:"
lastlog -b "$days" | grep -v "Never logged in" | tail -n +2
}
# Usage examples
case "$1" in
create)
create_user "$2" "$3" "$4";;
deactivate)
deactivate_user "$2";;
inactive)
list_inactive_users "$2";;
*)
echo "Usage: $0 {create|deactivate|inactive} [options]"
echo " create <username> <full_name> [groups]"
echo " deactivate <username>"
echo " inactive [days]";;
esac
EOF
chmod +x /usr/local/bin/user-management.sh
```
---
## ️ Cloud & Virtualization
### ️ Cloud Platform Management
```bash
#!/bin/bash
# Cloud Infrastructure Management
# AWS CLI Examples
# EC2 Instance Management
aws ec2 describe-instances # List all instances
aws ec2 start-instances --instance-ids i-1234567890abcdef0
aws ec2 stop-instances --instance-ids i-1234567890abcdef0
aws ec2 create-image --instance-id i-1234567890abcdef0 --name "MyImage"
# S3 Bucket Management
aws s3 ls # List buckets
aws s3 sync /local/path s3://bucket-name/ # Sync to S3
aws s3 cp file.txt s3://bucket-name/ # Copy file to S3
# Azure CLI Examples
# Virtual Machine Management
az vm list # List VMs
az vm start --resource-group myRG --name myVM
az vm stop --resource-group myRG --name myVM
az vm create --resource-group myRG --name myVM --image UbuntuLTS
# Google Cloud Examples
# Compute Engine
gcloud compute instances list # List instances
gcloud compute instances start myinstance
gcloud compute instances stop myinstance
```
### ️ Virtualization with Docker
```bash
#!/bin/bash
# Docker Container Management
# Container Lifecycle
docker run -d --name webserver nginx # Run container
docker ps # List running containers
docker ps -a # List all containers
docker stop webserver # Stop container
docker start webserver # Start container
docker restart webserver # Restart container
docker rm webserver # Remove container
# Image Management
docker images # List images
docker pull nginx:latest # Pull image
docker build -t myapp. # Build image
docker rmi nginx:latest # Remove image
# Docker Compose Example
cat > docker-compose.yml << EOF
version: '3.8'
services:
web:
image: nginx:latest
ports:
- "80:80"
volumes:
-./html:/usr/share/nginx/html
db:
image: mysql:8.0
environment:
MYSQL_ROOT_PASSWORD: rootpassword
MYSQL_DATABASE: myapp
volumes:
- db_data:/var/lib/mysql
volumes:
db_data:
EOF
docker-compose up -d # Start services
docker-compose down # Stop services
docker-compose logs # View logs
```
---
## ️ Backup & Disaster Recovery
### Backup Strategies
```bash
#!/bin/bash
# Comprehensive Backup Script
cat > /usr/local/bin/backup-system.sh << 'EOF'
#!/bin/bash
# System Backup Script
BACKUP_DIR="/backup"
DATE=$(date +%Y%m%d_%H%M%S)
LOG_FILE="/var/log/backup.log"
RETENTION_DAYS=30
EMAIL="admin@company.com"
log_message() {
echo "$(date): $1" | tee -a "$LOG_FILE"
}
# Create backup directory
mkdir -p "$BACKUP_DIR/$DATE"
log_message "Starting backup process..."
# System configuration backup
log_message "Backing up system configuration..."
tar -czf "$BACKUP_DIR/$DATE/system-config.tar.gz" \
/etc \
/usr/local/bin \
/var/spool/cron \
2>/dev/null
# Database backup (MySQL)
if command -v mysqldump >/dev/null; then
log_message "Backing up MySQL databases..."
mysqldump --all-databases --single-transaction --routines --triggers \
> "$BACKUP_DIR/$DATE/mysql-all-databases.sql"
fi
# Database backup (PostgreSQL)
if command -v pg_dumpall >/dev/null; then
log_message "Backing up PostgreSQL databases..."
sudo -u postgres pg_dumpall > "$BACKUP_DIR/$DATE/postgresql-all-databases.sql"
fi
# User data backup
log_message "Backing up user data..."
tar -czf "$BACKUP_DIR/$DATE/home-directories.tar.gz" /home 2>/dev/null
# Web server data backup
if [ -d "/var/www" ]; then
log_message "Backing up web server data..."
tar -czf "$BACKUP_DIR/$DATE/www-data.tar.gz" /var/www 2>/dev/null
fi
# Log files backup
log_message "Backing up log files..."
tar -czf "$BACKUP_DIR/$DATE/log-files.tar.gz" /var/log 2>/dev/null
# Create backup manifest
log_message "Creating backup manifest..."
find "$BACKUP_DIR/$DATE" -type f -exec ls -lh {} \; > "$BACKUP_DIR/$DATE/manifest.txt"
# Calculate backup size
backup_size=$(du -sh "$BACKUP_DIR/$DATE" | cut -f1)
log_message "Backup completed. Size: $backup_size"
# Clean old backups
log_message "Cleaning backups older than $RETENTION_DAYS days..."
find "$BACKUP_DIR" -maxdepth 1 -type d -mtime +$RETENTION_DAYS -exec rm -rf {} \;
# Send notification
echo "Backup completed successfully on $(hostname) at $(date)" | \
mail -s "Backup Report - $(hostname)" "$EMAIL"
log_message "Backup process completed successfully"
EOF
chmod +x /usr/local/bin/backup-system.sh
# Schedule daily backups
echo "0 2 * * * root /usr/local/bin/backup-system.sh" >> /etc/crontab
```
---
## Best Practices
### System Administration Best Practices
```python
class SystemAdminBestPractices:
def __init__(self):
self.security_practices = {
'access_control': [
'Use principle of least privilege',
'Implement strong password policies',
'Enable multi-factor authentication',
'Regular access reviews and cleanup',
'Disable unused accounts and services'
],
'system_hardening': [
'Keep systems updated and patched',
'Configure firewalls properly',
'Disable unnecessary services',
'Use secure protocols (SSH, HTTPS)',
'Implement intrusion detection'
],
'data_protection': [
'Regular backups with testing',
'Encrypt sensitive data',
'Secure backup storage',
'Document recovery procedures',
'Implement data retention policies'
]
}
self.operational_practices = {
'monitoring': [
'Implement comprehensive monitoring',
'Set up alerting for critical issues',
'Regular performance reviews',
'Capacity planning and forecasting',
'Log analysis and retention'
],
'documentation': [
'Maintain system documentation',
'Document procedures and processes',
'Keep network diagrams updated',
'Record configuration changes',
'Create runbooks for common tasks'
],
'change_management': [
'Test changes in development first',
'Have rollback procedures ready',
'Schedule changes during maintenance windows',
'Communicate changes to stakeholders',
'Document all changes made'
]
}
self.automation_practices = [
'Automate repetitive tasks',
'Use configuration management tools',
'Implement infrastructure as code',
'Create self-healing systems',
'Standardize deployment processes'
]
```
---
## Practice Projects
### ️ Hands-on Projects
```python
class SystemAdminProjects:
def __init__(self):
self.beginner_projects = {
'project_1': {
'name': 'Basic Linux Server Setup',
'description': 'Set up a Linux server with essential services',
'tasks': [
'Install Ubuntu Server on VM',
'Configure SSH with key-based authentication',
'Set up firewall rules',
'Install and configure web server',
'Create user accounts and groups',
'Set up basic monitoring'
],
'skills_learned': ['Linux basics', 'SSH', 'Firewall', 'Web servers']
},
'project_2': {
'name': 'Automated Backup System',
'description': 'Create automated backup solution',
'tasks': [
'Write backup scripts',
'Schedule with cron',
'Implement rotation policy',
'Test restore procedures',
'Set up email notifications'
],
'skills_learned': ['Scripting', 'Cron', 'Backup strategies']
}
}
self.intermediate_projects = {
'project_1': {
'name': 'Multi-Server Environment',
'description': 'Deploy and manage multiple servers',
'tasks': [
'Set up web server cluster',
'Configure load balancer',
'Implement database replication',
'Set up centralized logging',
'Create monitoring dashboard'
],
'skills_learned': ['Load balancing', 'Clustering', 'Monitoring']
},
'project_2': {
'name': 'Container Orchestration',
'description': 'Deploy applications using containers',
'tasks': [
'Create Docker containers',
'Set up Kubernetes cluster',
'Deploy microservices',
'Implement CI/CD pipeline',
'Monitor container health'
],
'skills_learned': ['Docker', 'Kubernetes', 'DevOps']
}
}
self.advanced_projects = {
'project_1': {
'name': 'Cloud Infrastructure Automation',
'description': 'Automate cloud infrastructure deployment',
'tasks': [
'Create Infrastructure as Code',
'Implement auto-scaling',
'Set up disaster recovery',
'Optimize costs',
'Implement security best practices'
],
'skills_learned': ['Cloud platforms', 'IaC', 'Auto-scaling']
}
}
```
---
## Next Steps
### Career Development Path
```python
class SystemAdminCareerPath:
def __init__(self):
self.certifications = {
'entry_level': [
'CompTIA A+',
'CompTIA Network+',
'CompTIA Security+',
'Linux+ (CompTIA or LPI)'
],
'intermediate': [
'Red Hat Certified System Administrator (RHCSA)',
'Microsoft Certified: Azure Administrator',
'AWS Certified SysOps Administrator',
'VMware Certified Professional (VCP)'
],
'advanced': [
'Red Hat Certified Engineer (RHCE)',
'AWS Certified Solutions Architect',
'Certified Information Systems Security Professional (CISSP)',
'Certified Kubernetes Administrator (CKA)'
]
}
self.specialization_paths = {
'cloud_engineer': {
'focus': 'Cloud platforms and services',
'skills': ['AWS/Azure/GCP', 'Infrastructure as Code', 'DevOps'],
'certifications': ['AWS Solutions Architect', 'Azure Administrator']
},
'security_specialist': {
'focus': 'Cybersecurity and compliance',
'skills': ['Security frameworks', 'Incident response', 'Compliance'],
'certifications': ['CISSP', 'CISM', 'CompTIA Security+']
},
'devops_engineer': {
'focus': 'Development and operations integration',
'skills': ['CI/CD', 'Containerization', 'Automation'],
'certifications': ['Docker Certified Associate', 'CKA']
},
'network_administrator': {
'focus': 'Network infrastructure and management',
'skills': ['Routing/Switching', 'Network security', 'Troubleshooting'],
'certifications': ['CCNA', 'Network+', 'CCNP']
}
}
self.learning_resources = {
'books': [
'UNIX and Linux System Administration Handbook',
'The Practice of System and Network Administration',
'Site Reliability Engineering (Google)',
'The Phoenix Project'
],
'online_platforms': [
'Linux Academy',
'Pluralsight',
'Udemy',
'Coursera',
'edX'
],
'hands_on_labs': [
'AWS Free Tier',
'Google Cloud Free Tier',
'Azure Free Account',
'VirtualBox/VMware for local labs'
]
}
```
---

@Th3viousGameus



