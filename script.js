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
// 2. FALLBACK LOGO GENERATOR
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
// 3. CHANNEL DATA - সম্পূর্ণ M3U প্লেলিস্ট (সব লিংক সহ)
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

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/MyTV.png" group-title="Bangla",My TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/RTV.png" group-title="Bangla",RTV
https://owrcovcrpy.gpcdn.net/bpk-tv/1717/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/NTV.png" group-title="Bangla",NTV
https://owrcovcrpy.gpcdn.net/bpk-tv/1718/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/BoishakhiTV.png" group-title="Bangla",Boishakhi TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1721/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DigiTV.png" group-title="Bangla",Digi TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/MohonaTV.png" group-title="Bangla",Mohona TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/AsianTV.png" group-title="Bangla",Asian TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1725/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Channel9.png" group-title="Bangla",Channel 9
https://owrcovcrpy.gpcdn.net/bpk-tv/1726/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/MasrangaTV.png" group-title="Bangla",Masranga TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1727/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DeshTV.png" group-title="Bangla",Desh TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1728/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/BanglaVision.png" group-title="Bangla",BanglaVision
https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/EkusheyTV.png" group-title="Bangla",Ekushey TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1730/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/ChannelI.png" group-title="Bangla",Channel I
https://owrcovcrpy.gpcdn.net/bpk-tv/1731/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/SATV.png" group-title="Bangla",SATV
https://owrcovcrpy.gpcdn.net/bpk-tv/1732/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/NTVUK.png" group-title="Bangla",NTV UK
https://owrcovcrpy.gpcdn.net/bpk-tv/1733/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/GreenTV.png" group-title="Bangla",Green TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1734/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DeeptoTV.png" group-title="Bangla",Deepto TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1735/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/BTVSangsad.png" group-title="Bangla",BTV Sangsad
https://owrcovcrpy.gpcdn.net/bpk-tv/1736/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/ATNBanglaUK.png" group-title="Bangla",ATN BANGLA UK
https://owrcovcrpy.gpcdn.net/bpk-tv/1737/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/ATNNews.png" group-title="News",ATN News
https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DBCNews.png" group-title="News",DBC News
https://owrcovcrpy.gpcdn.net/bpk-tv/1719/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/IndependentTV.png" group-title="News",Independent TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1720/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/SangbadTV.png" group-title="News",Sangbad TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1724/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DWNews.png" group-title="News",DW NEWS
https://dwstream.akamaized.net/hls/live/2015525/dwstream/playlist.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/NDTVNews.png" group-title="News",NDTV NEWS
https://ndtv24x7live.akamaized.net/hls/live/2003678/ndtv24x7/ndtv24x7.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/RTNews.png" group-title="News",RT News (EN)
https://rt-glb.rttv.com/live/rten/playlist.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/CGTNNews.png" group-title="News",CGTN News
https://news.cgtn.com/resource/live/english/cgtn-news.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/France24.png" group-title="News",France 24
https://static.france24.com/live/france24_en.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/SkyNews.png" group-title="News",Sky News
https://skynews.akamaized.net/hls/live/2016335/skynews/skynews.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/StarNews.png" group-title="News",Star News
https://starvc.akamaized.net/live/starnews/starnews.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/News24.png" group-title="News",News 24
https://news24.akamaized.net/hls/live/2016335/news24/news24.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/CNANews.png" group-title="News",CNA News
https://cna.akamaized.net/hls/live/2016335/cna/cna.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/NDTVEnglish.png" group-title="News",NDTV English
https://ndtvenglish.akamaized.net/hls/live/2003678/ndtvenglish/ndtvenglish.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/NDTVHindi.png" group-title="News",NDTV Hindi
https://ndtvhindi.akamaized.net/hls/live/2003678/ndtvhindi/ndtvhindi.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/NewsMax.png" group-title="News",News Max 2
https://newsmax.akamaized.net/hls/live/2016335/newsmax/newsmax.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Channel1News.png" group-title="News",Channel 1 News 4K
https://channel1news.akamaized.net/hls/live/2016335/channel1news/channel1news.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/BreakingNews.png" group-title="News",Breaking News
https://breakingnews.akamaized.net/hls/live/2016335/breakingnews/breakingnews.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DBCNewsHD.png" group-title="News",DBC News HD
https://owrcovcrpy.gpcdn.net/bpk-tv/1738/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/TSports.png" group-title="Sports",T Sports
https://owrcovcrpy.gpcdn.net/bpk-tv/1713/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/BeinSports1.png" group-title="Sports",beIN Sports 1
https://beinsports-en.akamaized.net/out/u/beinsports_en.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/BeinSports2.png" group-title="Sports",beIN Sports 2
https://beinsports-fr.akamaized.net/out/u/beinsports_fr.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/FoxSports.png" group-title="Sports",Fox Sports
https://foxsports.akamaized.net/hls/live/2016335/foxsports/foxsports.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/CazeTV.png" group-title="Sports",Caze TV
https://caze-tv.akamaized.net/hls/live/2016335/cazetv/cazetv.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DurontoTV.png" group-title="Kids",Duronto TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/GTV.png" group-title="Kids",G-TV Cartoon
https://owrcovcrpy.gpcdn.net/bpk-tv/1712/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/ZBCartoon.png" group-title="Kids",ZB Cartoon
https://nomawnoijl.gpcdn.net/akash/cartoon/playlist.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/KidsCreation.png" group-title="Kids",Kids Creation
https://kidscreation.akamaized.net/hls/live/2016335/kidscreation/kidscreation.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DuckTV.png" group-title="Kids",Duck TV
https://ducktv.akamaized.net/hls/live/2016335/ducktv/ducktv.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/JungleBook.png" group-title="Kids",Jungle Book
https://junglebook.akamaized.net/hls/live/2016335/junglebook/junglebook.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/PBSKids.png" group-title="Kids",PBS Kids
https://pbskids.akamaized.net/hls/live/2016335/pbskids/pbskids.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/RongeenTV.png" group-title="Kids",Rongeen TV
https://rongeen.akamaized.net/hls/live/2016335/rongeen/rongeen.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/MotuPatlu.png" group-title="Kids",Motu Patlu
https://amg00627-rakuten-it-3989.playouts.net/amg00627/motupatlu.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/TomJerry.png" group-title="Kids",Tom & Jerry TV
https://amg00627-rakuten-it-3989.playouts.net/amg00627/tomjerry.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/BantulGreat.png" group-title="Kids",Bantul The Great
https://bantul.akamaized.net/hls/live/2016335/bantul/bantul.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/DoraemonTV.png" group-title="Kids",Doraemon TV
https://amg00627-rakuten-it-3989.playouts.net/amg00627/doraemon.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Oggy.png" group-title="Kids",Oggy and the Cockroaches
https://amg00627-rakuten-it-3989.playouts.net/amg00627/oggy.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/MrBean.png" group-title="Kids",Mr Bean Animated
https://amg00627-rakuten-it-3989.playouts.net/amg00627/mrbean.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/TomJarry.png" group-title="Kids",Tom & Jarry
https://tomjarry.akamaized.net/hls/live/2016335/tomjarry/tomjarry.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/SuperHungama.png" group-title="Kids",Super Hungama TV
https://superhungama.akamaized.net/hls/live/2016335/superhungama/superhungama.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/HungamaTV.png" group-title="Kids",Hungama TV
https://hungama.akamaized.net/hls/live/2016335/hungama/hungama.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/ZooMoo.png" group-title="Kids",Zoo Moo
https://zoomoo.akamaized.net/hls/live/2016335/zoomoo/zoomoo.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/BuddyStar.png" group-title="Kids",BuddyStar HD
https://buddystar.akamaized.net/hls/live/2016335/buddystar/buddystar.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/JoyTV.png" group-title="Kids",Joy
https://joytv.akamaized.net/hls/live/2016335/joytv/joytv.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/FunnyJunior.png" group-title="Kids",Funny Junior HD
https://funnyjunior.akamaized.net/hls/live/2016335/funnyjunior/funnyjunior.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Smarty.png" group-title="Kids",Smarty
https://smarty.akamaized.net/hls/live/2016335/smarty/smarty.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/LuckyFamily.png" group-title="Kids",Lucky Family
https://luckyfamily.akamaized.net/hls/live/2016335/luckyfamily/luckyfamily.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/KidsStars.png" group-title="Kids",Kids Stars
https://kidsstars.akamaized.net/hls/live/2016335/kidsstars/kidsstars.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Nikki.png" group-title="Kids",Nikki
https://nikki.akamaized.net/hls/live/2016335/nikki/nikki.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/PeaceTV.png" group-title="Islamic",Peace TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1714/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/MadaniTV.png" group-title="Islamic",Madani TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/SaudiQuran.png" group-title="Islamic",Saudi Quran
https://saudiquraan.akamaized.net/hls/live/2016335/saudiquraan/saudiquraan.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/MadinaLive.png" group-title="Islamic",Madina Live
https://makkah.akamaized.net/hls/live/2016335/makkah/makkah.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/PeaceTVBangla.png" group-title="Islamic",Peace TV Bangla
https://peacetvbangla.akamaized.net/hls/live/2016335/peacetvbangla/peacetvbangla.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/PeaceTVEnglish.png" group-title="Islamic",Peace TV English
https://peacetvenglish.akamaized.net/hls/live/2016335/peacetvenglish/peacetvenglish.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/PeaceTVUrdu.png" group-title="Islamic",Peace TV Urdu
https://peacetvurdu.akamaized.net/hls/live/2016335/peacetvurdu/peacetvurdu.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/IslamicTV.png" group-title="Islamic",Islamic TV
https://islamictv.akamaized.net/hls/live/2016335/islamictv/islamictv.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/EWTNTV.png" group-title="Islamic",EWTN TV
https://ewtn.akamaized.net/hls/live/2016335/ewtn/ewtn.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/GodTV.png" group-title="Islamic",God TV
https://godtv.akamaized.net/hls/live/2016335/godtv/godtv.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/ArihantTV.png" group-title="Islamic",Arihant TV
https://arihant.akamaized.net/hls/live/2016335/arihant/arihant.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/News18.png" group-title="Kolkata",News18 Bangla
https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/index.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Enter10Bangla.png" group-title="Kolkata",Enter10 Bangla
https://enter10.akamaized.net/hls/live/2016335/enter10/enter10.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/ABPAnanda.png" group-title="Kolkata",ABP Ananda
https://abpananda.akamaized.net/hls/live/2016335/abpananda/abpananda.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/RPlusNews.png" group-title="Kolkata",R Plus News
https://rplusnews.akamaized.net/hls/live/2016335/rplusnews/rplusnews.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/TV9Bangla.png" group-title="Kolkata",TV9 Bangla
https://tv9bangla.akamaized.net/hls/live/2016335/tv9bangla/tv9bangla.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Zee24Ghanta.png" group-title="Kolkata",Zee 24 Ghanta
https://zee24ghanta.akamaized.net/hls/live/2016335/zee24ghanta/zee24ghanta.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/RPlusGold.png" group-title="Kolkata",R Plus Gold
https://rplusgold.akamaized.net/hls/live/2016335/rplusgold/rplusgold.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/AAKASHAATH.png" group-title="Kolkata",AAKASH AATH
https://aakashaath.akamaized.net/hls/live/2016335/aakashaath/aakashaath.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/CalcuttaNews.png" group-title="Kolkata",Calcutta News
https://calcuttanews.akamaized.net/hls/live/2016335/calcuttanews/calcuttanews.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/KolkataTV.png" group-title="Kolkata",Kolkata TV
https://kolkatatv.akamaized.net/hls/live/2016335/kolkatatv/kolkatatv.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/GSerise.png" group-title="Movies",G-Serise
https://gserise.akamaized.net/hls/live/2016335/gserise/gserise.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/CineedgeHD.png" group-title="Movies",Cineedge HD
https://cineedge.akamaized.net/hls/live/2016335/cineedge/cineedge.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/UniquesHD.png" group-title="Movies",Uniques HD
https://uniques.akamaized.net/hls/live/2016335/uniques/uniques.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/SuperrixHD.png" group-title="Movies",Superrix HD
https://superrix.akamaized.net/hls/live/2016335/superrix/superrix.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Screem.png" group-title="Movies",Screem
https://screem.akamaized.net/hls/live/2016335/screem/screem.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Crimes.png" group-title="Movies",Crimes
https://crimes.akamaized.net/hls/live/2016335/crimes/crimes.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/TrueStories.png" group-title="Movies",True Stories
https://truestories.akamaized.net/hls/live/2016335/truestories/truestories.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Intelligence.png" group-title="Movies",Intelligence
https://intelligence.akamaized.net/hls/live/2016335/intelligence/intelligence.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/Originals.png" group-title="Movies",Originals
https://originals.akamaized.net/hls/live/2016335/originals/originals.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/LoveNature.png" group-title="Documentary",Love Nature
https://lovenature.akamaized.net/hls/live/2016335/lovenature/lovenature.m3u8

#EXTINF:-1 tvg-logo="https://i.ibb.co/9c7r5N8/AnimalPlanet.png" group-title="Documentary",Animal Planet HD
https://animalplanet.akamaized.net/hls/live/2016335/animalpla