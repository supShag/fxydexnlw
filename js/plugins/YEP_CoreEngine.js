//=============================================================================
// Yanfly Engine Plugins - Core Engine
// YEP_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_CoreEngine = true;

var Yanfly = Yanfly || {};
Yanfly.Core = Yanfly.Core || {};
Yanfly.Core.version = 1.32;

//=============================================================================
/** /*:
 * @plugindesc v1.32[v0.7]  001-核心引擎
 * @author Yanfly Engine Plugins | 机翻汉化: YuukakeID
 *
   * @param ---Screen---
   * @text --屏幕--
   * @default
   *
       * @param Screen Width
       * @text 屏幕宽度
       * @parent ---Screen---
       * @type number
       * @min 0
       * @desc 调整屏幕的宽度(单位: 像素)
       * 默认值: 816
       * @default 816
       *
       * @param Screen Height
       * @text 屏幕高度
       * @parent ---Screen---
       * @type number
       * @min 0
       * @desc 调整屏幕的高度(单位: 像素)
       * 默认值: 624
       * @default 624
       *
       * @param Scale Battlebacks
       * @text 战斗背景缩放调整
       * @parent ---Screen---
       * @type boolean
       * @on 做调整
       * @off 不调整
       * @desc 将战斗背景图调整到适应屏幕分辨率
       * @default true
       *
       * @param Scale Title
       * @text 标题缩放调整
       * @parent ---Screen---
       * @type boolean
       * @on 做调整
       * @off 不调整
       * @desc 将标题屏幕调整到适应屏幕分辨率
       * @default true
       *
       * @param Scale Game Over
       * @text Game Over缩放调整
       * @parent ---Screen---
       * @type boolean
       * @on 做调整
       * @off 不调整
       * @desc 将 GameOver 屏幕调整到适应屏幕分辨率
       * @default true
       *
       * @param Open Console
       * @text 开启控制台
       * @parent ---Screen---
       * @type boolean
       * @on 开启
       * @off 不开启
       * @desc 在测试游戏时，将自动打开控制台来方便调试
       * (在测试游戏时，按F8/F12也可手动打开控制台)
       * @default false
       *
       * @param Reposition Battlers
       * @text 战斗者重定位
       * @parent ---Screen---
       * @type boolean
       * @on 重定位
       * @off 不定位
       * @desc 将战斗者重定位到适应屏幕分辨率
       * @default true
       *
       * @param GameFont Load Timer
       * @text 游戏字体加载计时器
       * @parent ---Screen---
       * @type number
       * @min 0
       * @desc 设置加载GameFont的时计。设置为0表示无时限
       * @default 0
       *
       * @param Update Real Scale
       * @text 更新真实缩放比例
       * @parent ---Screen---
       * @type boolean
       * @on 更新
       * @off 不更新
       * @desc 此项不用更改，否则将允许屏幕拉伸的真实缩放
       * @default false
       *
       * @param Collection Clear
       * @text 集合清空
       * @parent ---Screen---
       * @type boolean
       * @on 清空
       * @off 不清空
       * @desc 切换场景以释放内存时，清除主要场景中存储的对象
       * @default true
   *
   * @param ---Gold---
   * @text --金钱--
   * @desc
   *
       * @param Gold Max
       * @text 金钱上限
       * @parent ---Gold---
       * @type number
       * @min 1
       * @desc 玩家可持有的金币上限
       * @default 1000000000
       *
       * @param Gold Font Size
       * @text 金钱字体大小
       * @parent ---Gold---
       * @type number
       * @min 1
       * @desc 用于显示金钱的字体大小
       * @default 20
       *
       * @param Gold Icon
       * @text 金钱图标
       * @parent ---Gold---
       * @type number
       * @min 0
       * @desc 金钱窗口中表示金钱的图标索引。如果为0，则不会显示图标
       * @default 313
       *
       * @param Gold Overlap
       * @text 金钱重叠
       * @parent ---Gold---
       * @desc 金钱的数字显示超出分配区域的内容大小时显示的内容
       * @default 超越边界
   *
   * @param ---Items---
   * @text --物品--
   * @desc
   *
       * @param Default Max
       * @text 默认上限
       * @parent ---Items---
       * @type number
       * @min 1
       * @desc 玩家可持有的物品的通用数量上限
       * @default 100
       *
       * @param Quantity Text Size
       * @text 数量文本大小
       * @parent ---Items---
       * @type number
       * @min 1
       * @desc 物品数量的文本字体大小
       * @default 20
   *
   * @param ---Parameters---
   * @text --参数--
   * @default
   *
       * @param Max Level
       * @text 等级上限
       * @parent ---Parameters---
       * @type number
       * @min 1
       * @desc 调整角色的最高等级限制
       * @default 99
       *
       * @param Actor MaxHP
       * @text 角色生命值上限
       * @parent ---Parameters---
       * @type number
       * @min 1
       * @desc 调整角色的最高生命值限制
       * 默认值: 9999
       * @default 9999
       *
       * @param Actor MaxMP
       * @text 角色魔力值上限
       * @parent ---Parameters---
       * @type number
       * @min 0
       * @desc 调整角色的最高魔力值限制
       * 默认值: 9999
       * @default 9999
       *
       * @param Actor Parameter
       * @text 角色基础能力参数
       * @parent ---Parameters---
       * @type number
       * @min 1
       * @desc 调整角色的最高攻、防、敏捷、幸运限制
       * 默认值: 999
       * @default 999
       *
       * @param Enemy MaxHP
       * @text 敌人生命值上限
       * @parent ---Parameters---
       * @type number
       * @min 1
       * @desc 调整敌人的最高生命值限制
       * 默认值: 999999
       * @default 999999
       *
       * @param Enemy MaxMP
       * @text 敌人魔力值上限
       * @parent ---Parameters---
       * @type number
       * @min 0
       * @desc 调整敌人的最高魔力值限制
       * 默认值: 9999
       * @default 9999
       *
       * @param Enemy Parameter
       * @text 敌人基础能力参数
       * @parent ---Parameters---
       * @type number
       * @min 1
       * @desc 调整敌人的最高攻、防、敏捷、幸运限制
       * 默认值: 999
       * @default 999
   *
   * @param ---Battle---
   * @text --战斗--
   * @desc
   *
       * @param Animation Rate
       * @text 动画速率
       * @parent ---Battle---
       * @type number
       * @min 1
       * @desc 调整战斗动画的速率，数值越小速度越快
       * 默认值: 4
       * @default 4
       *
       * @param Flash Target
       * @text 目标闪烁
       * @parent ---Battle---
       * @type boolean
       * @on 开启闪烁
       * @off 不闪烁
       * @desc 敌人被选为目标时，将闪烁或变白
       * @default false
       *
       * @param Show Events Transition
       * @text 显示事件转场
       * @parent ---Battle---
       * @type boolean
       * @on 显示
       * @off 隐藏
       * @desc 战斗开始进行转场时，显示/隐藏地图上的事件
       * @default true
       *
       * @param Show Events Snapshot
       * @text 显示事件快照
       * @parent ---Battle---
       * @type boolean
       * @on 显示
       * @off 隐藏
       * @desc 战斗背景快照显示/隐藏事件
       * @default true
   *
   * @param ---Map Optimization---
   * @text --地图优化--
   * @desc
   *
       * @param Refresh Update HP
       * @text 刷新更新HP
       * @parent ---Map Optimization---
       * @type boolean
       * @on 显示
       * @off 隐藏
       * @desc 在地图上更新HP时进行完整的角色刷新
       * @default true
       *
       * @param Refresh Update MP
       * @text 刷新更新MP
       * @parent ---Map Optimization---
       * @type boolean
       * @on 显示
       * @off 隐藏
       * @desc 在地图上更新MP时进行完整的角色刷新
       * @default true
       *
       * @param Refresh Update TP
       * @text 刷新更新TP
       * @parent ---Map Optimization---
       * @type boolean
       * @on 显示
       * @off 隐藏
       * @desc 在地图上更新TP时进行完整的角色刷新
       * @default false
   *
   * @param ---Font---
   * @text --字体--
   * @desc
   *
       * @param Chinese Font
       * @text 中文字体
       * @parent ---Font---
       * @desc 用于中文RPG的默认字体
       * 默认: SimHei, Heiti TC, sans-serif
       * @default SimHei, Heiti TC, sans-serif
       *
       * @param Korean Font
       * @text 韩语字体
       * @parent ---Font---
       * @desc 用于韩国RPG的默认字体
       * 默认: Dotum, AppleGothic, sans-serif
       * @default Dotum, AppleGothic, sans-serif
       *
       * @param Default Font
       * @text 默认字体
       * @parent ---Font---
       * @desc 用于其他所有内容的默认字体
       * 默认: GameFont
       * @default GameFont, Verdana, Arial, Courier New
       *
       * @param Font Size
       * @text 字体大小
       * @parent ---Font---
       * @type number
       * @min 1
       * @desc 用于窗口的默认字体大小
       * 默认: 28
       * @default 28
       *
       * @param Text Align
       * @text 文本对齐
       * @parent ---Font---
       * @type select
       * @option 左对齐
       * @value left
       * @option 居中
       * @value center
       * @option 右对齐
       * @value right
       * @desc 命令窗口的文本对齐方式
       * @default left
   *
   * @param ---Windows---
   * @text --窗口--
   * @default
   *
       * @param Digit Grouping
       * @text 数字分组
       * @parent ---Windows---
       * @type boolean
       * @on 分组
       * @off 不分组
       * @desc 用逗号将数字分组在一起(千，百万，十亿，兆，千兆……)
       * 如: 开启后，12345678将显示为12,345,678
       * @default true
       *
       * @param Line Height
       * @text 行高
       * @parent ---Windows---
       * @type number
       * @min 0
       * @desc 调整窗口中使用的通用行高
       * 默认值: 36
       * @default 36
       *
       * @param Icon Width
       * @text 图标宽度
       * @parent ---Windows---
       * @type number
       * @min 0
       * @desc 调整图标的宽度
       * 默认值: 32
       * @default 32
       *
       * @param Icon Height
       * @text 图标高度
       * @parent ---Windows---
       * @type number
       * @min 0
       * @desc 调整图标的高度
       * 默认值: 32
       * @default 32
       *
       * @param Face Width
       * @text 脸图宽度
       * @parent ---Windows---
       * @type number
       * @min 0
       * @desc 调整角色的脸图宽度
       * 默认值: 144
       * @default 144
       *
       * @param Face Height
       * @text 脸图高度
       * @parent ---Windows---
       * @type number
       * @min 0
       * @desc 调整角色的脸图高度
       * 默认值: 144
       * @default 144
       *
       * @param Window Padding
       * @text 窗口内边距
       * @parent ---Windows---
       * @type number
       * @min 0
       * @desc 调整所有普通窗口的内填充边距
       * 默认值: 18
       * @default 18
       *
       * @param Text Padding
       * @text 文本内边距
       * @parent ---Windows---
       * @type number
       * @min 0
       * @desc 调整窗口内文本的内填充边距
       * 默认值: 6
       * @default 6
       *
       * @param Window Opacity
       * @text 窗口不透明度
       * @parent ---Windows---
       * @type number
       * @min 0
       * @max 255
       * @desc 调整窗口的背景不透明度(0-255，越大越不透明)
       * 默认值: 192
       * @default 192
       *
       * @param Gauge Outline
       * @text 仪表轮廓
       * @parent ---Windows---
       * @type boolean
       * @on 启用
       * @off 关闭
       * @desc 启用仪表(如HP条，MP条)轮廓
       * @default true
       *
       * @param Gauge Height
       * @text 仪表高度
       * @parent ---Windows---
       * @type number
       * @min 0
       * @desc 设置仪表的高度
       * @default 18
       *
       * @param Menu TP Bar
       * @text 菜单TP栏
       * @parent ---Windows---
       * @type boolean
       * @on 启用
       * @off 关闭
       * @desc 在角色的状态菜单绘制TP栏
       * @default true
   *
   * @param ---Window Colors---
   * @text --窗口颜色--
   * @default
   *
       * @param Color: Normal
       * @text 颜色: 通常
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 0
       * @default 0
       *
       * @param Color: System
       * @text 颜色: 系统
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 16
       * @default 16
       *
       * @param Color: Crisis
       * @text 颜色: 危急
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 17
       * @default 17
       *
       * @param Color: Death
       * @text 颜色: 死亡
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 18
       * @default 18
       *
       * @param Color: Gauge Back
       * @text 颜色: 仪表背景
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 19
       * @default 19
       *
       * @param Color: HP Gauge 1
       * @text 颜色: 生命值仪表1
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 20
       * @default 20
       *
       * @param Color: HP Gauge 2
       * @text 颜色: 生命值仪表2
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 21
       * @default 21
       *
       * @param Color: MP Gauge 1
       * @text 颜色: 魔力值仪表1
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 22
       * @default 22
       *
       * @param Color: MP Gauge 2
       * @text 颜色: 魔力值仪表2
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 23
       * @default 23
       *
       * @param Color: MP Cost
       * @text 颜色: 魔力支付
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 23
       * @default 23
       *
       * @param Color: Power Up
       * @text 颜色: 能力提升
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 24
       * @default 24
       *
       * @param Color: Power Down
       * @text 颜色: 能力下降
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 25
       * @default 25
       *
       * @param Color: TP Gauge 1
       * @text 颜色: TP条仪表1
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 28
       * @default 28
       *
       * @param Color: TP Gauge 2
       * @text 颜色: TP条仪表2
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 29
       * @default 29
       *
       * @param Color: TP Cost Color
       * @text 颜色: TP支付颜色
       * @parent ---Window Colors---
       * @type number
       * @min 0
       * @max 31
       * @desc 更改窗口的文本颜色
       * 默认值: 29
       * @default 29
 *
 * @help 插件文件名: YEP_CoreEngine.js
   * 官方版本: v1.32  |  机翻版本: v0.7 时间: 2025.08.28
   *
   * =============================================================================
   * 插件命令
     * =============================================================================
     *   GainGold 1999999           等同于: 获得金钱 1999999
     *   - 作用: 获得指定数额的金钱
     *   LoseGold 9999999           等同于: 失去金钱 9999999
     *   - 作用: 失去指定数额的金钱
   *
   * =============================================================================
   * 备注
     * =============================================================================
     * 备注 - 角色:
     *   <initial level: 666>     等同于: <初始等级: 666>
     *   - 作用: 设定角色的初始等级
     *   <max level: 1500>        等同于: <最大等级: 1500>
     *   - 作用: 设定角色的等级上限
     * -----------------------------------------------------------------------------
     * 备注 - 职业 - 要习得的技能:
     *   <learn level: 66>        等同于: <习得等级: 66>
     *   - 作用: 设定习得技能的等级
     *   - 说明: 在 要习得的技能 列表中，编辑所需技能，即可看到备注
     * -----------------------------------------------------------------------------
     * 备注 - 物品 武器 护甲:
     *   <price: 4399000>         等同于: <价格: 4399000>
     *   - 作用: 设置道具的购买价格
     *   <max item: 10000>        等同于: <数量: 10000>
     *   - 作用: 设置道具的持有上限
     * -----------------------------------------------------------------------------
     * 备注 - 武器 护甲:
     *   <HP: +1000>              等同于<生命: +1000>
     *   - 作用: 设置武器/护甲增加生命值
     *   <HP: -666>               等同于<生命: -666>
     *   - 作用: 设置武器/护甲减少生命值，
     *   - 其他: HP 或 生命 可替换为其他 通常能力值
     *   - 通常能力值 包含(下同):
     *     - HP  生命
     *     - MP  魔力
     *     - ATK 物理攻击
     *     - DEF 物理防御
     *     - MAT 魔法攻击
     *     - MDF 魔法防御
     *     - AGI 敏捷
     *     - LUK 幸运
     * -----------------------------------------------------------------------------
     * 备注 - 敌人:
     *   <Gold: 4399000>          等同于: <金钱: 4399000>
     *   - 作用: 设置击败敌人获得的金钱
     *   <Exp: 99999999>          等同于: <经验: 99999999>
     *   - 作用: 设置击败敌人获得的经验
     *   <HP: 20000000>           等同于: <生命: 20000000>
     *   - 作用: 设置敌人的生命值属性
     *   - 其他: HP 或 生命 可替换为其他 通常能力值
   *
   * =============================================================================
   * 插件官方描述:
   * - 大多数Yanfly引擎脚本都需要它。还包含 RM 中固有的错误修复。
   *
   * -- 帮助文档结束 --
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_CoreEngine');
Yanfly.Param = Yanfly.Param || {};
Yanfly.Icon = Yanfly.Icon || {};

Yanfly.Param.ScreenWidth  = Number(Yanfly.Parameters['Screen Width'] || 816);
Yanfly.Param.ScreenHeight = Number(Yanfly.Parameters['Screen Height'] || 624);
Yanfly.Param.ScaleBattleback = String(Yanfly.Parameters['Scale Battlebacks']);
Yanfly.Param.ScaleBattleback = eval(Yanfly.Param.ScaleBattleback);
Yanfly.Param.ScaleTitle = eval(String(Yanfly.Parameters['Scale Title']));
Yanfly.Param.ScaleGameOver = eval(String(Yanfly.Parameters['Scale Game Over']));
Yanfly.Param.OpenConsole = String(Yanfly.Parameters['Open Console']);
Yanfly.Param.OpenConsole = eval(Yanfly.Param.OpenConsole);
Yanfly.Param.ReposBattlers = String(Yanfly.Parameters['Reposition Battlers']);
Yanfly.Param.ReposBattlers = eval(Yanfly.Param.ReposBattlers);
Yanfly.Param.GameFontTimer = Number(Yanfly.Parameters['GameFont Load Timer']);
Yanfly.Param.UpdateRealScale = String(Yanfly.Parameters['Update Real Scale']);
Yanfly.Param.UpdateRealScale = eval(Yanfly.Param.UpdateRealScale);
Yanfly.Param.CollectionClear = String(Yanfly.Parameters['Collection Clear']);
Yanfly.Param.CollectionClear = eval(Yanfly.Param.CollectionClear);

Yanfly.Param.MaxGold = String(Yanfly.Parameters['Gold Max']);
Yanfly.Param.GoldFontSize = Number(Yanfly.Parameters['Gold Font Size']);
Yanfly.Icon.Gold = Number(Yanfly.Parameters['Gold Icon']);
Yanfly.Param.GoldOverlap = String(Yanfly.Parameters['Gold Overlap']);

Yanfly.Param.MaxItem = Number(Yanfly.Parameters['Default Max']);
Yanfly.Param.ItemQuantitySize = Number(Yanfly.Parameters['Quantity Text Size']);

Yanfly.Param.MaxLevel = Number(Yanfly.Parameters['Max Level']);
Yanfly.Param.EnemyMaxHp = Number(Yanfly.Parameters['Enemy MaxHP']);
Yanfly.Param.EnemyMaxMp = Number(Yanfly.Parameters['Enemy MaxMP']);
Yanfly.Param.EnemyParam = Number(Yanfly.Parameters['Enemy Parameter']);
Yanfly.Param.ActorMaxHp = Number(Yanfly.Parameters['Actor MaxHP']);
Yanfly.Param.ActorMaxMp = Number(Yanfly.Parameters['Actor MaxMP']);
Yanfly.Param.ActorParam = Number(Yanfly.Parameters['Actor Parameter']);

Yanfly.Param.AnimationRate = Number(Yanfly.Parameters['Animation Rate']);
Yanfly.Param.FlashTarget = eval(String(Yanfly.Parameters['Flash Target']));
Yanfly.Param.ShowEvTrans = String(Yanfly.Parameters['Show Events Transition']);
Yanfly.Param.ShowEvTrans = eval(Yanfly.Param.ShowEvTrans);
Yanfly.Param.ShowEvSnap = String(Yanfly.Parameters['Show Events Snapshot']);
Yanfly.Param.ShowEvSnap = eval(Yanfly.Param.ShowEvSnap);

Yanfly.Param.RefreshUpdateHp = String(Yanfly.Parameters['Refresh Update HP']);
Yanfly.Param.RefreshUpdateHp = eval(Yanfly.Param.RefreshUpdateHp);
Yanfly.Param.RefreshUpdateMp = String(Yanfly.Parameters['Refresh Update MP']);
Yanfly.Param.RefreshUpdateMp = eval(Yanfly.Param.RefreshUpdateMp);
Yanfly.Param.RefreshUpdateTp = String(Yanfly.Parameters['Refresh Update TP']);
Yanfly.Param.RefreshUpdateTp = eval(Yanfly.Param.RefreshUpdateTp);

Yanfly.Param.ChineseFont = String(Yanfly.Parameters['Chinese Font']);
Yanfly.Param.KoreanFont = String(Yanfly.Parameters['Korean Font']);
Yanfly.Param.DefaultFont = String(Yanfly.Parameters['Default Font']);
Yanfly.Param.FontSize = Number(Yanfly.Parameters['Font Size']);
Yanfly.Param.TextAlign = String(Yanfly.Parameters['Text Align']);

Yanfly.Param.DigitGroup = eval(String(Yanfly.Parameters['Digit Grouping']));
Yanfly.Param.LineHeight = Number(Yanfly.Parameters['Line Height']);
Yanfly.Param.IconWidth = Number(Yanfly.Parameters['Icon Width'] || 32);;
Yanfly.Param.IconHeight = Number(Yanfly.Parameters['Icon Height'] || 32);;
Yanfly.Param.FaceWidth = Number(Yanfly.Parameters['Face Width'] || 144);
Yanfly.Param.FaceHeight = Number(Yanfly.Parameters['Face Height'] || 144);
Yanfly.Param.WindowPadding = Number(Yanfly.Parameters['Window Padding']);
Yanfly.Param.TextPadding = Number(Yanfly.Parameters['Text Padding']);
Yanfly.Param.WindowOpacity = Number(Yanfly.Parameters['Window Opacity']);
Yanfly.Param.GaugeOutline = eval(String(Yanfly.Parameters['Gauge Outline']));
Yanfly.Param.GaugeHeight = Number(Yanfly.Parameters['Gauge Height']);
Yanfly.Param.MenuTpGauge = eval(String(Yanfly.Parameters['Menu TP Bar']));

Yanfly.Param.ColorNormal = Number(Yanfly.Parameters['Color: Normal']);
Yanfly.Param.ColorSystem = Number(Yanfly.Parameters['Color: System']);
Yanfly.Param.ColorCrisis = Number(Yanfly.Parameters['Color: Crisis']);
Yanfly.Param.ColorDeath = Number(Yanfly.Parameters['Color: Death']);
Yanfly.Param.ColorGaugeBack = Number(Yanfly.Parameters['Color: Gauge Back']);
Yanfly.Param.ColorHpGauge1 = Number(Yanfly.Parameters['Color: HP Gauge 1']);
Yanfly.Param.ColorHpGauge2 = Number(Yanfly.Parameters['Color: HP Gauge 2']);
Yanfly.Param.ColorMpGauge1 = Number(Yanfly.Parameters['Color: MP Gauge 1']);
Yanfly.Param.ColorMpGauge2 = Number(Yanfly.Parameters['Color: MP Gauge 2']);
Yanfly.Param.ColorMpCost = Number(Yanfly.Parameters['Color: MP Cost']);
Yanfly.Param.ColorPowerUp = Number(Yanfly.Parameters['Color: Power Up']);
Yanfly.Param.ColorPowerDown = Number(Yanfly.Parameters['Color: Power Down']);
Yanfly.Param.ColorTpGauge1 = Number(Yanfly.Parameters['Color: TP Gauge 1']);
Yanfly.Param.ColorTpGauge2 = Number(Yanfly.Parameters['Color: TP Gauge 2']);
Yanfly.Param.ColorTpCost = Number(Yanfly.Parameters['Color: TP Cost Color']);

//=============================================================================
// Bitmap
//=============================================================================

Yanfly.Core.Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function(width, height) {
  Yanfly.Core.Bitmap_initialize.call(this, width, height);
  this.fontFace = Yanfly.Param.DefaultFont;
};

Yanfly.Core.Bitmap_blt = Bitmap.prototype.blt;
Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    sx = Math.floor(sx);
    sy = Math.floor(sy);
    sw = Math.floor(sw);
    sh = Math.floor(sh);
    dx = Math.floor(dx);
    dy = Math.floor(dy);
    dw = Math.floor(dw);
    dh = Math.floor(dh);
    Yanfly.Core.Bitmap_blt.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
};

Yanfly.Core.Bitmap_fillRect = Bitmap.prototype.fillRect;
Bitmap.prototype.fillRect = function(x, y, w, h, c) {
    x = Math.floor(x);
    y = Math.floor(y);
    w = Math.floor(w);
    h = Math.floor(h);
    Yanfly.Core.Bitmap_fillRect.call(this, x, y, w, h, c);
};

Yanfly.Core.Bitmap_gradientFillRect = Bitmap.prototype.gradientFillRect;
Bitmap.prototype.gradientFillRect = function(x, y, w, h, c1, c2, ve) {
    Yanfly.Core.Bitmap_gradientFillRect.call(this, x, y, w, h, c1, c2, ve);
};

Yanfly.Core.Bitmap_drawCircle = Bitmap.prototype.drawCircle;
Bitmap.prototype.drawCircle = function(x, y, r, c) {
    x = Math.floor(x);
    y = Math.floor(y);
    Yanfly.Core.Bitmap_drawCircle.call(this, x, y, r, c);
};

Yanfly.Core.Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function(text, x, y, mW, l, align) {
    x = Math.floor(x);
    y = Math.floor(y);
    if (mW < 0) mW = 0;
    mW = Math.floor(mW);
    l = Math.floor(l);
    Yanfly.Core.Bitmap_drawText.call(this, text, x, y, mW, l, align);
};

//=============================================================================
// Graphics
//=============================================================================

if (Yanfly.Param.UpdateRealScale) {

Graphics._updateRealScale = function() {
  if (this._stretchEnabled) {
    var h = window.innerWidth / this._width;
    var v = window.innerHeight / this._height;
    this._realScale = Math.min(h, v);
    if (this._realScale >= 3) this._realScale = 3;
    else if (this._realScale >= 2) this._realScale = 2;
    else if (this._realScale >= 1.5) this._realScale = 1.5;
    else if (this._realScale >= 1) this._realScale = 1;
    else this._realScale = 0.5;
  } else {
    this._realScale = this._scale;
  }
};

}; // Yanfly.Param.UpdateRealScale

Graphics.printFullError = function(name, message, stack) {
  stack = this.processErrorStackMessage(stack);
  if (this._errorPrinter) {
    this._errorPrinter.innerHTML =
      this._makeFullErrorHtml(name, message, stack);
  }
  this._applyCanvasFilter();
  this._clearUpperCanvas();
};

Graphics._makeFullErrorHtml = function(name, message, stack) {
  var text = '';
  for (var i = 2; i < stack.length; ++i) {
    text += '<font color=white>' + stack[i] + '</font><br>';
  }
  return ('<font color="yellow"><b>' + stack[0] + '</b></font><br>' +
    '<font color="yellow"><b>' + stack[1] + '</b></font><br>' + text);
};

Graphics.processErrorStackMessage = function(stack)  {
  var data = stack.split(/(?:\r\n|\r|\n)/);
  data.unshift('游戏遇到错误。请反馈此错误。<br>');
  for (var i = 1; i < data.length; ++i) {
    data[i] = data[i].replace(/[\(](.*[\/])/, '(');
  }
  data.push('<br><font color="yellow"><b>按F5重启游戏。' +
    '</b></font><br>');
  return data;
};

Yanfly.Core.Graphics_updateErrorPrinter = Graphics._updateErrorPrinter;
Graphics._updateErrorPrinter = function() {
  Yanfly.Core.Graphics_updateErrorPrinter.call(this);
  this._errorPrinter.height = this._height * 0.5;
  this._errorPrinter.style.textAlign = 'left';
  this._centerElement(this._errorPrinter);
};

SceneManager.catchException = function(e) {
  if (e instanceof Error) {
    Graphics.printFullError(e.name, e.message, e.stack);
    console.error(e.stack);
  } else {
    Graphics.printError('未知错误', e);
  }
  AudioManager.stopAll();
  this.stop();
};

//=============================================================================
// Input
//=============================================================================

Yanfly.Core.Input_shouldPreventDefault = Input._shouldPreventDefault;
Input._shouldPreventDefault = function(keyCode) {
  if (keyCode === 9) return true;
  return Yanfly.Core.Input_shouldPreventDefault.call(this, keyCode);
};

//=============================================================================
// Sprite
//=============================================================================

Yanfly.Core.Sprite_updateTransform = Sprite.prototype.updateTransform;
Sprite.prototype.updateTransform = function() {
  Yanfly.Core.Sprite_updateTransform.call(this);
  this.worldTransform.tx = Math.floor(this.worldTransform.tx);
  this.worldTransform.ty = Math.floor(this.worldTransform.ty);
};

//=============================================================================
// ScreenSprite
//=============================================================================

Yanfly.Core.ScreenSprite_initialize = ScreenSprite.prototype.initialize;
ScreenSprite.prototype.initialize = function() {
  Yanfly.Core.ScreenSprite_initialize.call(this);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.0') return;
  this.scale.x = Graphics.boxWidth * 10;
  this.scale.y = Graphics.boxHeight * 10;
  this.anchor.x = 0.5;
  this.anchor.y = 0.5;
  this.x = 0;
  this.y = 0;
};

//=============================================================================
// Window
//=============================================================================

Yanfly.Core.Window_refreshAllParts = Window.prototype._refreshAllParts;
Window.prototype._refreshAllParts = function() {
  this._roundWhUp();
  Yanfly.Core.Window_refreshAllParts.call(this);
};

Window.prototype._roundWhUp = function() {
  this._width = Math.ceil(this._width);
  this._height = Math.ceil(this._height);
};

//=============================================================================
// DataManager
//=============================================================================

Yanfly.Core.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.Core.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_CoreEngine) {
    this.processCORENotetags1($dataItems);
    this.processCORENotetags1($dataWeapons);
    this.processCORENotetags1($dataArmors);
    this.processCORENotetags2($dataEnemies);
    this.processCORENotetags3($dataActors);
    this.processCORENotetags4($dataClasses);
    Yanfly._loaded_YEP_CoreEngine = true;
  }
  return true;
};

DataManager.processCORENotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.maxItem = Yanfly.Param.MaxItem;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:PRICE|价格)[:：][ ]?(\d+)>/i)) {
        obj.price = parseInt(RegExp.$1);
      } else if (line.match(/<(?:MAX ITEM|数量)[:：][ ]?(\d+)>/i)) {
        obj.maxItem = Math.max(1, parseInt(RegExp.$1));
      } else if (line.match(/<(.*)[:：][ ]?([\+\-]\d+)>/i)) {
        var stat = String(RegExp.$1).toUpperCase();
        var value = parseInt(RegExp.$2);
        switch (stat) {
          case 'HP':
          case 'MAXHP':
          case 'MAX HP':
          case '生命':
            obj.params[0] = value;
            break;
          case 'MP':
          case 'MAXMP':
          case 'MAX MP':
          case 'SP':
          case 'MAXSP':
          case 'MAX SP':
          case '魔力':
            obj.params[1] = value;
            break;
          case 'ATK':
          case 'STR':
          case '物理攻击':
            obj.params[2] = value;
            break;
          case 'DEF':
          case '物理防御':
            obj.params[3] = value;
            break;
          case 'MAT':
          case 'INT' || 'SPI':
          case '魔法攻击':
            obj.params[4] = value;
            break;
          case 'MDF':
          case 'RES':
          case '魔法防御':
            obj.params[5] = value;
            break;
          case 'AGI':
          case 'SPD':
          case '敏捷':
            obj.params[6] = value;
            break;
          case 'LUK':
          case '幸运':
            obj.params[7] = value;
            break;
          case 'EXP':
          case 'XP':
          case '经验':
            obj.exp = value;
            break;
        }
      }
    }
  }
};

DataManager.processCORENotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:GOLD|金钱)[:：][ ]?(\d+)>/i)) {
        obj.gold = parseInt(RegExp.$1);
      } else if (line.match(/<(.*)[:：][ ]?(\d+)>/i)) {
        var stat = String(RegExp.$1).toUpperCase();
        var value = parseInt(RegExp.$2);
        switch (stat) {
          case 'HP':
          case 'MAXHP':
          case 'MAX HP':
          case '生命':
            obj.params[0] = value;
            break;
          case 'MP':
          case 'MAXMP':
          case 'MAX MP':
          case 'SP':
          case 'MAXSP':
          case 'MAX SP':
          case '魔力':
            obj.params[1] = value;
            break;
          case 'ATK':
          case 'STR':
          case '物理攻击':
            obj.params[2] = value;
            break;
          case 'DEF':
          case '物理防御':
            obj.params[3] = value;
            break;
          case 'MAT':
          case 'INT' || 'SPI':
          case '魔法攻击':
            obj.params[4] = value;
            break;
          case 'MDF':
          case 'RES':
          case '魔法防御':
            obj.params[5] = value;
            break;
          case 'AGI':
          case 'SPD':
          case '敏捷':
            obj.params[6] = value;
            break;
          case 'LUK':
          case '幸运':
            obj.params[7] = value;
            break;
          case 'EXP':
          case 'XP':
          case '经验':
            obj.exp = value;
            break;
        }
      }
    }
  }
};

DataManager.processCORENotetags3 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.maxLevel = Yanfly.Param.MaxLevel;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:MAX LEVEL|最大等级)[:：][ ]?(\d+)>/i)) {
        obj.maxLevel = parseInt(RegExp.$1);
        if (obj.maxLevel < 1) obj.maxLevel = 1;
      } else if (line.match(/<(?:INITIAL LEVEL|初始等级)[:：][ ]?(\d+)>/i)) {
        obj.initialLevel = parseInt(RegExp.$1);
        if (obj.initialLevel < 1) obj.initialLevel = 1;
      }
    }
  }
};

DataManager.processCORENotetags4 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.learnings.forEach(function(learning) {
      if (learning.note.match(/<(?:LEARN LEVEL|LEARN AT LEVEL|习得等级)[:：][ ]?(\d+)>/i)) {
        learning.level = parseInt(RegExp.$1);
        if (learning.level < 1) obj.maxLevel = 1;
      }
    }, this);
  }
};

//=============================================================================
// AudioManager Stacking Volume Bug Fix
//=============================================================================

Yanfly.Core.AudioManager_playSe = AudioManager.playSe;
AudioManager.playSe = function(se) {
    this._frameSe = this._frameSe || [];
    if (this.uniqueCheckSe(se)) {
      Yanfly.Core.AudioManager_playSe.call(this, se);
      this._frameSe.push(se);
    }
};

AudioManager.uniqueCheckSe = function(se1) {
    if (this._frameSe.contains(se1)) return false;
    return true;
};

AudioManager.clearUniqueCheckSe = function() {
    this._frameSe = [];
};

Yanfly.Core.SceneManager_updateInputData = SceneManager.updateInputData;
SceneManager.updateInputData = function() {
    Yanfly.Core.SceneManager_updateInputData.call(this);
    AudioManager.clearUniqueCheckSe();
};

//=============================================================================
// SceneManager
//=============================================================================

SceneManager._screenWidth  = Yanfly.Param.ScreenWidth;
SceneManager._screenHeight = Yanfly.Param.ScreenHeight;
SceneManager._boxWidth     = Yanfly.Param.ScreenWidth;
SceneManager._boxHeight    = Yanfly.Param.ScreenHeight

Yanfly.Core.SceneManager_run = SceneManager.run;
SceneManager.run = function(sceneClass) {
  Yanfly.Core.SceneManager_run.call(this, sceneClass);
  Yanfly.updateResolution();
  if (!Utils.isNwjs()) return;
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Yanfly.Param.OpenConsole) Yanfly.openConsole();
};

Yanfly.updateResolution = function() {
  var resizeWidth = Yanfly.Param.ScreenWidth - window.innerWidth;
  var resizeHeight = Yanfly.Param.ScreenHeight - window.innerHeight;
  if (!Imported.ScreenResolution) {
    window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
    window.resizeBy(resizeWidth, resizeHeight);
  }
};

Yanfly.openConsole = function() {
  Yanfly._openedConsole = true;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    var _debugWindow = require('nw.gui').Window.get().showDevTools();
    if (_debugWindow) _debugWindow.moveTo(0, 0);
    window.focus();
  }
};

Yanfly.Core.SceneManager_onKeyDown = SceneManager.onKeyDown;
SceneManager.onKeyDown = function(event) {
  if (!event.ctrlKey && !event.altKey && event.keyCode === 116) {
    if (Utils.isNwjs() && Utils.isOptionValid('test')) {
      var win = require('nw.gui').Window.get();
      win.closeDevTools();
    }
  }
  Yanfly.Core.SceneManager_onKeyDown.call(this, event);
};

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") {

Yanfly.openConsole = function() {
  Yanfly._openedConsole = true;
  if (!Yanfly.Param.OpenConsole) return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    var win = require('nw.gui').Window.get();
    win.showDevTools();
    setTimeout(this.focusWindow.bind(this, win), 500);
  }
};

Yanfly.focusWindow = function(win) {
  win.focus();
};

Yanfly.Core.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
  Yanfly.Core.Scene_Map_update.call(this);
  if (!Yanfly._openedConsole) Yanfly.openConsole();
};

Yanfly.Core.Scene_Battle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
  Yanfly.Core.Scene_Battle_update.call(this);
  if (!Yanfly._openedConsole) Yanfly.openConsole();
};

}; // 1.6.0

//=============================================================================
// BattleManager
//=============================================================================

Yanfly.Core.BattleManager_displayStartMessages =
    BattleManager.displayStartMessages;
BattleManager.displayStartMessages = function() {
  Yanfly.Core.BattleManager_displayStartMessages.call(this);
  $gameTroop.members().forEach(function(enemy) {
      enemy.recoverAll();
  });
};

BattleManager.processEscape = function() {
  $gameParty.performEscape();
  SoundManager.playEscape();
  var success = this._preemptive ? true : (Math.random() < this._escapeRatio);
  if (success) {
      $gameParty.removeBattleStates();
      this.displayEscapeSuccessMessage();
      this._escaped = true;
      this.processAbort();
  } else {
      this.displayEscapeFailureMessage();
      this._escapeRatio += 0.1;
      $gameParty.clearActions();
      this.startTurn();
  }
  return success;
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.paramMax = function(paramId) {
    if (paramId === 0) {
        return Yanfly.Param.EnemyMaxHp;
    } else if (paramId === 1) {
        return Yanfly.Param.EnemyMaxMp;
    } else {
        return Yanfly.Param.EnemyParam;
    }
};

Yanfly.Core.Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;

Game_BattlerBase.prototype.mapRegenUpdateCheck = function(type) {
  if ($gameParty.inBattle()) return true;
  if (type === 'hp') {
    return Yanfly.Param.RefreshUpdateHp;
  } else if (type === 'mp') {
    return Yanfly.Param.RefreshUpdateMp;
  } else if (type === 'tp') {
    return Yanfly.Param.RefreshUpdateTp;
  }
};

Game_BattlerBase.prototype.setHp = function(hp) {
  if (this._hp === hp) return;
  this._hp = hp;
  if (this.mapRegenUpdateCheck('hp')) {
    this.refresh();
  } else {
    Yanfly.Core.Game_BattlerBase_refresh.call(this);
  }
};

Game_BattlerBase.prototype.setMp = function(mp) {
  if (this._mp === mp) return;
  this._mp = mp;
  if (this.mapRegenUpdateCheck('mp')) {
    this.refresh();
  } else {
    Yanfly.Core.Game_BattlerBase_refresh.call(this);
  }
};

Game_BattlerBase.prototype.setTp = function(tp) {
  if (this._tp === tp) return;
  this._tp = tp;
  if (this.mapRegenUpdateCheck('tp')) {
    this.refresh();
  } else {
    Yanfly.Core.Game_BattlerBase_refresh.call(this);
  }
};

//=============================================================================
// Game_Battler
//=============================================================================

Game_Battler.prototype.onTurnEnd = function() {
  this.clearResult();
  this.regenerateAll();
  this.updateStateTurns();
  this.updateBuffTurns();
  this.removeStatesAuto(2);
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.Core.Game_Actor_isMaxLevel = Game_Actor.prototype.isMaxLevel;
Game_Actor.prototype.isMaxLevel = function() {
    if (this.maxLevel() === 0) return false;
    return Yanfly.Core.Game_Actor_isMaxLevel.call(this);
};

Game_Actor.prototype.paramMax = function(paramId) {
  if (paramId === 0) {
      return Yanfly.Param.ActorMaxHp;
  } else if (paramId === 1) {
      return Yanfly.Param.ActorMaxMp;
  } else {
      return Yanfly.Param.ActorParam;
  }
};

Yanfly.Core.Game_Actor_paramBase = Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function(paramId) {
    if (this.level > 99) {
      var i = this.currentClass().params[paramId][99];
      var j = this.currentClass().params[paramId][98];
      i += (i - j) * (this.level - 99);
      return i;
    }
    return Yanfly.Core.Game_Actor_paramBase.call(this, paramId);
};

Game_Actor.prototype.changeClass = function(classId, keepExp) {
    if (keepExp) {
        this._exp[classId] = this._exp[this._classId];
    }
    this._classId = classId;
    this.changeExp(this._exp[this._classId] || 0, false);
    this.refresh();
};

Game_Actor.prototype.learnSkill = function(skillId) {
    if (!this._skills.contains(skillId)) {
        this._skills.push(skillId);
        this._skills.sort(function(a, b) {
            return a - b;
        });
    }
};

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.4') {

Game_Actor.prototype.meetsUsableItemConditions = function(item) {
  if($gameParty.inBattle() && !BattleManager.canEscape() &&
  this.testEscape(item)){
    return false;
  }
  return Game_BattlerBase.prototype.meetsUsableItemConditions.call(this, item);
};

}; // Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.4'

//=============================================================================
// Game_Party
//=============================================================================

Game_Party.prototype.maxGold = function() {
    return eval(Yanfly.Param.MaxGold);
};

Game_Party.prototype.maxItems = function(item) {
    if (!item) return 1;
    return item.maxItem;
};

Game_Party.prototype.onPlayerWalk = function() {
    var group = this.members();
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var actor = group[i];
      if (actor) actor.onPlayerWalk();
    }
};

//=============================================================================
// Game_Map
//=============================================================================

Yanfly.isPreventScreenJittering = function() {
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.5.0') return true;
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.4') return false;
  return true;
};

if (Yanfly.isPreventScreenJittering()) {

Game_Map.prototype.displayX = function() {
    return parseFloat(Math.floor(this._displayX *
      this.tileWidth())) / this.tileWidth();
};

Game_Map.prototype.displayY = function() {
    return parseFloat(Math.floor(this._displayY *
      this.tileHeight())) / this.tileHeight();
};

}; // Yanfly.isPreventScreenJittering

Game_Map.prototype.adjustX = function(x) {
    if (this.isLoopHorizontal() && x < this.displayX() -
            (this.width() - this.screenTileX()) / 2) {
        return x - this.displayX() + $dataMap.width;
    } else {
        return x - this.displayX();
    }
};

Game_Map.prototype.adjustY = function(y) {
    if (this.isLoopVertical() && y < this.displayY() -
            (this.height() - this.screenTileY()) / 2) {
        return y - this.displayY() + $dataMap.height;
    } else {
        return y - this.displayY();
    }
};

Game_Map.prototype.updateEvents = function() {
    var group = this.events();
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var ev = group[i];
      if (ev) ev.update();
    }
    var group = this._commonEvents;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var ev = group[i];
      if (ev) ev.update();
    }
};

Game_Map.prototype.updateVehicles = function() {
    var group = this._vehicles;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var vehicle = group[i];
      if (vehicle) vehicle.update();
    }
};

//=============================================================================
// Game_Character
//=============================================================================

Game_Character.prototype.queueMoveRoute = function(moveRoute) {
    this._originalMoveRoute = moveRoute;
    this._originalMoveRouteIndex = 0;
};

Yanfly.Core.Game_Event_setMoveRoute =
    Game_Event.prototype.setMoveRoute;
Game_Character.prototype.setMoveRoute = function(moveRoute) {
    if (!this._moveRouteForcing) {
        Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
    } else {
        this.queueMoveRoute(moveRoute);
    }
};

Yanfly.Core.Game_Character_processMoveCommand =
  Game_Character.prototype.processMoveCommand;
Game_Character.prototype.processMoveCommand = function(command) {
  var gc = Game_Character;
  var params = command.parameters;
  switch (command.code) {
  case gc.ROUTE_SCRIPT:
    try {
      eval(params[0]);
    } catch (e) {
      Yanfly.Util.displayError(e, params[0], '移动路线脚本错误');
    }
    return;
    break;
  }
  return Yanfly.Core.Game_Character_processMoveCommand.call(this, command);
};

//=============================================================================
// Game_Event
//=============================================================================

Game_Event.prototype.isCollidedWithEvents = function(x, y) {
  var events = $gameMap.eventsXyNt(x, y).filter(function(ev) {
    return ev.isNormalPriority();
  });
  if (events.length <= 0) return false;
  return this.isNormalPriority();
};

//=============================================================================
// Game_Screen
//=============================================================================

Game_Screen.prototype.updatePictures = function() {
    var group = this._pictures;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var picture = group[i];
      if (picture) picture.update();
    }
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.Core.Game_Action_testItemEffect = Game_Action.prototype.testItemEffect;
Game_Action.prototype.testItemEffect = function(target, effect) {
    switch (effect.code) {
    case Game_Action.EFFECT_LEARN_SKILL:
      return target.isActor() && !target._skills.contains(effect.dataId);
    default:
      return Yanfly.Core.Game_Action_testItemEffect.call(this, target, effect);
    }
};

Game_Action.prototype.evalDamageFormula = function(target) {
  var item = this.item();
  var a = this.subject();
  var b = target;
  var v = $gameVariables._data;
  var sign = ([3, 4].contains(item.damage.type) ? -1 : 1);
  try {
    var value = Math.max(eval(item.damage.formula), 0) * sign;
    if (isNaN(value)) value = 0;
    return value;
  } catch (e) {
    Yanfly.Util.displayError(e, item.damage.formula, '伤害公式错误');
    return 0;
  }
};

//=============================================================================
// Game_Interpreter
//=============================================================================

// Conditional Branch
Yanfly.Core.Game_Interpreter_command111 =
  Game_Interpreter.prototype.command111;
Game_Interpreter.prototype.command111 = function() {
  var result = false;
  switch (this._params[0]) {
  case 0: // Switch
    if (this._params[2] === 0) {
      result = $gameSwitches.value(this._params[1]);
    } else {
      result = !$gameSwitches.value(this._params[1]);
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) this.skipBranch();
    return true
    break;
  case 2: // Self Switch
    if (this._eventId > 0) {
      var key = [this._mapId, this._eventId, this._params[1]];
      if (this._params[2] === 0) {
        result = $gameSelfSwitches.value(key);
      } else {
        result = !$gameSelfSwitches.value(key);
      }
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) this.skipBranch();
    return true
    break;
  case 12: // Script
    var code = this._params[1];
    try {
      result = !!eval(code);
    } catch (e) {
      result = false;
      Yanfly.Util.displayError(e, code, '条件分支脚本错误');
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) this.skipBranch();
    return true
    break;
  }
  return Yanfly.Core.Game_Interpreter_command111.call(this);
};

// Control Variables
Yanfly.Core.Game_Interpreter_command122 =
  Game_Interpreter.prototype.command122;
Game_Interpreter.prototype.command122 = function() {
  switch (this._params[3]) {
  case 4: // Script
    var value = 0;
    var code = this._params[4];
    try {
      value = eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, '变量操作脚本错误');
    }
    for (var i = this._params[0]; i <= this._params[1]; i++) {
      this.operateVariable(i, this._params[2], value);
    }
    return true;
    break;
  }
  return Yanfly.Core.Game_Interpreter_command122.call(this);
};

// Script
Game_Interpreter.prototype.command355 = function() {
  var script = this.currentCommand().parameters[0] + '\n';
  while (this.nextEventCode() === 655) {
    this._index++;
    script += this.currentCommand().parameters[0] + '\n';
  }
  try {
    eval(script);
  } catch (e) {
    Yanfly.Util.displayError(e, script, '脚本调用错误');
  }
  return true;
};

Yanfly.Core.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.Core.Game_Interpreter_pluginCommand.call(this, command, args);
    command = command.toUpperCase();  ////英文统一大写
    if (command === 'GAINGOLD' || command === '获得金钱') {
        $gameParty.gainGold(parseInt(args[0]));
    }
    if (command === 'LOSEGOLD' || command === '失去金钱') {
        $gameParty.loseGold(parseInt(args[0]));
    }
};

//=============================================================================
// Scene_Base
//=============================================================================

Scene_Base.prototype.clearChildren = function() {
  while (this.children.length > 0) {
    this.removeChild(this.children[0]);
  }
};

if (Yanfly.Param.CollectionClear) {

Yanfly.Core.Scene_Base_terminate = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
  Yanfly.Core.Scene_Base_terminate.call(this);
  if (this._bypassFirstClear) return;
  this.clearChildren();
};

Yanfly.Core.Scene_Title_terminate = Scene_Title.prototype.terminate;
Scene_Title.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Title_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Map_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Battle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Battle_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Options_terminate = Scene_Options.prototype.terminate;
Scene_Options.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Options_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Load_terminate = Scene_Load.prototype.terminate;
Scene_Load.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Load_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Gameover_terminate = Scene_Gameover.prototype.terminate;
Scene_Gameover.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Gameover_terminate.call(this);
  this.clearChildren();
};

}; // Yanfly.Param.CollectionClear

//=============================================================================
// Scene_Boot
//=============================================================================

Scene_Boot.prototype.isGameFontLoaded = function() {
  if (Graphics.isFontLoaded('GameFont')) {
    return true;
  } else if (Yanfly.Param.GameFontTimer <= 0) {
    return false;
  } else {
    var elapsed = Date.now() - this._startDate;
    if (elapsed >= Yanfly.Param.GameFontTimer) {
      throw new Error('无法加载GameFont');
    } else {
      return false;
    }
  }
};

//=============================================================================
// Scene_Item
//=============================================================================

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") {

Scene_Item.prototype.update = function() {
  Scene_ItemBase.prototype.update.call(this);
};

}; // Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0"

//=============================================================================
// Scene_Title
//=============================================================================

Yanfly.Core.Scene_Title_start = Scene_Title.prototype.start;
Scene_Title.prototype.start = function() {
  Yanfly.Core.Scene_Title_start.call(this);
  if (Yanfly.Param.ScaleTitle) this.rescaleTitle();
};

Scene_Title.prototype.rescaleTitle = function() {
  this.rescaleTitleSprite(this._backSprite1);
  this.rescaleTitleSprite(this._backSprite2);
};

Scene_Title.prototype.rescaleTitleSprite = function(sprite) {
  if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) {
    return setTimeout(this.rescaleTitleSprite.bind(this, sprite), 5);
  }
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var ratioX = width / sprite.bitmap.width;
  var ratioY = height / sprite.bitmap.height;
  if (ratioX > 1.0) sprite.scale.x = ratioX;
  if (ratioY > 1.0) sprite.scale.y = ratioY;
  this.centerSprite(sprite);
};

//=============================================================================
// Scene_Map
//=============================================================================

if (Yanfly.Param.ShowEvTrans) {

Scene_Map.prototype.startEncounterEffect = function() {
  this._encounterEffectDuration = this.encounterEffectSpeed();
};

}; // Yanfly.Param.ShowEvTrans

Yanfly.Core.Scene_Map_snapForBattleBackground =
  Scene_Map.prototype.snapForBattleBackground;
Scene_Map.prototype.snapForBattleBackground = function() {
  if (!Yanfly.Param.ShowEvSnap) this._spriteset.hideCharacters();
  Yanfly.Core.Scene_Map_snapForBattleBackground.call(this);
  if (Yanfly.Param.ShowEvTrans) this._spriteset.showCharacters();
};

//=============================================================================
// Scene_Gameover
//=============================================================================

Yanfly.Core.Scene_Gameover_start = Scene_Gameover.prototype.start;
Scene_Gameover.prototype.start = function() {
    Yanfly.Core.Scene_Gameover_start.call(this);
    if (Yanfly.Param.ScaleGameOver) this.rescaleBackground();
};

Scene_Gameover.prototype.rescaleBackground = function() {
    this.rescaleImageSprite(this._backSprite);
};

Scene_Gameover.prototype.rescaleImageSprite = function(sprite) {
    if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) {
      return setTimeout(this.rescaleImageSprite.bind(this, sprite), 5);
    }
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    var ratioX = width / sprite.bitmap.width;
    var ratioY = height / sprite.bitmap.height;
    if (ratioX > 1.0) sprite.scale.x = ratioX;
    if (ratioY > 1.0) sprite.scale.y = ratioY;
    this.centerSprite(sprite);
};

Scene_Gameover.prototype.centerSprite = function(sprite) {
    sprite.x = Graphics.width / 2;
    sprite.y = Graphics.height / 2;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
};

//=============================================================================
// Sprite_Animation
//=============================================================================

Sprite_Animation.prototype.setupRate = function() {
  this._rate = Yanfly.Param.AnimationRate;
};

//=============================================================================
// Sprite_Battler
//=============================================================================

if (!Yanfly.Param.FlashTarget) {

Yanfly.Core.Sprite_Battler_updateSelectionEffect =
    Sprite_Battler.prototype.updateSelectionEffect;
Sprite_Battler.prototype.updateSelectionEffect = function() {
    if (this._battler.isActor()) {
      Yanfly.Core.Sprite_Battler_updateSelectionEffect.call(this);
    } else {
      if (this._battler.isSelected()) this.startEffect('whiten');
    }
};

}; // Yanfly.Param.FlashTarget

//=============================================================================
// Sprite_Actor
//=============================================================================

if (Yanfly.Param.ReposBattlers) {
  Yanfly.Core.Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
  Sprite_Actor.prototype.setActorHome = function(index) {
      Yanfly.Core.Sprite_Actor_setActorHome.call(this, index);
      this._homeX += Graphics.boxWidth - 816;
      this._homeY += Graphics.boxHeight - 624;
  };
};

Sprite_Actor.prototype.retreat = function() {
    this.startMove(1200, 0, 120);
};

//=============================================================================
// Sprite_Enemy
//=============================================================================

if (Yanfly.Param.ReposBattlers) {

Yanfly.Core.Sprite_Enemy_setBattler = Sprite_Enemy.prototype.setBattler;
Sprite_Enemy.prototype.setBattler = function(battler) {
    Yanfly.Core.Sprite_Enemy_setBattler.call(this, battler);
    if (!this._enemy._alteredScreenY) {
      this._homeY += Math.floor((Graphics.boxHeight - 624) / 2);
      this._enemy._screenY = this._homeY;
      this._enemy._alteredScreenY = true;
    }
    if ($gameSystem.isSideView()) return;
    if (!this._enemy._alteredScreenX) {
      this._homeX += (Graphics.boxWidth - 816) / 2;
      this._enemy._screenX = this._homeX;
      this._enemy._alteredScreenX = true;
    }
};

}; // Yanfly.Param.ReposBattlers

//=============================================================================
// Sprite_StateIcon
//=============================================================================

Sprite_StateIcon._iconWidth  = Yanfly.Param.IconWidth;
Sprite_StateIcon._iconHeight = Yanfly.Param.IconHeight;

//=============================================================================
// Sprite_Button
//=============================================================================

Sprite_Button.prototype.isButtonTouched = function() {
    var x = this.canvasToLocalX(TouchInput.x) + (this.anchor.x * this.width);
    var y = this.canvasToLocalY(TouchInput.y) + (this.anchor.y * this.height);
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

//=============================================================================
// Sprite_Battleback
//=============================================================================

function Sprite_Battleback() {
    this.initialize.apply(this, arguments);
}

Sprite_Battleback.prototype = Object.create(Sprite.prototype);
Sprite_Battleback.prototype.constructor = Sprite_Battleback;

Sprite_Battleback.prototype.initialize = function(bitmapName, type) {
  Sprite.prototype.initialize.call(this);
  this._bitmapName = bitmapName;
  this._battlebackType = type;
  this.createBitmap();
};

Sprite_Battleback.prototype.createBitmap = function() {
  if (this._bitmapName === '') {
    this.bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
  } else {
    if (this._battlebackType === 1) {
      this.bitmap = ImageManager.loadBattleback1(this._bitmapName);
    } else {
      this.bitmap = ImageManager.loadBattleback2(this._bitmapName);
    }
    this.scaleSprite();
  }
};

Sprite_Battleback.prototype.scaleSprite = function() {
  if (this.bitmap.width <= 0) return setTimeout(this.scaleSprite.bind(this), 5);
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  if (this.bitmap.width < width) {
    this.scale.x = width / this.bitmap.width;
  }
  if (this.bitmap.height < height) {
    this.scale.y = height / this.bitmap.height;
  }
  this.anchor.x = 0.5;
  this.x = Graphics.boxWidth / 2;
  if ($gameSystem.isSideView()) {
    this.anchor.y = 1;
    this.y = Graphics.boxHeight;
  } else {
    this.anchor.y = 0.5;
    this.y = Graphics.boxHeight / 2;
  }
};

//=============================================================================
// Sprite_Character
//=============================================================================

Yanfly.Core.Sprite_Character_updateHalfBodySprites =
  Sprite_Character.prototype.updateHalfBodySprites;
Sprite_Character.prototype.updateHalfBodySprites = function() {
  Yanfly.Core.Sprite_Character_updateHalfBodySprites.call(this);
  if (this._bushDepth > 0) {
    this._upperBody.blendMode = this.blendMode;
    this._lowerBody.blendMode = this.blendMode;
  }
};

//=============================================================================
// Spriteset_Map
//=============================================================================

Spriteset_Map.prototype.hideCharacters = function() {
  for (var i = 0; i < this._characterSprites.length; i++) {
    var sprite = this._characterSprites[i];
    if (!sprite.isTile()) sprite.hide();
  }
};

Spriteset_Map.prototype.showCharacters = function() {
  for (var i = 0; i < this._characterSprites.length; i++) {
    var sprite = this._characterSprites[i];
    if (!sprite.isTile()) sprite.show();
  }
};

//=============================================================================
// Spriteset_Battle
//=============================================================================

if (Yanfly.Param.ScaleBattleback) {

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.2') {

// Rewriting the battlebacks
Spriteset_Battle.prototype.createBattleback = function() {
  this._back1Sprite = new Sprite_Battleback(this.battleback1Name(), 1);
  this._back2Sprite = new Sprite_Battleback(this.battleback2Name(), 2);
  this._battleField.addChild(this._back1Sprite);
  this._battleField.addChild(this._back2Sprite);
};

// No more updateBattleback
Spriteset_Battle.prototype.updateBattleback = function() {
};

} else { // Version 1.3.0 and below
 
Yanfly.Core.Spriteset_Battle_locateBattleback =
    Spriteset_Battle.prototype.locateBattleback;
Spriteset_Battle.prototype.locateBattleback = function() {
  var sprite1 = this._back1Sprite;
  var sprite2 = this._back2Sprite;
  if (sprite1.bitmap.width <= 0) return;
  if (sprite2.bitmap.width <= 0) return;
  if (this._rescaledBattlebackSprite) return;
  this._rescaledBattlebackSprite = true;
  Yanfly.Core.Spriteset_Battle_locateBattleback.call(this);
  var height = this._battleField.height;
  sprite1.origin.y = sprite1.x + sprite1.bitmap.height - height;
  sprite2.origin.y = sprite1.y + sprite2.bitmap.height - height;
  this.rescaleBattlebacks();
};

Spriteset_Battle.prototype.rescaleBattlebacks = function() {
  this.rescaleBattlebackSprite(this._back1Sprite);
  this.rescaleBattlebackSprite(this._back2Sprite);
};

Spriteset_Battle.prototype.rescaleBattlebackSprite = function(sprite) {
  if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) return;
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var ratioX = width / sprite.bitmap.width;
  var ratioY = height / sprite.bitmap.height;
  if (ratioX > 1.0) {
    sprite.scale.x = ratioX;
    sprite.anchor.x = 0.5;
    sprite.x = width / 2;
  }
  if (ratioY > 1.0) {
    sprite.scale.y = ratioY;
    sprite.origin.y = 0;
    sprite.y = 0;
  }
};

} // Version 1.3.0 and below

} // Yanfly.Param.ScaleBattleback

//=============================================================================
// Window_Base
//=============================================================================

Window_Base._iconWidth   = Yanfly.Param.IconWidth;
Window_Base._iconHeight  = Yanfly.Param.IconHeight;
Window_Base._faceWidth   = Yanfly.Param.FaceWidth;
Window_Base._faceHeight  = Yanfly.Param.FaceHeight;

Window_Base.prototype.lineHeight = function() {
  return Yanfly.Param.LineHeight;
};

Window_Base.prototype.drawTextEx = function(text, x, y) {
  if (text) {
    this.resetFontSettings();
    var textState = { index: 0, x: x, y: y, left: x };
    textState.text = this.convertEscapeCharacters(text);
    textState.height = this.calcTextHeight(textState, false);
    while (textState.index < textState.text.length) {
      this.processCharacter(textState);
    }
    return textState.x - x;
  } else {
    return 0;
  }
};

Window_Base.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height + this.lineHeight());
};

Window_Base.prototype.standardFontFace = function() {
    if ($gameSystem.isChinese()) {
    return Yanfly.Param.ChineseFont;
    } else if ($gameSystem.isKorean()) {
    return Yanfly.Param.KoreanFont;
    } else {
    return Yanfly.Param.DefaultFont;
    }
};

Window_Base.prototype.standardFontSize = function() {
    return Yanfly.Param.FontSize;
};

Window_Base.prototype.standardPadding = function() {
    return Yanfly.Param.WindowPadding;
};

Window_Base.prototype.textPadding = function() {
    return Yanfly.Param.TextPadding;
};

Window_Base.prototype.standardBackOpacity = function() {
    return Yanfly.Param.WindowOpacity;
};

Window_Base.prototype.normalColor = function() {
  return this.textColor(Yanfly.Param.ColorNormal);
};
Window_Base.prototype.systemColor = function() {
    return this.textColor(Yanfly.Param.ColorSystem);
};

Window_Base.prototype.crisisColor = function() {
    return this.textColor(Yanfly.Param.ColorCrisis);
};

Window_Base.prototype.deathColor = function() {
    return this.textColor(Yanfly.Param.ColorDeath);
};

Window_Base.prototype.gaugeBackColor = function() {
    return this.textColor(Yanfly.Param.ColorGaugeBack);
};

Window_Base.prototype.hpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorHpGauge1);
};

Window_Base.prototype.hpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorHpGauge2);
};

Window_Base.prototype.mpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorMpGauge1);
};

Window_Base.prototype.mpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorMpGauge2);
};

Window_Base.prototype.mpCostColor = function() {
    return this.textColor(Yanfly.Param.ColorMpCost);
};

Window_Base.prototype.powerUpColor = function() {
    return this.textColor(Yanfly.Param.ColorPowerUp);
};

Window_Base.prototype.powerDownColor = function() {
    return this.textColor(Yanfly.Param.ColorPowerDown);
};

Window_Base.prototype.tpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorTpGauge1);
};

Window_Base.prototype.tpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorTpGauge2);
};

Window_Base.prototype.tpCostColor = function() {
    return this.textColor(Yanfly.Param.ColorTpCost);
};

Window_Base.prototype.drawGauge = function(dx, dy, dw, rate, color1, color2) {
  var color3 = this.gaugeBackColor();
  var fillW = Math.floor(dw * rate).clamp(0, dw);
  var gaugeH = this.gaugeHeight();
  var gaugeY = dy + this.lineHeight() - gaugeH - 2;
  if (Yanfly.Param.GaugeOutline) {
    color3.paintOpacity = this.translucentOpacity();
    this.contents.fillRect(dx, gaugeY - 1, dw, gaugeH, color3);
    fillW = Math.max(fillW - 2, 0);
    gaugeH -= 2;
    dx += 1;
  } else {
    var fillW = Math.floor(dw * rate);
    var gaugeY = dy + this.lineHeight() - gaugeH - 2;
    this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
  }
  this.contents.gradientFillRect(dx, gaugeY, fillW, gaugeH, color1, color2);
};

Window_Base.prototype.gaugeHeight = function() {
    return Yanfly.Param.GaugeHeight;
};

Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    var dw1 = this.textWidth(TextManager.levelA);
    this.drawText(TextManager.levelA, x, y, dw1);
    this.resetTextColor();
    var level = Yanfly.Util.toGroup(actor.level);
    var dw2 = this.textWidth(Yanfly.Util.toGroup(actor.maxLevel()));
    this.drawText(level, x + dw1, y, dw2, 'right');
};

Window_Base.prototype.drawCurrentAndMax = function(current, max, x, y,
                                                   width, color1, color2) {
    var labelWidth = this.textWidth('HP');
    var valueWidth = this.textWidth(Yanfly.Util.toGroup(max));
    var slashWidth = this.textWidth('/');
    var x1 = x + width - valueWidth;
    var x2 = x1 - slashWidth;
    var x3 = x2 - valueWidth;
    if (x3 >= x + labelWidth) {
        this.changeTextColor(color1);
        this.drawText(Yanfly.Util.toGroup(current), x3, y, valueWidth,
          'right');
        this.changeTextColor(color2);
        this.drawText('/', x2, y, slashWidth, 'right');
        this.drawText(Yanfly.Util.toGroup(max), x1, y, valueWidth, 'right');
    } else {
        this.changeTextColor(color1);
        this.drawText(Yanfly.Util.toGroup(current), x1, y, valueWidth,
          'right');
    }
};

Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
    width = width || 96;
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
    this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.tpA, x, y, 44);
    this.changeTextColor(this.tpColor(actor));
    this.drawText(Yanfly.Util.toGroup(actor.tp), x + width - 64, y, 64,
      'right');
};

Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var xpad = Window_Base._faceWidth + (2 * Yanfly.Param.TextPadding);
    var x2 = x + xpad;
    var width2 = Math.max(180, width - xpad - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y, width2);
    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
    if (Yanfly.Param.MenuTpGauge) {
      this.drawActorTp(actor, x2, y + lineHeight * 3, width2);
    }
};

Window_Base.prototype.drawCurrencyValue = function(value, unit, wx, wy, ww) {
    this.resetTextColor();
    this.contents.fontSize = Yanfly.Param.GoldFontSize;
    if (this.usingGoldIcon(unit)) {
      var cx = Window_Base._iconWidth;
    } else {
      var cx = this.textWidth(unit);
    }
    var text = Yanfly.Util.toGroup(value);
    if (this.textWidth(text) > ww - cx) {
      text = Yanfly.Param.GoldOverlap;
    }
    this.drawText(text, wx, wy, ww - cx - 4, 'right');
    if (this.usingGoldIcon(unit)) {
      this.drawIcon(Yanfly.Icon.Gold, wx + ww - Window_Base._iconWidth, wy + 2);
    } else {
      this.changeTextColor(this.systemColor());
      this.drawText(unit, wx, wy, ww, 'right');
    }
    this.resetFontSettings();
};

Window_Base.prototype.usingGoldIcon = function(unit) {
    if (unit !== TextManager.currencyUnit) return false;
    return Yanfly.Icon.Gold > 0;
};

//=============================================================================
// Window_Command
//=============================================================================

Window_Command.prototype.itemTextAlign = function() {
    return Yanfly.Param.TextAlign;
};

//=============================================================================
// Window_MenuStatus
//=============================================================================

Window_MenuStatus.prototype.drawItemImage = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
    var fw = Window_Base._faceWidth;
    this.drawActorFace(actor, rect.x + 1, rect.y + 1, fw, rect.height - 2);
    this.changePaintOpacity(true);
};

Window_MenuStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    var xpad = Yanfly.Param.WindowPadding + Window_Base._faceWidth;
    var x = rect.x + xpad;
    if (!Yanfly.Param.MenuTpGauge) {
      var y = Math.floor(rect.y + rect.height / 2 - this.lineHeight() * 1.5);
    } else {
      var y = Math.floor(rect.y);
    }
    var width = rect.width - x - this.textPadding();
    this.drawActorSimpleStatus(actor, x, y, width);
};

//=============================================================================
// Window_ItemList
//=============================================================================

Window_ItemList.prototype.numberWidth = function() {
    return this.textWidth('\u00d70,000');
};

Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
    if (!this.needsNumber()) return;
    var numItems = Yanfly.Util.toGroup($gameParty.numItems(item));
    this.contents.fontSize = Yanfly.Param.ItemQuantitySize;
    this.drawText('\u00d7' + numItems, x, y, width, 'right');
    this.resetFontSettings();
};

//=============================================================================
// Window_SkillStatus
//=============================================================================

Window_SkillStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var w = this.width - this.padding * 2;
        var h = this.height - this.padding * 2;
        if (!Yanfly.Param.MenuTpGauge) {
          var y = h / 2 - this.lineHeight() * 1.5;
        } else {
          var y = 0;
        }
        var xpad = Yanfly.Param.WindowPadding + Window_Base._faceWidth;
        var width = w - xpad - this.textPadding();
        this.drawActorFace(this._actor, 0, 0, Window_Base._faceWidth, h);
        this.drawActorSimpleStatus(this._actor, xpad, y, width);
    }
};

Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (this._actor.skillTpCost(skill) > 0) {
        this.changeTextColor(this.tpCostColor());
        var skillcost = Yanfly.Util.toGroup(this._actor.skillTpCost(skill));
        this.drawText(skillcost, x, y, width, 'right');
    } else if (this._actor.skillMpCost(skill) > 0) {
        this.changeTextColor(this.mpCostColor());
        var skillcost = Yanfly.Util.toGroup(this._actor.skillMpCost(skill));
        this.drawText(skillcost, x, y, width, 'right');
    }
};

//=============================================================================
// Window_EquipStatus
//=============================================================================

Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
    this.resetTextColor();
    var actorparam = Yanfly.Util.toGroup(this._actor.param(paramId));
    this.drawText(actorparam, x, y, 48, 'right');
};

Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
    var actorparam = Yanfly.Util.toGroup(newValue);
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    this.drawText(actorparam, x, y, 48, 'right');
};

//=============================================================================
// Window_SkillType
//=============================================================================

Window_SkillType.prototype.makeCommandList = function() {
    if (this._actor) {
        var skillTypes = this._actor.addedSkillTypes();
        skillTypes.sort(function(a, b){return a-b});
        skillTypes.forEach(function(stypeId) {
            var name = $dataSystem.skillTypes[stypeId];
            this.addCommand(name, 'skill', true, stypeId);
        }, this);
    }
};

//=============================================================================
// Window_ActorCommand
//=============================================================================

Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b){return a-b});
    skillTypes.forEach(function(stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
        this.addCommand(name, 'skill', true, stypeId);
    }, this);
};

//=============================================================================
// Window_Status
//=============================================================================

Window_Status.prototype.drawParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 6; i++) {
      var paramId = i + 2;
      var y2 = y + lineHeight * i;
      this.changeTextColor(this.systemColor());
      this.drawText(TextManager.param(paramId), x, y2, 160);
      this.resetTextColor();
      var actorParam = Yanfly.Util.toGroup(this._actor.param(paramId));
      var dw = this.textWidth(Yanfly.Util.toGroup(this._actor.paramMax(i + 2)));
      this.drawText(actorParam, x + 160, y2, dw, 'right');
    }
};

Window_Status.prototype.drawExpInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    var expTotal = TextManager.expTotal.format(TextManager.exp);
    var expNext = TextManager.expNext.format(TextManager.level);
    var value1 = this._actor.currentExp();
    var value2 = this._actor.nextRequiredExp();
    if (this._actor.isMaxLevel()) {
        value1 = '-------';
        value2 = '-------';
    } else {
      value1 = Yanfly.Util.toGroup(value1);
      value2 = Yanfly.Util.toGroup(value2);
    }
    this.changeTextColor(this.systemColor());
    this.drawText(expTotal, x, y + lineHeight * 0, 270);
    this.drawText(expNext, x, y + lineHeight * 2, 270);
    this.resetTextColor();
    this.drawText(value1, x, y + lineHeight * 1, 270, 'right');
    this.drawText(value2, x, y + lineHeight * 3, 270, 'right');
};

//=============================================================================
// Window_ShopBuy
//=============================================================================

Window_ShopBuy.prototype.drawItem = function(index) {
    var item = this._data[index];
    var rect = this.itemRect(index);
    rect.width -= this.textPadding();
    this.changePaintOpacity(this.isEnabled(item));
    this.drawItemName(item, rect.x, rect.y, rect.width);
    this.contents.fontSize = Yanfly.Param.GoldFontSize;
    var itemPrice = Yanfly.Util.toGroup(this.price(item));
    this.drawText(itemPrice, rect.x, rect.y, rect.width, 'right');
    this.changePaintOpacity(true);
    this.resetFontSettings();
};

//=============================================================================
// Window_ShopNumber
//=============================================================================

Window_ShopNumber.prototype.drawNumber = function() {
    var x = this.cursorX();
    var y = this.itemY();
    var width = this.cursorWidth() - this.textPadding();
    this.resetTextColor();
    var itemNumber = Yanfly.Util.toGroup(this._number);
    this.drawText(itemNumber, x, y, width, 'right');
};

//=============================================================================
// Window_NameEdit
//=============================================================================

Window_NameEdit.prototype.faceWidth = function() {
    return Window_Base._faceWidth;
};

//=============================================================================
// Window_BattleStatus
//=============================================================================

Window_BattleStatus.prototype.gaugeAreaWidth = function() {
    return this.width / 2 + this.standardPadding();
};

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    var minIconArea = Window_Base._iconWidth * 2;
    var nameLength = this.textWidth('0') * 16 + 6;
    var iconWidth = Math.max(rect.width - nameLength, minIconArea);
    var nameWidth = rect.width - iconWidth;
    this.drawActorName(actor, rect.x + 0, rect.y, nameWidth);
    this.drawActorIcons(actor, rect.x + nameWidth, rect.y, iconWidth);
};

Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    var totalArea = this.gaugeAreaWidth() - 30;
    var hpW = Math.floor(parseInt(totalArea * 108 / 300));
    var otW = Math.floor(parseInt(totalArea * 96 / 300));
    this.drawActorHp(actor, rect.x + 0, rect.y, hpW);
    this.drawActorMp(actor, rect.x + hpW + 15, rect.y, otW);
    this.drawActorTp(actor, rect.x + hpW + otW + 30, rect.y, otW);
};

Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    var totalArea = this.gaugeAreaWidth() - 15;
    var hpW = Math.floor(parseInt(totalArea * 201 / 315));
    var otW = Math.floor(parseInt(totalArea * 114 / 315));
    this.drawActorHp(actor, rect.x + 0, rect.y, hpW);
    this.drawActorMp(actor, rect.x + hpW + 15,  rect.y, otW);
};

//=============================================================================
// Window_BattleLog
//=============================================================================

Window_BattleLog.prototype.showNormalAnimation = function(targets,
animationId, mirror) {
    var animation = $dataAnimations[animationId];
    if (animation) {
      if (animation.position === 3) {
        targets.forEach(function(target) {
            target.startAnimation(animationId, mirror, 0);
        });
      } else {
          var delay = this.animationBaseDelay();
          var nextDelay = this.animationNextDelay();
          targets.forEach(function(target) {
              target.startAnimation(animationId, mirror, delay);
              delay += nextDelay;
          });
      }
    }
};

//=============================================================================
// New Function
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.5.0') {

Yanfly.Util.toGroup = function(inVal) {
  if (typeof inVal === 'string') return inVal;
  if (!Yanfly.Param.DigitGroup) return inVal;
  return inVal.toLocaleString('en');
  return inVal.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
    return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
  });
};

} else {

Yanfly.Util.toGroup = function(inVal) {
  if (typeof inVal !== 'string') { inVal = String(inVal); }
  if (!Yanfly.Param.DigitGroup) return inVal;
  return inVal.toLocaleString('en');
  return inVal.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
    return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
  });
};

} // Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.5.0'



Yanfly.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

//=============================================================================
// 文件末
//=============================================================================
