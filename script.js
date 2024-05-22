document.getElementById('generateBtn').addEventListener('click', generateGradient);
document.getElementById('showCssBtn').addEventListener('click', toggleCssDisplay);

let version = 1.0;

function generateGradient() {
    const colors = generateCoolNeonColors();
    const gradient = `linear-gradient(180deg, ${colors.join(', ')})`;
    
    document.querySelectorAll('.strip').forEach((strip, index) => {
        strip.style.background = gradient;
        strip.style.backgroundSize = '400% 400%';
        strip.style.animation = 'gradientAnimation 5s ease infinite';
        strip.style.animationDelay = `${index * 0.5}s`;
    });

    document.getElementById('cssOutput').value = `background: ${gradient};\nbackground-size: 400% 400%;\nanimation: gradientAnimation 5s ease infinite;`;

    version += 0.1;
    document.getElementById('version').innerText = `Version: ${version.toFixed(1)}`;
}

function generateCoolNeonColors() {
    const presetColors = [
        ['#fcb045', '#fd1d1d', '#833ab4'],
        ['#00c6ff', '#0072ff'],
        ['#f77062', '#fe5196'],
        ['#ff5f6d', '#ffc371'],
        ['#43e97b', '#38f9d7'],
        ['#30cfd0', '#330867'],
        ['#ff9a9e', '#fad0c4'],
        ['#a1c4fd', '#c2e9fb'],
        ['#ffecd2', '#fcb69f'],
        ['#a18cd1', '#fbc2eb'],
        ['#ff8177', '#ff867a', '#ff8c7f', '#f99185', '#cf556c', '#b12a5b'],
        ['#eaafc8', '#654ea3', '#eaafc8'],
        ['#ff6f91', '#ff9671', '#ffc75f', '#f9f871'],
        ['#845ec2', '#d65db1', '#ff6f91', '#ff9671', '#ffc75f', '#f9f871'],
        ['#00c9ff', '#92fe9d'],
        ['#ff9a9e', '#fecfef', '#feada6', '#f6efec'],
        ['#f79d00', '#64f38c'],
        ['#c2e59c', '#64b3f4'],
        ['#ff6f7d', '#bfe9ff'],
        ['#ffdde1', '#ee9ca7'],
        ['#c33764', '#1d2671'],
        ['#544a7d', '#ffd452'],
        ['#0099f7', '#f11712'],
        ['#6a11cb', '#2575fc'],
        ['#fc00ff', '#00dbde'],
        ['#11998e', '#38ef7d'],
        ['#ee0979', '#ff6a00'],
        ['#7f00ff', '#e100ff'],
        ['#56ab2f', '#a8e063'],
        ['#614385', '#516395'],
        ['#02aab0', '#00cdac'],
        ['#d66d75', '#e29587'],
        ['#000428', '#004e92'],
        ['#fc4a1a', '#f7b733'],
        ['#654ea3', '#eaafc8']
    ];
    const randomIndex = Math.floor(Math.random() * presetColors.length);
    return presetColors[randomIndex];
}

function toggleCssDisplay() {
    const cssOutput = document.getElementById('cssOutput');
    if (cssOutput.style.display === 'none' || cssOutput.style.display === '') {
        cssOutput.style.display = 'block';
    } else {
        cssOutput.style.display = 'none';
    }
}

// Initial gradient setup
document.addEventListener('DOMContentLoaded', () => {
    const background = document.createElement('div');
    background.classList.add('background');

    for (let i = 0; i < 10; i++) {
        const strip = document.createElement('div');
        strip.classList.add('strip');
        background.appendChild(strip);
    }

    document.body.appendChild(background);
    generateGradient();
});
