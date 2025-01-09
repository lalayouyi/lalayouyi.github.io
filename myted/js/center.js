// 页面加载时显示初始效果（默认按词频降序排序）
function FirstShow() {
    fetch('output_word.json')
        .then(response => response.json())
        .then(data => {
            // 按词频排序
            const initialData = data.sort((a, b) => b.count - a.count);
            displayWords(initialData);
        })
        .catch(err => console.error('Error loading JSON file: ', err));
}

// 监听搜索框的输入事件
document.getElementById('searchInput').addEventListener('input', function() {
    const searchInput = this.value.trim().toLowerCase();
    if (searchInput === '') {
        FirstShow(); // 若搜索框中无内容，则显示初始效果
    } else {
        SearchWords(searchInput);
    }
});

// 根据搜索词汇重新显示单词
function SearchWords(searchInput) {
    fetch('output_word.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(item => item.word.toLowerCase().includes(searchInput));
            displayWords(filteredData);
        })
        .catch(err => console.error('Error loading JSON file: ', err));
}

// 根据给定的数据显示单词
function displayWords(data) {
    const searchList = document.getElementById('searchList');
    searchList.innerHTML = "";
    data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML  = `<span>单词</span> - ${item.word} - <span>对应TED来源</span> - ${item.numbers.join(', ')}`;
        searchList.appendChild(li);
    });
}

// 页面加载时显示初始效果，并清空输入框
window.addEventListener('load', function() {
    FirstShow();
    document.getElementById('searchInput').value = ''; // 清空输入框
});

// 刷新
function resetPage() {
    location.reload();
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
    iframe.style.top = '13.5%';
    iframe.style.left = '14%';
    iframe.style.width = '70%';
    iframe.style.height = '85%';
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
    closeButton.style.top = '13.8%';
    closeButton.style.right = '18.5%';
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

// 点击搜索结果触发打开搜狗搜索功能
document.getElementById('searchList').addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'LI') {
        const word = clickedElement.innerHTML.split(' - ')[1];
        openSouGouSearch(word);
    }
});