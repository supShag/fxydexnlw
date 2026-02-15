import json
import os
import re
import csv

data_path = './data/'
output_csv = 'dubbing_script.csv'

def export_for_dubbing():
    rows = [["Filename_ID", "Character_Face", "Text_Content"]]
    
    # 获取所有地图
    files = [f for f in os.listdir(data_path) if re.match(r'Map\d+\.json', f)]
    files.sort()

    print("正在生成台词表...")

    for file_name in files:
        file_path = os.path.join(data_path, file_name)
        map_id = file_name.replace("Map", "").replace(".json", "")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            map_data = json.load(f)

        events = [e for e in map_data.get('events', []) if e is not None]

        for event in events:
            for page_idx, page in enumerate(event['pages']):
                current_face = "None"
                
                # 遍历指令
                for i, cmd in enumerate(page['list']):
                    # Code 101: 设置头像/人名 (这是识别角色的关键)
                    if cmd['code'] == 101:
                        current_face = cmd['parameters'][0] # 头像文件名
                    
                    # Code 401: 显示文字
                    if cmd['code'] == 401:
                        # 检查上一条指令，如果上一条也是401，说明是同一句话的换行，不需要新语音
                        # 只有当这是对话的第一行时，才生成文件名
                        prev_code = page['list'][i-1]['code'] if i > 0 else 0
                        
                        if prev_code != 401:
                            # 生成唯一ID: MapXXX_EvXXX_PgX_CmdXXX
                            # 这种命名方式让脚本稍后能准确找到位置
                            file_id = f"Map{map_id}_Ev{event['id']}_Pg{page_idx+1}_Cmd{i}"
                            text = cmd['parameters'][0]
                            rows.append([file_id, current_face, text])

    # 写入CSV
    with open(output_csv, 'w', newline='', encoding='utf-8-sig') as f:
        writer = csv.writer(f)
        writer.writerows(rows)
    
    print(f"完成！已生成 {output_csv}，包含 {len(rows)-1} 条台词。")

if __name__ == "__main__":
    export_for_dubbing()