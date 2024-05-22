document.getElementById('generateBtn').addEventListener('click', generateGradient);

function generateGradient() {
    const colors = generateRandomColors(4);
    const gradient = `linear-gradient(90deg, ${colors.join(', ')})`;
    const previewElement = document.getElementById('gradientPreview');
    previewElement.style.background = gradient;
    previewElement.style.backgroundSize = '400% 400%';
    previewElement.style.animation = 'gradientAnimation 15s ease infinite';

    document.getElementById('cssOutput').value = `background: ${gradient};\nbackground-size: 400% 400%;\nanimation: gradientAnimation 15s ease infinite;`;
}

function generateRandomColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`);
    }
    return colors;
}
