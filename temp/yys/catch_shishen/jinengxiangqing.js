// 技能详情
var jinengxiangqing = [
  {
    key: '欢愉标记',
    value: '【增益，印记】其他友方回合结束时，消耗1层并获得1点鬼火。'
  },
  {
    key: '复苏之舞',
    value: '【增益，印记】提升10%治疗'
  },
  {
    key: '纠缠阻碍',
    value: '【减益，状态】降低15%伤害'
  },
  {
    key: '缠绕',
    value: '【减益，印记】越缠越紧…被束缚目标降低25点速度，并在回合结束时，自动增加1层'
  },
  {
    key: '束缚',
    value: '一反木绵的特殊机制，同一时间内只能束缚1个目标，转换目标将取消所有缠绕层数。缠绕消失时自动解除束缚。'
  },
  {
    key: '魂隙',
    value: '【减益，状态】回合后受到伤害'
  },
  {
    key: '破魔',
    value: '【减益，状态】无法获得增益印记或状态'
  },
  {
    key: '灵魂结界',
    value: '【增益，印记】视为护盾，不受暴击属性影响。当一次伤害足以击破护盾时，可将该次过量伤害吸收。'
  },
  {
    key: '无法动作',
    value: '受到控制效果中的冰冻、沉睡、眩晕、变形时，皆视为无法行动'
  },
  {
    key: '灾厄花',
    value: '【减益，状态】栽种于敌方的妖花'
  },
  {
    key: '祸根之护',
    value: '【增益，状态】提升20%效果抵抗'
  },
  {
    key: '穿云',
    value: '【增益，印记】提升100%速度'
  },
  {
    key: '残炎',
    value: '【减益，状态】降低10%攻击'
  },
  {
    key: '狐影·守',
    value: '【增益，印记】受到伤害时，吸收其中的20%，吸收总量等同白藏主生命上限10%。'
  },
  {
    key: '复生虚弱',
    value: '【通用，状态】降低40%伤害。'
  },
  {
    key: '无敌',
    value: '免疫伤害、减益效果、控制效果。'
  },
  {
    key: '破碎印记',
    value: '【减益，状态】死亡时，无法触发复活效果。死亡后，无法被复活。'
  },
  {
    key: '风劲',
    value: '【增益，印记】每层提升10点速度、5%伤害'
  },
  {
    key: '无面',
    value: '【通用，印记】面灵气的白色面具，回合开始前造成间接伤害'
  },
  {
    key: '间接伤害',
    value: '伤害类型的一种，不会触发御魂效果，无法被分担，对防御为0的敌人必定暴击'
  },
  {
    key: '恶面',
    value: '【通用，印记】面灵气的黑色面具，由「禁断之面」所产生'
  },
  {
    key: '善面',
    value: '【通用，印记】面灵气的红色面具，由「禁断之面」所产生'
  },
  {
    key: '先机',
    value: '在战斗开始时进行动作'
  },
  {
    key: '基础概率',
    value: '此概率受到效果命中属性影响'
  },
  {
    key: '沉默',
    value: '无法施放技能'
  },
  {
    key: '封印',
    value: '式神所配戴御魂效果失效'
  },
  {
    key: '压制',
    value: '式神被动技能失效'
  },
  {
    key: '符咒',
    value: '【通用，印记】每层使友方全体提升3%的防御、2%伤害、1点速度'
  },
  {
    key: '混乱',
    value: '被混乱的敌方在行动时，强制使用普攻攻击场上随机目标'
  },
  {
    key: '畏',
    value: '【增益，状态】每层提升75%伤害'
  },
  {
    key: '唯一效果',
    value: '若是有多个同名式神在场，只有其中一个式神的此技能会生效'
  },
  {
    key: '护盾',
    value: '能够吸收一定量伤害，若无特殊说明则通常可被驱散'
  },
  {
    key: '协战',
    value: '当友方使用普攻攻击敌方目标时，一起使用普攻攻击同个敌方目标'
  },
  {
    key: '控制效果',
    value: '冰冻、沉睡、混乱、嘲讽、沉默、禁锢、变形、眩晕、挑衅，以上均属于控制效果，后三者无法被驱散'
  },
  {
    key: '芬芳',
    value: '【增益，印记】行动前治疗'
  },
  {
    key: '狂气',
    value: '【增益，状态】增加「鬼葫芦」攻击次数。'
  },
  {
    key: '鬼王降临',
    value: '【增益，印记】免疫所有控制效果，攻击将附带10%吸血'
  },
  {
    key: '雄姿英发',
    value: '【通用，印记】提升5%攻击、5%暴击伤害'
  },
  {
    key: '庇护',
    value: '可抵挡单次技能当中的所有控制效果'
  },
  {
    key: '天书·无隙',
    value: '【增益，状态】受到非传导伤害时，承受伤害不超过生命上限15%'
  },
  {
    key: '维持',
    value: '指此状态或印记，存在回合数以来源的回合计算，而非目标的回合'
  },
  {
    key: '天书·攻心',
    value: '【减益，状态】记录所受到的伤害，结算时，造成等同记录值50%的间接伤害（此伤害不超过书翁生命上限1200%）'
  },
  {
    key: '随机增益',
    value: '包含以下5种，提升10%攻击、20%防御、10%暴击伤害、10点速度、10%效果抵抗'
  },
  {
    key: '随机减益',
    value: '包含以下5种，降低10%攻击、20%防御、10%暴击伤害、10点速度、10%效果抵抗'
  },
  {
    key: '鬼面',
    value: '【减益，状态】式神所佩戴御魂效果失效，式神被动技能失效'
  },
  {
    key: '眩晕',
    value: '无法被驱散，无法行动'
  },
  {
    key: '二哥呼哨',
    value: '【增益，状态】提升15%攻击'
  },
  {
    key: '三弟呼哨',
    value: '【增益，状态】提升10%效果抵抗'
  },
  {
    key: '守护印记',
    value: '【通用，印记】友方受到非传导伤害时，犬神将对造成伤害的敌方目标进行反击，反击造成攻击110%伤害。'
  },
  {
    key: '水流缠绕',
    value: '【减益，状态】降低10点速度'
  },
  {
    key: '滋养',
    value: '【增益，状态】提升5%暴击伤害'
  },
  {
    key: '生命链接',
    value: '【增益，印记】受到伤害时，将平均分担给其他同样拥有此印记的友方'
  },
  {
    key: '传导伤害',
    value: '伤害类型的一种，不会暴击，由某些式神的技能转化出现。例如式神椒图的「涓流」技能'
  },
  {
    key: '金刚经',
    value: '【增益，印记】提升10%效果抵抗、10%反伤'
  },
  {
    key: '泪之绊',
    value: '【减益，印记】减速10点'
  },
  {
    key: '兔子舞',
    value: '【增益，状态】提升10%攻击'
  },
  {
    key: '变形',
    value: '无法被驱散，无法行动，式神被动技能失效'
  },
  {
    key: '咒火',
    value: '【减益，状态】5%易伤'
  },
  {
    key: '嘲讽',
    value: '被嘲讽的敌方在行动时，强制使用普攻攻击嘲讽的来源目标'
  },
  {
    key: '怒火',
    value: '【增益，状态】提升33%伤害'
  },
  {
    key: '森之力',
    value: '【减益，状态】降低20%效果抵抗'
  },
  {
    key: '生生不息',
    value: '【增益，状态】汇聚了森林之息，使小鹿男获得了强大力量'
  },
  {
    key: '解除',
    value: '移除无法被驱散移除的状态、效果'
  },
  {
    key: '看破',
    value: '【通用，印记】已经被卖药郎知晓所有要素'
  },
  {
    key: '困兽',
    value: '【增益，状态】提升10%攻击'
  },
  {
    key: '撕裂',
    value: '【减益，状态】回合后受到伤害，该伤害忽略目标防御600点'
  },
  {
    key: '霜织庇护',
    value: '【通用，印记】抵挡1次压制、封印或冰冻效果'
  },
  {
    key: '冰冻',
    value: '无法行动'
  },
  {
    key: '明灯',
    value: '【通用，印记】施放技能无需消耗鬼火'
  },
  {
    key: '风怒状态',
    value: '【减益，状态】回合后造成间接伤害'
  },
  {
    key: '雷之怒目',
    value: '【减益，状态】降低10%防御'
  },
  {
    key: '风之怒目',
    value: '【减益，状态】降低10%攻击'
  },
  {
    key: '风袭状态',
    value: '【减益，状态】回合后造成间接伤害'
  },
  {
    key: '逐流',
    value: '【减益，状态】降低20%防御'
  },
  {
    key: '凝视状态',
    value: '【减益，状态】所有主动技能被替换为邪光'
  },
  {
    key: '毒羽',
    value: '【减益，状态】回合开始前造成间接伤害'
  },
  {
    key: '中毒',
    value: '【减益，状态】降低10%速度，受到间接伤害时，视同降低 10点*中毒等级 防御，多个中毒可叠加计算'
  },
  {
    key: '余音',
    value: '【增益，状态】提升8点速度'
  },
  {
    key: '聚气',
    value: '【增益，状态】每层提升2%攻击'
  },
  {
    key: '失血',
    value: '【减益，状态】回合后造成间接伤害'
  },
  {
    key: '黑子',
    value: '【减益，状态】5%易伤'
  },
  {
    key: '白子',
    value: '【减益，状态】降低5%伤害'
  },
  {
    key: '挑衅',
    value: '视为嘲讽，但无法被驱散。被挑衅的敌方在行动时，强制使用普攻攻击挑衅的来源目标'
  },
  {
    key: '黄金羽',
    value: '【减益，状态】若附加至敌方，每层造成5%减疗，5%易伤'
  },
  {
    key: '扇舞',
    value: '【增益，印记】每层提升20%攻击'
  },
  {
    key: '白之护',
    value: '【增益，印记】提升40%效果抵抗，吸收1此伤害'
  },
  {
    key: '邀战',
    value: '被邀战的友方，将使用普攻攻击同个敌方目标'
  },
  {
    key: '竹叶守护',
    value: '【增益，印记】友方受到攻击时，万年竹有40%概率反击发起攻击的敌方目标。若为万年竹自身受到攻击，则概率提升至100%。'
  },
  {
    key: '佛光',
    value: '【增益，印记】每层使自身提升30%效果抵抗，其他友方提升15%效果抵抗'
  },
  {
    key: '蛛印',
    value: '【减益，状态】施放鬼火技能时，受到络新妇攻击100%间接伤害。'
  },
  {
    key: '落樱',
    value: '【减益，状态】回合后造成间接伤害'
  },
  {
    key: '沉睡',
    value: '无法行动，受到伤害时自动移除此效果'
  },
  {
    key: '妖气弹',
    value: '【增益，状态】每层可使「歉意」增加1次攻击次数'
  },
  {
    key: '焚火',
    value: '【减益，状态】回合后造成间接伤害'
  },
  {
    key: '死亡裁决',
    value: '【减益，印记】根据「死亡宣告」造成的伤害，吸收等量的治疗，吸满后自动移除'
  },
  {
    key: '红枫娃娃',
    value: '【减益，状态】普攻后，有50%概率受到自身当前生命18%间接伤害（不超过鬼女红叶攻击250%）'
  },
  {
    key: '怨气',
    value: '【通用，状态】积累的怨气使骨女不甘死亡'
  },
  {
    key: '夺命',
    value: '【减益，状态】回合后造成间接伤害'
  },
  {
    key: '骑乘',
    value: '【通用，印记】骑上橘乃，普攻和技能得到增强'
  },
  {
    key: '蛇之影',
    value: '【减益，状态】每层降低8%防御'
  },
  {
    key: '降魔',
    value: '【减益，状态】降低10%效果命中'
  },
  {
    key: '光合作用',
    value: '【增益，状态】行动后治疗'
  },
  {
    key: '障目',
    value: '【减益，印记】降低10%效果命中'
  },
  {
    key: '酒气',
    value: '【通用，印记】醉人的妖酒气息，可以被「烈焰之酒」技能点燃'
  },
  {
    key: '酒火',
    value: '【减益，状态】每层降低10%防御，在回合后造成间接伤害'
  },
  {
    key: '虫之痕',
    value: '【减益，印记】30%易伤'
  },
  {
    key: '胡萝卜',
    value: '【增益，印记】每层提升20%效果抵抗'
  },
  {
    key: '恶戏状态',
    value: '【减益，印记】沉默，提升10%伤害。'
  },
  {
    key: '记仇',
    value: '【减益，状态】觉攻击此敌方时，造成额外伤害'
  },
  {
    key: '蝶舞',
    value: '【增益，印记】行动前治疗'
  },
  {
    key: '狐怒印记',
    value: '【增益，印记】印记无法被驱散，每层提升75%伤害；造成伤害消耗此印记。'
  },
  {
    key: '钱击',
    value: '【减益，状态】降低20%暴击'
  },
  {
    key: '收买',
    value: '【减益，状态】降低20%攻击'
  },
  {
    key: '破绽',
    value: '【减益，状态】30%易伤'
  },
  {
    key: '萝莉正义',
    value: '【增益，状态】提升30%防御'
  },
  {
    key: '跳跳尸毒',
    value: '【减益，状态】回合后造成间接伤害'
  },
  {
    key: '腐蚀毒素',
    value: '【减益，印记】降低40%防御'
  },
  {
    key: '亡魂附身',
    value: '【减益，状态】若施放消耗鬼火的技能，移除此状态，然后造成间接伤害（攻击54%*剩余回合数）并附加减疗40%，持续2回合。'
  },
  {
    key: '腐蚀',
    value: '【减益，状态】驱动蛊虫，可与巫蛊师其他技能产生额外效果'
  },
  {
    key: '蛊蚀',
    value: '【减益，状态】驱动蛊虫，可与巫蛊师其他技能产生额外效果'
  },
  {
    key: '馒头',
    value: '【通用，状态】提升「饥不择食」吞食概率'
  },
  {
    key: '羽护',
    value: '【增益，印记】提升10%效果抵抗'
  },
  {
    key: '命之护佑',
    value: '【增益，印记】提升20%效果抵抗'
  },
  {
    key: '滋润',
    value: '【增益，印记】每层提升15%攻击'
  },
  {
    key: '猫妖·九命',
    value: '【增益，印记】这就是本喵一直出场的原因！'
  },
  {
    key: '禁锢',
    value: '被禁锢的敌方行动时只能使用普攻，敌方造成足够伤害可以打破禁锢'
  },
  {
    key: '呱气',
    value: '【增益，状态】有奇怪的味道，还可以增加「呱·狂啸」的攻击次数。'
  },
  {
    key: '坚壁',
    value: '【增益，状态】提升40%防御，再加上涂壁20%的初始防御（包含基础防御和御魂提供的防御），该效果最多叠加1层'
  },
  {
    key: '低吟',
    value: '【增益，状态】提升40点速度'
  },
  {
    key: '锵锵锵',
    value: '【通用，状态】提升15%暴击'
  },
  {
    key: '鼓舞',
    value: '【增益，状态】提升5点速度和5%暴击'
  },
];

function getJNDetail(str) {
  var ret = jinengxiangqing.filter(function (item) {
    var index = str.indexOf(item.key)
    if(index > -1){
      item.index = index;
      return true;
    }else{
      return false;
    }
    // return str.indexOf(item.key) > -1;
  });

  return ret.sort(function(a, b){
    if(a.index > b.index){
      return 1;
    }else if(a.index < b.index){
      return -1;
    }else{
      return 0;
    }
  }).map(function (item) {
    return item.key;
  })
}

exports.getDetail = getJNDetail;
