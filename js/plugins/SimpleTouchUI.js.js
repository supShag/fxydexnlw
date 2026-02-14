/*:
 * @plugindesc (v1.0) 简单的虚拟触控摇杆与返回按钮
 * @author Gemini Assistant
 * @help
 * 这是一个即插即用的虚拟按键插件。
 * * 功能：
 * 1. 左下角：虚拟摇杆 (控制上下左右移动)
 * 2. 右下角：返回按钮 (功能等同 ESC/取消/菜单)
 * * 无需配置参数，保存即可使用。
 * 适配鼠标操作与触摸屏操作。
 */

(function() {
    'use strict';

    // 样式配置
    var UI_CONFIG = {
        opacity: 0.6,          // 按钮透明度
        baseColor: '#888',     // 摇杆底座颜色
        stickColor: '#ddd',    // 摇杆头部颜色
        btnColor: '#ff5555',   // 返回按钮颜色
        zIndex: 1000           // 图层层级
    };

    // 核心类
    function VirtualPad() {
        this.initialize.apply(this, arguments);
    }

    VirtualPad.prototype.initialize = function() {
        this._div = null;
        this._stickBase = null;
        this._stickKnob = null;
        this._escBtn = null;
        
        this._isDragging = false;
        this._stickX = 100;    // 摇杆中心X
        this._stickY = 0;      // 摇杆中心Y (动态计算)
        this._radius = 50;     // 摇杆活动半径
        
        this.createContainer();
        this.createJoystick();
        this.createEscButton();
        this.bindEvents();
    };

    // 创建主容器
    VirtualPad.prototype.createContainer = function() {
        this._div = document.createElement('div');
        this._div.id = 'VirtualPadLayer';
        this._div.style.position = 'absolute';
        this._div.style.top = '0';
        this._div.style.left = '0';
        this._div.style.right = '0';
        this._div.style.bottom = '0';
        this._div.style.zIndex = UI_CONFIG.zIndex;
        this._div.style.pointerEvents = 'none'; // 让点击穿透空白区域
        this._div.style.overflow = 'hidden';
        document.body.appendChild(this._div);
    };

    // 创建摇杆
    VirtualPad.prototype.createJoystick = function() {
        // 计算位置：左下角
        var margin = 40;
        var size = this._radius * 2;
        
        // 底座
        this._stickBase = document.createElement('div');
        this._stickBase.style.width = size + 'px';
        this._stickBase.style.height = size + 'px';
        this._stickBase.style.borderRadius = '50%';
        this._stickBase.style.background = UI_CONFIG.baseColor;
        this._stickBase.style.opacity = UI_CONFIG.opacity;
        this._stickBase.style.position = 'absolute';
        this._stickBase.style.left = margin + 'px';
        this._stickBase.style.bottom = margin + 'px';
        this._stickBase.style.pointerEvents = 'auto'; // 允许交互
        
        // 摇杆头
        this._stickKnob = document.createElement('div');
        this._stickKnob.style.width = (this._radius) + 'px';
        this._stickKnob.style.height = (this._radius) + 'px';
        this._stickKnob.style.borderRadius = '50%';
        this._stickKnob.style.background = UI_CONFIG.stickColor;
        this._stickKnob.style.position = 'absolute';
        this._stickKnob.style.left = '50%';
        this._stickKnob.style.top = '50%';
        this._stickKnob.style.transform = 'translate(-50%, -50%)';
        this._stickKnob.style.pointerEvents = 'none';

        this._stickBase.appendChild(this._stickKnob);
        this._div.appendChild(this._stickBase);

        // 记录中心点坐标（用于计算角度）
        // 注意：这里只是初始值，实际触摸时需要动态获取
    };

    // 创建返回按钮
    VirtualPad.prototype.createEscButton = function() {
        this._escBtn = document.createElement('div');
        var size = 60;
        var margin = 40;

        this._escBtn.style.width = size + 'px';
        this._escBtn.style.height = size + 'px';
        this._escBtn.style.borderRadius = '50%';
        this._escBtn.style.background = UI_CONFIG.btnColor;
        this._escBtn.style.opacity = UI_CONFIG.opacity;
        this._escBtn.style.position = 'absolute';
        this._escBtn.style.right = margin + 'px';
        this._escBtn.style.bottom = margin + 'px';
        this._escBtn.style.textAlign = 'center';
        this._escBtn.style.lineHeight = size + 'px';
        this._escBtn.style.color = 'white';
        this._escBtn.style.fontFamily = 'Arial, sans-serif';
        this._escBtn.style.fontSize = '14px';
        this._escBtn.style.pointerEvents = 'auto';
        this._escBtn.style.userSelect = 'none';
        this._escBtn.innerText = '返回'; // 也可以改成 ESC

        this._div.appendChild(this._escBtn);
    };

    // 绑定事件
    VirtualPad.prototype.bindEvents = function() {
        var that = this;

        // --- 摇杆事件 ---
        
        // 触摸开始
        var startDrag = function(e) {
            e.preventDefault();
            that._isDragging = true;
            updateJoystick(e);
        };

        // 触摸移动
        var moveDrag = function(e) {
            if (that._isDragging) {
                e.preventDefault();
                updateJoystick(e);
            }
        };

        // 触摸结束
        var endDrag = function(e) {
            e.preventDefault();
            that._isDragging = false;
            resetJoystick();
        };

        // 统一处理触摸和鼠标坐标
        function getClientPos(e) {
            var x, y;
            if (e.changedTouches) {
                x = e.changedTouches[0].clientX;
                y = e.changedTouches[0].clientY;
            } else {
                x = e.clientX;
                y = e.clientY;
            }
            return { x: x, y: y };
        }

        function updateJoystick(e) {
            var pos = getClientPos(e);
            var rect = that._stickBase.getBoundingClientRect();
            var centerX = rect.left + rect.width / 2;
            var centerY = rect.top + rect.height / 2;

            var dx = pos.x - centerX;
            var dy = pos.y - centerY;
            var distance = Math.sqrt(dx * dx + dy * dy);
            
            // 限制摇杆头在圆内
            if (distance > that._radius) {
                var angle = Math.atan2(dy, dx);
                dx = Math.cos(angle) * that._radius;
                dy = Math.sin(angle) * that._radius;
            }

            // 移动视觉上的摇杆头
            that._stickKnob.style.transform = 
                'translate(' + (-50 + dx) + 'px, ' + (-50 + dy) + 'px)';

            // 计算方向输入给 RPG Maker
            updateInput(dx, dy);
        }

        function resetJoystick() {
            that._stickKnob.style.transform = 'translate(-50%, -50%)';
            clearInput();
        }

        function updateInput(dx, dy) {
            // 清除旧的输入
            Input._currentState['up'] = false;
            Input._currentState['down'] = false;
            Input._currentState['left'] = false;
            Input._currentState['right'] = false;

            // 简单的死区防止误触
            if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;

            // 根据角度判断方向
            var angle = Math.atan2(dy, dx) * 180 / Math.PI;

            // 4方向逻辑
            if (angle >= -135 && angle <= -45) {
                Input._currentState['up'] = true;
            } else if (angle >= 45 && angle <= 135) {
                Input._currentState['down'] = true;
            } else if (angle > -45 && angle < 45) {
                Input._currentState['right'] = true;
            } else {
                Input._currentState['left'] = true;
            }
        }

        function clearInput() {
            Input._currentState['up'] = false;
            Input._currentState['down'] = false;
            Input._currentState['left'] = false;
            Input._currentState['right'] = false;
        }

        // 绑定摇杆监听
        this._stickBase.addEventListener('touchstart', startDrag, {passive: false});
        this._stickBase.addEventListener('touchmove', moveDrag, {passive: false});
        this._stickBase.addEventListener('touchend', endDrag, {passive: false});
        // 鼠标兼容（PC测试用）
        this._stickBase.addEventListener('mousedown', startDrag);
        window.addEventListener('mousemove', moveDrag);
        window.addEventListener('mouseup', endDrag);


        // --- 返回按钮事件 ---
        
        var pressEsc = function(e) {
            e.preventDefault();
            Input._currentState['escape'] = true; // 模拟按下
            Input._currentState['cancel'] = true; 
            that._escBtn.style.opacity = 1; // 高亮反馈
        };

        var releaseEsc = function(e) {
            e.preventDefault();
            Input._currentState['escape'] = false; // 模拟松开
            Input._currentState['cancel'] = false;
            that._escBtn.style.opacity = UI_CONFIG.opacity; // 恢复透明度
        };

        this._escBtn.addEventListener('touchstart', pressEsc, {passive: false});
        this._escBtn.addEventListener('touchend', releaseEsc, {passive: false});
        // 鼠标兼容
        this._escBtn.addEventListener('mousedown', pressEsc);
        this._escBtn.addEventListener('mouseup', releaseEsc);
    };

    // --- 注入到游戏启动流程 ---
    
    // 扩展 Scene_Boot，确保游戏启动时加载 UI
    var _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        _Scene_Boot_start.call(this);
        // 如果UI还没创建，则创建
        if (!document.getElementById('VirtualPadLayer')) {
            new VirtualPad();
        }
    };

})();