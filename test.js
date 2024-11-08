const fs = require('fs');
const path = require('path');
const { getByText, getByAltText } = require('@testing-library/dom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

test('Should render navigation with three links', () => {
    document.body.innerHTML = html;
    const nav = document.querySelectorAll('nav ul li');
    expect(nav.length).toBe(3);
});

test('Should display profile picture with alt text', () => {
    document.body.innerHTML = html;
    const img = getByAltText(document, 'Profile Picture');
    expect(img).toBeInTheDocument();
});
