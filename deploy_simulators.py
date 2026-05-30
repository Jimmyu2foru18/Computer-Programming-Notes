import os
import re

# Directory of files
directory = '.'

# Simulator logic mapping for different topics
simulators = {
    "Python1_2": {
        "title": "Variable Assignment Simulator",
        "code": "const out = document.getElementById('sim-output-p1-2'); out.innerHTML = 'x = 10; y = 20;<br>'; setTimeout(() => out.innerHTML += 'x = x + y;<br>', 800); setTimeout(() => out.innerHTML += '>> x is now 30', 1600);"
    },
    "Python1_3": {
        "title": "Math Operations Simulator",
        "code": "const out = document.getElementById('sim-output-p1-3'); out.innerHTML = 'a = 5; b = 3;<br>'; setTimeout(() => out.innerHTML += 'result = a + b;<br>', 800); setTimeout(() => out.innerHTML += '>> result is 8', 1600);"
    },
    # ... (Add more mappings as needed)
}

# Default simulator if no keyword matches
default_sim = {
    "title": "Execution Simulator",
    "code": "const out = document.getElementById('sim-output'); out.innerHTML = 'Running code...<br>'; setTimeout(() => out.innerHTML += '>> Output: Success!', 1000);"
}

# Loop through all files
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        file_key = filename.split('.')[0]
        sim = simulators.get(file_key, default_sim)
                
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Regex to find the div container with img
        pattern = re.compile(r'<div style="text-align: center; margin: 20px 0;">.*?<img .*?>.*?</div>.*?</div>', re.DOTALL)
        
        if pattern.search(content):
            new_div = f'''
        <div class="interactive-sim">
            <h3>{sim['title']}</h3>
            <button class="sim-button" onclick="runSim()">Run Simulation</button>
            <div id="sim-output" class="sim-output"></div>
            <script>
            function runSim() {{
                {sim['code']}
            }}
            </script>
        </div>'''
            new_content = pattern.sub(new_div, content)
            
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
