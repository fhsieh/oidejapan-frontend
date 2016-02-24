var menudata = [
  {   id: 0, name: "translate",       route: "translate",                     icon: "language",        visible: true, text: "翻訳", submenu: [
    { id: 0, name: "translate_new",   route: "translate", action: "new",      icon: "plus",            visible: true, text: "新翻訳" },
    { id: 1, name: "translate_all",   route: "translate", action: "view",     icon: "list",            visible: true, text: "一覧" }] },
  {   id: 1, name: "website",         route: "website",                       icon: "home",            visible: true, text: "ホームページ", submenu: [
    { id: 0, name: "website_edit",    route: "website",   action: "edit",     icon: "pencil",          visible: true, text: "更新する" },
    { id: 1, name: "website_view",    route: "website",   action: "view",     icon: "external-link",   visible: true, text: "見る" },
    { id: 2, name: "website_stats",   route: "website",   action: "stats",    icon: "bar-chart",       visible: true, text: "アクセス数" }] },
  {   id: 2, name: "social",          route: "social",                        icon: "comments",        visible: true, text: "ソーシャル", submenu: [
    { id: 0, name: "social_twitter",  route: "social",    action: "twitter",  icon: "twitter",         visible: true, text: "ツイッター" },
    { id: 1, name: "social_facebook", route: "social",    action: "facebook", icon: "facebook-square", visible: true, text: "フェイスブック" }] },
  {   id: 3, name: "campaign",        route: "campaign",                      icon: "certificate",     visible: true, text: "広告", submenu: [
    { id: 0, name: "campaign_new",    route: "campaign",  action: "new",      icon: "plus",            visible: true, text: "新キャンペーン" },
    { id: 1, name: "campaign_all",    route: "campaign",  action: "view",     icon: "list",            visible: true, text: "一覧" }] },
  {   id: 4, name: "assist",          route: "assist",                        icon: "life-ring",       visible: true, text: "アシスト", submenu: [
    { id: 0, name: "assist_start",    route: "assist",    action: "start",    icon: "comments-o",      visible: true, text: "アシスト開始" },
    { id: 1, name: "assist_history",  route: "assist",    action: "history",  icon: "history",         visible: true, text: "履歴" }
  ] }
];

module.exports = menudata;
