document.getElementById('generateBtn').addEventListener('click', generateGradient);

let version = 1.0;

function generateGradient() {
    const colors = generateCoolNeonColors();
    const gradient = `linear-gradient(90deg, ${colors.join(', ')})`;
    const previewElement = document.getElementById('gradientPreview');
    previewElement.style.background = gradient;
    previewElement.style.backgroundSize = '400% 400%';
    previewElement.style.animation = 'gradientAnimation 15s ease infinite';

    document.getElementById('cssOutput').value = `background: ${gradient};\nbackground-size: 400% 400%;\nanimation: gradientAnimation 15s ease infinite;`;
    
    version += 0.1;
    document.getElementById('version').innerText = `Version: ${version.toFixed(1)}`;
}

function generateCoolNeonColors() {
    const presetColors = [
        ['#fcb045', '#fd