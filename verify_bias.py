
import json
import os

data_dir = '/mnt/test/data'
json_files = [f for f in os.listdir(data_dir) if f.endswith('.json')]

total_questions = 0
total_correct_len = 0
total_distractor_len = 0

file_stats = []

for filename in sorted(json_files):
    filepath = os.path.join(data_dir, filename)
    try:
        with open(filepath, 'r') as f:
            data = json.load(f)
            if not isinstance(data, list): continue
            
            file_correct_len = 0
            file_distractor_len = 0
            q_count = 0
            
            for q in data:
                if 'options' not in q or 'correct' not in q: continue
                
                correct_idx = q['correct']
                options = q['options']
                
                correct_text = options[correct_idx]
                distractors = [opt for i, opt in enumerate(options) if i != correct_idx]
                
                c_len = len(correct_text)
                d_len_avg = sum(len(d) for d in distractors) / len(distractors) if distractors else 0
                
                file_correct_len += c_len
                file_distractor_len += d_len_avg
                q_count += 1
                
                total_correct_len += c_len
                total_distractor_len += d_len_avg
                total_questions += 1
            
            if q_count > 0:
                avg_c = file_correct_len / q_count
                avg_d = file_distractor_len / q_count
                ratio = (avg_c / avg_d) if avg_d > 0 else 1
                file_stats.append({
                    'file': filename,
                    'avg_correct': round(avg_c, 1),
                    'avg_distractor': round(avg_d, 1),
                    'ratio': round(ratio, 2)
                })
    except Exception as e:
        print(f"Error reading {filename}: {e}")

overall_avg_c = total_correct_len / total_questions if total_questions > 0 else 0
overall_avg_d = total_distractor_len / total_questions if total_questions > 0 else 0
overall_ratio = (overall_avg_c / overall_avg_d) if overall_avg_d > 0 else 1

print(f"Overall Stats:")
print(f"Total Questions: {total_questions}")
print(f"Avg Correct Length: {overall_avg_c:.1f}")
print(f"Avg Distractor Length: {overall_avg_d:.1f}")
print(f"Overall Ratio: {overall_ratio:.2f}")
print("\nTop 5 Most Biased Files (by ratio):")
sorted_stats = sorted(file_stats, key=lambda x: x['ratio'], reverse=True)
for s in sorted_stats[:5]:
    print(f"{s['file']}: {s['ratio']} (C: {s['avg_correct']} vs D: {s['avg_distractor']})")

print("\nFull Report:")
for s in file_stats:
    print(f"{s['file']}: {s['ratio']} (C: {s['avg_correct']} vs D: {s['avg_distractor']})")
