import os, glob, re
from collections import Counter

base = r'C:\Users\James\Documents\GitHub\Computer-Programming-Notes'
files = glob.glob(os.path.join(base, '*.html'))

all_srcs = []
for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', content)
    all_srcs.extend(imgs)

print(f'Total images: {len(all_srcs)}')
print(f'Unique images: {len(set(all_srcs))}')

# Count occurrences of each
counter = Counter(all_srcs)
print('\nTop 20 most common images:')
for src, count in counter.most_common(20):
    print(f'  {count}x: {src[:80]}')
