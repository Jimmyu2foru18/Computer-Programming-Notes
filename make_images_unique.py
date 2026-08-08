#!/usr/bin/env python3
"""
Ensure all images are unique (1 of 1) across the project.
Uses verified Unsplash IDs first, then picsum.photos for remaining images.
"""

import os
import glob
import re
import hashlib

BASE_PATH = r"C:\Users\James\Documents\GitHub\Computer-Programming-Notes"

# All verified working Unsplash photo IDs (consolidated from multiple verification runs)
VERIFIED_UNSPLASH_IDS = [
    '1762279388979-6a430989284c', '1778146476147-5f8d4bd03c79',
    '1762279388952-85187155e48d', '1765046255462-198d49d07dd1',
    '1770347658796-e871e53836d6', '1737308806605-82a95ada6f78',
    '1541176447985-6bb45fb77a14', '1764182130428-01fcf5f1b068',
    '1587620962725-abab7fe55159', '1498050108023-c5249f4df085',
    '1484417894907-623942c8ee29', '1522071820081-009f0129c71c',
    '1575089976121-8ed7b2a54265', '1748256622734-92241ae7b43f',
    '1744627049721-73c27008ad28', '1633412802994-5c058f151b66',
    '1664526936810-ec0856d31b92', '1664526937033-fe2c11f1be25',
    '1558494949-ef010cbdcc31', '1698668975271-2ba9a323be6b',
    '1544197150-b99a580bb7a8', '1451187580459-43490279c0fa',
    '1526374965328-7f61d4dc18c5', '1504639725590-34d0984388bd',
    '1516116216624-53e697fedbea', '1555066931-4365d14bab8c',
    '1518773553398-650c184e0bb3', '1515879218367-8466d910aaa4',
    '1517694712202-14dd9538aa97', '1460925895917-afdab827c52f',
    '1561070791-2526d30994b5', '1629654297299-c8506221ca97',
    '1614741118887-7a4ee193a5fa', '1531403009284-440f080d1e12',
    '1542626991-cbc4e32524cc', '1518770660439-4636190af475',
    '1544383835-bda2bc66a55d', '1607799279861-4dd421887fb3',
    '1519389950473-47ba0277781c', '1667264501379-c1537934c7ab',
    '1763568258314-24ef37bb52e2', '1606904825846-647eb07f5be2',
    '1516044734145-07ca8eef8731', '1713857297379-6fc26e70f581',
    '1762340916350-ad5a3d620c16', '1674027444485-cec3da58eef4',
    '1644325349124-d1756b79dd42', '1770233621425-5d9ee7a0a700',
    '1750365920056-d4b4ca73fbaa', '1750365919878-2735d30fa3d8',
    '1536148935331-408321065b18', '1514996696876-5c856ca2a0a4',
    '1506869640319-fe1a24fd76dc', '1474718723952-48d2a016108f',
    '1416339306562-f3d12fefd36f', '1523476843875-43c2cb89aa85',
    '1479862863327-e4d9a0a83c3d', '1500530855697-b586d89ba3ee',
    '1725610588086-b9e38da987f7',
]

# Remove duplicates while preserving order
seen = set()
UNIQUE_UNSPLASH_IDS = []
for pid in VERIFIED_UNSPLASH_IDS:
    if pid not in seen:
        seen.add(pid)
        UNIQUE_UNSPLASH_IDS.append(pid)

print(f"Total verified Unsplash IDs: {len(UNIQUE_UNSPLASH_IDS)}")

# Collect all image occurrences
all_images = []
files = sorted(glob.glob(os.path.join(BASE_PATH, '*.html')))

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all <img> tags with src containing unsplash or picsum
    img_pattern = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']')
    for match in img_pattern.finditer(content):
        src = match.group(1)
        if 'unsplash' in src or 'picsum' in src:
            all_images.append({
                'filepath': filepath,
                'src': src,
                'match': match
            })

print(f"Total images found: {len(all_images)}")

# Assign unique URLs
unsplash_idx = 0
picsum_seeds = set()

for img in all_images:
    if unsplash_idx < len(UNIQUE_UNSPLASH_IDS):
        # Use verified Unsplash ID
        pid = UNIQUE_UNSPLASH_IDS[unsplash_idx]
        new_src = f'https://images.unsplash.com/photo-{pid}?q=80&w=800&auto=format&fit=crop'
        unsplash_idx += 1
    else:
        # Use unique picsum.photos URL
        seed = f"{img['filepath']}_{unsplash_idx}"
        seed_hash = int(hashlib.md5(seed.encode()).hexdigest()[:8], 16)
        while seed_hash in picsum_seeds:
            seed_hash = (seed_hash + 1) % 100000000
        picsum_seeds.add(seed_hash)
        new_src = f'https://picsum.photos/seed/{seed_hash}/800/500'
    
    img['new_src'] = new_src

# Apply changes
print("\nApplying changes...")
files_modified = set()

for img in all_images:
    filepath = img['filepath']
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    old_src = img['src']
    new_src = img['new_src']
    
    if old_src in content:
        content = content.replace(old_src, new_src)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        files_modified.add(filepath)
    else:
        print(f"WARNING: Could not find src in {filepath}")

print(f"\nFiles modified: {len(files_modified)}")
print(f"Unique Unsplash images: {min(unsplash_idx, len(UNIQUE_UNSPLASH_IDS))}")
print(f"Unique picsum images: {len(picsum_seeds)}")
print("Done!")
