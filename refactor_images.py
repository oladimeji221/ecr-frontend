import os
import re

PUBLIC_DIR = '/Applications/XAMPP/xamppfiles/htdocs/ECR_LATEST_REVAMP/ECR_NEW/public'
SRC_DIR = '/Applications/XAMPP/xamppfiles/htdocs/ECR_LATEST_REVAMP/ECR_NEW/src'

print("Collecting available .webp images in public folder...")
webp_images = set()
for root, _, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.lower().endswith('.webp'):
            # Store the absolute path of the webp file
            webp_images.add(os.path.join(root, f))

# Pattern to find strings ending in .png, .jpg, .jpeg
pattern = re.compile(r'([a-zA-Z0-9_/\.-]+)\.(png|jpg|jpeg)', re.IGNORECASE)

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    matches = pattern.finditer(content)
    # We want to replace backwards to not mess up indexes, or just let re.sub handle it with a function
    
    def replacer(match):
        full_match = match.group(0) # e.g., /images/laptop.png
        base_path = match.group(1)  # e.g., /images/laptop
        
        # In source code, paths might be absolute like /images/... or relative like ../assets/images/...
        # We need to map it to the actual file in PUBLIC_DIR to check if .webp exists
        
        # Heuristic: if the path starts with /images/, it's in public/images/
        # Or if it's guest/assets/images, etc.
        # Let's try to resolve it relative to PUBLIC_DIR first
        
        # Remove leading slash if present for joining
        lookup_path = full_match.lstrip('/')
        abs_public_path = os.path.join(PUBLIC_DIR, lookup_path)
        
        webp_candidate = os.path.splitext(abs_public_path)[0] + '.webp'
        
        if webp_candidate in webp_images:
            return base_path + '.webp'
            
        # If not found directly in public, maybe the code just references the filename and it's resolved by webpack/vite.
        # Check against all webp images by basename? 
        return full_match

    new_content = pattern.sub(replacer, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filepath}")

for root, _, files in os.walk(SRC_DIR):
    for f in files:
        if f.endswith('.vue') or f.endswith('.ts') or f.endswith('.js') or f.endswith('.html'):
            process_file(os.path.join(root, f))

print("Refactoring complete.")
