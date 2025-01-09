// 数据统计
fetch('output_word.json')
.then(response => response.json())
.then(data => {
    // 统计数据
    // 找到所有单词的 numbers 数组中的最大值,最大的文章编号即为总TED文章篇数
    let maxNumber = -Infinity;
    data.forEach(word => {
        let currentMax = Math.max(...word.numbers);
        if (currentMax > maxNumber) {
            maxNumber = currentMax;
        }
    });
    let totalTedArticles = maxNumber; 
    let totalUniqueWords = data.length; // JSON 数据中总不重复单词个数
    let mostFrequentWords = data.reduce((max, word) => {
        if (word.count > max[0].count) {
            max = [word];
        } else if (word.count === max[0].count) {
            max.push(word);
        }
        return max;
    }, [{ count: -Infinity }]);

    // 创建显示统计信息的元素
    const statsContainer = document.createElement('div');
    // 统计数据
    let highFrequentWords = data.filter(word => word.count > 3); // 高频词汇
    let mediumFrequentWords = data.filter(word => word.count >= 2 && word.count <= 3); // 中频词汇
    let lowFrequentWords = data.filter(word => word.count === 1); // 低频词汇
    statsContainer.innerHTML = `截至目前，<span>右一同学</span>共阅读了<span id='special'>${totalTedArticles}</span>篇ted，记录词汇<span id='special'>${totalUniqueWords}</span>个。<br><br>其中单词<span id='special'>3128</span>个，短语<span id='special'>396</span>个。假定出现<span>3</span>次以上为高频词，<span>1</span>次以上为中频词。<br><br>当前有高频词汇：<span id='special'>${highFrequentWords.length} </span>个，中频词汇：<span id='special'>${mediumFrequentWords.length} </span>个，低频词汇：<span id='special'>${lowFrequentWords.length}</span> 个。<br><br>其中梳理频次最多的单词是:<br>`; 
    mostFrequentWords.forEach((word, index) => {
        let text = `<br><span>"${word.word}"</span>，出现了<span id='special'>${word.count}</span>次，<br><br>在第<span id='special'>${word.numbers.join(', ')}</span>篇TED里都出现了。`
        if (index !== mostFrequentWords.length - 1) {
            text += '<br>';
        }
        statsContainer.innerHTML += text;
    });

    // 将统计信息添加到特定的 div 中
    const countContainer = document.getElementById('totalcount');
    countContainer.appendChild(statsContainer);
})
.catch(error => console.error('无法加载数据:', error));

function showLargeImage(img) {
    var popup = window.open("", "_blank");

    // 在弹窗中显示原始大小的图片，并通过CSS样式使其居中显示
    popup.document.write('<style>body {display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;} img {max-width: 85%; max-height: 90%; object-fit: contain;}</style>');
    popup.document.write('<img src="' + img.src + '">');
}
