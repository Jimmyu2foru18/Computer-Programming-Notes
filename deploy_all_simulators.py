import os
import re

# Directory of files
directory = '.'

# Loop through all files
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Regex to match the container div block and anything inside it
        # This will match the entire div structure used for placeholders
        pattern = re.compile(r'\s*<div style="text-align: center; margin: 20px 0;">\s*<div style="display: inline-block; padding: 20px; border: 2px solid #ddd; background: #f9f9f9; border-radius: 8px;">\s*<img .*?>\s*</div>\s*</div>', re.DOTALL)
        
        # We need a way to insert different simulators based on filename
        # I'll create a simple function to decide which simulator to use
        
        def get_simulator(fname):
            if "Python1_2" in fname:
                return """
        <div class="interactive-sim">
            <h3>Variable Assignment Simulator</h3>
            <button class="sim-button" onclick="runSim()">Run Simulation</button>
            <div id="sim-output" class="sim-output"></div>
            <script>
            function runSim() {
                const out = document.getElementById('sim-output');
                out.innerHTML = "x = 10; y = 20;<br>";
                setTimeout(() => out.innerHTML += "x = x + y;<br>", 800);
                setTimeout(() => out.innerHTML += ">> x is now 30", 1600);
            }
            </script>
        </div>"""
            elif "Python1_3" in fname:
                return """
        <div class="interactive-sim">
            <h3>Number & Boolean Simulator</h3>
            <button class="sim-button" onclick="runSim()">Run Simulation</button>
            <div id="sim-output" class="sim-output"></div>
            <script>
            function runSim() {
                const out = document.getElementById('sim-output');
                out.innerHTML = "a = 10; b = 3;<br>";
                setTimeout(() => out.innerHTML += "a > b is " + (10 > 3) + "<br>", 800);
                setTimeout(() => out.innerHTML += ">> a % b is " + (10 % 3), 1600);
            }
            </script>
        </div>"""
            else:
                return """
        <div class="interactive-sim">
            <h3>Execution Simulator</h3>
            <button class="sim-button" onclick="runSim()">Run Simulation</button>
            <div id="sim-output" class="sim-output"></div>
            <script>
            function runSim() {
                const out = document.getElementById('sim-output');
                out.innerHTML = "Running code...<br>";
                setTimeout(() => out.innerHTML += ">> Output: Simulation running!", 1000);
            }
            </script>
        </div>"""

        if pattern.search(content):
            new_content = pattern.sub(get_simulator(filename), content)
            
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
