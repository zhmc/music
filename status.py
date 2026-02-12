# status.py
import os
import json
from app import app

STATUS_FILE = os.path.join(app.config['DATA_DIR'], 'system_status.json')

def get_system_status():
    """获取系统状态"""
    if os.path.exists(STATUS_FILE):
        try:
            with open(STATUS_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            pass
    
    # 默认状态
    return {
        'requests_paused': False,
        'pause_reason': ''
    }

def save_system_status(status):
    """保存系统状态"""
    try:
        with open(STATUS_FILE, 'w', encoding='utf-8') as f:
            json.dump(status, f, ensure_ascii=False, indent=2)
        return True
    except:
        return False

def is_requests_paused():
    """检查点歌是否被暂停"""
    status = get_system_status()
    return status.get('requests_paused', False)