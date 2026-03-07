import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace data/ with data/quiz/ only inside the JSON_FILES array
# We can just replace "data/ with "data/quiz/
content = content.replace('"data/', '"data/quiz/')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated script.js successfully")
