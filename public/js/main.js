const showTimeBtn = document.getElementById('showTimeBtn');
const buildTime = document.getElementById('buildTime');
const statusText = document.getElementById('statusText');

showTimeBtn.addEventListener('click', () => {
  const now = new Date();
  buildTime.textContent = `Thời gian demo hiện tại: ${now.toLocaleString('vi-VN')}`;
  statusText.textContent = 'Trạng thái site: tương tác JavaScript hoạt động tốt';
});

window.addEventListener('load', () => {
  console.log('GitLab CI/CD demo site loaded successfully.');
});
