import re

with open('src/router/index.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find all static component imports
# e.g., import Home from '../pages/Home.vue'
import_regex = re.compile(r"import\s+([A-Za-z0-9_]+)\s+from\s+['\"](\.\./pages/[^'\"]+\.vue)['\"]")

routes_map = {}
for match in import_regex.finditer(content):
    component_name = match.group(1)
    component_path = match.group(2)
    routes_map[component_name] = component_path

# Remove the static imports
content = re.sub(r"import\s+[A-Za-z0-9_]+\s+from\s+['\"]\.\./pages/[^'\"]+\.vue['\"]\s*\n", '', content)

# Replace the component: ComponentName with component: () => import(...)
for comp_name, comp_path in routes_map.items():
    comp_regex = re.compile(r"component:\s*" + comp_name + r"(,|\s)")
    content = comp_regex.sub(rf"component: () => import('{comp_path}')\g<1>", content)

with open('src/router/index.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Router refactored to use dynamic imports")
