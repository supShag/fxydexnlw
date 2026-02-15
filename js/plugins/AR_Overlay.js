/*:
 * @plugindesc [v1.2] 在游戏中调用本地 AR 网页并强制暂停事件流
 * @author Gemini & User
 *
 * @help
 * ============================================================================
 * 指令说明
 * ============================================================================
 * * 在事件页中使用【插件指令】：
 * AR_Open
 *
 * 效果：
 * 1. 弹出 ar_firework.html 全屏窗口。
 * 2. 游戏当前的事件指令流会停止，直到点击 AR 页面中的“离开”按钮。
 * 3. 游戏内的计时器、角色移动（如果是自动执行/串行事件）会被阻塞。
 *
 * 注意：请确保 ar_firework.html 放在项目根目录下（与 index.html 同级）。
 */

(function() {
    
    //-----------------------------------------------------------------------------
    // ARManager 静态管理类
    //-----------------------------------------------------------------------------
    function ARManager() {
        throw new Error('This is a static class');
    }

    ARManager.iframe = null;

    ARManager.isOpen = function() {
        return !!this.iframe;
    };

    ARManager.open = function() {
        if (this.iframe) return;

        this.iframe = document.createElement('iframe');
        this.iframe.id = 'ar-game-frame';
        this.iframe.src = 'ar_firework.html'; 
        
        // 样式：全屏置顶
        this.iframe.style.position = 'fixed';
        this.iframe.style.top = '0';
        this.iframe.style.left = '0';
        this.iframe.style.width = '100%';
        this.iframe.style.height = '100%';
        this.iframe.style.zIndex = '10000'; 
        this.iframe.style.border = 'none';
        this.iframe.style.background = '#000'; 

        document.body.appendChild(this.iframe);

        // 绑定消息监听
        this._messageHandler = this.receiveMessage.bind(this);
        window.addEventListener('message', this._messageHandler, false);
        
        this.iframe.focus();
    };

    ARManager.close = function() {
        if (!this.iframe) return;

        document.body.removeChild(this.iframe);
        this.iframe = null;

        window.removeEventListener('message', this._messageHandler);

        // 强制恢复游戏焦点
        window.focus();
        if (Graphics && Graphics._canvas) {
            Graphics._canvas.focus();
        }
    };

    ARManager.receiveMessage = function(event) {
        if (typeof event.data === 'string' && event.data === 'CLOSE_AR_WINDOW') {
            this.close();
        }
    };

    //-----------------------------------------------------------------------------
    // 修改 Game_Interpreter (事件解释器)
    //-----------------------------------------------------------------------------

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        
        if (command === 'AR_Open') {
            ARManager.open();
            // 设置一个自定义的等待模式
            this.setWaitMode('ar_waiting');
        }
    };

    // 注入等待逻辑
    var _Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
    Game_Interpreter.prototype.updateWaitMode = function() {
        // 如果是我们的 AR 等待模式
        if (this._waitMode === 'ar_waiting') {
            if (ARManager.isOpen()) {
                return true; // 返回 true 表示继续等待，不执行下一行
            } else {
                this._waitMode = ''; // 窗口关了，清除等待模式
                return false;
            }
        }
        return _Game_Interpreter_updateWaitMode.call(this);
    };

    // 为了保险，如果是在循环或特殊脚本中调用，拦截 update
    var _Game_Interpreter_update = Game_Interpreter.prototype.update;
    Game_Interpreter.prototype.update = function() {
        if (this._waitMode === 'ar_waiting' && ARManager.isOpen()) {
            return; // 直接中断更新
        }
        _Game_Interpreter_update.call(this);
    };

    window.ARManager = ARManager;

})();