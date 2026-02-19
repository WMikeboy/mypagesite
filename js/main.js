const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
const yearEl = document.getElementById("year");
const skillBars = document.querySelectorAll(".skill .bar span");
const langButtons = document.querySelectorAll(".lang-switcher__btn");
const i18nElements = document.querySelectorAll("[data-i18n]");

const translations = {
    zh: {
        "meta.title": "Mike Wong｜GitHub 個人履歷",
        "meta.description": "Mike Wong 的個人履歷網站，包含經歷、技能、專案與聯絡方式。",
        "brand.name": "Mike Wong",
        "nav.about": "關於我",
        "nav.experience": "經歷",
        "nav.github": "GitHub",
        "nav.skills": "技能",
        "nav.projects": "專案",
        "nav.contact": "聯絡",
        "nav.toggle": "開啟導覽選單",
        "hero.eyebrow": "GitHub 創作者 · 持續實作中",
        "hero.lead": "最近完成多個前端與部署練習，包含 Firebase 登入頁、本機 AI 介面與 Vercel 靜態站，持續把想法快速做成可展示作品。",
        "hero.cta.primary": "查看作品",
        "hero.cta.secondary": "GitHub",
        "hero.meta.repos.label": "公開 Repo",
        "hero.meta.repos.value": "7（JavaScript / HTML / TypeScript）",
        "hero.meta.updated.label": "最近更新",
        "hero.meta.updated.value": "firebaseloginpage · 2026-02",
        "hero.meta.joined.label": "加入 GitHub",
        "hero.meta.joined.value": "2022-04-05",
        "hero.panel1.label": "正在開發",
        "hero.panel1.title": "前端與部署工作流",
        "hero.panel1.desc": "持續實作 Firebase 登入流程、本機 AI 介面與多平台快速部署。",
        "hero.panel2.label": "目前技術堆疊",
        "hero.stack.item1": "JavaScript",
        "hero.stack.item2": "TypeScript",
        "hero.stack.item3": "Firebase Auth",
        "hero.stack.item4": "GitHub Actions",
        "hero.stack.item5": "Vercel",
        "hero.stack.item6": "Netlify",
        "hero.panel3.label": "2026 目標",
        "hero.panel3.desc": "更快交付實用專案，並在每次發布中持續優化 UI 清晰度。",
        "about.eyebrow": "ABOUT",
        "about.heading": "關於我",
        "about.description": "目前透過 GitHub 持續累積前端與部署練習，從靜態網頁到登入流程、再到本機 AI 介面都親手實作。每次迭代都記錄在 repo 歷史中。",
        "about.value.title": "我能帶來的價值",
        "about.value.item1": "使用 Vue / 原生 HTML 建立快速可線上展示的頁面",
        "about.value.item2": "結合 GitHub Actions 與 Pages 進行自動化部署",
        "about.value.item3": "在 repo 中留下清楚的變更紀錄，方便追蹤迭代脈絡",
        "about.focus.title": "近期練習方向",
        "about.focus.item1": "Firebase Authentication 與登入流程 UI",
        "about.focus.item2": "Vercel / Netlify / Azure 多平台部署",
        "about.focus.item3": "本機 AI Web UI 與前端互動整合",
        "experience.eyebrow": "EXPERIENCE",
        "experience.heading": "學習里程",
        "experience.timeline1.period": "2026.01 - 現在",
        "experience.timeline1.title": "firebaseloginpage｜登入頁實作",
        "experience.timeline1.desc": "建立 Firebase 登入頁專案，練習帳號驗證流程與前端介面整合。",
        "experience.timeline2.period": "2025.12",
        "experience.timeline2.title": "localhostChatgpt_8gb｜本機 AI UI",
        "experience.timeline2.desc": "製作本機 ChatGPT 介面頁，針對 RTX 2080 8GB 環境進行前端整合與流程驗證。",
        "experience.timeline3.period": "2025.11",
        "experience.timeline3.title": "vercelpagesite / netlifypagesite / Myazurepagesite",
        "experience.timeline3.desc": "同時嘗試多個靜態站部署平台，累積跨平台上線與維運經驗。",
        "stats.eyebrow": "GITHUB",
        "stats.heading": "帳號快照",
        "stats.description.prefix": "依據 ",
        "stats.description.suffix": " 公開資料更新（2026-02-19）。",
        "stats.link": "github.com/WMikeboy",
        "stats.card.repos.label": "公開 Repo",
        "stats.card.repos.value": "7",
        "stats.card.repos.detail": "firebaseloginpage · localhostChatgpt_8gb · vercelpagesite 等",
        "stats.card.langs.label": "主要語言",
        "stats.card.langs.value": "JavaScript · HTML · TypeScript",
        "stats.card.langs.detail": "著重前端介面實作、部署流程與 AI UI 整合。",
        "stats.card.follow.label": "Followers / Following",
        "stats.card.follow.value": "3 / 1",
        "stats.card.follow.detail": "持續追蹤前端與 AI 相關帳號，吸收新技巧。",
        "stats.card.joined.label": "加入年份",
        "stats.card.joined.value": "2022",
        "stats.card.joined.detail": "自 2022 起在 GitHub 累積開源學習歷程。",
        "skills.eyebrow": "SKILLS",
        "skills.heading": "技能矩陣",
        "skills.section.product": "前端核心",
        "skills.section.tech": "平台與部署",
        "skills.section.tools": "開發工具",
        "skills.product.strategy": "HTML / CSS",
        "skills.product.uxui": "JavaScript",
        "skills.product.system": "響應式設計",
        "skills.tech.frontend": "Firebase Auth",
        "skills.tech.ts": "Vercel / Netlify / Azure",
        "skills.tech.api": "GitHub Actions / Pages",
        "projects.eyebrow": "PROJECTS",
        "projects.heading": "精選專案",
        "projects.item1.tag": "Firebase · Auth",
        "projects.item1.desc": "以 Firebase Authentication 為核心的登入頁實作，練習表單流程、狀態回饋與 UI 整合。",
        "projects.item1.link": "前往 Repo →",
        "projects.item2.tag": "HTML · Local AI",
        "projects.item2.desc": "本機執行的 ChatGPT 介面頁，聚焦在前端互動流程與低資源環境的可用性。",
        "projects.item2.link": "查看原始碼 →",
        "projects.item3.tag": "JavaScript · Deploy",
        "projects.item3.desc": "部署於 Vercel 的練習站點，驗證前端專案上線流程與快速迭代方法。",
        "projects.item3.link": "閱讀筆記 →",
        "contact.eyebrow": "CONTACT",
        "contact.heading": "一起打造下一個專案",
        "contact.description": "如果你也在做前端、部署或 AI 介面實驗，歡迎透過 GitHub 或 email 聯絡交流。",
        "contact.info.email.label": "Email",
        "contact.info.github.label": "GitHub",
        "contact.info.separator": "：",
        "contact.form.name.label": "您的名字",
        "contact.form.name.placeholder": "例如：王小明",
        "contact.form.email.label": "聯絡 Email",
        "contact.form.email.placeholder": "you@email.com",
        "contact.form.message.label": "訊息",
        "contact.form.message.placeholder": "想合作的內容或想聊的主題",
        "contact.form.button": "送出訊息",
        "footer.copy": "Mike Wong · Powered by GitHub Pages."
    },
    en: {
        "meta.title": "Mike Wong | GitHub Portfolio",
        "meta.description": "Resume-style site for Mike Wong with experience, skills, projects, and contact links.",
        "brand.name": "Mike Wong",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.github": "GitHub",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "nav.toggle": "Open navigation menu",
        "hero.eyebrow": "GitHub Creator · Building in Public",
        "hero.lead": "I recently shipped multiple projects, including a Firebase login page, a local AI chat UI, and static deployment experiments on Vercel.",
        "hero.cta.primary": "View projects",
        "hero.cta.secondary": "GitHub",
        "hero.meta.repos.label": "Public repos",
        "hero.meta.repos.value": "7 (JavaScript / HTML / TypeScript)",
        "hero.meta.updated.label": "Last update",
        "hero.meta.updated.value": "firebaseloginpage · Feb 2026",
        "hero.meta.joined.label": "Joined GitHub",
        "hero.meta.joined.value": "Apr 05, 2022",
        "hero.panel1.label": "Now Building",
        "hero.panel1.title": "Frontend + Deploy Workflow",
        "hero.panel1.desc": "Firebase login flow, local AI UI experiments, and rapid multi-platform deployment.",
        "hero.panel2.label": "Current Stack",
        "hero.stack.item1": "JavaScript",
        "hero.stack.item2": "TypeScript",
        "hero.stack.item3": "Firebase Auth",
        "hero.stack.item4": "GitHub Actions",
        "hero.stack.item5": "Vercel",
        "hero.stack.item6": "Netlify",
        "hero.panel3.label": "Focus in 2026",
        "hero.panel3.desc": "Ship practical projects faster and keep improving UI clarity with each release.",
        "about.eyebrow": "ABOUT",
        "about.heading": "About",
        "about.description": "I use GitHub as a hands-on lab for front-end and deployment practice, from static sites and auth flows to local AI interfaces.",
        "about.value.title": "How I add value",
        "about.value.item1": "Ship shareable pages fast with Vue or semantic HTML",
        "about.value.item2": "Automate deployments through GitHub Actions and Pages",
        "about.value.item3": "Keep transparent change logs for every experiment",
        "about.focus.title": "Current focus",
        "about.focus.item1": "Firebase Authentication flows and login UX",
        "about.focus.item2": "Multi-platform deployments on Vercel, Netlify, and Azure",
        "about.focus.item3": "Local AI web UI integration and interaction patterns",
        "experience.eyebrow": "EXPERIENCE",
        "experience.heading": "Learning journey",
        "experience.timeline1.period": "Jan 2026 – Present",
        "experience.timeline1.title": "firebaseloginpage | Auth UI build",
        "experience.timeline1.desc": "Built a Firebase-powered login page to practice authentication flow and user feedback states.",
        "experience.timeline2.period": "Dec 2025",
        "experience.timeline2.title": "localhostChatgpt_8gb | Local AI UI",
        "experience.timeline2.desc": "Created a local chat interface optimized for an RTX 2080 8GB setup and validated the web interaction flow.",
        "experience.timeline3.period": "Nov 2025",
        "experience.timeline3.title": "vercelpagesite / netlifypagesite / Myazurepagesite",
        "experience.timeline3.desc": "Ran parallel deployment experiments across multiple static hosting platforms.",
        "stats.eyebrow": "GITHUB",
        "stats.heading": "Account snapshot",
        "stats.description.prefix": "Data refreshed from ",
        "stats.description.suffix": " on 2026-02-19.",
        "stats.link": "github.com/WMikeboy",
        "stats.card.repos.label": "Public repos",
        "stats.card.repos.value": "7",
        "stats.card.repos.detail": "firebaseloginpage · localhostChatgpt_8gb · vercelpagesite and more",
        "stats.card.langs.label": "Key languages",
        "stats.card.langs.value": "JavaScript · HTML · TypeScript",
        "stats.card.langs.detail": "Focused on front-end builds, deployment workflows, and AI UI experiments.",
        "stats.card.follow.label": "Followers / Following",
        "stats.card.follow.value": "3 / 1",
        "stats.card.follow.detail": "Following front-end and AI builders to keep learning.",
        "stats.card.joined.label": "Joined in",
        "stats.card.joined.value": "2022",
        "stats.card.joined.detail": "Documenting my open-source journey since 2022.",
        "skills.eyebrow": "SKILLS",
        "skills.heading": "Skill matrix",
        "skills.section.product": "Core Frontend",
        "skills.section.tech": "Platforms & Deploy",
        "skills.section.tools": "Tooling",
        "skills.product.strategy": "HTML / CSS",
        "skills.product.uxui": "JavaScript",
        "skills.product.system": "Responsive Design",
        "skills.tech.frontend": "Firebase Auth",
        "skills.tech.ts": "Vercel / Netlify / Azure",
        "skills.tech.api": "GitHub Actions / Pages",
        "projects.eyebrow": "PROJECTS",
        "projects.heading": "Featured projects",
        "projects.item1.tag": "Firebase · Auth",
        "projects.item1.desc": "A Firebase authentication login page focused on form UX, validation feedback, and integration flow.",
        "projects.item1.link": "View repo →",
        "projects.item2.tag": "HTML · Local AI",
        "projects.item2.desc": "A local ChatGPT-style web UI project designed for practical use on limited GPU memory.",
        "projects.item2.link": "See source →",
        "projects.item3.tag": "JavaScript · Deploy",
        "projects.item3.desc": "A Vercel deployment practice site used to iterate quickly on build-and-ship workflow.",
        "projects.item3.link": "Read notes →",
        "contact.eyebrow": "CONTACT",
        "contact.heading": "Build the next project",
        "contact.description": "Let’s connect if you are exploring front-end, deployment workflows, or AI interface experiments.",
        "contact.info.email.label": "Email",
        "contact.info.github.label": "GitHub",
        "contact.info.separator": ":",
        "contact.form.name.label": "Your name",
        "contact.form.name.placeholder": "e.g., Alex Wang",
        "contact.form.email.label": "Contact email",
        "contact.form.email.placeholder": "you@email.com",
        "contact.form.message.label": "Message",
        "contact.form.message.placeholder": "Topic you’d like to discuss",
        "contact.form.button": "Send message",
        "footer.copy": "Mike Wong · Powered by GitHub Pages."
    },
    ja: {
        "meta.title": "Mike Wong｜GitHub ポートフォリオ",
        "meta.description": "Mike Wong の経歴・スキル・プロジェクト・連絡先をまとめた自己紹介サイトです。",
        "brand.name": "Mike Wong",
        "nav.about": "自己紹介",
        "nav.experience": "経歴",
        "nav.github": "GitHub",
        "nav.skills": "スキル",
        "nav.projects": "プロジェクト",
        "nav.contact": "連絡先",
        "nav.toggle": "ナビゲーションメニューを開く",
        "hero.eyebrow": "GitHub クリエイター・継続開発中",
        "hero.lead": "Firebase ログインページ、本地 AI チャット UI、Vercel 配備サイトなど、最近は実装と公開を継続しています。",
        "hero.cta.primary": "作品を見る",
        "hero.cta.secondary": "GitHub",
        "hero.meta.repos.label": "公開リポジトリ",
        "hero.meta.repos.value": "7（JavaScript / HTML / TypeScript）",
        "hero.meta.updated.label": "最新更新",
        "hero.meta.updated.value": "firebaseloginpage · 2026年2月",
        "hero.meta.joined.label": "GitHub 参加日",
        "hero.meta.joined.value": "2022-04-05",
        "hero.panel1.label": "現在開発中",
        "hero.panel1.title": "フロントエンド + デプロイ運用",
        "hero.panel1.desc": "Firebase ログイン導線、ローカル AI UI、多環境への高速デプロイを継続実装。",
        "hero.panel2.label": "現在のスタック",
        "hero.stack.item1": "JavaScript",
        "hero.stack.item2": "TypeScript",
        "hero.stack.item3": "Firebase Auth",
        "hero.stack.item4": "GitHub Actions",
        "hero.stack.item5": "Vercel",
        "hero.stack.item6": "Netlify",
        "hero.panel3.label": "2026 フォーカス",
        "hero.panel3.desc": "実用的なプロジェクトをより速く公開し、毎回 UI の明瞭性を高める。",
        "about.eyebrow": "ABOUT",
        "about.heading": "私について",
        "about.description": "GitHub を実践的な学習環境として、静的サイト、認証 UI、ローカル AI 画面まで継続して実装しています。すべての改善を履歴として残しています。",
        "about.value.title": "提供できる価値",
        "about.value.item1": "Vue や HTML で素早く共有可能なページを作成",
        "about.value.item2": "GitHub Actions / Pages で自動デプロイを構築",
        "about.value.item3": "リポジトリに詳細な変更履歴を残し、学びを可視化",
        "about.focus.title": "最近のフォーカス",
        "about.focus.item1": "Firebase Authentication とログイン UX",
        "about.focus.item2": "Vercel・Netlify・Azure の複数環境デプロイ",
        "about.focus.item3": "ローカル AI Web UI の統合と操作性改善",
        "experience.eyebrow": "EXPERIENCE",
        "experience.heading": "学習の歩み",
        "experience.timeline1.period": "2026年1月 - 現在",
        "experience.timeline1.title": "firebaseloginpage｜認証 UI 実装",
        "experience.timeline1.desc": "Firebase を使ったログインページを構築し、認証フローと UI 反応を検証。",
        "experience.timeline2.period": "2025年12月",
        "experience.timeline2.title": "localhostChatgpt_8gb｜ローカル AI UI",
        "experience.timeline2.desc": "RTX 2080 8GB 環境向けにローカルチャット画面を作成し、Web 操作フローを最適化。",
        "experience.timeline3.period": "2025年11月",
        "experience.timeline3.title": "vercelpagesite / netlifypagesite / Myazurepagesite",
        "experience.timeline3.desc": "複数の静的ホスティング基盤で並行してデプロイ検証を実施。",
        "stats.eyebrow": "GITHUB",
        "stats.heading": "アカウント概要",
        "stats.description.prefix": "参照：",
        "stats.description.suffix": " （2026-02-19 時点）。",
        "stats.link": "github.com/WMikeboy",
        "stats.card.repos.label": "公開リポジトリ",
        "stats.card.repos.value": "7",
        "stats.card.repos.detail": "firebaseloginpage · localhostChatgpt_8gb · vercelpagesite ほか",
        "stats.card.langs.label": "主な言語",
        "stats.card.langs.value": "JavaScript · HTML · TypeScript",
        "stats.card.langs.detail": "フロントエンド実装、デプロイ運用、AI UI 実験に注力。",
        "stats.card.follow.label": "フォロワー / フォロー",
        "stats.card.follow.value": "3 / 1",
        "stats.card.follow.detail": "フロントエンドと AI 領域の開発者を継続フォロー。",
        "stats.card.joined.label": "登録年",
        "stats.card.joined.value": "2022",
        "stats.card.joined.detail": "2022 年から GitHub で学習記録を公開。",
        "skills.eyebrow": "SKILLS",
        "skills.heading": "スキルマトリクス",
        "skills.section.product": "フロントエンド基礎",
        "skills.section.tech": "プラットフォーム / デプロイ",
        "skills.section.tools": "開発ツール",
        "skills.product.strategy": "HTML / CSS",
        "skills.product.uxui": "JavaScript",
        "skills.product.system": "レスポンシブデザイン",
        "skills.tech.frontend": "Firebase Auth",
        "skills.tech.ts": "Vercel / Netlify / Azure",
        "skills.tech.api": "GitHub Actions / Pages",
        "projects.eyebrow": "PROJECTS",
        "projects.heading": "注目プロジェクト",
        "projects.item1.tag": "Firebase · Auth",
        "projects.item1.desc": "Firebase Authentication を使ったログインページ実装。フォーム UX と検証フローを改善。",
        "projects.item1.link": "リポジトリを見る →",
        "projects.item2.tag": "HTML · Local AI",
        "projects.item2.desc": "ローカル実行向け ChatGPT 風 UI。低リソース環境での実用性を重視。",
        "projects.item2.link": "ソースコード →",
        "projects.item3.tag": "JavaScript · Deploy",
        "projects.item3.desc": "Vercel へのデプロイ検証用サイト。ビルドから公開までの反復を高速化。",
        "projects.item3.link": "ノートを読む →",
        "contact.eyebrow": "CONTACT",
        "contact.heading": "次のプロジェクトを一緒に",
        "contact.description": "フロントエンド、デプロイ、AI UI 実験に関心があれば GitHub またはメールでご連絡ください。",
        "contact.info.email.label": "Email",
        "contact.info.github.label": "GitHub",
        "contact.info.separator": "：",
        "contact.form.name.label": "お名前",
        "contact.form.name.placeholder": "例：山田太郎",
        "contact.form.email.label": "メールアドレス",
        "contact.form.email.placeholder": "you@email.com",
        "contact.form.message.label": "メッセージ",
        "contact.form.message.placeholder": "相談したい内容や話題",
        "contact.form.button": "メッセージを送信",
        "footer.copy": "Mike Wong · GitHub Pages で公開。"
    }
};

const languageMap = {
    zh: "zh-Hant",
    en: "en",
    ja: "ja"
};

const setLanguage = (lang) => {
    const dict = translations[lang] ?? translations.zh;
    i18nElements.forEach((el) => {
        const key = el.dataset.i18n;
        const value = dict[key];
        if (!value) return;
        const attr = el.dataset.i18nAttr;
        if (attr) {
            el.setAttribute(attr, value);
        } else {
            el.textContent = value;
        }
    });

    document.documentElement.lang = languageMap[lang] ?? "en";
    if (dict["meta.title"]) {
        document.title = dict["meta.title"];
    }
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription && dict["meta.description"]) {
        metaDescription.setAttribute("content", dict["meta.description"]);
    }

    localStorage.setItem("wm-lang", lang);
    langButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
};

const initialLang = localStorage.getItem("wm-lang") || "ja";
setLanguage(initialLang);

langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (lang) {
            setLanguage(lang);
        }
    });
});

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const animateSkills = (entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bar = entry.target.querySelector("span");
        const value = entry.target.parentElement?.dataset.skill;
        if (bar && value) {
            bar.style.width = `${value}%`;
        }
        observer.unobserve(entry.target);
    });
};

const observer = new IntersectionObserver(animateSkills, {
    threshold: 0.4,
});

skillBars.forEach((bar) => {
    const parent = bar.parentElement;
    if (parent) {
        observer.observe(parent);
    }
});

const links = document.querySelectorAll(".nav__links a");
links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});
