import re
filepath = r'C:\Users\James\Documents\GitHub\Computer-Programming-Notes\Web1_2.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', content)
print(f'Images in Web1_2.html: {len(imgs)}')
for img in imgs:
    print(f'  {img}')
