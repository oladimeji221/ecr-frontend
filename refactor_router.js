const fs = require('fs');

let content = fs.readFileSync('src/router/index.js', 'utf8');

// Regex to find all static component imports (except layouts or special ones if needed, but we only have pages and auth)
// Examples:
// import Home from '../pages/Home.vue'
// import Product from '../pages/Product.vue'
// import EducationTraining from '../pages/services/EducationTraining.vue'

const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+['"]\.\.\/pages\/([^'"]+\.vue)['"]/g;

let match;
const routesMap = {};

// Find them all and populate the map
while ((match = importRegex.exec(content)) !== null) {
    const componentName = match[1];
    const componentPath = match[2];
    routesMap[componentName] = `../pages/${componentPath}`;
}

// Remove the static imports
content = content.replace(/import\s+[A-Za-z0-9_]+\s+from\s+['"]\.\.\/pages\/[^'"]+\.vue['"]\s*\n/g, '');

// Replace the component: ComponentName with component: () => import(...)
for (const [componentName, componentPath] of Object.entries(routesMap)) {
    // We only want to match exactly `component: ComponentName,` or `component: ComponentName\n`
    // Not `component: () => import(...)` which already exists for some
    const compRegex = new RegExp(`component:\\s*${componentName}(,|\\s)`, 'g');
    content = content.replace(compRegex, `component: () => import('${componentPath}')$1`);
}

fs.writeFileSync('src/router/index.js', content);
console.log("Router refactored to use dynamic imports");
