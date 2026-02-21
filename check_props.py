#!/usr/bin/env python3
"""
Script to check component props schemas in registry.json against actual component files.
This helps identify mismatches between registry.json and actual component implementations.
"""

import json
import re
import os
from pathlib import Path
from typing import Dict, List, Set, Tuple

def extract_props_from_tsx(file_path: str) -> Dict[str, str]:
    """Extract props from a TypeScript component file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        return {}
    
    # Find interface or type definition for props
    # Look for patterns like: interface ComponentNameProps { ... }
    props_pattern = r'interface\s+(\w+Props)\s*\{([^}]+)\}'
    match = re.search(props_pattern, content, re.DOTALL)
    
    if not match:
        # Try type alias pattern
        props_pattern = r'type\s+(\w+Props)\s*=\s*\{([^}]+)\}'
        match = re.search(props_pattern, content, re.DOTALL)
    
    if not match:
        return {}
    
    props_content = match.group(2)
    props = {}
    
    # Extract prop definitions: propName?: type or propName: type
    prop_pattern = r'(\w+)(\??)\s*:\s*([^;]+);'
    for prop_match in re.finditer(prop_pattern, props_content):
        prop_name = prop_match.group(1)
        is_optional = prop_match.group(2) == '?'
        prop_type = prop_match.group(3).strip()
        
        # Clean up type (remove comments, extra whitespace)
        prop_type = re.sub(r'//.*', '', prop_type).strip()
        prop_type = ' '.join(prop_type.split())
        
        props[prop_name] = {
            'optional': is_optional,
            'type': prop_type
        }
    
    return props

def normalize_path(path: str) -> str:
    """Convert @/ path to actual file path."""
    if path.startswith('@/'):
        return path.replace('@/', 'src/')
    return path

def check_component(component_path: str, registry_props: Dict[str, str]) -> Tuple[List[str], List[str], List[str]]:
    """Check a single component's props against registry."""
    actual_file = normalize_path(component_path)
    
    if not actual_file.endswith('.tsx'):
        actual_file += '.tsx'
    
    actual_props = extract_props_from_tsx(actual_file)
    
    if not actual_props:
        return [], [], [f"Could not find props interface in {actual_file}"]
    
    missing_in_registry = []
    extra_in_registry = []
    type_mismatches = []
    
    # Check props in actual component
    for prop_name, prop_info in actual_props.items():
        if prop_name not in registry_props:
            missing_in_registry.append(prop_name)
        else:
            # Check if optionality matches
            registry_optional = '?' in registry_props[prop_name] or '(required)' in registry_props[prop_name]
            if prop_info['optional'] != registry_optional:
                type_mismatches.append(f"{prop_name}: optionality mismatch (actual: {'optional' if prop_info['optional'] else 'required'}, registry: {'optional' if registry_optional else 'required'})")
    
    # Check props in registry that aren't in actual component
    for prop_name in registry_props.keys():
        if prop_name not in actual_props:
            extra_in_registry.append(prop_name)
    
    return missing_in_registry, extra_in_registry, type_mismatches

def main():
    """Main function to check all components."""
    registry_path = Path('registry.json')
    
    if not registry_path.exists():
        print("registry.json not found!")
        return
    
    with open(registry_path, 'r', encoding='utf-8') as f:
        registry = json.load(f)
    
    issues = []
    
    # Check componentRegistry
    for category, components in registry.get('componentRegistry', {}).items():
        print(f"\n=== Checking {category} components ===")
        for component in components:
            name = component.get('name')
            path = component.get('path')
            props_schema = component.get('propsSchema', {})
            
            if not path:
                continue
            
            missing, extra, mismatches = check_component(path, props_schema)
            
            if missing or extra or mismatches:
                print(f"\n{name} ({path}):")
                if missing:
                    print(f"  Missing in registry: {', '.join(missing)}")
                if extra:
                    print(f"  Extra in registry: {', '.join(extra)}")
                if mismatches:
                    print(f"  Type mismatches: {', '.join(mismatches)}")
                
                issues.append({
                    'name': name,
                    'path': path,
                    'missing': missing,
                    'extra': extra,
                    'mismatches': mismatches
                })
    
    # Check sectionRegistry
    for category, sections in registry.get('sectionRegistry', {}).items():
        print(f"\n=== Checking {category} sections ===")
        for section in sections:
            name = section.get('name')
            path = section.get('path')
            props_schema = section.get('propsSchema', {})
            
            if not path:
                continue
            
            missing, extra, mismatches = check_component(path, props_schema)
            
            if missing or extra or mismatches:
                print(f"\n{name} ({path}):")
                if missing:
                    print(f"  Missing in registry: {', '.join(missing)}")
                if extra:
                    print(f"  Extra in registry: {', '.join(extra)}")
                if mismatches:
                    print(f"  Type mismatches: {', '.join(mismatches)}")
                
                issues.append({
                    'name': name,
                    'path': path,
                    'missing': missing,
                    'extra': extra,
                    'mismatches': mismatches
                })
    
    print(f"\n\n=== Summary ===")
    print(f"Total issues found: {len(issues)}")
    
    if issues:
        print("\nComponents with issues:")
        for issue in issues:
            print(f"  - {issue['name']}")

if __name__ == '__main__':
    main()
