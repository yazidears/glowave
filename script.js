document.getElementById('generateBtn').addEventListener('click', generateGradient);

function generateGradient() {
    const colors = generatePresetColors();
    const gradient = `linear-gradient(90deg, ${colors.join(', ')})`;
    const previewElement = document.getElementById('gradientPreview');
    previewElement.style.background = gradient;
    previewElement.style.backgroundSize = '400% 400%';
    previewElement.style.animation = 'gradientAnimation 15s ease infinite';

    document.getElementById('cssOutput').value = `background: ${gradient};\nbackground-size: 400% 400%;\nanimation: gradientAnimation 15s ease infinite;`;
}

function generatePresetColors() {
    const presetColors = [
        ['#fcb045', '#fd1d1d', '#833ab4'],
        ['#00c6ff', '#0072ff'],
        ['#f77062', '#fe5196'],
        ['#ff5f6d', '#ffc371'],
        ['#43e97b', '#38f9d7'],
        ['#30cfd0', '#330867']
    ];
    const randomIndex = Math.floor(Math.random() * presetColors.length);
    return presetColors[randomIndex];
}
