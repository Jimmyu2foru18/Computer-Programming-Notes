import os
import re

def remove_emojis(text):
    # This regex pattern matches most emoji characters
    emoji_pattern = re.compile(
        "[\\U0001F600-\\U0001F64F\\U0001F300-\\U0001F5FF\\U0001F680-\\U0001F6FF"
        "\\U0001F700-\\U0001F77F\\U0001F780-\\U0001F7FF\\U0001F800-\\U0001F8FF"
        "\\U0001F900-\\U0001F9FF\\U0001FA00-\\U0001FA6F\\U0001FA70-\\U0001FAFF"
        "\\U00002600-\\U000026FF\\U00002700-\\U000027BF]", 
        flags=re.UNICODE
    )
    return emoji_pattern.sub(r'', text)

def fix_toc_links(content):
    # Find all markdown links in the table of contents
    toc_link_pattern = re.compile(r'\[(.*?)\]\(#(.*?)\)')
    
    def replace_link(match):
        link_text = match.group(1)
        link_target = match.group(2)
        
        # Remove emojis from link text
        cleaned_link_text = remove_emojis(link_text).strip()
        
        # Generate a new target from the link text
        new_target = cleaned_link_text.lower().replace(' ', '-')
        # Remove special characters and replace with hyphens
        new_target = re.sub(r'[^\w\s-]', '', new_target)
        new_target = re.sub(r'[-\s]+', '-', new_target).strip('-')
        
        return f'[{cleaned_link_text}](#{new_target})'
    
    return toc_link_pattern.sub(replace_link, content)

def fix_headings(content):
    # Find all headings and add IDs to them or fix existing IDs
    lines = content.split('\n')
    heading_pattern = re.compile(r'^(#+)\s*(.*?)\s*$')
    id_pattern = re.compile(r'^(#+)\s*(.*?)\s*\{#(.*?)\}\s*$')
    duplicate_id_pattern = re.compile(r'^(#+)\s*(.*?)\s*\{#(.*?)\}\s*\{#(.*?)\}\s*$')
    triple_id_pattern = re.compile(r'^(#+)\s*(.*?)\s*\{#(.*?)\}\s*\{#(.*?)\}\s*\{#(.*?)\}\s*$')
    
    for i in range(len(lines)):
        # Check for triple IDs first
        triple_match = triple_id_pattern.match(lines[i])
        if triple_match:
            level = triple_match.group(1)
            heading_text = triple_match.group(2).strip()
            heading_id = triple_match.group(3).strip()
            
            # Replace with a single ID
            lines[i] = f'{level} {heading_text} {{#{heading_id}}}'
            continue
            
        # Check for duplicate IDs
        duplicate_match = duplicate_id_pattern.match(lines[i])
        if duplicate_match:
            level = duplicate_match.group(1)
            heading_text = duplicate_match.group(2).strip()
            heading_id = duplicate_match.group(3).strip()
            
            # Replace with a single ID
            lines[i] = f'{level} {heading_text} {{#{heading_id}}}'
            continue
            
        # Check if the line already has an ID
        id_match = id_pattern.match(lines[i])
        if id_match:
            continue
            
        # Add ID to headings without IDs
        match = heading_pattern.match(lines[i])
        if match:
            level = match.group(1)  # Number of # characters
            heading_text = match.group(2).strip()
            
            # Skip level 1 headings (usually the title)
            if level == 1:
                continue
                
            # Generate ID from heading text
            heading_id = remove_emojis(heading_text).strip().lower().replace(' ', '-')
            # Remove special characters and replace with hyphens
            heading_id = re.sub(r'[^\w\s-]', '', heading_id)
            heading_id = re.sub(r'[-\s]+', '-', heading_id).strip('-')
            
            # Add ID to heading
            lines[i] = f'{level} {heading_text} {{#{heading_id}}}'
    
    return '\n'.join(lines)

def clean_extra_spaces(text):
    # Replace multiple spaces with a single space
    text = re.sub(r' +', ' ', text)
    # Replace spaces at the beginning of lines
    text = re.sub(r'^\s+', '', text, flags=re.MULTILINE)
    # Replace spaces before punctuation
    text = re.sub(r'\s+([.,;:!?)])', r'\1', text)
    return text

def clean_duplicate_ids(content):
    # Clean up any remaining duplicate or triple ID patterns that might not be caught by the heading regex
    # This handles more complex cases like nested IDs
    content = re.sub(r'\{#([\w-]+)\}\s*\{#\1-\{#\1\}\}', r'{#\1}', content)
    content = re.sub(r'\{#([\w-]+)\}\s*\{#([\w-]+)\}', r'{#\1}', content)
    content = re.sub(r'\{#([\w-]+)\}\s*\{#([\w-]+)\}\s*\{#([\w-]+)\}', r'{#\1}', content)
    return content

def process_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Remove emojis
        cleaned_content = remove_emojis(content)
        
        # Clean any duplicate IDs first
        cleaned_content = clean_duplicate_ids(cleaned_content)
        
        # Fix headings with IDs
        cleaned_content = fix_headings(cleaned_content)
        
        # Fix TOC links
        cleaned_content = fix_toc_links(cleaned_content)
        
        # Clean up extra spaces
        cleaned_content = clean_extra_spaces(cleaned_content)
        
        # Final pass to clean any remaining duplicate IDs
        cleaned_content = clean_duplicate_ids(cleaned_content)
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(cleaned_content)
            
        print(f"Processed: {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def main():
    # Get the directory of this script
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Process all markdown files in the directory
    for filename in os.listdir(base_dir):
        if filename.endswith('.md'):
            file_path = os.path.join(base_dir, filename)
            process_file(file_path)

if __name__ == "__main__":
    main()