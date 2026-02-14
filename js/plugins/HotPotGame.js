/*:
 * @plugindesc (v1.1) 简易火锅小游戏插件 - 豪华升级版
 * @author Gemini
 *
 * @param Result Variable ID
 * @desc 游戏结束后，将“美味度”分数存入这个变量ID。
 * @default 1
 *
 * @help
 * ============================================================================
 * 更新日志 v1.1
 * ============================================================================
 * - 移除了黑暗料理。
 * - 新增了大量肉类、海鲜和蔬菜。
 * - 调整了部分分数平衡。
 *
 * 使用方法：
 * 在事件中执行脚本指令：SceneManager.push(Scene_HotPot);
 */

(function() {

    var parameters = PluginManager.parameters('HotPotGame');
    var resultVariableId = Number(parameters['Result Variable ID'] || 1);

    // ======================================================================
    // 数据配置区 (这里是全新的豪华菜单！)
    // ======================================================================
    var db = {
        bases: [
            { name: "牛油麻辣锅", score: 20, desc: "越煮越香，灵魂锅底！" },
            { name: "浓汤番茄锅", score: 15, desc: "喝汤才是正经事，酸甜开胃。" },
            { name: "养生菌菇锅", score: 12, desc: "鲜掉眉毛，极其鲜美。" },
            { name: "潮汕清汤锅", score: 10, desc: "检验食材新鲜度的唯一标准。" },
            { name: "白开水",     score: -10,desc: "减肥专用，毫无灵魂..." }
        ],
        foods: [
            // --- 必点肉类 ---
            { name: "极品雪花肥牛", score: 25, desc: "入口即化，肉食动物的最爱！" },
            { name: "高钙羊肉卷",   score: 22, desc: "没有羊肉的火锅是不完整的。" },
            { name: "爽脆毛肚",     score: 20, desc: "七上八下，口感爽脆！" },
            { name: "鲜嫩鸭肠",     score: 18, desc: "这脆爽的口感，绝了。" },
            { name: "手打虾滑",     score: 25, desc: "Q弹爽滑，满满的虾肉。" },
            { name: "午餐肉",       score: 15, desc: "淀粉与肉的完美结合。" },
            
            // --- 经典素菜 ---
            { name: "金针菇",       score: 12, desc: "See you tomorrow." },
            { name: "甜不辣",       score: 10, desc: "软糯Q弹，煮久一点更好吃。" },
            { name: "功夫土豆片",   score: 8,  desc: "小心别煮化了哦。" },
            { name: "娃娃菜",       score: 10, desc: "吸收了汤底精华，比肉还好吃。" },
            { name: "宽粉",         score: 12, desc: "嗦粉的快乐你想象不到。" },
            { name: "冻豆腐",       score: 9,  desc: "一口咬下去全是汤汁，小心烫！" },
            { name: "响铃卷",       score: 14, desc: "吸汤神器，只需烫3秒。" },
            
            // --- 其它 ---
            { name: "方便面",       score: 5,  desc: "最后的收尾主食。" },
            { name: "香菜",         score: 3,  desc: "注入灵魂的点缀（有人不这么认为）。" }
        ]
    };

    // ======================================================================
    // Scene_HotPot (场景类) - 逻辑保持不变
    // ======================================================================
    function Scene_HotPot() {
        this.initialize.apply(this, arguments);
    }

    Scene_HotPot.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_HotPot.prototype.constructor = Scene_HotPot;

    Scene_HotPot.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
        this._potContents = []; 
        this._currentStep = 'base';
        this._totalScore = 0;
    };

    Scene_HotPot.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this.createHelpWindow();
        this.createCommandWindow();
        this.createStatusWindow();
        this._helpWindow.setText("首先，请选择一种灵魂锅底...");
    };

    Scene_HotPot.prototype.createCommandWindow = function() {
        this._commandWindow = new Window_HotPotSelect(0, this._helpWindow.height);
        this._commandWindow.setHandler('ok',     this.onItemOk.bind(this));
        this._commandWindow.setHandler('cancel', this.popScene.bind(this));
        this._commandWindow.setHelpWindow(this._helpWindow);
        this.addWindow(this._commandWindow);
    };

    Scene_HotPot.prototype.createStatusWindow = function() {
        var x = this._commandWindow.width;
        var y = this._helpWindow.height;
        var w = Graphics.boxWidth - x;
        var h = this._commandWindow.height;
        this._statusWindow = new Window_HotPotStatus(x, y, w, h);
        this.addWindow(this._statusWindow);
    };

    Scene_HotPot.prototype.onItemOk = function() {
        var item = this._commandWindow.currentData();
        if (!item) return;

        if (item.name === "【 开始享用 】") {
            this.finishCooking();
            return;
        }

        this._potContents.push(item);
        this._totalScore += item.score;
        this._statusWindow.setContents(this._potContents);
        this._commandWindow.activate();

        if (this._currentStep === 'base') {
            this._currentStep = 'food';
            this._commandWindow.changeMode('food');
            this._commandWindow.refresh();
            this._commandWindow.select(0);
            this._helpWindow.setText("现在加入你喜欢的配菜吧！(可以一直加)");
        }
    };

    Scene_HotPot.prototype.finishCooking = function() {
        // 更新了评价标准，因为现在的菜分都很高
        var message = "";
        if (this._totalScore >= 100) {
            message = "神级火锅！这简直是国宴级别的享受！";
        } else if (this._totalScore >= 60) {
            message = "非常丰盛的一顿火锅，吃得好饱！";
        } else if (this._totalScore >= 30) {
            message = "简单的火锅，味道中规中矩。";
        } else {
            message = "你这火锅...是不是太清淡了点？";
        }

        $gameVariables.setValue(resultVariableId, this._totalScore);
        this.popScene();
    };

    // ======================================================================
    // Window_HotPotSelect
    // ======================================================================
    function Window_HotPotSelect() {
        this.initialize.apply(this, arguments);
    }

    Window_HotPotSelect.prototype = Object.create(Window_Selectable.prototype);
    Window_HotPotSelect.prototype.constructor = Window_HotPotSelect;

    Window_HotPotSelect.prototype.initialize = function(x, y) {
        var width = 280; // 稍微加宽了一点，防止菜名太长显示不下
        var height = Graphics.boxHeight - y;
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this._mode = 'base';
        this._data = [];
        this.refresh();
        this.select(0);
        this.activate();
    };

    Window_HotPotSelect.prototype.maxItems = function() {
        return this._data ? this._data.length : 0;
    };

    Window_HotPotSelect.prototype.item = function() {
        return this._data[this.index()];
    };

    Window_HotPotSelect.prototype.changeMode = function(mode) {
        this._mode = mode;
        this.refresh();
    };

    Window_HotPotSelect.prototype.refresh = function() {
        this._data = [];
        if (this._mode === 'base') {
            this._data = db.bases;
        } else {
            this._data = db.foods.concat([{ name: "【 开始享用 】", desc: "菜加够了，开吃！" }]);
        }
        this.createContents();
        this.drawAllItems();
    };

    Window_HotPotSelect.prototype.drawItem = function(index) {
        var item = this._data[index];
        var rect = this.itemRectForText(index);
        this.resetTextColor();
        if (item.name === "【 开始享用 】") this.changeTextColor(this.mpCostColor());
        this.drawText(item.name, rect.x, rect.y, rect.width);
    };

    Window_HotPotSelect.prototype.updateHelp = function() {
        var item = this.item();
        if (item && this._helpWindow) {
            this._helpWindow.setText(item.desc || "");
        }
    };
    
    Window_HotPotSelect.prototype.currentData = function() {
        return this._data[this.index()];
    };

    // ======================================================================
    // Window_HotPotStatus
    // ======================================================================
    function Window_HotPotStatus() {
        this.initialize.apply(this, arguments);
    }

    Window_HotPotStatus.prototype = Object.create(Window_Base.prototype);
    Window_HotPotStatus.prototype.constructor = Window_HotPotStatus;

    Window_HotPotStatus.prototype.initialize = function(x, y, w, h) {
        Window_Base.prototype.initialize.call(this, x, y, w, h);
        this._contentsList = [];
        this.refresh();
    };

    Window_HotPotStatus.prototype.setContents = function(list) {
        this._contentsList = list;
        this.refresh();
    };

    Window_HotPotStatus.prototype.refresh = function() {
        this.contents.clear();
        this.changeTextColor(this.systemColor());
        this.drawText("锅内食材：", 0, 0, this.contentsWidth(), 'center');
        
        this.resetTextColor();
        var y = this.lineHeight() * 1.5;
        
        if (this._contentsList.length === 0) {
            this.makeFontBigger(); // 稍微让提示字大一点
            this.drawText("锅里是空的，快加点东西！", 20, y, this.contentsWidth());
            this.makeFontSmaller();
            return;
        }

        // 简单的滚动显示逻辑（防止加太多菜溢出屏幕）
        var maxItems = Math.floor((this.contentsHeight() - y) / this.lineHeight());
        var startIndex = 0;
        if (this._contentsList.length > maxItems) {
            startIndex = this._contentsList.length - maxItems;
        }

        for (var i = startIndex; i < this._contentsList.length; i++) {
            var item = this._contentsList[i];
            var prefix = (i === 0) ? "【汤底】" : " + ";
            this.drawText(prefix + item.name, 20, y, this.contentsWidth());
            y += this.lineHeight();
        }
    };

    window.Scene_HotPot = Scene_HotPot;

})();