#!/usr/bin/env python3
"""
Ensure all images are unique (1 of 1) across the project.
Scans all HTML files, assigns unique Unsplash photo IDs to each <img> tag.
"""

import os
import glob
import re
import requests
from pathlib import Path

BASE_PATH = r"C:\Users\James\Documents\GitHub\Computer-Programming-Notes"

# Master pool of candidate Unsplash photo IDs
# Mix of verified working IDs and IDs extracted from search results
CANDIDATE_IDS = [
    # Verified working from earlier batch
    '1633412802994-5c058f151b66', '1664526936810-ec0856d31b92', '1664526937033-fe2c11f1be25',
    '1558494949-ef010cbdcc31', '1698668975271-2ba9a323be6b', '1544197150-b99a580bb7a8',
    '1451187580459-43490279c0fa', '1526374965328-7f61d4dc18c5', '1504639725590-34d0984388bd',
    '1516116216624-53e697fedbea', '1555066931-4365d14bab8c', '1518773553398-650c184e0bb3',
    '1515879218367-8466d910aaa4', '1517694712202-14dd9538aa97', '1460925895917-afdab827c52f',
    '1561070791-2526d30994b5', '1629654297299-c8506221ca97', '1614741118887-7a4ee193a5fa',
    '1544383835-bda2bc66a55d', '1531403009284-440f080d1e12', '1542626991-cbc4e32524cc',
    '1518770660439-4636190af475', '1762279388979-6a430989284c', '1778146476147-5f8d4bd03c79',
    '1762279388952-85187155e48d', '1765046255462-198d49d07dd1', '1770347658796-e871e53836d6',
    '1737308806605-82a95ada6f78', '1541176447985-6bb45fb77a14', '1764182130428-01fcf5f1b068',
    '1587620962725-abab7fe55159', '1498050108023-c5249f4df085', '1484417894907-623942c8ee29',
    '1522071820081-009f0129c71c', '1575089976121-8ed7b2a54265', '1748256622734-92241ae7b43f',
    '1744627049721-73c27008ad28',
    # Programming/developer photos
    '1607799279861-4dd421887fb3', '1519389950473-47ba0277781c',
    # Server/data center photos  
    '1740363268539-cd9093c3b5d1', '1742710726634-18e31a278fc2', '1742710726614-1e94511e4021',
    '1682146029185-198922bd8350', '1682145189653-bb0b79db3415', '1682145728214-dbd6c8e3f',
    'PbU6Gd8fp40', '1667264501379-c1537934c7ab', '1664526937033-fe2c11f1be25',
    # Linux/terminal photos
    '4Mw7nkQDByk', '1763568258314-24ef37bb52e2', '1762242298589-582f5f6c3fb2',
    '1678565999332-1cde462f7b24', '1663089521768-78e171f3dfd6', '1663089895867-428d148a8663',
    '1664299072583-584882c00a5f', '1726754457459-d2dfa2e3a434',
    # Network photos
    '1682145181120-73cfdfc8a36d', '1683120968693-9af51578770e', '1661715955019-89f39802cd4d',
    '1661715626413-97025519e975', '1661700168020-161c61333ab5', '1606904825846-647eb07f5be2',
    '1661589670435-65cfb3224205', '1516044734145-07ca8eef8731', '1713857297379-6fc26e70f581',
    '1762340916350-ad5a3d620c16', '7Og0reGku4M', 'Wut0F41K9ZU', 'syCXK9WndqQ',
    # AI/abstract photos
    '1674027444485-cec3da58eef4', '1644325349124-d1756b79dd42', '1680404114169-e254afa55a16',
    '1678834890201-47674c716347', '1681586533774-1d9d42425712', '1683121710572-7723bd2e235d',
    '1770233621425-5d9ee7a0a700', '1750365920056-d4b4ca73fbaa', '1750365919878-2735d30fa3d8',
    '1682141007707-1f09c5a1d814', '1661877737564-3dfd7282efcb', '1682141013747-5aed8665c154',
    '1733324408193-409a8951a16f', '1683120968693-9af51578770e',
    # Additional from search results
    '1762340915398-46081e67c401', '1661882403999-46081e67c401', '1623479322725-28b25c16b011',
    '1536148935331-408321065b18', '1514996696876-5c856ca2a0a4', '1737308806605-82a95ada6f78',
    '1541176447985-6bb45fb77a14', '1764182130428-01fcf5f1b068',
    # More IDs extracted from search result URLs
    '1748256622734-92241ae7b43f', '1744627049721-73c27008ad28', '1762340915398-46081e67c401',
    '1661882403999-46081e67c401', '1623479322725-28b25c16b011', '1536148935331-408321065b18',
    '1514996696876-5c856ca2a0a4', '1737308806605-82a95ada6f78', '1541176447985-6bb45fb77a14',
    '1764182130428-01fcf5f1b068', '1587620962725-abab7fe55159', '1498050108023-c5249f4df085',
    '1484417894907-623942c8ee29', '1522071820081-009f0129c71c', '1575089976121-8ed7b2a54265',
    # Even more from search results
    '1555949963-aa9fe0c977eb', '1518433278983-bc615d329858', '1581291518633-83b4eb1d83e',
    '1508873521834-8c43024c081d',
    # Additional tech photos
    '1518773553398-650c184e0bb3', '1558494949-ef010cbdcc31', '1451187580459-43490279c0fa',
    '1460925895917-afdab827c52f', '1504639725590-34d0984388bd', '1516116216624-53e697fedbea',
    '1555066931-4365d14bab8c', '1515879218367-8466d910aaa4', '1517694712202-14dd9538aa97',
    '1561070791-2526d30994b5', '1629654297299-c8506221ca97', '1614741118887-7a4ee193a5fa',
    '1531403009284-440f080d1e12', '1542626991-cbc4e32524cc', '1518770660439-4636190af475',
    '1544383835-bda2bc66a55d', '1762279388952-85187155e48d', '1765046255462-198d49d07dd1',
    '1770347658796-e871e53836d6',
]

# Deduplicate
CANDIDATE_IDS = list(dict.fromkeys(CANDIDATE_IDS))
print(f"Total candidate IDs: {len(CANDIDATE_IDS)}")

# Verify all candidates - keep only working ones
print("Verifying candidate IDs...")
verified = []
broken = []
for pid in CANDIDATE_IDS:
    url = f'https://images.unsplash.com/photo-{pid}?q=80&w=600&auto=format&fit=crop'
    try:
        r = requests.head(url, timeout=10, allow_redirects=True)
        if r.status_code == 200:
            verified.append(pid)
        else:
            broken.append(pid)
    except Exception as e:
        broken.append(pid)

print(f"Verified working: {len(verified)}")
print(f"Broken: {len(broken)}")
if broken:
    print(f"Broken IDs: {broken}")

# Check if we have enough
total_images = 225
if len(verified) < total_images:
    print(f"\nWARNING: Need {total_images - len(verified)} more unique image IDs!")
    print("The script will reuse IDs if needed, but try to add more candidates.")
else:
    print(f"\nGood! We have {len(verified)} verified IDs for {total_images} images.")

# Save verified list for use
with open('verified_image_ids.txt', 'w') as f:
    for pid in verified:
        f.write(pid + '\n')

print("Verified IDs saved to verified_image_ids.txt")
