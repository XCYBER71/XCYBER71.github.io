// ============================================================
// NUR TV / A-M-TV - Complete JavaScript
// Free Live TV Bangladesh
// ============================================================

// ============================================================
// 1. THEME TOGGLE (ডার্ক/লাইট মোড)
// ============================================================

function toggleTheme() {
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    updateThemeBtn(isDark);
}

function updateThemeBtn(isDark) {
    const themeLabel = document.getElementById('theme-label');
    const themeIcon = document.getElementById('theme-icon');
    
    if (isDark) {
        themeLabel.textContent = 'Light Mode';
        themeIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
        `;
    } else {
        themeLabel.textContent = 'Dark Mode';
        themeIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zM12 4a8 8 0 1 1-8 8 8 8 0 0 1 8-8z"/>
                <path d="M12 6v2M12 16v2M6 12h2M16 12h2M7.76 7.76l1.41 1.41M14.83 14.83l1.41 1.41M7.76 16.24l1.41-1.41M14.83 9.17l1.41-1.41"/>
            </svg>
        `;
    }
}

// Apply saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    updateThemeBtn(true);
} else {
    updateThemeBtn(false);
}

// ============================================================
// 2. FALLBACK LOGO GENERATOR (লোগো না থাকলে)
// ============================================================

function generateFallbackLogo(channelName) {
    const firstLetter = channelName ? channelName.charAt(0).toUpperCase() : 'TV';
    const hue = (channelName.length * 7) % 360;
    
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <rect width="48" height="48" rx="24" fill="hsl(${hue}, 60%, 25%)"/>
            <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="22" font-weight="700">${firstLetter}</text>
        </svg>
    `;
    
    return 'data:image/svg+xml;base64,' + btoa(svg);
}

// ============================================================
// 3. CHANNEL DATA - সম্পূর্ণ M3U প্লেলিস্ট
// ============================================================

const rawM3uData = `
#EXTM3U

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/BTV-Logo.png" group-title="Bangla",BTV
https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/SomoyTV.png" group-title="Bangla",Somoy TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/JamunaTV.png" group-title="Bangla",Jamuna TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/ATNBangla.png" group-title="Bangla",ATN Bangla
https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/EkattorTV.png" group-title="Bangla",Ekattor TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1707/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Channel24.png" group-title="Bangla",Channel 24
https://owrcovcrpy.gpcdn.net/bpk-tv/1708/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/ATNNews.png" group-title="News",ATN News
https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/News18.png" group-title="Kolkata",News18 Bangla
https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DurontoTV.png" group-title="Kids",Duronto TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/GTV.png" group-title="Kids",G-TV Cartoon
https://owrcovcrpy.gpcdn.net/bpk-tv/1712/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/TSports.png" group-title="Sports",T Sports
https://owrcovcrpy.gpcdn.net/bpk-tv/1713/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/PeaceTV.png" group-title="Islamic",Peace TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1714/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/MadaniTV.png" group-title="Islamic",Madani TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/MyTV.png" group-title="Bangla",My TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/RTV.png" group-title="Bangla",RTV
https://owrcovcrpy.gpcdn.net/bpk-tv/1717/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/NTV.png" group-title="Bangla",NTV
https://owrcovcrpy.gpcdn.net/bpk-tv/1718/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DBCNews.png" group-title="News",DBC News
https://owrcovcrpy.gpcdn.net/bpk-tv/1719/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/IndependentTV.png" group-title="News",Independent TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1720/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/BoishakhiTV.png" group-title="Bangla",Boishakhi TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1721/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DigiTV.png" group-title="Bangla",Digi TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/MohonaTV.png" group-title="Bangla",Mohona TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/SangbadTV.png" group-title="News",Sangbad TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1724/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/AsianTV.png" group-title="Bangla",Asian TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1725/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Channel9.png" group-title="Bangla",Channel 9
https://owrcovcrpy.gpcdn.net/bpk-tv/1726/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/MasrangaTV.png" group-title="Bangla",Masranga TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1727/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DeshTV.png" group-title="Bangla",Desh TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1728/output/index.m3u8
`;

// ============================================================
// 4. M3U PARSER FUNCTION
// ============================================================

function parseM3U(data) {
    const lines = data.split('\n');
    const channels = [];
    let current = {};

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (!line || line.startsWith('# Source:') || line === '#EXTM3U') continue;

        if (line.startsWith('#EXTINF:')) {
            const nameMatch = line.match(/,(.+)$/);
            const logoMatch = line.match(/tvg-logo="([^"]*)"/);
            const groupMatch = line.match(/group-title="([^"]*)"/);

            current = {
                name: nameMatch ? nameMatch[1].trim() : 'Unknown',
                logo: logoMatch && logoMatch[1] ? logoMatch[1].trim() : '',
                group: groupMatch && groupMatch[1] ? groupMatch[1].trim() : 'Other',
            };
        } else if (line.startsWith('http') || line.startsWith('https') || line.startsWith('//')) {
            if (current.name) {
                current.url = line;
                channels.push({ ...current });
                current = {};
            }
        }
    }

    return channels;
}

// ============================================================
// 5. GROUP MAPPING (ক্যাটাগরি ম্যাপিং)
// ============================================================

const GROUP_MAP = {
    '': 'Other',
    'BANGLA': 'Bangla',
    'Bangla': 'Bangla',
    'Bangladeshi': 'Bangla',
    'LIVE TV': 'Bangla',
    'News': 'News',
    'Bangla Movies': 'Movies',
    'Sports': 'Sports',
    'KIDS': 'Kids',
    'Kids': 'Kids',
    'CARTOON Drama': 'Kids',
    'Cartoon': 'Kids',
    'Movies': 'Movies',
    'Music': 'Music',
    'Hindi': 'Hindi',
    'Urdu': 'Urdu',
    'Indian': 'Hindi',
    'Islamic': 'Islamic',
    'Relagion Channel': 'Islamic',
    'Other': 'Other',
    'Kolkata': 'Kolkata',
    'Indian Bangla': 'Kolkata',
    'Entertainment': 'Entertainment',
    'Infotainment': 'Entertainment',
};

function normalizeGroup(group) {
    return GROUP_MAP[group] || group || 'অন্যান্য';
}

// ============================================================
// 6. GROUP ICONS (ক্যাটাগরি আইকন)
// ============================================================

const GROUP_ICONS = {
    'Bangla': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>`,
    
    'News': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
    </svg>`,
    
    'Sports': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20"/>
        <path d="M2 9h20M2 15h20M12 2v20"/>
    </svg>`,
    
    'Kids': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 4H3l1.5 7.4H22L21 4zM12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
    </svg>`,
    
    'Movies': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <line x1="2" y1="8" x2="22" y2="8"/>
        <line x1="6" y1="4" x2="6" y2="8"/>
        <line x1="10" y1="4" x2="10" y2="8"/>
        <line x1="14" y1="4" x2="14" y2="8"/>
        <line x1="18" y1="4" x2="18" y2="8"/>
        <circle cx="9" cy="14" r="2"/>
        <path d="M13 14l4-2v4l-4-2z"/>
    </svg>`,
    
    'Music': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
    </svg>`,
    
    'Kolkata': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>`,
    
    'Islamic': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
        <circle cx="12" cy="12" r="2"/>
    </svg>`,
    
    'Hindi': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/>
    </svg>`,
    
    'Entertainment': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>`,
    
    'Other': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>`
};

// ============================================================
// 7. PROCESS CHANNELS (চ্যানেল প্রসেসিং)
// ============================================================

const allChannels = parseM3U(rawM3uData).map(ch => ({
    ...ch,
    normGroup: normalizeGroup(ch.group)
}));

// ============================================================
// 8. STATE (অ্যাপের অবস্থা)
// ============================================================

let currentGroup = 'সব';
let currentUrl = '';
let currentChName = '';
let hls = null;
const video = document.getElementById('video-player');

// ============================================================
// 9. GROUP COUNTS (ক্যাটাগরি ভিত্তিক চ্যানেল সংখ্যা)
// ============================================================

const groupCounts = {};
allChannels.forEach(ch => {
    groupCounts[ch.normGroup] = (groupCounts[ch.normGroup] || 0) + 1;
});

// ============================================================
// 10. BUILD SIDEBAR (সাইডবার তৈরি)
// ============================================================

const sortedGroups = Object.keys(groupCounts).sort((a, b) => a.localeCompare(b, 'bn'));
const sbGroupList = document.getElementById('sb-group-list');
const allDiv = document.createElement('div');

allDiv.className = 'sb-item active';
allDiv.dataset.group = 'সব';
allDiv.innerHTML = `
    <div class="sb-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
            <path d="M9 21V12h6v9"/>
        </svg>
    </div>
    সব <span style="margin-left:auto;font-size:12px;color:var(--pink)">${allChannels.length}</span>
`;
allDiv.onclick = () => { switchToGroup('সব', allDiv); closeSidebar(); };
sbGroupList.appendChild(allDiv);

sortedGroups.forEach(group => {
    const icon = GROUP_ICONS[group] || '📡';
    const item = document.createElement('div');
    item.className = 'sb-item';
    item.dataset.group = group;
    item.innerHTML = `
        <div class="sb-item-icon">${icon}</div>
        ${group} <span style="margin-left:auto;font-size:12px;color:var(--muted)">${groupCounts[group]}</span>
    `;
    item.onclick = () => { switchToGroup(group, item); closeSidebar(); };
    sbGroupList.appendChild(item);
});

// ============================================================
// 11. BUILD CATEGORY NAV (ক্যাটাগরি নেভিগেশন)
// ============================================================

const catnav = document.getElementById('catnav');

function buildCatnav(activeGroup) {
    catnav.innerHTML = '';
    
    const allCat = document.createElement('div');
    allCat.className = 'catnav-item' + (activeGroup === 'সব' ? ' active' : '');
    allCat.textContent = 'সব';
    allCat.onclick = () => switchToGroup('সব');
    catnav.appendChild(allCat);
    
    sortedGroups.forEach(group => {
        const item = document.createElement('div');
        item.className = 'catnav-item' + (activeGroup === group ? ' active' : '');
        item.textContent = group;
        item.onclick = () => switchToGroup(group);
        catnav.appendChild(item);
    });
}

buildCatnav('সব');

// ============================================================
// 12. BUILD CHANNEL CARDS (চ্যানেল কার্ড তৈরি)
// ============================================================

function buildCard(channel) {
    const card = document.createElement('div');
    card.className = 'ch-card';
    
    const ring = document.createElement('div');
    ring.className = 'ch-ring';
    
    const inner = document.createElement('div');
    inner.className = 'ch-inner';
    
    // Logo
    if (channel.logo && channel.logo.length > 0) {
        const img = document.createElement('img');
        img.src = channel.logo;
        img.alt = channel.name;
        img.loading = 'lazy';
        img.onerror = function() {
            this.style.display = 'none';
            this.parentElement.textContent = channel.name.charAt(0).toUpperCase();
        };
        inner.appendChild(img);
    } else {
        // Fallback: use first letter with gradient
        const fallbackImg = document.createElement('img');
        fallbackImg.src = generateFallbackLogo(channel.name);
        fallbackImg.alt = channel.name;
        inner.appendChild(fallbackImg);
    }
    
    ring.appendChild(inner);
    card.appendChild(ring);
    
    const name = document.createElement('div');
    name.className = 'ch-name';
    name.textContent = channel.name;
    card.appendChild(name);
    
    card.onclick = () => playChannel(channel);
    
    return card;
}

// ============================================================
// 13. BUILD SECTIONS (সেকশন তৈরি)
// ============================================================

function buildSection(groupName, channels) {
    const section = document.createElement('div');
    section.className = 'section';
    
    const header = document.createElement('div');
    header.className = 'section-header';
    
    const title = document.createElement('div');
    title.className = 'section-title';
    title.innerHTML = `
        <span class="section-icon">${GROUP_ICONS[groupName] || GROUP_ICONS['Other']}</span>
        ${groupName}
    `;
    header.appendChild(title);
    
    const count = document.createElement('span');
    count.className = 'section-count';
    count.textContent = channels.length + ' টি';
    header.appendChild(count);
    section.appendChild(header);
    
    const grid = document.createElement('div');
    grid.className = 'channel-grid';
    channels.forEach(ch => grid.appendChild(buildCard(ch)));
    section.appendChild(grid);
    
    return section;
}

// ============================================================
// 14. RENDER HOME (হোম পেজ রেন্ডার)
// ============================================================

function renderHome(group) {
    const container = document.getElementById('channel-sections');
    container.innerHTML = '';
    
    if (group === 'সব') {
        sortedGroups.forEach(g => {
            const filtered = allChannels.filter(ch => ch.normGroup === g);
            if (filtered.length > 0) {
                container.appendChild(buildSection(g, filtered));
            }
        });
    } else {
        const filtered = allChannels.filter(ch => ch.normGroup === group);
        if (filtered.length > 0) {
            container.appendChild(buildSection(group, filtered));
        } else {
            container.innerHTML = `<div class="empty-msg">এই ক্যাটাগরিতে কোনো চ্যানেল নেই।</div>`;
        }
    }
}

renderHome('সব');

// ============================================================
// 15. SWITCH GROUP (গ্রুপ পরিবর্তন)
// ============================================================

function switchToGroup(group, clickedItem) {
    currentGroup = group;
    buildCatnav(group);
    renderHome(group);
    
    // Update sidebar
    document.querySelectorAll('.sb-item').forEach(el => el.classList.remove('active'));
    if (clickedItem) {
        clickedItem.classList.add('active');
    } else {
        // Find and activate the matching sidebar item
        document.querySelectorAll('.sb-item').forEach(el => {
            if (el.dataset.group === group) {
                el.classList.add('active');
            }
        });
    }
    
    showView('home');
}

// ============================================================
// 16. PLAY CHANNEL (চ্যানেল প্লে)
// ============================================================

function playChannel(channel) {
    currentUrl = channel.url;
    currentChName = channel.name;
    
    document.getElementById('ch-title').textContent = channel.name;
    showView('player');
    startHLS(channel.url);
    
    // Update bottom nav
    document.querySelectorAll('.bnav-item').forEach(el => el.classList.remo