/*:
 * @plugindesc [v1.1] 在游戏中调用本地 AR 网页 (并暂停游戏进度)
 * @author Gemini & User
 *
 * @help
 * ============================================================================
 * 介绍
 * ============================================================================
 * 这个插件允许你在游戏中弹出一个全屏的 Iframe 网页。
 * 用于加载 AR 烟花互动页面。
 *
 * ============================================================================
 * 插件指令 (Plugin Command)
 * ============================================================================
 *
 * AR_Open           : 打开 AR 窗口并暂停游戏，直到窗口关闭
 *
 * ============================================================================
 */

(function() {
    
    //-----------------------------------------------------------------------------
    // Game_Interpreter
    // 修改解释器逻辑，加入等待模式
    //-----------------------------------------------------------------------------

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        
        if (command === 'AR_Open') {
            ARManager.open();
            // 【关键修改1】设置解释器进入自定义等待模式
            this.setWaitMode('waitingForAR');
        }
    };

    // 扩展等待检测逻辑
    var _Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
    Game_Interpreter.prototype.updateWaitMode = function() {
        var waiting = _Game_Interpreter_updateWaitMode.call(this);
        
        if (!waiting) {
            if (this._waitMode === 'waitingForAR') {
                // 【关键修改2】只要 AR 窗口还开着，就返回 true 让游戏继续等待
                return ARManager.isOpen();
            }
        }
        return waiting;
    };


    //-----------------------------------------------------------------------------
    // ARManager
    // 静态管理类
    //-----------------------------------------------------------------------------
    function ARManager() {
        throw new Error('This is a static class');
    }

    ARManager.iframe = null;

    // 新增：检查窗口是否开启
    ARManager.isOpen = function() {
        return !!this.iframe;
    };

    ARManager.open = function() {
        if (this.iframe) return; // 防止重复打开

        // 创建 Iframe
        this.iframe = document.createElement('iframe');
        this.iframe.id = 'ar-game-frame';
        this.iframe.src = 'ar_firework.html'; // 指向根目录文件
        
        // 设置样式使其全屏覆盖
        this.iframe.style.position = 'fixed';
        this.iframe.style.top = '0';
        this.iframe.style.left = '0';
        this.iframe.style.width = '100%';
        this.iframe.style.height = '100%';
        this.iframe.style.zIndex = '9999'; 
        this.iframe.style.border = 'none';
        this.iframe.style.background = '#000'; 

        // 添加到文档中
        document.body.appendChild(this.iframe);

        // 监听来自 Iframe 的关闭消息
        window.addEventListener('message', this.receiveMessage, false);
        
        // 聚焦到 iframe 以便操作
        this.iframe.focus();
    };

    ARManager.close = function() {
        if (!this.iframe) return;

        // 移除 Iframe
        document.body.removeChild(this.iframe);
        this.iframe = null;

        // 移除监听器
        window.removeEventListener('message', this.receiveMessage);

        // 恢复焦点到游戏窗口
        window.focus();
        if (SceneManager._scene && SceneManager._scene._windowLayer) {
            Graphics._canvas.focus();
        }
    };

    // 处理通信
    ARManager.receiveMessage = function(event) {
        if (typeof event.data === 'string' && event.data === 'CLOSE_AR_WINDOW') {
            ARManager.close();
        }
    };

})();