const mapData1 = [
    { "name": 1, "value": "20岁，光阴不再来", "category": "个人成长" },
    { "name": 2, "value": "帮你省钱的三个心理技巧", "category": "生活方式与习惯" },
    { "name": 3, "value": "别陷入“温水煮青蛙”", "category": "个人成长" },
    { "name": 4, "value": "别再emo了，教你治愈心碎", "category": "社交与关系" },
    { "name": 5, "value": "不合群的美丽", "category": "社交与关系" },
    { "name": 6, "value": "成功的关键不是智商，而是毅力", "category": "个人成长" },
    { "name": 7, "value": "从肥皂剧中学到的人生道理", "category": "个人成长" },
    { "name": 8, "value": "读书如何改变人生", "category": "生活方式与习惯" },
    { "name": 9, "value": "真正拉开你与周围人的差距是知道自己贵在哪里", "category": "个人成长" },
    { "name": 10, "value": "真正厉害的人都戒掉了玻璃心", "category": "心理调节" },
    { "name": 11, "value": "拖延症人群的内心世界", "category": "生活方式与习惯" },
    { "name": 12, "value": "健康的时间观念", "category": "生活方式与习惯" },
    { "name": 13, "value": "每天一秒钟", "category": "生活方式与习惯" },
    { "name": 14, "value": "那些限制你的执念是你的不幸之源", "category": "个人成长" },
    { "name": 15, "value": "逆袭，从假装强大开始", "category": "个人成长" },
    { "name": 16, "value": "你该认清恐惧而不是目标", "category": "个人成长" },
    { "name": 17, "value": "女孩要勇敢而不必完美", "category": "个人成长" },
    { "name": 18, "value": "改变自己只需要两年时间", "category": "生活方式与习惯" },
    { "name": 19, "value": "再艰难，也要跳出舒适圈", "category": "个人成长" },
    { "name": 20, "value": "如何摆脱无效努力", "category": "个人成长" },
    { "name": 21, "value": "Taylor Swift纽约大学毕业典礼演讲", "category": "个人成长" },
    { "name": 22, "value": "饭圈儿女孩的爱", "category": "生活方式与习惯" },
    { "name": 23, "value": "如何成为一个自律的人", "category": "生活方式与习惯" },
    { "name": 24, "value": "学会断舍离——精简快乐的生活", "category": "生活方式与习惯" },
    { "name": 25, "value": "请相信，你可以进步", "category": "个人成长" },
    { "name": 26, "value": "一个最简单的方式戒掉坏习惯", "category": "生活方式与习惯" },
    { "name": 27, "value": "不要公开你的个人目标", "category": "生活方式与习惯" },
    { "name": 28, "value": "为什么你应该读冯内古特", "category": "生活方式与习惯" },
    { "name": 29, "value": "为什么你总在吃，还一直饿？", "category": "健康与健身" },
    { "name": 30, "value": "为什么有人那么普通却又那么自信", "category": "社交与关系" },
    { "name": 31, "value": "为什么饮食失调很难治疗", "category": "健康与健身" },
    { "name": 32, "value": "久坐的危害", "category": "健康与健身" },
    { "name": 33, "value": "别让任何人打乱你的生活节奏", "category": "生活方式与习惯" },
    { "name": 34, "value": "心流，幸福的秘密", "category": "个人成长" },
    { "name": 35, "value": "想要真正的成功，自己向上的时候要拉别人一把", "category": "社交与关系" },
    { "name": 36, "value": "我们为什么会做梦", "category": "健康与健身" },
    { "name": 37, "value": "我们的食物系统怎么了", "category": "健康与健身" },
    { "name": 38, "value": "我们能摆脱爱情吗", "category": "社交与关系" },
    { "name": 39, "value": "抑郁是世界上最温柔的病", "category": "心理调节" },
    { "name": 40, "value": "拥抱焦虑", "category": "心理调节" },
    { "name": 41, "value": "敢于不同意，去怀疑的勇气", "category": "个人成长" },
    { "name": 42, "value": "是睡个好觉还是熬夜学习", "category": "健康与健身" },
    { "name": 43, "value": "求求你别再熬夜了", "category": "生活方式与习惯" },
    { "name": 44, "value": "爱情应该有的样子", "category": "社交与关系" },
    { "name": 45, "value": "生活不仅仅是快乐", "category": "社交与关系" },
    { "name": 46, "value": "睡眠与记忆的惊人联系", "category": "健康与健身" },
    { "name": 47, "value": "糖如何影响大脑", "category": "健康与健身" },
    { "name": 48, "value": "肌肉增长的奥秘", "category": "健康与健身" },
    { "name": 49, "value": "记得说出感谢", "category": "生活方式与习惯" },
    { "name": 50, "value": "高海拔如何影响你的身体", "category": "健康与健身" },
    { "name": 51, "value": "20年后，你将会在哪里？", "category": "健康与健身" },
    { "name": 52, "value": "关于生活、工作和平衡的4个教训", "category": "生活方式与习惯" },
    { "name": 53, "value": "如何才能幸福", "category": "社交与关系" },
    { "name": 54, "value": "学习一门外语的秘密", "category": "生活方式与习惯" },
    { "name": 55, "value": "怎样说话人们才爱听", "category": "生活方式与习惯" },
    { "name": 56, "value": "怎样走出负面情绪", "category": "心理调节" },
    { "name": 57, "value": "感到抑郁不要默默忍受", "category": "心理调节" },
    { "name": 58, "value": "我们如何毫无恐惧地一起直面未来", "category": "心理调节" },
    { "name": 59, "value": "我受够了对肥胖的恐惧", "category": "健康与健身" },
    { "name": 60, "value": "我把自己活成了艺术品", "category": "社交与关系" },
    { "name": 61, "value": "深度睡眠对大脑的好处", "category": "健康与健身" },
    { "name": 62, "value": "能力比经历重要", "category": "个人成长" },
    { "name": 63, "value": "运动改变大脑", "category": "健康与健身" },
    { "name": 64, "value": "为什么屏幕剥夺了我们的快乐", "category": "健康与健身" },
    { "name": 65, "value": "你不必强迫自己积极向上", "category": "心理调节" },
    { "name": 66, "value": "如何从倦怠中恢复", "category": "心理调节" },
    { "name": 67, "value": "如何在压力下保持冷静", "category": "心理调节" },
    { "name": 68, "value": "如何将你的不满变成行动", "category": "心理调节" },
    { "name": 69, "value": "如何摆脱颓靡，进入“心流”状态", "category": "个人成长" },
    { "name": 70, "value": "如何解决焦虑", "category": "心理调节" },
    { "name": 71, "value": "微笑是你的超能力", "category": "心理调节" },
    { "name": 72, "value": "12个最宝贵的人生经验", "category": "个人成长" },
    { "name": 73, "value": "一切只需10分钟的专注", "category": "个人成长" },
    { "name": 74, "value": "要始终相信，越努力越幸运", "category": "个人成长" },
    { "name": 75, "value": "请停止糟蹋自己", "category": "个人成长" },
    { "name": 76, "value": "贫穷的本质", "category": "个人成长" },
    { "name": 77, "value": "你凭什么认为自己不会画画", "category": "生活方式与习惯" },
    { "name": 78, "value": "你可以冒一点风险来增加你的运气", "category": "个人成长" },
    { "name": 79, "value": "运气对成功有多重要", "category": "个人成长" },
    { "name": 80, "value": "一个在摸索的青少年", "category": "个人成长" },
    { "name": 81, "value": "停止与别人作比较", "category": "心理调节" },
    { "name": 82, "value": "女孩，请表达你的愤怒", "category": "社交与关系" },
    { "name": 83, "value": "如何在纷扰的网络世界中回归平静", "category": "生活方式与习惯" },
    { "name": 84, "value": "如何掌控你的空闲时间", "category": "生活方式与习惯" },
    { "name": 85, "value": "如何无所畏惧地面对权威", "category": "生活方式与习惯" },
    { "name": 86, "value": "不要成为自己人生的旁观者", "category": "个人成长" },
    { "name": 87, "value": "为什么你应该知道你同事的工资", "category": "社交与关系" },
    { "name": 88, "value": "人们为什么总相信虚假信息", "category": "心理调节" },
    { "name": 89, "value": "从失恋中走出来需要多久", "category": "社交与关系" },
    { "name": 90, "value": "如何维持一段长久的友情", "category": "社交与关系" },
    { "name": 91, "value": "学习即自由", "category": "个人成长" },
    { "name": 92, "value": "学会走出自己的舒适区", "category": "个人成长" },
    { "name": 93, "value": "学外语真的可以让你更聪明", "category": "生活方式与习惯" },
    { "name": 94, "value": "我不想要孩子！别再告诉我我会改变主意", "category": "社交与关系" },
    { "name": 95, "value": "我们为什么要工作", "category": "生活方式与习惯" },
    { "name": 96, "value": "更年期如何影响大脑", "category": "健康与健身" },
    { "name": 97, "value": "演奏乐器对大脑的好处", "category": "健康与健身" },
    { "name": 98, "value": "瑜伽如何作用于身体和大脑", "category": "健康与健身" },
    { "name": 99, "value": "睡眠是你的超能力", "category": "健康与健身" },
    { "name": 100, "value": "简化生活，提升幸福感", "category": "生活方式与习惯" }
];

// 假设你已经有了一个函数来获取output_word.json中的数据
function getWordsData() {
    return fetch('output_word.json')
        .then(response => response.json())
        .catch(error => console.error('Error loading the words data:', error));
}

// 显示TED演讲列表的函数
function showTED() {
    const category = document.getElementById("categorySelect").value;
    const TED1 = mapData1.filter(data => category ? data.category === category : true);
    TED1.sort((a, b) => a.name - b.name);
    displayTED(TED1);
}

function displayTED(TED) {
    const TEDList = document.getElementById("TEDList");
    TEDList.innerHTML = "";
    TED.forEach(ted => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span class='tednum'>打卡号</span>-<span class='tednum'>${ted.name}</span>：<span class='tedtext'>${ted.value}</span>`;
        listItem.addEventListener('click', function() {
            // 先移除其他所有li的选中状态
            TEDList.querySelectorAll('li').forEach(item => {
                item.classList.remove('selectedli');
            });
            // 给当前点击的li添加选中状态
            this.classList.add('selectedli');
            showWordsForTED(ted.name);
        });
        TEDList.appendChild(listItem);
    });
}

// 显示对应TED号的单词
function showWordsForTED(inputNumber) {
    getWordsData().then(words => {
        let resultWords = words.filter(word => word.numbers.includes(parseInt(inputNumber)));
        displayWords(resultWords);
    });
}

// 显示单词的函数
function displayWords(words) {
    const wordsList = document.getElementById("wordsList");
    wordsList.innerHTML = "";
    words.forEach(word => {
        // 创建列表项
        const listItem = document.createElement("li");
        listItem.style.position = 'relative'; 

        // 创建单词文本节点
        const textNode = document.createTextNode(word.word);
        listItem.appendChild(textNode);

        // 创建按钮容器
        const buttonsContainer = document.createElement("span");
        buttonsContainer.style.position = 'absolute'; // 绝对定位
        buttonsContainer.style.right = '50px'; // 靠右浮动
        buttonsContainer.style.top = '5px'; // 顶部对齐
        // buttonsContainer.style.backgroundColor = 'pink';

        // 创建×按钮
        const uncheckButton = document.createElement("button");
        uncheckButton.textContent = "❌";
        uncheckButton.style.border = "none"; 
        uncheckButton.style.backgroundColor = "transparent"; 
        
        
        // 创建√按钮
        const checkButton = document.createElement("button");
        checkButton.textContent = "✔️";
        checkButton.style.marginRight = "10px"; 
        checkButton.style.border = "none"; 
        checkButton.style.backgroundColor = "transparent"; 

        // 为按钮添加点击事件
        checkButton.addEventListener('click', function(event) {
            event.stopPropagation(); 
            // listItem.style.backgroundColor = "#E7E593";
            listItem.style.backgroundColor = "#def9dc";
            listItem.style.boxShadow = "0 0 3px var(--shadow-color)";
        });
        uncheckButton.addEventListener('click', function(event) {
            event.stopPropagation();
            // listItem.style.backgroundColor = "#F0686C";
            listItem.style.backgroundColor = "#fdd2ae";
            listItem.style.boxShadow = "0 0 3px var(--shadow-color)";
        });

        // 将按钮添加到容器中
        buttonsContainer.appendChild(checkButton);
        buttonsContainer.appendChild(uncheckButton);
        listItem.appendChild(buttonsContainer);

        listItem.addEventListener('click', function(event) {
            if (event.target !== buttonsContainer && event.target !== checkButton && event.target !== uncheckButton) {
                openSouGouSearch(word.word);
            }
        });
        wordsList.appendChild(listItem);
    });
}

function openSouGouSearch(word) {
    const existingIframe = document.querySelector('iframe');
    const existingCloseButton = document.querySelector('.close-button');

    if (existingIframe) {
        document.body.removeChild(existingIframe);
    }
    if (existingCloseButton) {
        document.body.removeChild(existingCloseButton);
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://fanyi.sogou.com/text?keyword=${encodeURIComponent(word)}`;
    iframe.style.position = 'fixed';
    iframe.style.top = '10.5%';
    iframe.style.left = '1%';
    iframe.style.width = '50%';
    iframe.style.height = '88%';
    iframe.style.border = '2px solid #bfc1a9';
    iframe.style.zIndex = '9999';
    iframe.style.borderRadius = '10px'; 
    document.body.appendChild(iframe);

    // 添加关闭按钮
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.classList.add('close-button');
    closeButton.style.position = 'fixed';
    closeButton.style.width = '20px';
    closeButton.style.height = '20px';
    closeButton.style.top = '12.8%';
    closeButton.style.right = '50.5%';
    closeButton.style.zIndex = '10000';
    closeButton.style.border = '1.2px solid #bfc1a9';
    closeButton.style.borderRadius = '50%'; 
    closeButton.style.fontFamily = 'serif';
    closeButton.style.fontSize = '15px';
    closeButton.style.color = 'white';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.padding = '2px';
    closeButton.style.backgroundColor = '#d24735';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(iframe);
        document.body.removeChild(closeButton);
    });
    document.body.appendChild(closeButton);
}

// 在页面加载完成后显示TED演讲列表
window.onload = function() {
    showTED();
    const wordsList = document.getElementById("wordsList");
    if (wordsList) {
        wordsList.innerHTML = "点击TED号查看相关单词";
    }
    const firstTEDItem = TEDList.querySelector('li'); 
    if (firstTEDItem) {
        firstTEDItem.click();
    }
}