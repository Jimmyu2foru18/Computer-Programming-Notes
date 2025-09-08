# Linux from Basics to Advanced {#linux-from-basics-to-advanced}
## Table of Contents {#table-of-contents}
1. [Introduction to Linux](#introduction-to-linux)
2. [Linux Distributions](#linux-distributions)
3. [Installation and Setup](#installation-and-setup)
4. [Command Line Interface (CLI)](#command-line-interface-cli)
5. [File System and Navigation](#file-system-and-navigation)
6. [File Operations and Permissions](#file-operations-and-permissions)
7. [Text Processing and Editors](#text-processing-and-editors)
8. [Process Management](#process-management)
9. [Package Management](#package-management)
10. [System Services and Systemd](#system-services-and-systemd)
11. [User and Group Management](#user-and-group-management)
12. [Network Configuration](#network-configuration)
13. [Storage Management](#storage-management)
14. [System Monitoring and Performance](#system-monitoring-and-performance)
15. [Security and Hardening](#security-and-hardening)
16. [Shell Scripting](#shell-scripting)
17. [System Administration](#system-administration)
18. [Troubleshooting](#troubleshooting)
19. [Advanced Topics](#advanced-topics)
20. [Best Practices](#best-practices)
---
## Introduction to Linux {#introduction-to-linux}
Linux is a free, open-source operating system kernel originally created by Linus Torvalds in 1991. It forms the foundation of numerous operating systems called Linux distributions.
### Key Features {#key-features}
- **Open Source**: Source code is freely available
- **Multi-user**: Multiple users can work simultaneously
- **Multi-tasking**: Can run multiple processes concurrently
- **Portable**: Runs on various hardware architectures
- **Secure**: Built-in security features and permissions
- **Stable**: Reliable and robust system
### Linux Architecture {#linux-architecture}
```
┌─────────────────────────────────────┐
│ Applications │
├─────────────────────────────────────┤
│ System Libraries │
├─────────────────────────────────────┤
│ System Calls │
├─────────────────────────────────────┤
│ Linux Kernel │
├─────────────────────────────────────┤
│ Hardware │
└─────────────────────────────────────┘
```
---
## Linux Distributions {#linux-distributions}
### Popular Distributions {#popular-distributions}
#### Debian-based {#debian-based}
- **Ubuntu**: User-friendly, great for beginners
- **Debian**: Stable, reliable, server-focused
- **Linux Mint**: Easy to use, Windows-like interface
#### Red Hat-based {#red-hat-based}
- **RHEL**: Enterprise-focused, commercial support
- **CentOS Stream**: Community version of RHEL
- **Fedora**: Cutting-edge features, community-driven
#### Arch-based {#arch-based}
- **Arch Linux**: Rolling release, DIY approach
- **Manjaro**: User-friendly Arch derivative
#### SUSE-based {#suse-based}
- **openSUSE**: Community version
- **SLES**: Enterprise version
### Choosing a Distribution {#choosing-a-distribution}
```bash
# Factors to consider: {#factors-to-consider}
# - Purpose (desktop, server, development) {#purpose-desktop-server-development}
# - Experience level {#experience-level}
# - Hardware requirements {#hardware-requirements}
# - Package management preference {#package-management-preference}
# - Support and community {#support-and-community}
```
---
## Installation and Setup {#installation-and-setup}
### Pre-installation Planning {#pre-installation-planning}
#### System Requirements {#system-requirements}
```bash
# Minimum requirements (varies by distribution): {#minimum-requirements-varies-by-distribution}
# - RAM: 2GB (4GB+ recommended) {#ram-2gb-4gb-recommended}
# - Storage: 20GB (50GB+ recommended) {#storage-20gb-50gb-recommended}
# - Processor: 1GHz (64-bit recommended) {#processor-1ghz-64-bit-recommended}
# - Graphics: VGA capable display {#graphics-vga-capable-display}
```
#### Partition Planning {#partition-planning}
```bash
# Recommended partition scheme: {#recommended-partition-scheme}
/boot # 500MB - Boot files
/ # 20GB+ - Root filesystem
/home # Remaining - User data
swap # 2x RAM or 8GB max
```
### Installation Process {#installation-process}
#### Creating Bootable Media {#creating-bootable-media}
```bash
# Using dd command (Linux/macOS) {#using-dd-command-linuxmacos}
sudo dd if=ubuntu-22.04.iso of=/dev/sdX bs=4M status=progress
# Using Rufus (Windows) {#using-rufus-windows}
# Download Rufus and select ISO file {#download-rufus-and-select-iso-file}
# Verify checksum {#verify-checksum}
sha256sum ubuntu-22.04.iso
```
#### Installation Steps {#installation-steps}
1. Boot from installation media
2. Select language and keyboard layout
3. Configure network (if needed)
4. Partition disks
5. Create user account
6. Install bootloader
7. Complete installation
### Post-installation Setup {#post-installation-setup}
#### System Updates {#system-updates}
```bash
# Ubuntu/Debian {#ubuntudebian}
sudo apt update && sudo apt upgrade -y
# RHEL/CentOS/Fedora {#rhelcentosfedora}
sudo dnf update -y
# Arch Linux {#arch-linux}
sudo pacman -Syu
```
#### Essential Software {#essential-software}
```bash
# Development tools {#development-tools}
sudo apt install build-essential git vim curl wget
# Media codecs {#media-codecs}
sudo apt install ubuntu-restricted-extras
# Additional repositories {#additional-repositories}
sudo add-apt-repository universe
sudo add-apt-repository multiverse
```
---
## Command Line Interface (CLI) {#command-line-interface-(cli)}
### Terminal Basics {#terminal-basics}
#### Understanding the Prompt {#understanding-the-prompt}
```bash
# Format: username@hostname:current_directory$ {#format-usernamehostnamecurrent_directory}
user@ubuntu:~$ 
root@server:/home/user# 
```
#### Essential Keyboard Shortcuts {#essential-keyboard-shortcuts}
```bash
Ctrl+C # Interrupt current command
Ctrl+D # Exit shell or EOF
Ctrl+Z # Suspend current process
Ctrl+L # Clear screen
Ctrl+A # Move to beginning of line
Ctrl+E # Move to end of line
Ctrl+R # Search command history
Tab # Auto-complete
```
### Command Structure {#command-structure}
```bash
# Basic syntax {#basic-syntax}
command [options] [arguments]
# Examples {#examples}
ls -la /home/user
cp -r source/ destination/
find /var/log -name "*.log" -type f
```
### Getting Help {#getting-help}
```bash
# Manual pages {#manual-pages}
man ls
man 5 passwd # Section 5 of passwd
# Info pages {#info-pages}
info coreutils
# Built-in help {#built-in-help}
help cd
ls --help
# Which command {#which-command}
which python3
whereis gcc
```
---
## File System and Navigation {#file-system-and-navigation}
### Linux File System Hierarchy {#linux-file-system-hierarchy}
```
/
├── bin/ # Essential binaries
├── boot/ # Boot files
├── dev/ # Device files
├── etc/ # Configuration files
├── home/ # User directories
├── lib/ # Shared libraries
├── media/ # Removable media
├── mnt/ # Mount points
├── opt/ # Optional software
├── proc/ # Process information
├── root/ # Root user home
├── run/ # Runtime data
├── sbin/ # System binaries
├── srv/ # Service data
├── sys/ # System information
├── tmp/ # Temporary files
├── usr/ # User programs
└── var/ # Variable data
```
### Navigation Commands {#navigation-commands}
```bash
# Print working directory {#print-working-directory}
pwd
# Change directory {#change-directory}
cd /path/to/directory
cd ~ # Home directory
cd.. # Parent directory
cd - # Previous directory
cd # Home directory
# List directory contents {#list-directory-contents}
ls # Basic listing
ls -l # Long format
ls -la # Include hidden files
ls -lh # Human readable sizes
ls -lt # Sort by time
ls -lS # Sort by size
# Tree view {#tree-view}
tree /path/to/directory
tree -L 2 # Limit depth to 2 levels
```
### Path Types {#path-types}
```bash
# Absolute paths (start with /) {#absolute-paths-start-with}
/home/user/documents/file.txt
/etc/passwd
/var/log/syslog
# Relative paths../parent/file.txt./current/file.txt {#relative-pathsparentfiletxtcurrentfiletxt}
subdirectory/file.txt
# Special directories {#special-directories}
~ # Home directory. # Current directory.. # Parent directory
```
---
## File Operations and Permissions {#file-operations-and-permissions}
### Basic File Operations {#basic-file-operations}
#### Creating Files and Directories {#creating-files-and-directories}
```bash
# Create empty file {#create-empty-file}
touch filename.txt
touch file1.txt file2.txt file3.txt
# Create directories {#create-directories}
mkdir directory_name
mkdir -p path/to/nested/directory
mkdir dir1 dir2 dir3
# Create file with content {#create-file-with-content}
echo "Hello World" > file.txt
cat > file.txt << EOF
Line 1
Line 2
EOF
```
#### Copying Files {#copying-files}
```bash
# Copy files {#copy-files}
cp source.txt destination.txt
cp file.txt /path/to/destination/
# Copy directories {#copy-directories}
cp -r source_dir/ destination_dir/
cp -a source_dir/ destination_dir/ # Archive mode
# Copy with options {#copy-with-options}
cp -i file.txt dest.txt # Interactive (prompt before overwrite)
cp -u source/ dest/ # Update (copy only newer files)
cp -v source dest # Verbose output
```
#### Moving and Renaming {#moving-and-renaming}
```bash
# Move/rename files {#moverename-files}
mv oldname.txt newname.txt
mv file.txt /path/to/destination/
# Move directories {#move-directories}
mv old_dir/ new_dir/
mv directory/ /path/to/new/location/
# Move multiple files {#move-multiple-files}
mv file1.txt file2.txt file3.txt /destination/
```
#### Removing Files {#removing-files}
```bash
# Remove files {#remove-files}
rm file.txt
rm file1.txt file2.txt
# Remove directories {#remove-directories}
rmdir empty_directory
rm -r directory_with_contents/
rm -rf directory/ # Force removal
# Safe removal {#safe-removal}
rm -i file.txt # Interactive
rm -I *.txt # Prompt once for multiple files
```
### File Permissions {#file-permissions}
#### Understanding Permissions {#understanding-permissions}
```bash
# Permission format: drwxrwxrwx {#permission-format-drwxrwxrwx}
# d = directory, - = file {#d-directory-file}
# rwx = read, write, execute for owner {#rwx-read-write-execute-for-owner}
# rwx = read, write, execute for group {#rwx-read-write-execute-for-group}
# rwx = read, write, execute for others {#rwx-read-write-execute-for-others}
# Example: {#example}
-rw-r--r-- 1 user group 1024 Jan 1 12:00 file.txt
drwxr-xr-x 2 user group 4096 Jan 1 12:00 directory/
```
#### Numeric Permissions {#numeric-permissions}
```bash
# Binary to Octal conversion: {#binary-to-octal-conversion}
# r = 4, w = 2, x = 1 {#r-4-w-2-x-1}
# 755 = rwxr-xr-x {#755-rwxr-xr-x}
# 644 = rw-r--r-- {#644-rw-r-r}
# 600 = rw------- {#600-rw}
# 777 = rwxrwxrwx {#777-rwxrwxrwx}
```
#### Changing Permissions {#changing-permissions}
```bash
# Using chmod with octal {#using-chmod-with-octal}
chmod 755 script.sh
chmod 644 document.txt
chmod 600 private_file.txt
# Using chmod with symbolic {#using-chmod-with-symbolic}
chmod u+x script.sh # Add execute for user
chmod g-w file.txt # Remove write for group
chmod o=r file.txt # Set others to read only
chmod a+r file.txt # Add read for all
# Recursive permissions {#recursive-permissions}
chmod -R 755 directory/
```
#### Changing Ownership {#changing-ownership}
```bash
# Change owner {#change-owner}
chown user file.txt
chown user:group file.txt
chown -R user:group directory/
# Change group only {#change-group-only}
chgrp group file.txt
chgrp -R group directory/
```
### Advanced File Operations {#advanced-file-operations}
#### Links {#links}
```bash
# Hard links {#hard-links}
ln original.txt hardlink.txt
# Symbolic links {#symbolic-links}
ln -s /path/to/original symlink
ln -s../config.txt link_to_config
# View links {#view-links}
ls -l
find. -type l # Find symbolic links
```
#### File Attributes {#file-attributes}
```bash
# Extended attributes {#extended-attributes}
lsattr file.txt
chattr +i file.txt # Make immutable
chattr -i file.txt # Remove immutable
# Access Control Lists (ACL) {#access-control-lists-acl}
getfacl file.txt
setfacl -m u:user:rw file.txt
setfacl -x u:user file.txt
```
---
## Text Processing and Editors {#text-processing-and-editors}
### Viewing File Contents {#viewing-file-contents}
#### Basic Viewing {#basic-viewing}
```bash
# Display entire file {#display-entire-file}
cat file.txt
cat file1.txt file2.txt # Concatenate files
# Display with line numbers {#display-with-line-numbers}
cat -n file.txt
nl file.txt
# Paged viewing {#paged-viewing}
less file.txt
more file.txt
# First/last lines {#firstlast-lines}
head file.txt # First 10 lines
head -n 20 file.txt # First 20 lines
tail file.txt # Last 10 lines
tail -n 20 file.txt # Last 20 lines
tail -f /var/log/syslog # Follow file changes
```
### Text Processing Tools {#text-processing-tools}
#### grep - Pattern Matching {#grep---pattern-matching}
```bash
# Basic search {#basic-search}
grep "pattern" file.txt
grep -i "pattern" file.txt # Case insensitive
grep -v "pattern" file.txt # Invert match
grep -n "pattern" file.txt # Show line numbers
grep -r "pattern" directory/ # Recursive search
# Regular expressions {#regular-expressions}
grep "^start" file.txt # Lines starting with "start"
grep "end$" file.txt # Lines ending with "end"
grep "[0-9]\+" file.txt # Lines with numbers
# Multiple patterns {#multiple-patterns}
grep -E "pattern1|pattern2" file.txt
egrep "pattern1|pattern2" file.txt
```
#### sed - Stream Editor {#sed---stream-editor}
```bash
# Substitute text {#substitute-text}
sed 's/old/new/' file.txt # First occurrence per line
sed 's/old/new/g' file.txt # All occurrences
sed 's/old/new/gi' file.txt # Case insensitive
# Delete lines {#delete-lines}
sed '2d' file.txt # Delete line 2
sed '/pattern/d' file.txt # Delete lines matching pattern
sed '2,5d' file.txt # Delete lines 2-5
# Insert/append lines {#insertappend-lines}
sed '2i\New line' file.txt # Insert before line 2
sed '2a\New line' file.txt # Append after line 2
# In-place editing {#in-place-editing}
sed -i 's/old/new/g' file.txt
sed -i.bak 's/old/new/g' file.txt # Create backup
```
#### awk - Text Processing {#awk---text-processing}
```bash
# Print columns {#print-columns}
awk '{print $1}' file.txt # First column
awk '{print $1, $3}' file.txt # First and third columns
awk '{print NF}' file.txt # Number of fields per line
# Conditional processing {#conditional-processing}
awk '$3 > 100 {print $1}' file.txt # Print first column if third > 100
awk '/pattern/ {print $2}' file.txt # Print second column for matching lines
# Built-in variables {#built-in-variables}
awk '{print NR, $0}' file.txt # Line number and content
awk 'END {print NR}' file.txt # Total number of lines
# Field separator {#field-separator}
awk -F: '{print $1}' /etc/passwd # Use colon as separator
```
#### sort and uniq {#sort-and-uniq}
```bash
# Sorting {#sorting}
sort file.txt
sort -n numbers.txt # Numeric sort
sort -r file.txt # Reverse sort
sort -k2 file.txt # Sort by second column
sort -u file.txt # Sort and remove duplicates
# Remove duplicates {#remove-duplicates}
uniq file.txt # Remove consecutive duplicates
sort file.txt | uniq # Remove all duplicates
uniq -c file.txt # Count occurrences
uniq -d file.txt # Show only duplicates
```
### Text Editors {#text-editors}
#### nano - Simple Editor {#nano---simple-editor}
```bash
# Open file {#open-file}
nano filename.txt
# Key shortcuts: {#key-shortcuts}
# Ctrl+O - Save {#ctrlo-save}
# Ctrl+X - Exit {#ctrlx-exit}
# Ctrl+W - Search {#ctrlw-search}
# Ctrl+K - Cut line {#ctrlk-cut-line}
# Ctrl+U - Paste {#ctrlu-paste}
# Ctrl+G - Help {#ctrlg-help}
```
#### vim - Advanced Editor {#vim---advanced-editor}
```bash
# Open file {#open-file}
vim filename.txt
# Modes: {#modes}
# Normal mode (default) {#normal-mode-default}
# Insert mode (i, a, o) {#insert-mode-i-a-o}
# Command mode (:) {#command-mode}
# Basic commands: {#basic-commands}
i # Insert mode
Esc # Normal mode:w # Save:q # Quit:wq # Save and quit:q! # Quit without saving
# Navigation: {#navigation}
h, j, k, l # Left, down, up, right
gg # Go to first line
G # Go to last line:n # Go to line n
# Editing: {#editing}
dd # Delete line
yy # Copy line
p # Paste
u # Undo
Ctrl+r # Redo
# Search and replace: {#search-and-replace}
/pattern # Search forward?pattern # Search backward
n # Next match
N # Previous match:%s/old/new/g # Replace all
```
---
## Process Management {#process-management}
### Understanding Processes {#understanding-processes}
#### Process Information {#process-information}
```bash
# List running processes {#list-running-processes}
ps # Current user processes
ps aux # All processes
ps -ef # Full format
ps -u username # User-specific processes
# Process tree {#process-tree}
pstree
pstree -p # Show PIDs
pstree username # User-specific tree
# Real-time process monitoring {#real-time-process-monitoring}
top
htop # Enhanced version
# Process information {#process-information}
ps -p PID # Specific process
cat /proc/PID/status # Detailed process info
```
#### Process States {#process-states}
```bash
# Process states: {#process-states}
# R - Running {#r-running}
# S - Sleeping (interruptible) {#s-sleeping-interruptible}
# D - Sleeping (uninterruptible) {#d-sleeping-uninterruptible}
# Z - Zombie {#z-zombie}
# T - Stopped {#t-stopped}
# X - Dead {#x-dead}
```
### Job Control {#job-control}
#### Background and Foreground {#background-and-foreground}
```bash
# Run in background {#run-in-background}
command &
nohup command & # Continue after logout
# Job control {#job-control}
jobs # List active jobs
fg # Bring to foreground
fg %1 # Bring job 1 to foreground
bg # Send to background
bg %1 # Send job 1 to background
# Suspend and resume {#suspend-and-resume}
Ctrl+Z # Suspend current job
kill -STOP PID # Suspend process
kill -CONT PID # Resume process
```
### Process Control {#process-control}
#### Killing Processes {#killing-processes}
```bash
# Kill by PID {#kill-by-pid}
kill PID
kill -9 PID # Force kill
kill -TERM PID # Terminate gracefully
# Kill by name {#kill-by-name}
killall process_name
pkill process_name
pkill -u username # Kill user processes
# Interactive process killer {#interactive-process-killer}
top # Press 'k' to kill
htop # Press F9 to kill
```
#### Process Signals {#process-signals}
```bash
# Common signals: {#common-signals}
kill -1 PID # SIGHUP (reload config)
kill -2 PID # SIGINT (Ctrl+C)
kill -9 PID # SIGKILL (force kill)
kill -15 PID # SIGTERM (terminate)
kill -18 PID # SIGCONT (continue)
kill -19 PID # SIGSTOP (stop)
# List all signals {#list-all-signals}
kill -l
```
### System Resources {#system-resources}
#### Memory Usage {#memory-usage}
```bash
# Memory information {#memory-information}
free -h # Human readable
free -m # In megabytes
cat /proc/meminfo # Detailed memory info
# Process memory usage {#process-memory-usage}
ps aux --sort=-%mem # Sort by memory usage
top -o %MEM # Sort top by memory
```
#### CPU Usage {#cpu-usage}
```bash
# CPU information {#cpu-information}
lscpu # CPU details
cat /proc/cpuinfo # Detailed CPU info
nproc # Number of processors
# CPU usage {#cpu-usage}
top # Real-time CPU usage
sar 1 5 # CPU usage every 1 sec, 5 times
mpstat # CPU statistics
```
---
## Package Management {#package-management}
### APT (Debian/Ubuntu) {#apt-(debian/ubuntu)}
#### Basic Operations {#basic-operations}
```bash
# Update package lists {#update-package-lists}
sudo apt update
# Upgrade packages {#upgrade-packages}
sudo apt upgrade
sudo apt full-upgrade
# Install packages {#install-packages}
sudo apt install package_name
sudo apt install package1 package2 package3
# Remove packages {#remove-packages}
sudo apt remove package_name
sudo apt purge package_name # Remove with config files
sudo apt autoremove # Remove unused dependencies
```
#### Package Information {#package-information}
```bash
# Search packages {#search-packages}
apt search keyword
apt list --installed
apt list --upgradable
# Package information {#package-information}
apt show package_name
apt policy package_name
# Package files {#package-files}
dpkg -L package_name # List files in package
dpkg -S /path/to/file # Find package containing file
```
#### Repository Management {#repository-management}
```bash
# Add repository {#add-repository}
sudo add-apt-repository ppa:repository/name
sudo add-apt-repository "deb http://example.com/repo stable main"
# Remove repository {#remove-repository}
sudo add-apt-repository --remove ppa:repository/name
# Repository files {#repository-files}
ls /etc/apt/sources.list.d/
cat /etc/apt/sources.list
```
### YUM/DNF (RHEL/CentOS/Fedora) {#yum/dnf-(rhel/centos/fedora)}
#### Basic Operations {#basic-operations}
```bash
# Update system {#update-system}
sudo dnf update
sudo yum update # Older systems
# Install packages {#install-packages}
sudo dnf install package_name
sudo dnf groupinstall "Development Tools"
# Remove packages {#remove-packages}
sudo dnf remove package_name
sudo dnf autoremove
# Search packages {#search-packages}
dnf search keyword
dnf list installed
dnf list available
```
#### Package Information {#package-information}
```bash
# Package details {#package-details}
dnf info package_name
dnf provides /path/to/file
# Package history {#package-history}
dnf history
dnf history info transaction_id
dnf history undo transaction_id
```
### Pacman (Arch Linux) {#pacman-(arch-linux)}
#### Basic Operations {#basic-operations}
```bash
# Update system {#update-system}
sudo pacman -Syu
# Install packages {#install-packages}
sudo pacman -S package_name
sudo pacman -S package1 package2
# Remove packages {#remove-packages}
sudo pacman -R package_name
sudo pacman -Rs package_name # Remove with dependencies
sudo pacman -Rns package_name # Remove with deps and config
# Search packages {#search-packages}
pacman -Ss keyword
pacman -Qs keyword # Search installed
```
### Snap Packages {#snap-packages}
```bash
# Install snap {#install-snap}
sudo apt install snapd
# Install snap packages {#install-snap-packages}
sudo snap install package_name
sudo snap install --classic package_name
# List snaps {#list-snaps}
snap list
snap find keyword
# Update snaps {#update-snaps}
sudo snap refresh
sudo snap refresh package_name
# Remove snaps {#remove-snaps}
sudo snap remove package_name
```
### Flatpak {#flatpak}
```bash
# Install flatpak {#install-flatpak}
sudo apt install flatpak
# Add Flathub repository {#add-flathub-repository}
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
# Install applications {#install-applications}
flatpak install flathub org.gimp.GIMP
# Run applications {#run-applications}
flatpak run org.gimp.GIMP
# List applications {#list-applications}
flatpak list
# Update applications {#update-applications}
flatpak update
```
---
## System Services and Systemd {#system-services-and-systemd}
### Understanding Systemd {#understanding-systemd}
#### Service Management {#service-management}
```bash
# Service status {#service-status}
sudo systemctl status service_name
sudo systemctl is-active service_name
sudo systemctl is-enabled service_name
# Start/stop services {#startstop-services}
sudo systemctl start service_name
sudo systemctl stop service_name
sudo systemctl restart service_name
sudo systemctl reload service_name
# Enable/disable services {#enabledisable-services}
sudo systemctl enable service_name
sudo systemctl disable service_name
sudo systemctl mask service_name # Prevent starting
sudo systemctl unmask service_name
```
#### System State {#system-state}
```bash
# System status {#system-status}
systemctl status
systemctl list-units
systemctl list-units --failed
systemctl list-unit-files
# System targets (runlevels) {#system-targets-runlevels}
systemctl get-default
sudo systemctl set-default multi-user.target
systemctl list-units --type=target
```
#### Logs with journalctl {#logs-with-journalctl}
```bash
# View logs {#view-logs}
journalctl
journalctl -u service_name
journalctl -f # Follow logs
journalctl --since "1 hour ago"
journalctl --until "2023-01-01"
# Log filtering {#log-filtering}
journalctl -p err # Error level and above
journalctl -k # Kernel messages
journalctl _PID=1234 # Specific process
# Log management {#log-management}
journalctl --disk-usage
sudo journalctl --vacuum-time=2weeks
sudo journalctl --vacuum-size=100M
```
### Creating Custom Services {#creating-custom-services}
#### Service Unit File {#service-unit-file}
```bash
# Create service file {#create-service-file}
sudo nano /etc/systemd/system/myapp.service
# Service file content: {#service-file-content}
[Unit]
Description=My Application
After=network.target
[Service]
Type=simple
User=myuser
WorkingDirectory=/opt/myapp
ExecStart=/opt/myapp/start.sh
Restart=always
RestartSec=10
[Install]
WantedBy=multi-user.target
```
#### Service Management {#service-management}
```bash
# Reload systemd {#reload-systemd}
sudo systemctl daemon-reload
# Enable and start service {#enable-and-start-service}
sudo systemctl enable myapp.service
sudo systemctl start myapp.service
# Check service {#check-service}
sudo systemctl status myapp.service
journalctl -u myapp.service
```
### Timer Units (Cron Alternative) {#timer-units-(cron-alternative)}
#### Timer Unit File {#timer-unit-file}
```bash
# Create timer file {#create-timer-file}
sudo nano /etc/systemd/system/backup.timer
# Timer file content: {#timer-file-content}
[Unit]
Description=Run backup daily
Requires=backup.service
[Timer]
OnCalendar=daily
Persistent=true
[Install]
WantedBy=timers.target
```
#### Timer Management {#timer-management}
```bash
# Enable and start timer {#enable-and-start-timer}
sudo systemctl enable backup.timer
sudo systemctl start backup.timer
# List timers {#list-timers}
systemctl list-timers
systemctl status backup.timer
```
---
## User and Group Management {#user-and-group-management}
### User Management {#user-management}
#### Creating Users {#creating-users}
```bash
# Add user {#add-user}
sudo useradd username
sudo useradd -m username # Create home directory
sudo useradd -m -s /bin/bash username # Specify shell
sudo useradd -m -G group1,group2 username # Add to groups
# Set password {#set-password}
sudo passwd username
# Add user interactively {#add-user-interactively}
sudo adduser username
```
#### Modifying Users {#modifying-users}
```bash
# Modify user {#modify-user}
sudo usermod -l newname oldname # Change username
sudo usermod -d /new/home username # Change home directory
sudo usermod -s /bin/zsh username # Change shell
sudo usermod -G group1,group2 username # Set groups
sudo usermod -a -G group username # Add to group
# Lock/unlock user {#lockunlock-user}
sudo usermod -L username # Lock account
sudo usermod -U username # Unlock account
```
#### Removing Users {#removing-users}
```bash
# Remove user {#remove-user}
sudo userdel username
sudo userdel -r username # Remove with home directory
# Remove user interactively {#remove-user-interactively}
sudo deluser username
sudo deluser --remove-home username
```
### Group Management {#group-management}
#### Creating Groups {#creating-groups}
```bash
# Add group {#add-group}
sudo groupadd groupname
sudo groupadd -g 1001 groupname # Specify GID
# Add group interactively {#add-group-interactively}
sudo addgroup groupname
```
#### Managing Group Membership {#managing-group-membership}
```bash
# Add user to group {#add-user-to-group}
sudo usermod -a -G groupname username
sudo gpasswd -a username groupname
# Remove user from group {#remove-user-from-group}
sudo gpasswd -d username groupname
# Set group password {#set-group-password}
sudo gpasswd groupname
```
#### Removing Groups {#removing-groups}
```bash
# Remove group {#remove-group}
sudo groupdel groupname
sudo delgroup groupname
```
### User Information {#user-information}
#### Viewing User Information {#viewing-user-information}
```bash
# Current user info {#current-user-info}
whoami
id
groups
# User details {#user-details}
id username
groups username
finger username
# Logged in users {#logged-in-users}
who
w
last
lastlog
```
#### User Database Files {#user-database-files}
```bash
# User accounts {#user-accounts}
cat /etc/passwd
getent passwd
getent passwd username
# Group information {#group-information}
cat /etc/group
getent group
getent group groupname
# Password information {#password-information}
sudo cat /etc/shadow
```
### Sudo Configuration {#sudo-configuration}
#### Sudo Access {#sudo-access}
```bash
# Add user to sudo group {#add-user-to-sudo-group}
sudo usermod -a -G sudo username
# Edit sudoers file {#edit-sudoers-file}
sudo visudo
# Sudoers examples: {#sudoers-examples}
# User privilege specification {#user-privilege-specification}
username ALL=(ALL:ALL) ALL
# Allow group {#allow-group}
%admin ALL=(ALL) ALL
# No password required {#no-password-required}
username ALL=(ALL) NOPASSWD: ALL
# Specific commands {#specific-commands}
username ALL=(ALL) /bin/systemctl, /bin/mount
```
---
## Network Configuration {#network-configuration}
### Network Information {#network-information}
#### Interface Information {#interface-information}
```bash
# Network interfaces {#network-interfaces}
ip addr show
ip a # Short form
ifconfig # Legacy command
# Specific interface {#specific-interface}
ip addr show eth0
ifconfig eth0
# Interface statistics {#interface-statistics}
ip -s link show
cat /proc/net/dev
```
#### Routing Information {#routing-information}
```bash
# Routing table {#routing-table}
ip route show
route -n # Legacy command
netstat -rn
# Default gateway {#default-gateway}
ip route show default
```
#### Network Connectivity {#network-connectivity}
```bash
# Ping {#ping}
ping google.com
ping -c 4 8.8.8.8 # 4 packets
ping6 google.com # IPv6
# Traceroute {#traceroute}
traceroute google.com
tracepath google.com
mtr google.com # Real-time traceroute
# DNS lookup {#dns-lookup}
nslookup google.com
dig google.com
host google.com
```
### Network Configuration {#network-configuration}
#### Temporary Configuration {#temporary-configuration}
```bash
# Configure IP address {#configure-ip-address}
sudo ip addr add 192.168.1.100/24 dev eth0
sudo ifconfig eth0 192.168.1.100 netmask 255.255.255.0
# Enable/disable interface {#enabledisable-interface}
sudo ip link set eth0 up
sudo ip link set eth0 down
sudo ifconfig eth0 up
sudo ifconfig eth0 down
# Add route {#add-route}
sudo ip route add 192.168.2.0/24 via 192.168.1.1
sudo route add -net 192.168.2.0/24 gw 192.168.1.1
# Default gateway {#default-gateway}
sudo ip route add default via 192.168.1.1
sudo route add default gw 192.168.1.1
```
#### Persistent Configuration (Ubuntu/Debian) {#persistent-configuration-(ubuntu/debian)}
##### Netplan Configuration {#netplan-configuration}
```bash
# Edit netplan configuration {#edit-netplan-configuration}
sudo nano /etc/netplan/01-network-manager-all.yaml
# Static IP configuration: {#static-ip-configuration}
network:
version: 2
renderer: networkd
ethernets:
eth0:
addresses:
- 192.168.1.100/24
gateway4: 192.168.1.1
nameservers:
addresses: [8.8.8.8, 8.8.4.4]
# DHCP configuration: {#dhcp-configuration}
network:
version: 2
renderer: networkd
ethernets:
eth0:
dhcp4: true
# Apply configuration {#apply-configuration}
sudo netplan apply
sudo netplan --debug apply
```
##### Legacy Configuration (/etc/network/interfaces) {#legacy-configuration-(/etc/network/interfaces)}
```bash
# Edit interfaces file {#edit-interfaces-file}
sudo nano /etc/network/interfaces
# Static configuration: {#static-configuration}
auto eth0
iface eth0 inet static
address 192.168.1.100
netmask 255.255.255.0
gateway 192.168.1.1
dns-nameservers 8.8.8.8 8.8.4.4
# DHCP configuration: {#dhcp-configuration}
auto eth0
iface eth0 inet dhcp
# Restart networking {#restart-networking}
sudo systemctl restart networking
sudo ifdown eth0 && sudo ifup eth0
```
#### DNS Configuration {#dns-configuration}
```bash
# DNS servers {#dns-servers}
sudo nano /etc/resolv.conf
# Content: {#content}
nameserver 8.8.8.8
nameserver 8.8.4.4
search example.com
# Permanent DNS (systemd-resolved) {#permanent-dns-systemd-resolved}
sudo nano /etc/systemd/resolved.conf
# Content: {#content}
[Resolve]
DNS=8.8.8.8 8.8.4.4
FallbackDNS=1.1.1.1
Domains=example.com
# Restart service {#restart-service}
sudo systemctl restart systemd-resolved
```
### Network Services {#network-services}
#### SSH Configuration {#ssh-configuration}
```bash
# Install SSH server {#install-ssh-server}
sudo apt install openssh-server
# SSH configuration {#ssh-configuration}
sudo nano /etc/ssh/sshd_config
# Key settings: {#key-settings}
Port 22
PermitRootLogin no
PasswordAuthentication yes
PubkeyAuthentication yes
X11Forwarding yes
# Restart SSH service {#restart-ssh-service}
sudo systemctl restart sshd
# SSH client usage {#ssh-client-usage}
ssh user@hostname
ssh -p 2222 user@hostname # Custom port
ssh -X user@hostname # X11 forwarding
ssh -L 8080:localhost:80 user@hostname # Port forwarding
```
#### Firewall (UFW) {#firewall-(ufw)}
```bash
# Enable firewall {#enable-firewall}
sudo ufw enable
sudo ufw status
# Allow services {#allow-services}
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow from 192.168.1.0/24
# Deny connections {#deny-connections}
sudo ufw deny 23/tcp
sudo ufw deny from 192.168.2.100
# Remove rules {#remove-rules}
sudo ufw delete allow ssh
sudo ufw --force reset
```
---
## Storage Management {#storage-management}
### Disk Information {#disk-information}
#### Disk Usage {#disk-usage}
```bash
# Disk space usage {#disk-space-usage}
df -h # Human readable
df -i # Inode usage
du -h /path/to/directory # Directory usage
du -sh * # Summary of current directory
du -ah /var/log | sort -hr # Sort by size
# Disk information {#disk-information}
lsblk # Block devices
fdisk -l # Partition tables
blkid # Block device attributes
```
#### Disk Performance {#disk-performance}
```bash
# I/O statistics {#io-statistics}
iostat -x 1 5 # Extended stats, 1 sec interval, 5 times
sar -d 1 5 # Disk activity
# Real-time I/O monitoring {#real-time-io-monitoring}
iotop # Process I/O usage
sudo iotop -o # Only active processes
```
### Partitioning {#partitioning}
#### fdisk - MBR Partitioning {#fdisk---mbr-partitioning}
```bash
# Open disk for partitioning {#open-disk-for-partitioning}
sudo fdisk /dev/sdb
# fdisk commands: {#fdisk-commands}
# p - print partition table {#p-print-partition-table}
# n - new partition {#n-new-partition}
# d - delete partition {#d-delete-partition}
# t - change partition type {#t-change-partition-type}
# w - write changes {#w-write-changes}
# q - quit without saving {#q-quit-without-saving}
# Example session: {#example-session}
sudo fdisk /dev/sdb
> n # New partition
> p # Primary
> 1 # Partition number
> Enter # First sector (default)
> +10G # Size
> w # Write changes
```
#### gdisk - GPT Partitioning {#gdisk---gpt-partitioning}
```bash
# GPT partitioning {#gpt-partitioning}
sudo gdisk /dev/sdb
# gdisk commands: {#gdisk-commands}
# p - print partition table {#p-print-partition-table}
# n - new partition {#n-new-partition}
# d - delete partition {#d-delete-partition}
# t - change partition type {#t-change-partition-type}
# w - write changes {#w-write-changes}
# q - quit without saving {#q-quit-without-saving}
```
#### parted - Advanced Partitioning {#parted---advanced-partitioning}
```bash
# Interactive mode {#interactive-mode}
sudo parted /dev/sdb
# Command line mode {#command-line-mode}
sudo parted /dev/sdb mklabel gpt
sudo parted /dev/sdb mkpart primary ext4 0% 50%
sudo parted /dev/sdb mkpart primary ext4 50% 100%
# Print partition table {#print-partition-table}
sudo parted /dev/sdb print
```
### File Systems {#file-systems}
#### Creating File Systems {#creating-file-systems}
```bash
# ext4 file system {#ext4-file-system}
sudo mkfs.ext4 /dev/sdb1
sudo mkfs.ext4 -L "MyData" /dev/sdb1 # With label
# Other file systems {#other-file-systems}
sudo mkfs.xfs /dev/sdb1
sudo mkfs.btrfs /dev/sdb1
sudo mkfs.ntfs /dev/sdb1
sudo mkfs.vfat -F 32 /dev/sdb1 # FAT32
```
#### File System Check and Repair {#file-system-check-and-repair}
```bash
# Check file system {#check-file-system}
sudo fsck /dev/sdb1
sudo fsck.ext4 /dev/sdb1
sudo e2fsck -f /dev/sdb1 # Force check
# Repair file system {#repair-file-system}
sudo fsck -y /dev/sdb1 # Auto-repair
sudo e2fsck -p /dev/sdb1 # Automatic repair
```
### Mounting {#mounting}
#### Manual Mounting {#manual-mounting}
```bash
# Create mount point {#create-mount-point}
sudo mkdir /mnt/mydisk
# Mount file system {#mount-file-system}
sudo mount /dev/sdb1 /mnt/mydisk
sudo mount -t ext4 /dev/sdb1 /mnt/mydisk
# Mount with options {#mount-with-options}
sudo mount -o rw,noatime /dev/sdb1 /mnt/mydisk
# Unmount {#unmount}
sudo umount /mnt/mydisk
sudo umount /dev/sdb1
# Force unmount {#force-unmount}
sudo umount -f /mnt/mydisk
sudo umount -l /mnt/mydisk # Lazy unmount
```
#### Persistent Mounting (/etc/fstab) {#persistent-mounting-(/etc/fstab)}
```bash
# Edit fstab {#edit-fstab}
sudo nano /etc/fstab
# fstab format: {#fstab-format}
# <device> <mount_point> <fs_type> <options> <dump> <pass> {#device-mount_point-fs_type-options-dump-pass}
# Examples: {#examples}
/dev/sdb1 /mnt/mydisk ext4 defaults 0 2
UUID=12345678-1234-1234-1234-123456789012 /home ext4 defaults 0 2
/dev/sdc1 /mnt/backup xfs defaults,noatime 0 2
# Test fstab {#test-fstab}
sudo mount -a
sudo findmnt --verify
```
### LVM (Logical Volume Management) {#lvm-(logical-volume-management)}
#### LVM Concepts {#lvm-concepts}
```bash
# Physical Volume (PV) -> Volume Group (VG) -> Logical Volume (LV) {#physical-volume-pv-volume-group-vg-logical-volume-lv}
# /dev/sdb1 -> vg_data -> lv_home, lv_var {#devsdb1-vg_data-lv_home-lv_var}
```
#### Creating LVM {#creating-lvm}
```bash
# Create physical volume {#create-physical-volume}
sudo pvcreate /dev/sdb1 /dev/sdc1
sudo pvdisplay
# Create volume group {#create-volume-group}
sudo vgcreate vg_data /dev/sdb1 /dev/sdc1
sudo vgdisplay
# Create logical volume {#create-logical-volume}
sudo lvcreate -L 10G -n lv_home vg_data
sudo lvcreate -l 100%FREE -n lv_var vg_data
sudo lvdisplay
# Create file system {#create-file-system}
sudo mkfs.ext4 /dev/vg_data/lv_home
sudo mkfs.ext4 /dev/vg_data/lv_var
```
#### Managing LVM {#managing-lvm}
```bash
# Extend logical volume {#extend-logical-volume}
sudo lvextend -L +5G /dev/vg_data/lv_home
sudo resize2fs /dev/vg_data/lv_home # Resize ext4
# Extend volume group {#extend-volume-group}
sudo pvcreate /dev/sdd1
sudo vgextend vg_data /dev/sdd1
# Reduce logical volume (unmount first) {#reduce-logical-volume-unmount-first}
sudo umount /mnt/home
sudo e2fsck -f /dev/vg_data/lv_home
sudo resize2fs /dev/vg_data/lv_home 8G
sudo lvreduce -L 8G /dev/vg_data/lv_home
```
### RAID Configuration {#raid-configuration}
#### Software RAID with mdadm {#software-raid-with-mdadm}
```bash
# Install mdadm {#install-mdadm}
sudo apt install mdadm
# Create RAID 1 (mirror) {#create-raid-1-mirror}
sudo mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1
# Create RAID 5 {#create-raid-5}
sudo mdadm --create /dev/md1 --level=5 --raid-devices=3 /dev/sdd1 /dev/sde1 /dev/sdf1
# Check RAID status {#check-raid-status}
cat /proc/mdstat
sudo mdadm --detail /dev/md0
# Save RAID configuration {#save-raid-configuration}
sudo mdadm --detail --scan >> /etc/mdadm/mdadm.conf
sudo update-initramfs -u
```
#### RAID Management {#raid-management}
```bash
# Add spare device {#add-spare-device}
sudo mdadm --add /dev/md0 /dev/sdg1
# Remove failed device {#remove-failed-device}
sudo mdadm --fail /dev/md0 /dev/sdb1
sudo mdadm --remove /dev/md0 /dev/sdb1
# Stop RAID {#stop-raid}
sudo mdadm --stop /dev/md0
# Assemble RAID {#assemble-raid}
sudo mdadm --assemble /dev/md0 /dev/sdb1 /dev/sdc1
```
---
## System Monitoring and Performance {#system-monitoring-and-performance}
### System Information {#system-information}
#### Hardware Information {#hardware-information}
```bash
# System information {#system-information}
uname -a # Kernel and system info
hostnamectl # System hostname and info
lsb_release -a # Distribution info
# Hardware details {#hardware-details}
lshw # Complete hardware info
lshw -short # Summary
lscpu # CPU information
lsmem # Memory information
lspci # PCI devices
lsusb # USB devices
lsblk # Block devices
# DMI/SMBIOS information {#dmismbios-information}
sudo dmidecode # Complete DMI info
sudo dmidecode -t system # System information
sudo dmidecode -t memory # Memory information
sudo dmidecode -t processor # CPU information
```
#### System Resources {#system-resources}
```bash
# Memory usage {#memory-usage}
free -h
cat /proc/meminfo
vmstat 1 5 # Virtual memory stats
# CPU usage {#cpu-usage}
top
htop
sar -u 1 5 # CPU utilization
mpstat 1 5 # Multi-processor stats
# Load average {#load-average}
uptime
w
cat /proc/loadavg
```
### Performance Monitoring {#performance-monitoring}
#### Real-time Monitoring {#real-time-monitoring}
```bash
# System overview {#system-overview}
top # Process activity
htop # Enhanced top
atop # Advanced system monitor
# I/O monitoring {#io-monitoring}
iostat -x 1 # I/O statistics
iotop # I/O by process
sudo iotop -o # Only active processes
# Network monitoring {#network-monitoring}
iftop # Network usage by connection
nethogs # Network usage by process
ss -tuln # Socket statistics
netstat -tuln # Network connections
```
#### Historical Monitoring {#historical-monitoring}
```bash
# System Activity Reporter (SAR) {#system-activity-reporter-sar}
sar -u 1 60 # CPU usage for 1 minute
sar -r 1 60 # Memory usage
sar -d 1 60 # Disk activity
sar -n DEV 1 60 # Network activity
# View historical data {#view-historical-data}
sar -u -f /var/log/sysstat/saXX # XX = day of month
sar -A # All activities
```
### Log Analysis {#log-analysis}
#### System Logs {#system-logs}
```bash
# System log files {#system-log-files}
tail -f /var/log/syslog # System messages
tail -f /var/log/auth.log # Authentication logs
tail -f /var/log/kern.log # Kernel messages
tail -f /var/log/dmesg # Boot messages
# Application logs {#application-logs}
tail -f /var/log/apache2/access.log
tail -f /var/log/nginx/error.log
tail -f /var/log/mysql/error.log
```
#### Log Rotation {#log-rotation}
```bash
# Logrotate configuration {#logrotate-configuration}
sudo nano /etc/logrotate.conf
ls /etc/logrotate.d/
# Manual log rotation {#manual-log-rotation}
sudo logrotate -f /etc/logrotate.conf
sudo logrotate -d /etc/logrotate.conf # Debug mode
# Example logrotate config: {#example-logrotate-config}
/var/log/myapp/*.log {
daily
missingok
rotate 52
compress
delaycompress
notifempty
create 644 myuser mygroup
postrotate
systemctl reload myapp
endscript
}
```
### Performance Tuning {#performance-tuning}
#### Kernel Parameters {#kernel-parameters}
```bash
# View kernel parameters {#view-kernel-parameters}
sysctl -a
sysctl vm.swappiness
sysctl net.core.rmem_max
# Temporary changes {#temporary-changes}
sudo sysctl vm.swappiness=10
sudo sysctl net.core.rmem_max=134217728
# Permanent changes {#permanent-changes}
sudo nano /etc/sysctl.conf
# Add parameters: {#add-parameters}
vm.swappiness=10
net.core.rmem_max=134217728
net.core.wmem_max=134217728
# Apply changes {#apply-changes}
sudo sysctl -p
```
#### I/O Scheduling {#i/o-scheduling}
```bash
# Check current scheduler {#check-current-scheduler}
cat /sys/block/sda/queue/scheduler
# Change scheduler temporarily {#change-scheduler-temporarily}
echo mq-deadline | sudo tee /sys/block/sda/queue/scheduler
# Permanent change (GRUB) {#permanent-change-grub}
sudo nano /etc/default/grub
# Add: GRUB_CMDLINE_LINUX="elevator=mq-deadline" {#add-grub_cmdline_linuxelevatormq-deadline}
sudo update-grub
```
---
## Security and Hardening {#security-and-hardening}
### User Security {#user-security}
#### Password Policies {#password-policies}
```bash
# Install password quality library {#install-password-quality-library}
sudo apt install libpam-pwquality
# Configure password policy {#configure-password-policy}
sudo nano /etc/pam.d/common-password
# Add/modify line: {#addmodify-line}
password requisite pam_pwquality.so retry=3 minlen=8 difok=3 ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1
# Password aging {#password-aging}
sudo nano /etc/login.defs
# Set parameters: {#set-parameters}
PASS_MAX_DAYS 90
PASS_MIN_DAYS 1
PASS_WARN_AGE 7
# Apply to existing user {#apply-to-existing-user}
sudo chage -M 90 -m 1 -W 7 username
sudo chage -l username # View settings
```
#### Account Security {#account-security}
```bash
# Lock account after failed attempts {#lock-account-after-failed-attempts}
sudo nano /etc/pam.d/common-auth
# Add line: {#add-line}
auth required pam_tally2.so deny=3 unlock_time=600
# Check failed attempts {#check-failed-attempts}
sudo pam_tally2 --user username
# Reset failed attempts {#reset-failed-attempts}
sudo pam_tally2 --user username --reset
# Disable unused accounts {#disable-unused-accounts}
sudo usermod -L username # Lock account
sudo usermod -s /sbin/nologin username # Disable shell
```
### SSH Security {#ssh-security}
#### SSH Hardening {#ssh-hardening}
```bash
# Edit SSH configuration {#edit-ssh-configuration}
sudo nano /etc/ssh/sshd_config
# Security settings: {#security-settings}
Port 2222 # Change default port
PermitRootLogin no # Disable root login
PasswordAuthentication no # Use key-based auth only
PubkeyAuthentication yes
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2
AllowUsers user1 user2 # Limit users
DenyUsers baduser
# Restart SSH service {#restart-ssh-service}
sudo systemctl restart sshd
```
#### SSH Key Authentication {#ssh-key-authentication}
```bash
# Generate SSH key pair {#generate-ssh-key-pair}
ssh-keygen -t rsa -b 4096 -C "user@example.com"
ssh-keygen -t ed25519 -C "user@example.com" # More secure
# Copy public key to server {#copy-public-key-to-server}
ssh-copy-id user@server
scp ~/.ssh/id_rsa.pub user@server:~/.ssh/authorized_keys
# Set proper permissions {#set-proper-permissions}
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
```
### Firewall Configuration {#firewall-configuration}
#### UFW (Uncomplicated Firewall) {#ufw-(uncomplicated-firewall)}
```bash
# Enable firewall {#enable-firewall}
sudo ufw enable
sudo ufw status verbose
# Default policies {#default-policies}
sudo ufw default deny incoming
sudo ufw default allow outgoing
# Allow specific services {#allow-specific-services}
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow from 192.168.1.0/24 to any port 22
# Application profiles {#application-profiles}
sudo ufw app list
sudo ufw allow 'Apache Full'
sudo ufw allow 'Nginx Full'
# Advanced rules {#advanced-rules}
sudo ufw allow from 192.168.1.100 to any port 3306
sudo ufw deny from 192.168.2.0/24
# Logging {#logging}
sudo ufw logging on
sudo tail -f /var/log/ufw.log
```
#### iptables (Advanced) {#iptables-(advanced)}
```bash
# View current rules {#view-current-rules}
sudo iptables -L -n -v
sudo iptables -t nat -L -n -v
# Basic rules {#basic-rules}
sudo iptables -A INPUT -i lo -j ACCEPT
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -j DROP
# Save rules (Ubuntu/Debian) {#save-rules-ubuntudebian}
sudo apt install iptables-persistent
sudo netfilter-persistent save
sudo netfilter-persistent reload
# Save rules (RHEL/CentOS) {#save-rules-rhelcentos}
sudo service iptables save
```
### System Auditing {#system-auditing}
#### auditd Configuration {#auditd-configuration}
```bash
# Install audit daemon {#install-audit-daemon}
sudo apt install auditd audispd-plugins
# Configure audit rules {#configure-audit-rules}
sudo nano /etc/audit/rules.d/audit.rules
# Example rules: {#example-rules}
# Monitor file access {#monitor-file-access}
-w /etc/passwd -p wa -k passwd_changes
-w /etc/shadow -p wa -k shadow_changes
-w /etc/sudoers -p wa -k sudoers_changes
# Monitor system calls {#monitor-system-calls}
-a always,exit -F arch=b64 -S adjtimex -S settimeofday -k time_change
-a always,exit -F arch=b64 -S mount -k mounts
# Restart audit service {#restart-audit-service}
sudo systemctl restart auditd
# Search audit logs {#search-audit-logs}
sudo ausearch -k passwd_changes
sudo ausearch -f /etc/passwd
sudo aureport --summary
```
### File Integrity Monitoring {#file-integrity-monitoring}
#### AIDE (Advanced Intrusion Detection Environment) {#aide-(advanced-intrusion-detection-environment)}
```bash
# Install AIDE {#install-aide}
sudo apt install aide
# Configure AIDE {#configure-aide}
sudo nano /etc/aide/aide.conf
# Example configuration: {#example-configuration}
/bin Binlib
/sbin Binlib
/etc ConfFiles
/home Home
# Initialize database {#initialize-database}
sudo aideinit
sudo cp /var/lib/aide/aide.db.new /var/lib/aide/aide.db
# Check for changes {#check-for-changes}
sudo aide --check
# Update database {#update-database}
sudo aide --update
sudo cp /var/lib/aide/aide.db.new /var/lib/aide/aide.db
```
---
## Shell Scripting {#shell-scripting}
### Bash Scripting Basics {#bash-scripting-basics}
#### Script Structure {#script-structure}
```bash
#!/bin/bash {#binbash}
# Script description {#script-description}
# Author: Your Name {#author-your-name}
# Date: YYYY-MM-DD {#date-yyyy-mm-dd}
# Variables {#variables}
NAME="World"
COUNT=5
# Functions {#functions}
greet() {
echo "Hello, $1!"
}
# Main script {#main-script}
echo "Starting script..."
greet "$NAME"
echo "Script completed."
```
#### Variables and Parameters {#variables-and-parameters}
```bash
#!/bin/bash {#binbash}
# Variable assignment {#variable-assignment}
VAR1="Hello"
VAR2='World'
VAR3=$(date)
VAR4=`whoami`
# Command line parameters {#command-line-parameters}
echo "Script name: $0"
echo "First parameter: $1"
echo "Second parameter: $2"
echo "All parameters: $@"
echo "Number of parameters: $#"
echo "Exit status of last command: $?"
echo "Process ID: $$"
# Environment variables {#environment-variables}
echo "Home directory: $HOME"
echo "Current user: $USER"
echo "Path: $PATH"
# Read user input {#read-user-input}
read -p "Enter your name: " username
echo "Hello, $username!"
```
#### Control Structures {#control-structures}
```bash
#!/bin/bash {#binbash}
# If statements {#if-statements}
if [ "$1" = "start" ]; then
echo "Starting service..."
elif [ "$1" = "stop" ]; then
echo "Stopping service..."
else
echo "Usage: $0 {start|stop}"
exit 1
fi
# Case statement {#case-statement}
case "$1" in
start)
echo "Starting service...";;
stop)
echo "Stopping service...";;
restart)
echo "Restarting service...";;
*)
echo "Usage: $0 {start|stop|restart}"
exit 1;;
esac
# For loops {#for-loops}
for i in {1..5}; do
echo "Number: $i"
done
for file in *.txt; do
echo "Processing: $file"
done
# While loop {#while-loop}
counter=1
while [ $counter -le 5 ]; do
echo "Counter: $counter"
((counter++))
done
# Until loop {#until-loop}
until [ $counter -gt 10 ]; do
echo "Counter: $counter"
((counter++))
done
```
#### Functions {#functions}
```bash
#!/bin/bash {#binbash}
# Function definition {#function-definition}
backup_file() {
local source_file="$1"
local backup_dir="$2"
if [ -f "$source_file" ]; then
cp "$source_file" "$backup_dir/$(basename "$source_file").bak"
echo "Backed up: $source_file"
return 0
else
echo "Error: File not found: $source_file"
return 1
fi
}
# Function with return value {#function-with-return-value}
get_file_size() {
local file="$1"
if [ -f "$file" ]; then
stat -f%z "$file" 2>/dev/null || stat -c%s "$file"
else
echo 0
fi
}
# Using functions {#using-functions}
backup_file "/etc/passwd" "/tmp"
size=$(get_file_size "/etc/passwd")
echo "File size: $size bytes"
```
### Advanced Scripting {#advanced-scripting}
#### Error Handling {#error-handling}
```bash
#!/bin/bash {#binbash}
# Exit on error {#exit-on-error}
set -e
# Exit on undefined variable {#exit-on-undefined-variable}
set -u
# Print commands as they execute {#print-commands-as-they-execute}
set -x
# Trap errors {#trap-errors}
trap 'echo "Error on line $LINENO"' ERR
# Trap exit {#trap-exit}
trap 'echo "Script exiting..."' EXIT
# Function with error handling {#function-with-error-handling}
safe_copy() {
local src="$1"
local dest="$2"
if [! -f "$src" ]; then
echo "Error: Source file does not exist: $src" >&2
return 1
fi
if! cp "$src" "$dest"; then
echo "Error: Failed to copy $src to $dest" >&2
return 1
fi
echo "Successfully copied $src to $dest"
return 0
}
}
```
#### Input Validation {#input-validation}
```bash
#!/bin/bash {#binbash}
# Validate number of arguments {#validate-number-of-arguments}
if [ $# -ne 2 ]; then
echo "Usage: $0 <source> <destination>" >&2
exit 1
fi
# Validate file exists {#validate-file-exists}
if [! -f "$1" ]; then
echo "Error: Source file '$1' does not exist" >&2
exit 1
fi
# Validate directory exists {#validate-directory-exists}
if [! -d "$(dirname "$2")" ]; then
echo "Error: Destination directory does not exist" >&2
exit 1
fi
# Validate numeric input {#validate-numeric-input}
read -p "Enter a number: " number
if! [[ "$number" =~ ^[0-9]+$ ]]; then
echo "Error: Please enter a valid number" >&2
exit 1
fi
# Validate email format {#validate-email-format}
validate_email() {
local email="$1"
if [[ "$email" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
return 0
else
return 1
fi
}
read -p "Enter email: " email
if! validate_email "$email"; then
echo "Error: Invalid email format" >&2
exit 1
fi
```
#### Arrays and String Manipulation {#arrays-and-string-manipulation}
```bash
#!/bin/bash {#binbash}
# Arrays {#arrays}
fruits=("apple" "banana" "orange" "grape")
colors=("red" "green" "blue")
# Access array elements {#access-array-elements}
echo "First fruit: ${fruits[0]}"
echo "All fruits: ${fruits[@]}"
echo "Number of fruits: ${#fruits[@]}"
# Loop through array {#loop-through-array}
for fruit in "${fruits[@]}"; do
echo "Processing: $fruit"
done
# Add to array {#add-to-array}
fruits+=("mango")
fruits[${#fruits[@]}]="kiwi"
# Associative arrays (Bash 4+) {#associative-arrays-bash-4}
declare -A person
person[name]="John"
person[age]="30"
person[city]="New York"
echo "Name: ${person[name]}"
echo "Age: ${person[age]}"
# String manipulation {#string-manipulation}
text="Hello World"
echo "Length: ${#text}"
echo "Uppercase: ${text^^}"
echo "Lowercase: ${text,,}"
echo "Substring: ${text:0:5}"
echo "Replace: ${text/World/Universe}"
# String splitting {#string-splitting}
IFS=',' read -ra ADDR <<< "apple,banana,orange"
for item in "${ADDR[@]}"; do
echo "Item: $item"
done
```
#### File Processing {#file-processing}
```bash
#!/bin/bash {#binbash}
# Process CSV file {#process-csv-file}
process_csv() {
local file="$1"
local line_num=0
while IFS=',' read -r name age city; do
((line_num++))
if [ $line_num -eq 1 ]; then
continue # Skip header
fi
echo "Processing: $name (Age: $age, City: $city)"
done < "$file"
}
# Log file analysis {#log-file-analysis}
analyze_logs() {
local logfile="$1"
echo "=== Log Analysis ==="
echo "Total lines: $(wc -l < "$logfile")"
echo "Error count: $(grep -c "ERROR" "$logfile")"
echo "Warning count: $(grep -c "WARNING" "$logfile")"
echo "\n=== Top 10 IP addresses ==="
awk '{print $1}' "$logfile" | sort | uniq -c | sort -nr | head -10
echo "\n=== Recent errors ==="
grep "ERROR" "$logfile" | tail -5
}
# Backup script {#backup-script}
backup_directory() {
local source="$1"
local backup_dir="$2"
local timestamp=$(date +"%Y%m%d_%H%M%S")
local backup_name="backup_${timestamp}.tar.gz"
if [! -d "$source" ]; then
echo "Error: Source directory does not exist" >&2
return 1
fi
mkdir -p "$backup_dir"
echo "Creating backup: $backup_name"
if tar -czf "${backup_dir}/${backup_name}" -C "$(dirname "$source")" "$(basename "$source")"; then
echo "Backup created successfully: ${backup_dir}/${backup_name}"
# Keep only last 5 backups {#keep-only-last-5-backups}
cd "$backup_dir"
ls -t backup_*.tar.gz | tail -n +6 | xargs -r rm
echo "Old backups cleaned up"
else
echo "Error: Backup failed" >&2
return 1
fi
}
```
---
## System Administration {#system-administration}
### Cron Jobs and Task Scheduling {#cron-jobs-and-task-scheduling}
#### Crontab Management {#crontab-management}
```bash
# Edit user crontab {#edit-user-crontab}
crontab -e
# List current crontab {#list-current-crontab}
crontab -l
# Remove crontab {#remove-crontab}
crontab -r
# Edit another user's crontab (as root) {#edit-another-users-crontab-as-root}
sudo crontab -u username -e
# System-wide crontabs {#system-wide-crontabs}
sudo nano /etc/crontab
ls /etc/cron.d/
ls /etc/cron.daily/
ls /etc/cron.weekly/
ls /etc/cron.monthly/
```
#### Crontab Format {#crontab-format}
```bash
# Format: minute hour day month weekday command {#format-minute-hour-day-month-weekday-command}
# * * * * * command {#command}
# | | | | | {#}
# | | | | +-- Day of week (0-7, Sunday = 0 or 7) {#day-of-week-0-7-sunday-0-or-7}
# | | | +---- Month (1-12) {#month-1-12}
# | | +------ Day of month (1-31) {#day-of-month-1-31}
# | +-------- Hour (0-23) {#hour-0-23}
# +---------- Minute (0-59) {#minute-0-59}
# Examples: {#examples}
0 2 * * * /path/to/backup.sh # Daily at 2:00 AM
30 14 * * 1-5 /path/to/workday.sh # Weekdays at 2:30 PM
0 0 1 * * /path/to/monthly.sh # First day of month
*/15 * * * * /path/to/frequent.sh # Every 15 minutes
0 9-17 * * 1-5 /path/to/business.sh # Business hours
@reboot /path/to/startup.sh # At system startup
@daily /path/to/daily.sh # Once per day
@weekly /path/to/weekly.sh # Once per week
```
#### Advanced Cron Examples {#advanced-cron-examples}
```bash
# Backup script with logging {#backup-script-with-logging}
0 2 * * * /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1
# Multiple commands {#multiple-commands}
0 3 * * * cd /var/www && tar -czf backup.tar.gz html/ && mv backup.tar.gz /backups/
# Environment variables {#environment-variables}
PATH=/usr/local/bin:/usr/bin:/bin
MAILTO=admin@example.com
0 4 * * * /path/to/script.sh
# Conditional execution {#conditional-execution}
0 5 * * * [ -f /tmp/maintenance ] || /path/to/normal_task.sh
```
### System Startup and Boot Process {#system-startup-and-boot-process}
#### Boot Process Overview {#boot-process-overview}
```bash
# Boot sequence: {#boot-sequence}
# 1. BIOS/UEFI {#1-biosuefi}
# 2. Bootloader (GRUB) {#2-bootloader-grub}
# 3. Kernel loading {#3-kernel-loading}
# 4. initramfs {#4-initramfs}
# 5. systemd (PID 1) {#5-systemd-pid-1}
# 6. System services {#6-system-services}
# 7. Login manager {#7-login-manager}
```
#### GRUB Configuration {#grub-configuration}
```bash
# GRUB configuration file {#grub-configuration-file}
sudo nano /etc/default/grub
# Common settings: {#common-settings}
GRUB_DEFAULT=0
GRUB_TIMEOUT=5
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
GRUB_CMDLINE_LINUX=""
# Update GRUB after changes {#update-grub-after-changes}
sudo update-grub
sudo grub-mkconfig -o /boot/grub/grub.cfg
# GRUB rescue commands {#grub-rescue-commands}
# If system won't boot: {#if-system-wont-boot}
ls # List partitions
ls (hd0,1)/ # List files on partition
set root=(hd0,1)
linux /vmlinuz root=/dev/sda1
initrd /initrd.img
boot
```
#### Kernel Parameters {#kernel-parameters}
```bash
# View current kernel parameters {#view-current-kernel-parameters}
cat /proc/cmdline
# Common kernel parameters: {#common-kernel-parameters}
# quiet - Reduce boot messages {#quiet-reduce-boot-messages}
# splash - Show splash screen {#splash-show-splash-screen}
# nomodeset - Disable graphics drivers {#nomodeset-disable-graphics-drivers}
# single - Boot to single-user mode {#single-boot-to-single-user-mode}
# init=/bin/bash - Emergency shell {#initbinbash-emergency-shell}
# mem=4G - Limit memory usage {#mem4g-limit-memory-usage}
# maxcpus=2 - Limit CPU cores {#maxcpus2-limit-cpu-cores}
```
#### Recovery and Rescue {#recovery-and-rescue}
```bash
# Boot to single-user mode {#boot-to-single-user-mode}
# Add 'single' or '1' to kernel parameters {#add-single-or-1-to-kernel-parameters}
# Boot to rescue mode {#boot-to-rescue-mode}
# Add 'rescue' to kernel parameters {#add-rescue-to-kernel-parameters}
# Emergency shell {#emergency-shell}
# Add 'init=/bin/bash' to kernel parameters {#add-initbinbash-to-kernel-parameters}
# Reset root password (emergency mode) {#reset-root-password-emergency-mode}
mount -o remount,rw /
passwd root
mount -o remount,ro /
reboot
# Check filesystem from rescue mode {#check-filesystem-from-rescue-mode}
fsck /dev/sda1
fsck -y /dev/sda1 # Auto-repair
```
### System Backup and Recovery {#system-backup-and-recovery}
#### Full System Backup {#full-system-backup}
```bash
# Create full system backup (excluding unnecessary directories) {#create-full-system-backup-excluding-unnecessary-directories}
sudo tar -czpf /backup/system-backup-$(date +%Y%m%d).tar.gz \
--exclude=/proc \
--exclude=/sys \
--exclude=/dev \
--exclude=/run \
--exclude=/tmp \
--exclude=/mnt \
--exclude=/media \
--exclude=/backup \
/
# Restore from backup {#restore-from-backup}
sudo tar -xzpf /backup/system-backup-20231201.tar.gz -C /mnt/restore/
```
#### rsync Backups {#rsync-backups}
```bash
# Local backup {#local-backup}
rsync -avH --delete /home/user/ /backup/user/
# Remote backup {#remote-backup}
rsync -avH --delete -e ssh /home/user/ user@backup-server:/backups/user/
# Incremental backup with hard links {#incremental-backup-with-hard-links}
rsync -avH --delete --link-dest=/backup/previous /source/ /backup/current/
# Backup script with rotation {#backup-script-with-rotation}
#!/bin/bash {#binbash}
SOURCE="/home/user"
BACKUP_DIR="/backup"
DATE=$(date +%Y%m%d)
LATEST="$BACKUP_DIR/latest"
CURRENT="$BACKUP_DIR/$DATE"
# Create backup {#create-backup}
rsync -avH --delete --link-dest="$LATEST" "$SOURCE/" "$CURRENT/"
# Update latest symlink {#update-latest-symlink}
rm -f "$LATEST"
ln -s "$CURRENT" "$LATEST"
# Keep only last 7 backups {#keep-only-last-7-backups}
find "$BACKUP_DIR" -maxdepth 1 -type d -name "20*" | sort | head -n -7 | xargs rm -rf
```
#### Database Backups {#database-backups}
```bash
# MySQL backup {#mysql-backup}
mysqldump -u root -p database_name > backup.sql
mysqldump -u root -p --all-databases > all_databases.sql
# PostgreSQL backup {#postgresql-backup}
pg_dump database_name > backup.sql
pg_dumpall > all_databases.sql
# Automated database backup script {#automated-database-backup-script}
#!/bin/bash {#binbash}
DB_USER="backup_user"
DB_PASS="password"
BACKUP_DIR="/backups/mysql"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p "$BACKUP_DIR"
# Backup all databases {#backup-all-databases}
mysqldump -u "$DB_USER" -p"$DB_PASS" --all-databases | gzip > "$BACKUP_DIR/all_databases_$DATE.sql.gz"
# Keep only last 30 days {#keep-only-last-30-days}
find "$BACKUP_DIR" -name "*.sql.gz" -mtime +30 -delete
```
### Log Management {#log-management}
#### Log File Locations {#log-file-locations}
```bash
# System logs {#system-logs}
/var/log/syslog # General system messages
/var/log/auth.log # Authentication logs
/var/log/kern.log # Kernel messages
/var/log/dmesg # Boot messages
/var/log/messages # General messages (RHEL/CentOS)
/var/log/secure # Authentication (RHEL/CentOS)
# Service logs {#service-logs}
/var/log/apache2/ # Apache web server
/var/log/nginx/ # Nginx web server
/var/log/mysql/ # MySQL database
/var/log/postgresql/ # PostgreSQL database
# Application logs {#application-logs}
/var/log/cron # Cron job logs
/var/log/mail.log # Mail server logs
/var/log/ufw.log # Firewall logs
```
#### Log Analysis Tools {#log-analysis-tools}
```bash
# Real-time log monitoring {#real-time-log-monitoring}
tail -f /var/log/syslog
multitail /var/log/syslog /var/log/auth.log
# Log searching and filtering {#log-searching-and-filtering}
grep "ERROR" /var/log/syslog
grep -i "failed" /var/log/auth.log
awk '/ERROR/ {print $1, $2, $3, $NF}' /var/log/syslog
# Log statistics {#log-statistics}
awk '{print $5}' /var/log/auth.log | sort | uniq -c | sort -nr
grep "Failed password" /var/log/auth.log | awk '{print $11}' | sort | uniq -c
# Date-based filtering {#date-based-filtering}
grep "$(date +'%b %d')" /var/log/syslog
awk -v date="$(date +'%b %d')" '$0 ~ date' /var/log/syslog
```
#### Centralized Logging {#centralized-logging}
```bash
# rsyslog configuration {#rsyslog-configuration}
sudo nano /etc/rsyslog.conf
# Send logs to remote server {#send-logs-to-remote-server}
*.* @@log-server:514
# Receive logs from remote clients {#receive-logs-from-remote-clients}
$ModLoad imudp
$UDPServerRun 514
$UDPServerAddress 0.0.0.0
# Custom log files {#custom-log-files}
local0.* /var/log/custom.log
# Restart rsyslog {#restart-rsyslog}
sudo systemctl restart rsyslog
```
---
## Troubleshooting {#troubleshooting}
### System Won't Boot {#system-won't-boot}
#### Boot Issues Diagnosis {#boot-issues-diagnosis}
```bash
# Check boot messages {#check-boot-messages}
dmesg | less
journalctl -b # Current boot
journalctl -b -1 # Previous boot
# Check filesystem errors {#check-filesystem-errors}
sudo fsck /dev/sda1
sudo fsck -f /dev/sda1 # Force check
# Check GRUB issues {#check-grub-issues}
sudo grub-install /dev/sda
sudo update-grub
# Check initramfs {#check-initramfs}
sudo update-initramfs -u
sudo update-initramfs -c -k $(uname -r)
```
#### Recovery Procedures {#recovery-procedures}
```bash
# Boot from live USB/CD {#boot-from-live-usbcd}
# Mount root filesystem {#mount-root-filesystem}
sudo mkdir /mnt/system
sudo mount /dev/sda1 /mnt/system
# Mount other filesystems {#mount-other-filesystems}
sudo mount /dev/sda2 /mnt/system/home
sudo mount --bind /dev /mnt/system/dev
sudo mount --bind /proc /mnt/system/proc
sudo mount --bind /sys /mnt/system/sys
# Chroot into system {#chroot-into-system}
sudo chroot /mnt/system
# Fix issues from chroot environment {#fix-issues-from-chroot-environment}
apt update
apt install --reinstall grub-pc
grub-install /dev/sda
update-grub
# Exit chroot and reboot {#exit-chroot-and-reboot}
exit
sudo umount -R /mnt/system
reboot
```
### Performance Issues {#performance-issues}
#### System Performance Analysis {#system-performance-analysis}
```bash
# CPU usage {#cpu-usage}
top -o %CPU
ps aux --sort=-%cpu | head -10
sar -u 1 10
# Memory usage {#memory-usage}
free -h
ps aux --sort=-%mem | head -10
sar -r 1 10
# Disk I/O {#disk-io}
iostat -x 1 10
iotop -o
sar -d 1 10
# Network usage {#network-usage}
iftop
nethogs
ss -tuln
# Load average {#load-average}
uptime
w
sar -q 1 10
```
#### Performance Optimization {#performance-optimization}
```bash
# Identify resource-heavy processes {#identify-resource-heavy-processes}
ps aux --sort=-%cpu,-%mem | head -20
# Check for zombie processes {#check-for-zombie-processes}
ps aux | grep -i zombie
# Analyze system calls {#analyze-system-calls}
strace -p PID
strace -c command
# Memory analysis {#memory-analysis}
valgrind --tool=memcheck program
# Disk usage analysis {#disk-usage-analysis}
du -sh /* | sort -hr
ncdu /
# Find large files {#find-large-files}
find / -type f -size +100M 2>/dev/null
```
### Network Issues {#network-issues}
#### Network Troubleshooting {#network-troubleshooting}
```bash
# Check network interfaces {#check-network-interfaces}
ip addr show
ifconfig -a
# Check routing {#check-routing}
ip route show
route -n
# Test connectivity {#test-connectivity}
ping -c 4 8.8.8.8
ping -c 4 google.com
traceroute google.com
mtr google.com
# DNS resolution {#dns-resolution}
nslookup google.com
dig google.com
host google.com
# Check DNS configuration {#check-dns-configuration}
cat /etc/resolv.conf
systemd-resolve --status
# Port connectivity {#port-connectivity}
telnet hostname port
nc -zv hostname port
nmap -p port hostname
```
#### Network Configuration Issues {#network-configuration-issues}
```bash
# Reset network interface {#reset-network-interface}
sudo ifdown eth0
sudo ifup eth0
# Restart networking service {#restart-networking-service}
sudo systemctl restart networking
sudo systemctl restart NetworkManager
# Check network service status {#check-network-service-status}
sudo systemctl status networking
sudo systemctl status NetworkManager
# Flush DNS cache {#flush-dns-cache}
sudo systemctl flush-dns
sudo systemd-resolve --flush-caches
# Check firewall {#check-firewall}
sudo ufw status
sudo iptables -L
```
### Storage Issues {#storage-issues}
#### Disk Space Problems {#disk-space-problems}
```bash
# Check disk usage {#check-disk-usage}
df -h
du -sh /*
ncdu /
# Find large files {#find-large-files}
find / -type f -size +100M 2>/dev/null | head -20
find /var/log -type f -size +10M
# Clean up disk space {#clean-up-disk-space}
sudo apt autoremove
sudo apt autoclean
sudo journalctl --vacuum-time=7d
sudo find /tmp -type f -atime +7 -delete
# Check for deleted files still held open {#check-for-deleted-files-still-held-open}
lsof +L1
```
#### Filesystem Corruption {#filesystem-corruption}
```bash
# Check filesystem {#check-filesystem}
sudo fsck /dev/sda1
sudo fsck -f /dev/sda1 # Force check
sudo e2fsck -f /dev/sda1 # ext2/3/4 specific
# Check bad blocks {#check-bad-blocks}
sudo badblocks -v /dev/sda1
# SMART disk health {#smart-disk-health}
sudo smartctl -a /dev/sda
sudo smartctl -t short /dev/sda
```
### Service and Process Issues {#service-and-process-issues}
#### Service Troubleshooting {#service-troubleshooting}
```bash
# Check service status {#check-service-status}
sudo systemctl status service_name
sudo systemctl is-active service_name
sudo systemctl is-enabled service_name
# View service logs {#view-service-logs}
journalctl -u service_name
journalctl -u service_name -f
journalctl -u service_name --since "1 hour ago"
# Restart services {#restart-services}
sudo systemctl restart service_name
sudo systemctl reload service_name
# Check service dependencies {#check-service-dependencies}
sudo systemctl list-dependencies service_name
```
#### Process Issues {#process-issues}
```bash
# Find problematic processes {#find-problematic-processes}
ps aux | grep process_name
pgrep -f process_name
# Kill unresponsive processes {#kill-unresponsive-processes}
kill PID
kill -9 PID
killall process_name
pkill process_name
# Check process resources {#check-process-resources}
lsof -p PID
strace -p PID
# Check process limits {#check-process-limits}
ulimit -a
cat /proc/PID/limits
```
---
## Advanced Topics {#advanced-topics}
### Containers and Virtualization {#containers-and-virtualization}
#### Docker Basics {#docker-basics}
```bash
# Install Docker {#install-docker}
sudo apt update
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
# Basic Docker commands {#basic-docker-commands}
docker --version
docker info
docker images
docker ps
docker ps -a
# Run containers {#run-containers}
docker run hello-world
docker run -it ubuntu:20.04 /bin/bash
docker run -d -p 80:80 nginx
docker run --name mycontainer -d nginx
# Container management {#container-management}
docker start container_name
docker stop container_name
docker restart container_name
docker rm container_name
docker rmi image_name
# Docker networking {#docker-networking}
docker network ls
docker network create mynetwork
docker run --network mynetwork nginx
# Docker volumes {#docker-volumes}
docker volume ls
docker volume create myvolume
docker run -v myvolume:/data nginx
```
#### LXC/LXD Containers {#lxc/lxd-containers}
```bash
# Install LXD {#install-lxd}
sudo apt install lxd
sudo lxd init
# Container operations {#container-operations}
lxc launch ubuntu:20.04 mycontainer
lxc list
lxc info mycontainer
lxc exec mycontainer -- /bin/bash
lxc stop mycontainer
lxc delete mycontainer
# Container configuration {#container-configuration}
lxc config show mycontainer
lxc config set mycontainer limits.memory 1GB
lxc config set mycontainer limits.cpu 2
# File operations {#file-operations}
lxc file push localfile mycontainer/path/
lxc file pull mycontainer/path/file localfile
```
### Kernel Modules and Compilation {#kernel-modules-and-compilation}
#### Kernel Module Management {#kernel-module-management}
```bash
# List loaded modules {#list-loaded-modules}
lsmod
cat /proc/modules
# Module information {#module-information}
modinfo module_name
modinfo -d module_name # Description
modinfo -p module_name # Parameters
# Load/unload modules {#loadunload-modules}
sudo modprobe module_name
sudo modprobe -r module_name # Remove
sudo insmod /path/to/module.ko
sudo rmmod module_name
# Automatic module loading {#automatic-module-loading}
echo "module_name" | sudo tee -a /etc/modules
# Module parameters {#module-parameters}
echo "options module_name param=value" | sudo tee /etc/modprobe.d/module.conf
# Blacklist modules {#blacklist-modules}
echo "blacklist module_name" | sudo tee /etc/modprobe.d/blacklist.conf
```
#### Kernel Compilation {#kernel-compilation}
```bash
# Install build dependencies {#install-build-dependencies}
sudo apt install build-essential libncurses-dev bison flex libssl-dev libelf-dev
# Download kernel source {#download-kernel-source}
wget https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.15.tar.xz
tar -xf linux-5.15.tar.xz
cd linux-5.15
# Configure kernel {#configure-kernel}
make menuconfig # Interactive configuration
make oldconfig # Use existing config
cp /boot/config-$(uname -r).config
# Compile kernel {#compile-kernel}
make -j$(nproc) # Use all CPU cores
make modules
# Install kernel {#install-kernel}
sudo make modules_install
sudo make install
sudo update-grub
```
### System Optimization {#system-optimization}
#### Memory Optimization {#memory-optimization}
```bash
# Adjust swappiness {#adjust-swappiness}
echo 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf
# Configure huge pages {#configure-huge-pages}
echo 'vm.nr_hugepages=1024' | sudo tee -a /etc/sysctl.conf
# Memory overcommit settings {#memory-overcommit-settings}
echo 'vm.overcommit_memory=1' | sudo tee -a /etc/sysctl.conf
echo 'vm.overcommit_ratio=80' | sudo tee -a /etc/sysctl.conf
# Cache pressure {#cache-pressure}
echo 'vm.vfs_cache_pressure=50' | sudo tee -a /etc/sysctl.conf
# Apply changes {#apply-changes}
sudo sysctl -p
```
#### Network Optimization {#network-optimization}
```bash
# TCP buffer sizes {#tcp-buffer-sizes}
echo 'net.core.rmem_max=134217728' | sudo tee -a /etc/sysctl.conf
echo 'net.core.wmem_max=134217728' | sudo tee -a /etc/sysctl.conf
echo 'net.ipv4.tcp_rmem=4096 65536 134217728' | sudo tee -a /etc/sysctl.conf
echo 'net.ipv4.tcp_wmem=4096 65536 134217728' | sudo tee -a /etc/sysctl.conf
# Connection tracking {#connection-tracking}
echo 'net.netfilter.nf_conntrack_max=1048576' | sudo tee -a /etc/sysctl.conf
# TCP congestion control {#tcp-congestion-control}
echo 'net.ipv4.tcp_congestion_control=bbr' | sudo tee -a /etc/sysctl.conf
# Apply changes {#apply-changes}
sudo sysctl -p
```
---
## Best Practices {#best-practices}
### Security Best Practices {#security-best-practices}
#### System Hardening Checklist {#system-hardening-checklist}
```bash
# 1. Keep system updated {#1-keep-system-updated}
sudo apt update && sudo apt upgrade
# 2. Configure firewall {#2-configure-firewall}
sudo ufw enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
# 3. Disable root login {#3-disable-root-login}
sudo passwd -l root
# 4. Configure SSH securely {#4-configure-ssh-securely}
# Edit /etc/ssh/sshd_config: {#edit-etcsshsshd_config}
# PermitRootLogin no {#permitrootlogin-no}
# PasswordAuthentication no {#passwordauthentication-no}
# Port 2222 {#port-2222}
# 5. Install fail2ban {#5-install-fail2ban}
sudo apt install fail2ban
# 6. Set up automatic updates {#6-set-up-automatic-updates}
sudo apt install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
# 7. Configure audit logging {#7-configure-audit-logging}
sudo apt install auditd
# 8. Remove unnecessary services {#8-remove-unnecessary-services}
sudo systemctl disable service_name
sudo systemctl stop service_name
# 9. Set proper file permissions {#9-set-proper-file-permissions}
find /home -type f -perm 777 -exec chmod 644 {} \;
find /home -type d -perm 777 -exec chmod 755 {} \;
# 10. Configure log monitoring {#10-configure-log-monitoring}
sudo apt install logwatch
```
### Backup Strategies {#backup-strategies}
#### 3-2-1 Backup Rule {#3-2-1-backup-rule}
```bash
# 3 copies of important data {#3-copies-of-important-data}
# 2 different storage media {#2-different-storage-media}
# 1 offsite backup {#1-offsite-backup}
# Automated backup script {#automated-backup-script}
#!/bin/bash {#binbash}
SOURCE="/home/user/important"
LOCAL_BACKUP="/backup/local"
REMOTE_BACKUP="user@remote-server:/backup/remote"
CLOUD_BACKUP="s3://my-bucket/backup"
# Local backup {#local-backup}
rsync -avH --delete "$SOURCE/" "$LOCAL_BACKUP/"
# Remote backup {#remote-backup}
rsync -avH --delete -e ssh "$SOURCE/" "$REMOTE_BACKUP/"
# Cloud backup (using AWS CLI) {#cloud-backup-using-aws-cli}
aws s3 sync "$SOURCE/" "$CLOUD_BACKUP/" --delete
```
### Performance Monitoring {#performance-monitoring}
#### Monitoring Script {#monitoring-script}
```bash
#!/bin/bash {#binbash}
# System monitoring script {#system-monitoring-script}
LOGFILE="/var/log/system-monitor.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
# CPU usage {#cpu-usage}
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)
# Memory usage {#memory-usage}
MEM_USAGE=$(free | grep Mem | awk '{printf "%.2f", $3/$2 * 100.0}')
# Disk usage {#disk-usage}
DISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | cut -d'%' -f1)
# Load average {#load-average}
LOAD_AVG=$(uptime | awk -F'load average:' '{print $2}')
# Log metrics {#log-metrics}
echo "$TIMESTAMP - CPU: ${CPU_USAGE}%, MEM: ${MEM_USAGE}%, DISK: ${DISK_USAGE}%, LOAD: ${LOAD_AVG}" >> "$LOGFILE"
# Alert if thresholds exceeded {#alert-if-thresholds-exceeded}
if (( $(echo "$CPU_USAGE > 80" | bc -l))); then
echo "High CPU usage: ${CPU_USAGE}%" | mail -s "CPU Alert" admin@example.com
fi
if (( $(echo "$MEM_USAGE > 90" | bc -l))); then
echo "High memory usage: ${MEM_USAGE}%" | mail -s "Memory Alert" admin@example.com
fi
```
### Documentation and Change Management {#documentation-and-change-management}
#### System Documentation Template {#system-documentation-template}
```bash
# System Information {#system-information}
Hostname: $(hostname)
OS: $(lsb_release -d | cut -f2)
Kernel: $(uname -r)
Uptime: $(uptime -p)
# Hardware Information {#hardware-information}
CPU: $(lscpu | grep "Model name" | cut -d: -f2 | xargs)
Memory: $(free -h | grep Mem | awk '{print $2}')
Disk: $(df -h / | awk 'NR==2 {print $2}')
# Network Configuration {#network-configuration}
IP Address: $(ip route get 8.8.8.8 | grep -oP 'src \K\S+')
Gateway: $(ip route | grep default | awk '{print $3}')
DNS: $(cat /etc/resolv.conf | grep nameserver | awk '{print $2}' | tr '\n' ' ')
# Installed Services {#installed-services}
Active Services: $(systemctl list-units --type=service --state=active | wc -l)
Enabled Services: $(systemctl list-unit-files --type=service --state=enabled | wc -l)
# Security Configuration {#security-configuration}
Firewall Status: $(ufw status | head -1)
SSH Port: $(grep "^Port" /etc/ssh/sshd_config | awk '{print $2}')
Fail2ban Status: $(systemctl is-active fail2ban)
```
### Maintenance Procedures {#maintenance-procedures}
#### Regular Maintenance Script {#regular-maintenance-script}
```bash
#!/bin/bash {#binbash}
# Weekly maintenance script {#weekly-maintenance-script}
echo "Starting weekly maintenance - $(date)"
# Update package lists {#update-package-lists}
echo "Updating package lists..."
apt update
# Upgrade packages {#upgrade-packages}
echo "Upgrading packages..."
apt upgrade -y
# Clean package cache {#clean-package-cache}
echo "Cleaning package cache..."
apt autoremove -y
apt autoclean
# Update locate database {#update-locate-database}
echo "Updating locate database..."
updatedb
# Rotate logs {#rotate-logs}
echo "Rotating logs..."
logrotate -f /etc/logrotate.conf
# Clean temporary files {#clean-temporary-files}
echo "Cleaning temporary files..."
find /tmp -type f -atime +7 -delete
find /var/tmp -type f -atime +30 -delete
# Check disk usage {#check-disk-usage}
echo "Checking disk usage..."
df -h
# Check system load {#check-system-load}
echo "System load:"
uptime
# Check failed services {#check-failed-services}
echo "Failed services:"
systemctl --failed
echo "Weekly maintenance completed - $(date)"
```
This completes the comprehensive Linux guide covering all major topics from basics to advanced system administration, security, troubleshooting, and best practices.