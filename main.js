document.addEventListener('DOMContentLoaded', () => {
    // Navigation highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle (to be implemented with hamburger icon)
    // For now, placeholders for other dynamic logic
    console.log('MedCare application initialized...');

    // Live Chat Placeholder Logic
    const initLiveChat = () => {
        const chatWidget = document.createElement('div');
        chatWidget.id = 'live-chat';
        chatWidget.innerHTML = `
            <div id="chat-btn" style="position: fixed; bottom: 20px; right: 20px; background: var(--primary-blue); color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: var(--shadow-medium); z-index: 1001;">
                <span style="font-size: 24px;">💬</span>
            </div>
            <div id="chat-box" style="display: none; position: fixed; bottom: 90px; right: 20px; width: 300px; height: 400px; background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-medium); z-index: 1001; flex-direction: column; overflow: hidden;">
                <div style="background: var(--primary-blue); color: white; padding: 15px; font-weight: 600;">Live Support</div>
                <div id="chat-messages" style="flex: 1; padding: 15px; overflow-y: auto; font-size: 14px;">
                    <div style="background: #f0f2f5; padding: 8px 12px; border-radius: 12px; margin-bottom: 10px; width: fit-content;">Hello! How can we help you today?</div>
                </div>
                <div style="padding: 10px; border-top: 1px solid #eee; display: flex;">
                    <input type="text" placeholder="Type a message..." style="flex: 1; border: none; padding: 8px; outline: none;">
                    <button style="background: none; border: none; color: var(--primary-blue); cursor: pointer; font-weight: 600;">Send</button>
                </div>
            </div>
        `;
        document.body.appendChild(chatWidget);

        const btn = document.getElementById('chat-btn');
        const box = document.getElementById('chat-box');

        btn.addEventListener('click', () => {
            box.style.display = box.style.display === 'none' ? 'flex' : 'none';
        });
    };

    if (!window.location.pathname.includes('auth.html')) {
        initLiveChat();
    }
});
